"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import AdminLayout from "@/components/admin/AdminLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  UserPlus,
  TrendingUp,
  Shield,
  MapPin,
  CheckCircle,
  Clock,
  Award,
  BarChart3,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

// Sample data
const sampleStats = {
  totalAgents: 25,
  activeAgents: 22,
  pendingAgents: 3,
  totalRegistrations: 3420,
  thisMonth: 1245,
  completionRate: 89,
}

const recentAgents = [
  { id: 1, name: "John Motsumi", email: "john@nthoppa.com", status: "active", registrations: 342, territory: "Gaborone Central" },
  { id: 2, name: "Sarah Kgosi", email: "sarah@nthoppa.com", status: "active", registrations: 298, territory: "Francistown" },
  { id: 3, name: "David Sebina", email: "david@nthoppa.com", status: "pending", registrations: 0, territory: "Maun" },
  { id: 4, name: "Mary Phiri", email: "mary@nthoppa.com", status: "active", registrations: 275, territory: "Serowe" },
  { id: 5, name: "Peter Mmolawa", email: "peter@nthoppa.com", status: "active", registrations: 234, territory: "Palapye" },
]

export default function AdminDashboard() {
  const router = useRouter()
  const [adminInfo, setAdminInfo] = useState({
    name: "",
    email: "",
  })

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("admin_authenticated")
    if (isAuthenticated !== "true") {
      router.push("/admin")
      return
    }

    setAdminInfo({
      name: localStorage.getItem("admin_name") || "Admin",
      email: localStorage.getItem("admin_email") || "",
    })
  }, [router])

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-[#E9521C] via-orange-500 to-orange-600 rounded-xl p-8 text-white shadow-lg border-2 border-orange-400/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-yJgmEhLf71bDEpve60wls9cJoQUyOp.png"
                alt="Nthoppa Logo"
                className="h-12 w-auto brightness-0 invert drop-shadow-lg hidden md:block"
              />
              <div>
                <h1 className="text-4xl font-bold mb-2">Welcome, {adminInfo.name}!</h1>
                <p className="text-orange-100 text-lg">Manage field agents and monitor performance</p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-2 border-gray-100 hover:border-[#E9521C]/30 transition-colors shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Agents</CardTitle>
              <div className="w-10 h-10 rounded-full bg-[#E9521C]/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-[#E9521C]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{sampleStats.totalAgents}</div>
              <p className="text-xs text-muted-foreground">
                {sampleStats.activeAgents} active, {sampleStats.pendingAgents} pending
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-[#E9521C]/30 transition-colors shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <UserPlus className="h-5 w-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{sampleStats.totalRegistrations.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {sampleStats.thisMonth} this month
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-[#E9521C]/30 transition-colors shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{sampleStats.completionRate}%</div>
              <p className="text-xs text-muted-foreground">Average across all agents</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-[#E9521C]/30 transition-colors shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Territories</CardTitle>
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Territories covered</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#E9521C] group" onClick={() => router.push("/admin/register-agent")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-[#E9521C] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#E9521C]/10 group-hover:bg-[#E9521C] flex items-center justify-center transition-colors">
                  <UserPlus className="h-5 w-5 text-[#E9521C] group-hover:text-white transition-colors" />
                </div>
                Register New Agent
              </CardTitle>
              <CardDescription>Add a new field agent to the system</CardDescription>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#E9521C] group" onClick={() => router.push("/admin/agents")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-[#E9521C] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-100 group-hover:bg-[#E9521C] flex items-center justify-center transition-colors">
                  <Users className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                Manage Agents
              </CardTitle>
              <CardDescription>View and manage all field agents</CardDescription>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#E9521C] group" onClick={() => router.push("/admin/analytics")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-[#E9521C] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-green-100 group-hover:bg-[#E9521C] flex items-center justify-center transition-colors">
                  <BarChart3 className="h-5 w-5 text-green-600 group-hover:text-white transition-colors" />
                </div>
                View Analytics
              </CardTitle>
              <CardDescription>Performance metrics and insights</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Recent Agents */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Agents</CardTitle>
            <CardDescription>Latest field agents in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAgents.map((agent) => (
                <div
                  key={agent.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E9521C] to-orange-600 flex items-center justify-center shadow-md">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{agent.name}</p>
                      <p className="text-sm text-gray-500">{agent.email}</p>
                      <p className="text-xs text-gray-400 mt-1">{agent.territory}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-bold text-lg">{agent.registrations}</p>
                      <p className="text-xs text-gray-500">registrations</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        agent.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {agent.status === "active" ? (
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Active
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Pending
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-full mt-4 border-[#E9521C] text-[#E9521C] hover:bg-[#E9521C] hover:text-white transition-colors font-semibold"
              onClick={() => router.push("/admin/agents")}
            >
              View All Agents
            </Button>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}

