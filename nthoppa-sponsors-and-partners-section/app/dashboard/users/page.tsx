"use client"

import { useState, useMemo } from "react"
import DashboardLayout from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Download, Eye, Edit, Phone, Mail, MoreVertical } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample user data
const sampleUsers = [
  {
    id: 1,
    name: "Kabelo Motsumi",
    phone: "+267 71 234 567",
    email: "kabelo@example.com",
    status: "active",
    registrationDate: "2025-01-31",
    completionRate: 100,
    territory: "Gaborone Central",
  },
  {
    id: 2,
    name: "Tshepo Kgosi",
    phone: "+267 72 345 678",
    email: "tshepo@example.com",
    status: "pending",
    registrationDate: "2025-01-31",
    completionRate: 45,
    territory: "Gaborone Central",
  },
  {
    id: 3,
    name: "Mpho Sebina",
    phone: "+267 73 456 789",
    email: "mpho@example.com",
    status: "active",
    registrationDate: "2025-01-30",
    completionRate: 100,
    territory: "Gaborone Central",
  },
  {
    id: 4,
    name: "Boitumelo Phiri",
    phone: "+267 74 567 890",
    email: "boitumelo@example.com",
    status: "pending",
    registrationDate: "2025-01-30",
    completionRate: 30,
    territory: "Gaborone Central",
  },
  {
    id: 5,
    name: "Thato Mmolawa",
    phone: "+267 75 678 901",
    email: "thato@example.com",
    status: "active",
    registrationDate: "2025-01-29",
    completionRate: 100,
    territory: "Gaborone Central",
  },
  {
    id: 6,
    name: "Lerato Kgosiemang",
    phone: "+267 76 789 012",
    email: "lerato@example.com",
    status: "inactive",
    registrationDate: "2025-01-28",
    completionRate: 0,
    territory: "Gaborone Central",
  },
]

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("date")

  const filteredUsers = useMemo(() => {
    let filtered = [...sampleUsers]

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.phone.includes(searchQuery) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((user) => user.status === statusFilter)
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.registrationDate).getTime() - new Date(a.registrationDate).getTime()
      } else if (sortBy === "name") {
        return a.name.localeCompare(b.name)
      } else if (sortBy === "completion") {
        return b.completionRate - a.completionRate
      }
      return 0
    })

    return filtered
  }, [searchQuery, statusFilter, sortBy])

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      active: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      inactive: "bg-gray-100 text-gray-800",
      verified: "bg-blue-100 text-blue-800",
    }
    return (
      <Badge className={variants[status] || variants.inactive}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  const handleExport = () => {
    // Simulate CSV export
    const csvContent = [
      ["Name", "Phone", "Email", "Status", "Registration Date", "Completion Rate"],
      ...filteredUsers.map((user) => [
        user.name,
        user.phone,
        user.email,
        user.status,
        user.registrationDate,
        `${user.completionRate}%`,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `nthoppa-users-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">User Management</h1>
            <p className="text-gray-500">Manage and track all registered users</p>
          </div>
          <Button onClick={handleExport} className="bg-[#E9521C] hover:bg-black text-white font-semibold shadow-lg transition-all duration-300">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="verified">Verified</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Sort by Date</SelectItem>
                  <SelectItem value="name">Sort by Name</SelectItem>
                  <SelectItem value="completion">Sort by Completion</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-sm">
                  Total: {filteredUsers.length}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Registered Users</CardTitle>
            <CardDescription>View and manage all users registered by you</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Registration Date</TableHead>
                    <TableHead>Completion</TableHead>
                    <TableHead>Territory</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                        No users found matching your criteria
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="h-3 w-3 text-gray-400" />
                              {user.phone}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Mail className="h-3 w-3" />
                              {user.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell>{user.registrationDate}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-[#E9521C] to-orange-600"
                                style={{ width: `${user.completionRate}%` }}
                              />
                            </div>
                            <span className="text-sm font-semibold text-gray-700">{user.completionRate}%</span>
                          </div>
                        </TableCell>
                        <TableCell>{user.territory}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit User
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Phone className="h-4 w-4 mr-2" />
                                Call User
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Mail className="h-4 w-4 mr-2" />
                                Send Email
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

