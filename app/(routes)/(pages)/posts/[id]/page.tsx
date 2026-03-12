'use client'

import { usePost } from "@/hooks/use-posts"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Copy, Check, ExternalLink } from "lucide-react"
import { Loader2 } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkDirective from "remark-directive"
import rehypeRaw from "rehype-raw"
import { visit } from "unist-util-visit"
import type { Components } from "react-markdown"
import JsonLd from "@/components/core/JsonLd"

// ─── Remark plugin ────────────────────────────────────────────────────────────
// Converts :iframe[url]{title="..." height="500"} into:
//   <div class="ik-iframe" data-config='{"url":"...","title":"...","height":"..."}'></div>
//
// All config encoded as one JSON blob in data-config so rehype-raw
// round-trips it cleanly without hyphenated attribute problems.

function remarkIframeDirective() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.type !== "textDirective" && node.type !== "leafDirective") return
      if (node.name !== "iframe") return

      let url = ""

      for (const child of node.children ?? []) {

        if (child.type === "text") {
          // plain text: :iframe[some-text]
          url = child.value ?? ""
        } else if (child.type === "link") {
          // URL with protocol: :iframe[https://...]  — remark auto-parses as link
          url = child.url ?? child.children?.[0]?.value ?? ""
        } else if (child.type === "inlineCode") {
          // :iframe[`url`] — wrapped in backticks to escape parsing
          url = child.value ?? ""
        }
      }


      const title = node.attributes?.title ?? "Embedded content"
      const height = node.attributes?.height ?? "500"

      if (!url) {
        return
      }

      const config = JSON.stringify({ url, title, height })
      node.type = "html"
      node.value = `<div class="ik-iframe" data-config='${config}'></div>`

      console.log("[iframe-directive] ✓ done:", node.value)
    })
  }
}

// ─── Allowed origins ──────────────────────────────────────────────────────────

const ALLOWED_ORIGINS = [
  "drive.google.com",
  "docs.google.com",
  "www.youtube.com",
  "youtube.com",
  "player.vimeo.com",
  "onedrive.live.com",
  "view.officeapps.live.com",
]

// ─── IframeEmbed ──────────────────────────────────────────────────────────────

function IframeEmbed({ url, title, height }: { url: string; title: string; height: string }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const isAllowed = ALLOWED_ORIGINS.some(o => url.includes(o))

  if (!isAllowed) {
    return (
      <div className="my-6 rounded-xl border border-destructive/30 bg-destructive/5 p-6 text-center">
        <p className="text-sm text-destructive font-medium mb-2">
          Embedded content from this source is not allowed.
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-primary underline">
          Open link directly <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    )
  }

  return (
    <div className="my-6 mx-2 rounded-xl overflow-hidden border border-border shadow-lg">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-muted/60 border-b border-border">
        <span className="text-sm font-medium text-foreground truncate">{title}</span>
        <a href={url} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors shrink-0 ml-4">
          <ExternalLink className="w-3.5 h-3.5" /> Open
        </a>
      </div>
      {/* Frame area */}
      <div className="relative bg-muted/30" style={{ height: `${height}px` }}>
        {!loaded && !error && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        )}
        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center p-4">
            <p className="text-sm text-muted-foreground">Could not load embedded content.</p>
            <a href={url} target="_blank" rel="noopener noreferrer"
              className="text-sm text-primary underline flex items-center gap-1">
              Open directly <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
        <iframe
          src={url}
          title={title}
          className="w-full h-full border-0"
          style={{ display: error ? "none" : "block" }}
          allow="fullscreen"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      </div>
    </div>
  )
}

// ─── CodeBlock ────────────────────────────────────────────────────────────────

