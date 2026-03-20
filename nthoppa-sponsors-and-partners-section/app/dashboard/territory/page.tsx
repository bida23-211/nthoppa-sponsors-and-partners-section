"use client"

import DashboardLayout from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Target, TrendingUp, Navigation } from "lucide-react"

const territoryStats = {
  name: "Gaborone Central",
  totalUsers: 342,
  activeUsers: 298,
  pendingUsers: 44,
  completionRate: 87,
  target: 400,
}

const locations = [
  { name: "Mall of Botswana", users: 45, coordinates: "24.6282° S, 25.9231° E" },
  { name: "Game City", users: 38, coordinates: "24.6544° S, 25.9086° E" },
  { name: "Railway Station", users: 32, coordinates: "24.6581° S, 25.9084° E" },
  { name: "Main Mall", users: 28, coordinates: "24.6569° S, 25.9083° E" },
  { name: "Airport Junction", users: 25, coordinates: "24.6022° S, 25.9181° E" },
]

export default function TerritoryPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Territory Management</h1>
          <p className="text-gray-500">Manage your assigned territory and track location-based registrations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-2 border-gray-100 hover:border-[#E9521C]/30 transition-colors shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Territory</CardTitle>
              <div className="w-10 h-10 rounded-full bg-[#E9521C]/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-[#E9521C]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{territoryStats.name}</div>
              <p className="text-xs text-muted-foreground">Your assigned area</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{territoryStats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">
                {territoryStats.activeUsers} active, {territoryStats.pendingUsers} pending
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <Target className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{territoryStats.completionRate}%</div>
              <p className="text-xs text-muted-foreground">Territory average</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Target Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round((territoryStats.totalUsers / territoryStats.target) * 100)}%
              </div>
              <p className="text-xs text-muted-foreground">
                {territoryStats.totalUsers} of {territoryStats.target}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Map View</CardTitle>
              <CardDescription>Visual representation of your territory</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Map integration coming soon</p>
                  <p className="text-sm text-gray-400">Interactive map view of registered users</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Registration Locations</CardTitle>
              <CardDescription>Where most users are being registered</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E9521C] to-orange-600 flex items-center justify-center shadow-md">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">{location.name}</p>
                        <p className="text-sm text-gray-500">{location.coordinates}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{location.users}</p>
                      <p className="text-xs text-gray-500">users</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Route Planning</CardTitle>
            <CardDescription>Plan your field visits efficiently</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Navigation className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-semibold">Optimized Route</p>
                    <p className="text-sm text-gray-500">Visit 5 locations in optimal order</p>
                  </div>
                </div>
                <Button variant="outline">
                  <Navigation className="h-4 w-4 mr-2" />
                  Generate Route
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Estimated Distance</p>
                  <p className="text-2xl font-bold">12.5 km</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Estimated Time</p>
                  <p className="text-2xl font-bold">45 min</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Potential Registrations</p>
                  <p className="text-2xl font-bold">15-20</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

