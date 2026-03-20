"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import AdminLayout from "@/components/admin/AdminLayout"
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
import { Search, Download, Eye, Edit, Trash2, Mail, Phone, MoreVertical, UserPlus } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample agent data
const sampleAgents = [
  {
    id: 1,
    name: "John Motsumi",
    email: "john@nthoppa.com",
    phone: "+267 71 234 567",
    agentId: "AG001",
    territory: "Gaborone Central",
    status: "active",
    registrations: 342,
    completionRate: 87,
    joinDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Sarah Kgosi",
    email: "sarah@nthoppa.com",
    phone: "+267 72 345 678",
    agentId: "AG002",
    territory: "Francistown",
    status: "active",
    registrations: 298,
    completionRate: 92,
    joinDate: "2024-02-01",
  },
  {
    id: 3,
    name: "David Sebina",
    email: "david@nthoppa.com",
    phone: "+267 73 456 789",
    agentId: "AG003",
    territory: "Maun",
    status: "pending",
    registrations: 0,
    completionRate: 0,
    joinDate: "2025-01-30",
  },
  {
    id: 4,
    name: "Mary Phiri",
    email: "mary@nthoppa.com",
    phone: "+267 74 567 890",
    agentId: "AG004",
    territory: "Serowe",
    status: "active",
    registrations: 275,
    completionRate: 88,
    joinDate: "2024-03-10",
  },
  {
    id: 5,
    name: "Peter Mmolawa",
    email: "peter@nthoppa.com",
    phone: "+267 75 678 901",
    agentId: "AG005",
    territory: "Palapye",
    status: "active",
    registrations: 234,
    completionRate: 82,
    joinDate: "2024-04-05",
  },
]

export default function ManageAgents() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("name")

  const filteredAgents = useMemo(() => {
    let filtered = [...sampleAgents]

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (agent) =>
          agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          agent.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          agent.agentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
          agent.territory.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((agent) => agent.status === statusFilter)
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name)
      } else if (sortBy === "registrations") {
        return b.registrations - a.registrations
      } else if (sortBy === "date") {
        return new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime()
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
      ["Name", "Email", "Phone", "Agent ID", "Territory", "Status", "Registrations", "Completion Rate"],
      ...filteredAgents.map((agent) => [
        agent.name,
        agent.email,
        agent.phone,
        agent.agentId,
        agent.territory,
        agent.status,
        agent.registrations.toString(),
        `${agent.completionRate}%`,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `nthoppa-agents-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Manage Field Agents</h1>
            <p className="text-gray-500">View and manage all field agents in the system</p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => router.push("/admin/register-agent")}
              className="bg-[#E9521C] hover:bg-black text-white font-semibold shadow-lg transition-all duration-300"
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Register Agent
            </Button>
            <Button onClick={handleExport} variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search agents..."
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
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Sort by Name</SelectItem>
                  <SelectItem value="registrations">Sort by Registrations</SelectItem>
                  <SelectItem value="date">Sort by Date</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-sm">
                  Total: {filteredAgents.length}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Agents Table */}
        <Card>
          <CardHeader>
            <CardTitle>Field Agents</CardTitle>
            <CardDescription>All registered field agents and their performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Agent</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Territory</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Registrations</TableHead>
                    <TableHead>Completion Rate</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAgents.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                        No agents found matching your criteria
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredAgents.map((agent) => (
                      <TableRow key={agent.id}>
                        <TableCell>
                          <div>
                            <p className="font-semibold">{agent.name}</p>
                            <p className="text-xs text-gray-500">{agent.agentId}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="h-3 w-3 text-gray-400" />
                              {agent.email}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Phone className="h-3 w-3" />
                              {agent.phone}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{agent.territory}</TableCell>
                        <TableCell>{getStatusBadge(agent.status)}</TableCell>
                        <TableCell>
                          <div className="font-semibold">{agent.registrations}</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-[#E9521C] to-orange-600"
                                style={{ width: `${agent.completionRate}%` }}
                              />
                            </div>
                            <span className="text-sm font-semibold text-gray-700">{agent.completionRate}%</span>
                          </div>
                        </TableCell>
                        <TableCell>{agent.joinDate}</TableCell>
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
                                Edit Agent
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Mail className="h-4 w-4 mr-2" />
                                Send Email
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Deactivate
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
    </AdminLayout>
  )
}

