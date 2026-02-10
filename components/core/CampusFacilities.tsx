import { Building2, Check, ArrowRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { DepartmentDuoIcon } from './Icons'
import Link from 'next/link'
import { useIntlayer } from 'next-intlayer/server'

const CampusFacilities = () => {
    const content = useIntlayer('campusFacilities')
    return (
        <section className="py-8 md:py-12">
            <div className="container mx-auto">
                <div className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden">
                    <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                        {/* Left Side - Facilities List */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <DepartmentDuoIcon color="gold" size={35} />
                                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                                    {content.title}
                                </h2>
                            </div>
                            <p className="text-muted-foreground mb-8">
                                {content.description}
                            </p>

                            <div className="space-y-5">
                                {content.facilities.map((facility, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <Check className="w-3 h-3 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="font-semibold text-foreground">{facility.title}</h4>
                                                {facility.isNew && (
                                                    <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded">
                                                        New
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-muted-foreground text-sm">{facility.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button asChild variant="default" size="lg" className="mt-8">
                                <Link href="/about">
                                    {content.viewAllNotices}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>

                        {/* Right Side - Facility Images */}
                        <div className="space-y-4">
                            <div className="aspect-[6/3] rounded-xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop"
                                    alt="College Building"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=300&fit=crop"
                                        alt="Library"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop"
                                        alt="Students in Classroom"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CampusFacilities