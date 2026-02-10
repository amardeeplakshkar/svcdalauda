'use client'

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";
import { useLocale } from "next-intlayer";
import { getLocaleName } from "intlayer";

export const Component = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { locale, availableLocales, setLocale } = useLocale({
    onChange: () => {
      window.location.reload()
    },
  });

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm",
          "bg-white/60 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm",
          "border-gray-200 dark:border-neutral-700",
          "text-gray-800 dark:text-neutral-200",
          "hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all"
        )}
      >
        <span>{getLocaleName(locale)}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className={cn(
            "absolute left-0 z-10 mt-2 w-48 rounded-xl overflow-hidden",
            "bg-white/90 dark:bg-neutral-900/95 backdrop-blur-xl",
            "shadow-lg border border-gray-200 dark:border-neutral-700",
            "animate-fade-in"
          )}
        >
          {availableLocales.map((localeItem) => (
            <button
              key={localeItem}
              aria-current={locale === localeItem ? "page" : undefined}
              onClick={() => {
                setLocale(localeItem);
                setOpen(false);
              }}
              className={cn(
                "flex items-center gap-2 w-full px-3 py-2 text-sm text-left transition-colors",
                locale === localeItem
                  ? "font-semibold text-primary dark:text-primary"
                  : "text-gray-800 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800"
              )}
            >
              <span className="flex-1">
                {getLocaleName(localeItem)}
              </span>

              {locale === localeItem && (
                <Check className="h-4 w-4 text-primary dark:text-primary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
