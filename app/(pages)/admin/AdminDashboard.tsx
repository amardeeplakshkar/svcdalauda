'use client'

import { useFacultyList } from "@/hooks/use-faculty";
import { usePostList } from "@/hooks/use-posts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, Bell, BookOpen, Form } from "lucide-react";
import { AdminLayout } from "@/components/admin/Faculty/AdminLayout";
import { UserButton, useUser } from "@clerk/nextjs";
import { useForms } from "@/hooks/use-forms";

export default function AdminDashboard() {
  const {user} = useUser()
  const { data: faculty } = useFacultyList();
  const { data: posts } = usePostList();
  const {data : forms} = useForms()

  const stats = [
    { label: "Total Faculty", value: faculty?.length || 0, icon: Users, color: "text-blue-600 bg-blue-100" },
    { label: "Total Posts", value: posts?.length || 0, icon: FileText, color: "text-purple-600 bg-purple-100" },
    { label: "Announcements", value: posts?.filter(p => p.category === 'announcement').length || 0, icon: Bell, color: "text-orange-600 bg-orange-100" },
    { label: "Blogs", value: posts?.filter(p => p.category === 'blog').length || 0, icon: BookOpen, color: "text-emerald-600 bg-emerald-100" },
    { label: "Total Forms", value: forms?.length || 0, icon: Form, color: "text-indigo-600 bg-indigo-100" },
  ];

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, {user?.firstName || 'Admin'}. Here's what's happening.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-0 shadow-lg shadow-black/5 hover:-translate-y-1 transition-transform duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <stat.icon className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle>Recent Faculty Additions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {faculty?.slice(0, 5).map(f => (
                <div key={f.id} className="flex items-center gap-4 py-2 border-b last:border-0">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    {f.photo ? (
                      <img src={f.photo} className="w-full h-full object-cover" />
                    ) : (
                      <Users className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{f.name}</p>
                    <p className="text-xs text-muted-foreground">{f.designation}</p>
                  </div>
                </div>
              ))}
              {faculty?.length === 0 && <p className="text-muted-foreground text-sm">No faculty added yet.</p>}
            </div>
          </CardContent>
        </Card>

        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle>Recent Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {posts?.slice(0, 5).map(p => (
                <div key={p.id} className="flex items-start gap-4 py-2 border-b last:border-0">
                  <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${
                    p.category === 'notice' ? 'bg-red-500' : 
                    p.category === 'announcement' ? 'bg-blue-500' : 'bg-green-500'
                  }`} />
                  <div>
                    <p className="font-medium text-sm line-clamp-1">{p.title}</p>
                    <p className="text-xs text-muted-foreground capitalize">{p.category}</p>
                  </div>
                </div>
              ))}
              {posts?.length === 0 && <p className="text-muted-foreground text-sm">No posts created yet.</p>}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
