"use client"

import { useState, useEffect } from "react"
import DashboardLayout from "@/components/dashboard/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { User, Lock, Bell, Globe, Save } from "lucide-react"
import { toast } from "sonner"

export default function SettingsPage() {
  const [agentInfo, setAgentInfo] = useState({
    name: "",
    email: "",
    phone: "",
    id: "",
    territory: "",
    address: "",
  })

  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: true,
    weeklyReport: true,
  })

  const [preferences, setPreferences] = useState({
    language: "en",
    theme: "light",
    timezone: "Africa/Gaborone",
  })

  useEffect(() => {
    setAgentInfo({
      name: localStorage.getItem("agent_name") || "",
      email: localStorage.getItem("agent_email") || "",
      phone: "+267 71 234 567",
      id: localStorage.getItem("agent_id") || "",
      territory: localStorage.getItem("agent_territory") || "",
      address: "Gaborone, Botswana",
    })
  }, [])

  const handleSaveProfile = () => {
    localStorage.setItem("agent_name", agentInfo.name)
    localStorage.setItem("agent_email", agentInfo.email)
    toast.success("Profile updated successfully")
  }

  const handleChangePassword = () => {
    toast.info("Password change functionality will be implemented with backend integration")
  }

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-gray-500">Manage your account settings and preferences</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-[#E9521C]" />
              <CardTitle>Profile Information</CardTitle>
            </div>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={agentInfo.name}
                  onChange={(e) => setAgentInfo({ ...agentInfo, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={agentInfo.email}
                  onChange={(e) => setAgentInfo({ ...agentInfo, email: e.target.value })}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={agentInfo.phone}
                  onChange={(e) => setAgentInfo({ ...agentInfo, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="id">Agent ID</Label>
                <Input id="id" value={agentInfo.id} disabled />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="territory">Territory</Label>
              <Input
                id="territory"
                value={agentInfo.territory}
                onChange={(e) => setAgentInfo({ ...agentInfo, territory: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={agentInfo.address}
                onChange={(e) => setAgentInfo({ ...agentInfo, address: e.target.value })}
              />
            </div>
            <Button onClick={handleSaveProfile} className="bg-[#E9521C] hover:bg-black text-white font-semibold shadow-lg transition-all duration-300">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-[#E9521C]" />
              <CardTitle>Security</CardTitle>
            </div>
            <CardDescription>Manage your password and security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Password</Label>
              <p className="text-sm text-gray-500">Last changed: Never</p>
              <Button variant="outline" onClick={handleChangePassword}>
                Change Password
              </Button>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Two-Factor Authentication</Label>
              <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
              <Button variant="outline">Enable 2FA</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-[#E9521C]" />
              <CardTitle>Notifications</CardTitle>
            </div>
            <CardDescription>Manage your notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Email Notifications</Label>
                <p className="text-sm text-gray-500">Receive notifications via email</p>
              </div>
              <Switch
                checked={notifications.email}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, email: checked })
                }
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label>SMS Notifications</Label>
                <p className="text-sm text-gray-500">Receive notifications via SMS</p>
              </div>
              <Switch
                checked={notifications.sms}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, sms: checked })
                }
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label>Push Notifications</Label>
                <p className="text-sm text-gray-500">Receive push notifications</p>
              </div>
              <Switch
                checked={notifications.push}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, push: checked })
                }
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label>Weekly Reports</Label>
                <p className="text-sm text-gray-500">Receive weekly performance reports</p>
              </div>
              <Switch
                checked={notifications.weeklyReport}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, weeklyReport: checked })
                }
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-[#E9521C]" />
              <CardTitle>Preferences</CardTitle>
            </div>
            <CardDescription>Customize your dashboard experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <select
                id="language"
                value={preferences.language}
                onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="en">English</option>
                <option value="tn">Setswana</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="theme">Theme</Label>
              <select
                id="theme"
                value={preferences.theme}
                onChange={(e) => setPreferences({ ...preferences, theme: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Input id="timezone" value={preferences.timezone} disabled />
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

