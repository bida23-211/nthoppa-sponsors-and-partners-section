"use client"

import { useState } from "react"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  Mail,
  Phone,
  Send,
  History,
  CheckCircle2,
  Clock,
  XCircle,
} from "lucide-react"

const communicationHistory = [
  {
    id: 1,
    type: "sms",
    recipient: "Kabelo Motsumi",
    phone: "+267 71 234 567",
    message: "Welcome to Nthoppa! Complete your registration to start earning rewards.",
    status: "sent",
    date: "2025-01-31 10:30",
  },
  {
    id: 2,
    type: "email",
    recipient: "Tshepo Kgosi",
    email: "tshepo@example.com",
    subject: "Complete Your Registration",
    status: "sent",
    date: "2025-01-31 09:15",
  },
  {
    id: 3,
    type: "sms",
    recipient: "Mpho Sebina",
    phone: "+267 73 456 789",
    message: "Your verification code is 123456",
    status: "delivered",
    date: "2025-01-30 14:20",
  },
  {
    id: 4,
    type: "whatsapp",
    recipient: "Boitumelo Phiri",
    phone: "+267 74 567 890",
    message: "Thank you for registering with Nthoppa!",
    status: "sent",
    date: "2025-01-30 11:45",
  },
]

export default function CommunicationsPage() {
  const [smsPhone, setSmsPhone] = useState("")
  const [smsMessage, setSmsMessage] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [emailSubject, setEmailSubject] = useState("")
  const [emailBody, setEmailBody] = useState("")

  const handleSendSMS = () => {
    alert(`SMS sent to ${smsPhone}`)
    setSmsPhone("")
    setSmsMessage("")
  }

  const handleSendEmail = () => {
    alert(`Email sent to ${emailAddress}`)
    setEmailAddress("")
    setEmailSubject("")
    setEmailBody("")
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "sent":
        return <CheckCircle2 className="h-4 w-4 text-blue-600" />
      case "delivered":
        return <CheckCircle2 className="h-4 w-4 text-green-600" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "failed":
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Communications</h1>
          <p className="text-gray-500">Send messages, emails, and manage user communications</p>
        </div>

        <Tabs defaultValue="sms" className="space-y-6">
          <TabsList>
            <TabsTrigger value="sms">SMS</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="sms" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Send SMS</CardTitle>
                <CardDescription>Send SMS messages to users</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="smsPhone">Phone Number</Label>
                  <Input
                    id="smsPhone"
                    type="tel"
                    placeholder="+267 71 234 567"
                    value={smsPhone}
                    onChange={(e) => setSmsPhone(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smsMessage">Message</Label>
                  <Textarea
                    id="smsMessage"
                    placeholder="Enter your message here..."
                    value={smsMessage}
                    onChange={(e) => setSmsMessage(e.target.value)}
                    rows={6}
                  />
                  <p className="text-xs text-gray-500">{smsMessage.length} characters</p>
                </div>
                <Button
                  onClick={handleSendSMS}
                  className="w-full bg-[#E9521C] hover:bg-black text-white font-semibold shadow-lg transition-all duration-300"
                  disabled={!smsPhone || !smsMessage}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send SMS
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SMS Templates</CardTitle>
                <CardDescription>Quick message templates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Welcome to Nthoppa! Complete your registration to start earning rewards.",
                    "Your verification code is {code}. Valid for 10 minutes.",
                    "Thank you for registering! Download the app to get started.",
                    "Reminder: Complete your profile to unlock all features.",
                  ].map((template, index) => (
                    <div
                      key={index}
                      className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => setSmsMessage(template)}
                    >
                      <p className="text-sm">{template}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="email" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Send Email</CardTitle>
                <CardDescription>Send email messages to users</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="emailAddress">Email Address</Label>
                  <Input
                    id="emailAddress"
                    type="email"
                    placeholder="user@example.com"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emailSubject">Subject</Label>
                  <Input
                    id="emailSubject"
                    placeholder="Email subject"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emailBody">Message</Label>
                  <Textarea
                    id="emailBody"
                    placeholder="Enter your email message here..."
                    value={emailBody}
                    onChange={(e) => setEmailBody(e.target.value)}
                    rows={8}
                  />
                </div>
                <Button
                  onClick={handleSendEmail}
                  className="w-full bg-[#E9521C] hover:bg-black text-white font-semibold shadow-lg transition-all duration-300"
                  disabled={!emailAddress || !emailSubject || !emailBody}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Email Templates</CardTitle>
                <CardDescription>Pre-written email templates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      subject: "Welcome to Nthoppa",
                      body: "Thank you for joining Nthoppa! Complete your registration to start your financial journey.",
                    },
                    {
                      subject: "Complete Your Profile",
                      body: "You're almost done! Complete your profile to unlock all features and start earning rewards.",
                    },
                    {
                      subject: "Verification Required",
                      body: "Please verify your account to continue using Nthoppa services.",
                    },
                  ].map((template, index) => (
                    <div
                      key={index}
                      className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => {
                        setEmailSubject(template.subject)
                        setEmailBody(template.body)
                      }}
                    >
                      <p className="font-semibold mb-1">{template.subject}</p>
                      <p className="text-sm text-gray-500">{template.body}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="whatsapp" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>WhatsApp Integration</CardTitle>
                <CardDescription>Send WhatsApp messages to users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 mb-2">WhatsApp integration coming soon</p>
                  <p className="text-sm text-gray-400">
                    Connect your WhatsApp Business account to send messages directly
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Communication History</CardTitle>
                <CardDescription>View all sent messages and emails</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {communicationHistory.map((comm) => (
                    <div
                      key={comm.id}
                      className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        {comm.type === "sms" && <Phone className="h-5 w-5 text-blue-600 mt-1" />}
                        {comm.type === "email" && <Mail className="h-5 w-5 text-green-600 mt-1" />}
                        {comm.type === "whatsapp" && (
                          <MessageSquare className="h-5 w-5 text-green-600 mt-1" />
                        )}
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold">{comm.recipient}</p>
                            <Badge variant="outline" className="text-xs">
                              {comm.type.toUpperCase()}
                            </Badge>
                          </div>
                          {comm.type === "sms" && (
                            <>
                              <p className="text-sm text-gray-500">{comm.phone}</p>
                              <p className="text-sm mt-1">{comm.message}</p>
                            </>
                          )}
                          {comm.type === "email" && (
                            <>
                              <p className="text-sm text-gray-500">{comm.email}</p>
                              <p className="text-sm font-medium mt-1">{comm.subject}</p>
                            </>
                          )}
                          {comm.type === "whatsapp" && (
                            <>
                              <p className="text-sm text-gray-500">{comm.phone}</p>
                              <p className="text-sm mt-1">{comm.message}</p>
                            </>
                          )}
                          <p className="text-xs text-gray-400 mt-2">{comm.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(comm.status)}
                        <Badge
                          variant="outline"
                          className={
                            comm.status === "delivered"
                              ? "text-green-600"
                              : comm.status === "sent"
                                ? "text-blue-600"
                                : "text-gray-600"
                          }
                        >
                          {comm.status}
                        </Badge>
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