function CodeBlock({ children, className }: { children?: React.ReactNode; className?: string }) {
  const [copied, setCopied] = useState(false)
  const code = typeof children === "string" ? children : String(children ?? "")
  const language = className?.replace("language-", "") ?? "text"

  return (
    <div className="relative my-6 rounded-xl overflow-hidden border border-border shadow-md">
      <div className="flex items-center justify-between px-4 py-2 bg-muted/80 border-b border-border">
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{language}</span>
        <button
          onClick={() => { navigator.clipboard.writeText(code.trim()); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 bg-[#1e1e1e] text-[#d4d4d4] text-sm leading-relaxed">
        <code className={className}>{code}</code>
      </pre>
    </div>
  )
}

// ─── Markdown components ──────────────────────────────────────────────────────

const markdownComponents: Components = {
  h1: ({ children }) => <h1 className="font-display text-3xl font-bold text-foreground mt-10 mb-4 pb-3 border-b border-border">{children}</h1>,
  h2: ({ children }) => <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-3 pb-2 border-b border-border/50">{children}</h2>,
  h3: ({ children }) => <h3 className="font-display text-xl font-bold text-foreground mt-6 mb-2">{children}</h3>,
  h4: ({ children }) => <h4 className="font-display text-lg font-semibold text-foreground mt-5 mb-2">{children}</h4>,

  p: ({ children }) => <p className="text-muted-foreground leading-relaxed mb-5 text-base">{children}</p>,

  a: ({ href, children }) => (
    <a href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors inline-flex items-center gap-0.5">
      {children}
      {href?.startsWith("http") && <ExternalLink className="w-3 h-3 inline ml-0.5 opacity-60" />}
    </a>
  ),

  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  em: ({ children }) => <em className="italic text-foreground/80">{children}</em>,

  blockquote: ({ children }) => (
    <blockquote className="my-6 pl-5 border-l-4 border-primary/60 bg-primary/5 dark:bg-primary/10 py-3 pr-4 rounded-r-xl italic text-foreground/70">
      {children}
    </blockquote>
  ),

  ul: ({ children }) => <ul className="my-4 ml-6 space-y-2 list-none">{children}</ul>,
  ol: ({ children }) => <ol className="my-4 ml-6 space-y-2 list-decimal">{children}</ol>,
  li: ({ children }) => (
    <li className="text-muted-foreground flex gap-2 items-start">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
      <span>{children}</span>
    </li>
  ),

  code: ({ className, children }: any) => {
    if (className) return <CodeBlock className={className}>{children}</CodeBlock>
    return <code className="font-mono text-sm bg-muted text-primary px-1.5 py-0.5 rounded-md border border-border">{children}</code>
  },

  pre: ({ children }) => <>{children}</>,

  hr: () => (
    <div className="my-8 flex items-center gap-4">
      <div className="flex-1 h-px bg-border" />
      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
      <div className="flex-1 h-px bg-border" />
    </div>
  ),

  table: ({ children }) => <div className="my-6 overflow-x-auto rounded-xl border border-border shadow-sm"><table className="w-full text-sm">{children}</table></div>,
  thead: ({ children }) => <thead className="bg-muted/60 text-foreground font-semibold">{children}</thead>,
  tbody: ({ children }) => <tbody className="divide-y divide-border">{children}</tbody>,
  tr: ({ children }) => <tr className="hover:bg-muted/30 transition-colors">{children}</tr>,
  th: ({ children }) => <th className="px-4 py-3 text-left font-semibold text-foreground tracking-wide">{children}</th>,
  td: ({ children }) => <td className="px-4 py-3 text-muted-foreground">{children}</td>,

  img: ({ src, alt }) => (
    <figure className="my-8">
      <img src={src} alt={alt} className="w-full rounded-xl border border-border shadow-md object-cover" loading="lazy" />
      {alt && <figcaption className="mt-2 text-center text-xs text-muted-foreground italic">{alt}</figcaption>}
    </figure>
  ),

  // ── Key fix: read data-config, parse JSON, render IframeEmbed ────────────
  div: (props: any) => {
    if (props.className === "ik-iframe") {
      try {
        const config = JSON.parse(props["data-config"] ?? "{}")
        if (config.url) {
          return <IframeEmbed url={config.url} title={config.title ?? "Embedded content"} height={config.height ?? "500"} />
        }
      } catch {
        // malformed config — fall through to default div
      }
    }
    const { className, children, ...rest } = props
    return <div className={className} {...rest}>{children}</div>
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PostDetail() {
  const params = useParams<{ id: string }>()
  const id = parseInt(params?.id || "0")
  const { data: post, isLoading } = usePost(id)

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post?.title,
    datePublished: post?.createdAt,
    publisher: { "@type": "Organization", name: "SVGC Dalauda" },
  }
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">Post Not Found</h2>
        <Link href="/posts"><Button>Back to News</Button></Link>
      </div>
    )
  }

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <div className="min-h-screen flex flex-col font-body bg-background">
        <main className="flex-1 py-12">
          <article className="container mx-auto px-4 max-w-4xl">
            <Link href="/posts">
              <Button variant="ghost" className="mb-8 hover:bg-muted">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
              </Button>
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <Badge className="text-sm px-3 py-1 capitalize"
                variant={post.category === "notice" ? "destructive" : post.category === "announcement" ? "default" : "secondary"}>
                {post.category}
              </Badge>
              <div className="flex items-center text-muted-foreground text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {post.createdAt ? format(new Date(post.createdAt), "MMMM d, yyyy") : "Recent"}
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-foreground">
              {post.title}
            </h1>

            <div className="w-full h-px bg-border mb-10" />

            <div className="max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkDirective, remarkIframeDirective]}
                rehypePlugins={[rehypeRaw]}
                components={markdownComponents}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>
        </main>
      </div>
    </>
  )
}