import { Button } from "@/components/ui/button";
import { type Faculty } from "@/shared/schema";
import { Mail, Phone, GraduationCap } from "lucide-react";
import Link from "next/link";

export function FacultyCard({ faculty }: { faculty: Faculty }) {
  return (
    <div className="group relative bg-card rounded-2xl border hover:border-primary/50 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden bg-muted relative">
        {faculty.photo ? (
          <img
            src={faculty.photo}
            alt={faculty.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary">
            <GraduationCap className="w-16 h-16 opacity-20" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <Link href={`/faculty/${faculty.id}`}>
            <Button size="sm" variant="secondary" className="w-full font-semibold">
              View Profile
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            {faculty.department}
          </span>
        </div>
        <h3 className="font-display text-xl font-bold mb-1 leading-tight group-hover:text-primary transition-colors">
          {faculty.name}
        </h3>
        <p className="text-muted-foreground text-sm font-medium mb-4">
          {faculty.designation}
        </p>

        <div className="space-y-2 pt-4 border-t">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-3.5 h-3.5" />
            <span className="truncate">{faculty.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="w-3.5 h-3.5" />
            <span>{faculty.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}


export function FacultyCard02({ faculty }: { faculty: Faculty }) {
  return (
    <div className="group bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
      <div className="faculty-card-frame mb-6 group-hover:scale-105 transition-transform duration-300">
        <div className="faculty-image-container w-32 h-32 md:w-40 md:h-40">
          {faculty.photo ?
            (
              <img alt={faculty.name} className="w-full h-full object-cover" src={faculty.photo} />) :
            (
              <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary">
                <GraduationCap className="w-16 h-16 opacity-20" />
              </div>
            )
          }
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{faculty.name}</h3>
      <p className="text-primary dark:text-red-400 font-semibold text-sm mb-3">{faculty.designation}</p>
      <div className="w-12 h-0.5 bg-secondary mb-3"></div>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{faculty.department}<br/>{faculty.degree}</p>
      <div className="mt-auto flex gap-4">
        <a className="text-gray-400 hover:text-primary transition-colors" href={`mailto:${faculty.email}`}><span className="material-icons text-xl"><Mail /></span></a>
        <a className="text-gray-400 hover:text-primary transition-colors" href={`https://wa.me/${faculty.phone}`}><span className="material-icons text-xl"><Phone /></span></a>
      </div>
    </div>
  )
}
