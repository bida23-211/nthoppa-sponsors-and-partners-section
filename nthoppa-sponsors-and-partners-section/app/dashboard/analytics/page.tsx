"use client"

import DashboardLayout from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, Users, Target, Award, Calendar } from "lucide-react"

const dailyData = [
  { day: "Mon", registrations: 15, completed: 12 },
  { day: "Tue", registrations: 18, completed: 16 },
  { day: "Wed", registrations: 12, completed: 10 },
  { day: "Thu", registrations: 20, completed: 18 },
  { day: "Fri", registrations: 14, completed: 12 },
  { day: "Sat", registrations: 8, completed: 6 },
  { day: "Sun", registrations: 0, completed: 0 },
]

const leaderboardData = [
  { rank: 1, name: "John Motsumi", registrations: 342, completionRate: 87 },
  { rank: 2, name: "Sarah Kgosi", registrations: 298, completionRate: 92 },
  { rank: 3, name: "David Sebina", registrations: 275, completionRate: 85 },
  { rank: 4, name: "Mary Phiri", registrations: 256, completionRate: 88 },
  { rank: 5, name: "Peter Mmolawa", registrations: 234, completionRate: 82 },
]

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Analytics & Performance</h1>
          <p className="text-gray-500">Track your registration metrics and performance</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="daily">Daily Stats</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-2 border-gray-100 hover:border-[#E9521C]/30 transition-colors shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
                  <div className="w-10 h-10 rounded-full bg-[#E9521C]/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-[#E9521C]" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">342</div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-green-600" />
                    +12% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-[#E9521C]/30 transition-colors shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Target className="h-5 w-5 text-green-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">87%</div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-green-600" />
                    +3% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-[#E9521C]/30 transition-colors shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Target</CardTitle>
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Award className="h-5 w-5 text-yellow-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">85.5%</div>
                  <p className="text-xs text-muted-foreground">342 of 400 registrations</p>
                  <Progress value={85.5} className="mt-2 h-2" />
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-[#E9521C]/30 transition-colors shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">298</div>
                  <p className="text-xs text-muted-foreground">87% of total registrations</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Performance</CardTitle>
                  <CardDescription>Registrations and completions this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dailyData.map((data, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{data.day}</span>
                          <span className="text-gray-500">
                            {data.completed}/{data.registrations}
                          </span>
                        </div>
                        <Progress
                          value={(data.completed / data.registrations) * 100 || 0}
                          className="h-3"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Territory Performance</CardTitle>
                  <CardDescription>Your performance by territory</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Gaborone Central</span>
                        <span className="text-gray-500">342 registrations</span>
                      </div>
                      <Progress value={100} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Francistown</span>
                        <span className="text-gray-500">0 registrations</span>
                      </div>
                      <Progress value={0} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="daily" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Daily Registration Trends</CardTitle>
                <CardDescription>Track your daily registration activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dailyData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Calendar className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-semibold">{data.day}</p>
                          <p className="text-sm text-gray-500">
                            {data.completed} completed of {data.registrations} registered
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{data.registrations}</p>
                        <p className="text-xs text-gray-500">registrations</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Agent Leaderboard</CardTitle>
                <CardDescription>Top performing field agents this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboardData.map((agent) => (
                    <div
                      key={agent.rank}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                            agent.rank === 1
                              ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-white shadow-md"
                              : agent.rank === 2
                                ? "bg-gradient-to-br from-gray-300 to-gray-500 text-white shadow-md"
                                : agent.rank === 3
                                  ? "bg-gradient-to-br from-[#E9521C] to-orange-600 text-white shadow-md"
                                  : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {agent.rank}
                        </div>
                        <div>
                          <p className="font-semibold">{agent.name}</p>
                          <p className="text-sm text-gray-500">
                            {agent.completionRate}% completion rate
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{agent.registrations}</p>
                        <p className="text-xs text-gray-500">registrations</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

