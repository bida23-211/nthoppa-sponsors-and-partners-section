"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import DashboardLayout from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  UserPlus,
  TrendingUp,
  Target,
  CheckCircle,
  Clock,
  MapPin,
  BarChart3,
  Award,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

// Sample data
const sampleStats = {
  today: {
    registrations: 12,
    completed: 8,
    pending: 4,
    target: 20,
  },
  week: {
    registrations: 87,
    completed: 72,
    pending: 15,
    target: 100,
  },
  month: {
    registrations: 342,
    completed: 298,
    pending: 44,
    target: 400,
  },
}

const recentUsers = [
  { id: 1, name: "Kabelo Motsumi", phone: "+267 71 234 567", status: "completed", date: "2025-01-31" },
  { id: 2, name: "Tshepo Kgosi", phone: "+267 72 345 678", status: "pending", date: "2025-01-31" },
  { id: 3, name: "Mpho Sebina", phone: "+267 73 456 789", status: "completed", date: "2025-01-30" },
  { id: 4, name: "Boitumelo Phiri", phone: "+267 74 567 890", status: "pending", date: "2025-01-30" },
  { id: 5, name: "Thato Mmolawa", phone: "+267 75 678 901", status: "completed", date: "2025-01-29" },
]

export default function DashboardMain() {
  const router = useRouter()
  const [agentInfo, setAgentInfo] = useState({
    name: "",
    email: "",
    territory: "",
    id: "",
  })

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("agent_authenticated")
    if (isAuthenticated !== "true") {
      router.push("/dashboard")
      return
    }

    setAgentInfo({
      name: localStorage.getItem("agent_name") || "Agent",
      email: localStorage.getItem("agent_email") || "",
      territory: localStorage.getItem("agent_territory") || "",
      id: localStorage.getItem("agent_id") || "",
    })
  }, [router])

  const todayProgress = (sampleStats.today.completed / sampleStats.today.target) * 100
  const weekProgress = (sampleStats.week.completed / sampleStats.week.target) * 100
  const monthProgress = (sampleStats.month.completed / sampleStats.month.target) * 100

  return (
    <DashboardLayout>
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
                <h1 className="text-4xl font-bold mb-2">Welcome back, {agentInfo.name}!</h1>
                <p className="text-orange-100 text-lg">
                  Territory: {agentInfo.territory} | Agent ID: {agentInfo.id}
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-2 border-gray-100 hover:border-[#E9521C]/30 transition-colors shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Registrations</CardTitle>
              <div className="w-10 h-10 rounded-full bg-[#E9521C]/10 flex items-center justify-center">
                <UserPlus className="h-5 w-5 text-[#E9521C]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{sampleStats.today.registrations}</div>
              <p className="text-xs text-muted-foreground">
                {sampleStats.today.completed} completed, {sampleStats.today.pending} pending
              </p>
              <Progress value={todayProgress} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-[#E9521C]/30 transition-colors shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{sampleStats.week.registrations}</div>
              <p className="text-xs text-muted-foreground">
                {sampleStats.week.completed} completed, {sampleStats.week.pending} pending
              </p>
              <Progress value={weekProgress} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-[#E9521C]/30 transition-colors shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{sampleStats.month.registrations}</div>
              <p className="text-xs text-muted-foreground">
                {sampleStats.month.completed} completed, {sampleStats.month.pending} pending
              </p>
              <Progress value={monthProgress} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-[#E9521C]/30 transition-colors shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <Award className="h-5 w-5 text-yellow-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round((sampleStats.month.completed / sampleStats.month.registrations) * 100)}%
              </div>
              <p className="text-xs text-muted-foreground">Monthly average</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#E9521C] group" onClick={() => router.push("/dashboard/register")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-[#E9521C] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#E9521C]/10 group-hover:bg-[#E9521C] flex items-center justify-center transition-colors">
                  <UserPlus className="h-5 w-5 text-[#E9521C] group-hover:text-white transition-colors" />
                </div>
                Register New User
              </CardTitle>
              <CardDescription>Start onboarding a new Nthoppa user</CardDescription>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#E9521C] group" onClick={() => router.push("/dashboard/users")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-[#E9521C] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-100 group-hover:bg-[#E9521C] flex items-center justify-center transition-colors">
                  <Users className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                View All Users
              </CardTitle>
              <CardDescription>Manage and track registered users</CardDescription>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#E9521C] group" onClick={() => router.push("/dashboard/reports")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-[#E9521C] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-green-100 group-hover:bg-[#E9521C] flex items-center justify-center transition-colors">
                  <BarChart3 className="h-5 w-5 text-green-600 group-hover:text-white transition-colors" />
                </div>
                View Reports
              </CardTitle>
              <CardDescription>Analytics and performance metrics</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Recent Registrations */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Registrations</CardTitle>
            <CardDescription>Latest users registered by you</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E9521C] to-orange-600 flex items-center justify-center shadow-md">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {user.status === "completed" ? (
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Completed
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Pending
                        </span>
                      )}
                    </span>
                    <span className="text-sm text-gray-500">{user.date}</span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-full mt-4 border-[#E9521C] text-[#E9521C] hover:bg-[#E9521C] hover:text-white transition-colors font-semibold"
              onClick={() => router.push("/dashboard/users")}
            >
              View All Users
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

