"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import AdminLayout from "@/components/admin/AdminLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft, Save, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

interface AgentFormData {
  fullName: string
  email: string
  phone: string
  id: string
  territory: string
  address: string
  city: string
  postalCode: string
  password: string
  confirmPassword: string
}

export default function RegisterAgent() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState<AgentFormData>({
    fullName: "",
    email: "",
    phone: "",
    id: "",
    territory: "",
    address: "",
    city: "",
    postalCode: "",
    password: "",
    confirmPassword: "",
  })

  const handleInputChange = (field: keyof AgentFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters")
      return
    }

    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
      toast.success("Agent registered successfully!")
    }, 2000)
  }

  if (showSuccess) {
    return (
      <AdminLayout>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <CardTitle>Agent Registered Successfully!</CardTitle>
              <CardDescription>Field agent has been added to the system</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-2">
                <p className="font-semibold text-lg">{formData.fullName}</p>
                <p className="text-sm text-gray-500">{formData.email}</p>
                <p className="text-sm text-gray-500">Agent ID: {formData.id}</p>
                <p className="text-sm text-gray-500">Territory: {formData.territory}</p>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    setShowSuccess(false)
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      id: "",
                      territory: "",
                      address: "",
                      city: "",
                      postalCode: "",
                      password: "",
                      confirmPassword: "",
                    })
                  }}
                >
                  Register Another Agent
                </Button>
                <Button
                  className="flex-1 bg-[#E9521C] hover:bg-black text-white font-semibold shadow-lg transition-all duration-300"
                  onClick={() => router.push("/admin/dashboard")}
                >
                  Back to Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.push("/admin/dashboard")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Register New Field Agent</h1>
            <p className="text-gray-500">Add a new field agent to the Nthoppa system</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Agent Information</CardTitle>
            <CardDescription>Enter the field agent's details</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Enter full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="agent@nthoppa.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+267 71 234 567"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="id">Agent ID *</Label>
                  <Input
                    id="id"
                    value={formData.id}
                    onChange={(e) => handleInputChange("id", e.target.value.toUpperCase())}
                    placeholder="AG001"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="territory">Territory *</Label>
                <Select value={formData.territory} onValueChange={(value) => handleInputChange("territory", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select territory" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Gaborone Central">Gaborone Central</SelectItem>
                    <SelectItem value="Gaborone North">Gaborone North</SelectItem>
                    <SelectItem value="Francistown">Francistown</SelectItem>
                    <SelectItem value="Maun">Maun</SelectItem>
                    <SelectItem value="Serowe">Serowe</SelectItem>
                    <SelectItem value="Palapye">Palapye</SelectItem>
                    <SelectItem value="Molepolole">Molepolole</SelectItem>
                    <SelectItem value="Kanye">Kanye</SelectItem>
                    <SelectItem value="Mochudi">Mochudi</SelectItem>
                    <SelectItem value="Mahalapye">Mahalapye</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address *</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Street address"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="City"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange("postalCode", e.target.value)}
                    placeholder="Postal code"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    placeholder="Minimum 6 characters"
                    required
                    minLength={6}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    placeholder="Confirm password"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/admin/dashboard")}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#E9521C] hover:bg-black text-white font-semibold shadow-lg transition-all duration-300"
                >
                  {isSubmitting ? "Registering..." : "Register Agent"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}

