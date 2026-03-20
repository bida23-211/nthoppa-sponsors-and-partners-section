"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import DashboardLayout from "@/components/dashboard/DashboardLayout"
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
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, ArrowRight, Save, QrCode, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

interface FormData {
  // Personal Information
  fullName: string
  phoneNumber: string
  email: string
  country: string
  gender: string
  dateOfBirth: string
  address: string
  city: string
  postalCode: string

  // Professional Details
  employmentStatus: string
  education: string
  industry: string
  income: string

  // Interests
  interests: string[]

  // Notifications
  smsNotifications: boolean
  emailNotifications: boolean
  pushNotifications: boolean
}

const interestsOptions = [
  "Financial Education",
  "Insurance Products",
  "Investment Opportunities",
  "Savings Plans",
  "Budgeting Tools",
  "Rewards & Coins",
]

export default function RegisterUser() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showQRCode, setShowQRCode] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    country: "Botswana",
    gender: "",
    dateOfBirth: "",
    address: "",
    city: "",
    postalCode: "",
    employmentStatus: "",
    education: "",
    industry: "",
    income: "",
    interests: [],
    smsNotifications: true,
    emailNotifications: true,
    pushNotifications: true,
  })

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSaveDraft = () => {
    localStorage.setItem("registration_draft", JSON.stringify(formData))
    toast.success("Draft saved successfully")
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setShowQRCode(true)
      toast.success("User registered successfully!")
    }, 2000)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
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
                <Label htmlFor="phoneNumber">Phone Number *</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  placeholder="+267 71 234 567"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="user@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Botswana">Botswana</SelectItem>
                    <SelectItem value="South Africa">South Africa</SelectItem>
                    <SelectItem value="Zimbabwe">Zimbabwe</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gender">Gender *</Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  required
                />
              </div>
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
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="employmentStatus">Employment Status *</Label>
              <Select
                value={formData.employmentStatus}
                onValueChange={(value) => handleInputChange("employmentStatus", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select employment status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="employed">Employed</SelectItem>
                  <SelectItem value="self-employed">Self-Employed</SelectItem>
                  <SelectItem value="unemployed">Unemployed</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="retired">Retired</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="education">Education Level *</Label>
              <Select value={formData.education} onValueChange={(value) => handleInputChange("education", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select education level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="primary">Primary School</SelectItem>
                  <SelectItem value="secondary">Secondary School</SelectItem>
                  <SelectItem value="diploma">Diploma</SelectItem>
                  <SelectItem value="degree">Degree</SelectItem>
                  <SelectItem value="postgraduate">Postgraduate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="agriculture">Agriculture</SelectItem>
                  <SelectItem value="mining">Mining</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="income">Monthly Income (BWP) *</Label>
              <Select value={formData.income} onValueChange={(value) => handleInputChange("income", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select income range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-2000">P 0 - P 2,000</SelectItem>
                  <SelectItem value="2000-5000">P 2,000 - P 5,000</SelectItem>
                  <SelectItem value="5000-10000">P 5,000 - P 10,000</SelectItem>
                  <SelectItem value="10000-20000">P 10,000 - P 20,000</SelectItem>
                  <SelectItem value="20000-50000">P 20,000 - P 50,000</SelectItem>
                  <SelectItem value="50000+">P 50,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <Label className="text-base font-semibold mb-4 block">Select Interests</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interestsOptions.map((interest) => (
                  <div
                    key={interest}
                    className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                    onClick={() => handleInterestToggle(interest)}
                  >
                    <Checkbox
                      checked={formData.interests.includes(interest)}
                      onCheckedChange={() => handleInterestToggle(interest)}
                    />
                    <Label className="cursor-pointer">{interest}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <div>
              <Label className="text-base font-semibold mb-4 block">Notification Preferences</Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <Checkbox
                    checked={formData.smsNotifications}
                    onCheckedChange={(checked) => handleInputChange("smsNotifications", checked)}
                  />
                  <Label className="cursor-pointer">SMS Notifications</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <Checkbox
                    checked={formData.emailNotifications}
                    onCheckedChange={(checked) => handleInputChange("emailNotifications", checked)}
                  />
                  <Label className="cursor-pointer">Email Notifications</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <Checkbox
                    checked={formData.pushNotifications}
                    onCheckedChange={(checked) => handleInputChange("pushNotifications", checked)}
                  />
                  <Label className="cursor-pointer">Push Notifications</Label>
                </div>
              </div>
            </div>
            <Alert>
              <AlertDescription>
                Review all information before submitting. You can save this as a draft and complete it later.
              </AlertDescription>
            </Alert>
          </div>
        )

      default:
        return null
    }
  }

  if (showQRCode) {
    return (
      <DashboardLayout>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <CardTitle>Registration Successful!</CardTitle>
              <CardDescription>Share this QR code with the user to complete mobile verification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <div className="w-64 h-64 border-4 border-gray-200 rounded-lg flex items-center justify-center bg-white">
                  <QrCode className="w-48 h-48 text-gray-400" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <p className="font-semibold">{formData.fullName}</p>
                <p className="text-sm text-gray-500">{formData.phoneNumber}</p>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    setShowQRCode(false)
                    setCurrentStep(1)
                    setFormData({
                      fullName: "",
                      phoneNumber: "",
                      email: "",
                      country: "Botswana",
                      gender: "",
                      dateOfBirth: "",
                      address: "",
                      city: "",
                      postalCode: "",
                      employmentStatus: "",
                      education: "",
                      industry: "",
                      income: "",
                      interests: [],
                      smsNotifications: true,
                      emailNotifications: true,
                      pushNotifications: true,
                    })
                  }}
                >
                  Register Another User
                </Button>
                <Button
                  className="flex-1 bg-[#E9521C] hover:bg-black text-white font-semibold shadow-lg transition-all duration-300"
                  onClick={() => router.push("/dashboard/main")}
                >
                  Back to Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.push("/dashboard/main")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Register New User</h1>
            <p className="text-gray-500">Step {currentStep} of {totalSteps}</p>
          </div>
        </div>

        <Progress value={progress} className="h-2" />

        <Card>
          <CardHeader>
            <CardTitle>
              {currentStep === 1 && "Personal Information"}
              {currentStep === 2 && "Professional Details"}
              {currentStep === 3 && "Interests"}
              {currentStep === 4 && "Notification Preferences"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Enter the user's basic personal information"}
              {currentStep === 2 && "Provide professional and employment details"}
              {currentStep === 3 && "Select areas of interest for the user"}
              {currentStep === 4 && "Configure notification preferences"}
            </CardDescription>
          </CardHeader>
          <CardContent>{renderStepContent()}</CardContent>
        </Card>

        <div className="flex justify-between">
          <div>
            {currentStep > 1 && (
              <Button variant="outline" onClick={handlePrevious}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleSaveDraft}>
              <Save className="h-4 w-4 mr-2" />
              Save Draft
            </Button>
            {currentStep < totalSteps ? (
              <Button onClick={handleNext} className="bg-[#E9521C] hover:bg-black text-white font-semibold shadow-lg transition-all duration-300">
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-[#E9521C] hover:bg-black text-white font-semibold shadow-lg transition-all duration-300"
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

