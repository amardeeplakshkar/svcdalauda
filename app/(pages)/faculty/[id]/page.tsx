'use client'
import { useFaculty } from "@/hooks/use-faculty";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, GraduationCap, Award, Building2 } from "lucide-react";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/admin/Faculty/Navbar";

export default function FacultyDetail() {
    const params = useParams<{ id: string }>();
    const id = parseInt(params?.id || "0");
    const { data: faculty, isLoading } = useFaculty(id);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    if (!faculty) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-bold">Faculty Member Not Found</h2>
                <Link href="/faculty">
                    <Button>Back to Directory</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col font-body">
            <Navbar />

            <main className="flex-1 bg-muted/20 py-12">
                <div className="container mx-auto px-4">
                    <Link href="/faculty">
                        <Button variant="ghost" className="mb-8 hover:bg-transparent hover:text-primary pl-0">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Directory
                        </Button>
                    </Link>

                    <div className="bg-card border rounded-3xl overflow-hidden shadow-lg shadow-black/5">
                        <div className="grid md:grid-cols-[400px_1fr]">
                            {/* Photo Side */}
                            <div className="bg-muted relative min-h-[400px] md:min-h-full border-r">
                                {faculty.photo ? (
                                    <img
                                        src={faculty.photo}
                                        alt={faculty.name}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-primary/20">
                                        <GraduationCap className="w-32 h-32" />
                                    </div>
                                )}
                            </div>

                            {/* Info Side */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="mb-6">
                                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                                        {faculty.department}
                                    </span>
                                    <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
                                        {faculty.name}
                                    </h1>
                                    <p className="text-xl text-muted-foreground font-medium">
                                        {faculty.designation}
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-transparent hover:border-border transition-colors">
                                        <div className="p-2 bg-background rounded-lg shadow-sm">
                                            <Award className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">Qualifications</h3>
                                            <p className="text-muted-foreground">{faculty.degree}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-transparent hover:border-border transition-colors">
                                        <div className="p-2 bg-background rounded-lg shadow-sm">
                                            <Mail className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">Email Address</h3>
                                            <a href={`mailto:${faculty.email}`} className="text-muted-foreground hover:text-primary hover:underline">
                                                {faculty.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-transparent hover:border-border transition-colors">
                                        <div className="p-2 bg-background rounded-lg shadow-sm">
                                            <Phone className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">Phone Contact</h3>
                                            <p className="text-muted-foreground">{faculty.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
