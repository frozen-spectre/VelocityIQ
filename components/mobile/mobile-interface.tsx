"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Smartphone,
  Phone,
  Mail,
  Calendar,
  FileText,
  CheckCircle,
  Clock,
  PenTool,
  Send,
  Camera,
  Mic,
  MapPin,
} from "lucide-react"

export function MobileInterface() {
  const [isRecording, setIsRecording] = useState(false)
  const [selectedProspect, setSelectedProspect] = useState(null)

  const mobileProspects = [
    {
      id: 1,
      name: "Jennifer Martinez",
      company: "TechFlow Solutions",
      title: "VP of Sales",
      phone: "+1 (555) 123-4567",
      email: "j.martinez@techflow.com",
      score: 94,
      status: "hot",
      location: "San Francisco, CA",
      nextAction: "Call scheduled for 2:00 PM",
    },
    {
      id: 2,
      name: "Robert Chen",
      company: "Global Manufacturing Inc",
      title: "CTO",
      phone: "+1 (555) 987-6543",
      email: "r.chen@globalmfg.com",
      score: 87,
      status: "warm",
      location: "Austin, TX",
      nextAction: "Follow up email sent",
    },
  ]

  const quickActions = [
    { icon: Phone, label: "Quick Call", color: "bg-green-600" },
    { icon: Mail, label: "Send Email", color: "bg-blue-600" },
    { icon: Calendar, label: "Schedule", color: "bg-purple-600" },
    { icon: FileText, label: "Proposal", color: "bg-rose-600" },
  ]

  const todayStats = [
    { label: "Calls Made", value: "12", icon: Phone, color: "text-green-600" },
    { label: "Emails Sent", value: "8", icon: Mail, color: "text-blue-600" },
    { label: "Meetings", value: "3", icon: Calendar, color: "text-purple-600" },
    { label: "Proposals", value: "2", icon: FileText, color: "text-rose-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Mobile Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Smartphone className="h-6 w-6 text-rose-600" />
            <h1 className="text-lg font-bold text-gray-900">VelocityIQ Mobile</h1>
          </div>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="p-4">
        {/* Quick Stats */}
        <Card className="mb-4">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Today's Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {todayStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="prospects" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="prospects">Prospects</TabsTrigger>
            <TabsTrigger value="sign">Quick Sign</TabsTrigger>
            <TabsTrigger value="notes">Voice Notes</TabsTrigger>
          </TabsList>

          <TabsContent value="prospects" className="space-y-4">
            {/* Quick Actions */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action, index) => (
                    <Button key={index} className={`${action.color} hover:opacity-90 h-16 flex-col space-y-1`}>
                      <action.icon className="h-5 w-5" />
                      <span className="text-xs">{action.label}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mobile Prospect List */}
            <div className="space-y-3">
              {mobileProspects.map((prospect) => (
                <Card key={prospect.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>
                            {prospect.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{prospect.name}</h3>
                          <p className="text-sm text-gray-600">{prospect.title}</p>
                          <p className="text-xs text-gray-500">{prospect.company}</p>
                        </div>
                      </div>
                      <Badge
                        variant={prospect.status === "hot" ? "destructive" : "secondary"}
                        className={prospect.status === "hot" ? "bg-rose-600" : "bg-amber-500"}
                      >
                        {prospect.score}
                      </Badge>
                    </div>

                    <div className="flex items-center space-x-2 mb-3 text-xs text-gray-600">
                      <MapPin className="h-3 w-3" />
                      <span>{prospect.location}</span>
                    </div>

                    <div className="bg-blue-50 p-2 rounded text-xs mb-3">
                      <Clock className="h-3 w-3 inline mr-1" />
                      {prospect.nextAction}
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Mail className="h-4 w-4 mr-1" />
                        Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sign" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PenTool className="h-5 w-5 text-rose-600" />
                  <span>Mobile Signature</span>
                </CardTitle>
                <CardDescription>Sign proposals and contracts on-the-spot</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Signature Canvas Placeholder */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg h-48 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <PenTool className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Tap to sign</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Input placeholder="Signer Name" />
                  <Input placeholder="Company" />
                  <Input placeholder="Title" />
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Clear
                  </Button>
                  <Button className="flex-1 bg-rose-600 hover:bg-rose-700">
                    <Send className="h-4 w-4 mr-2" />
                    Send Signed
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Signatures */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Signatures</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { client: "TechFlow Solutions", amount: "$275K", status: "completed", time: "2 hours ago" },
                    { client: "StartupX", amount: "$125K", status: "pending", time: "1 day ago" },
                  ].map((signature, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{signature.client}</p>
                        <p className="text-sm text-gray-600">{signature.amount}</p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={signature.status === "completed" ? "default" : "secondary"}
                          className={signature.status === "completed" ? "bg-green-600" : "bg-yellow-500"}
                        >
                          {signature.status === "completed" ? (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          ) : (
                            <Clock className="h-3 w-3 mr-1" />
                          )}
                          {signature.status}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">{signature.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mic className="h-5 w-5 text-rose-600" />
                  <span>Voice Notes</span>
                </CardTitle>
                <CardDescription>Record and transcribe meeting notes automatically</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Voice Recording Interface */}
                <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded-lg">
                  <Button
                    size="lg"
                    className={`rounded-full h-20 w-20 ${
                      isRecording ? "bg-red-600 hover:bg-red-700" : "bg-rose-600 hover:bg-rose-700"
                    }`}
                    onClick={() => setIsRecording(!isRecording)}
                  >
                    <Mic className={`h-8 w-8 ${isRecording ? "animate-pulse" : ""}`} />
                  </Button>
                  <p className="mt-3 text-gray-600">
                    {isRecording ? "Recording... Tap to stop" : "Tap to start recording"}
                  </p>
                  {isRecording && (
                    <div className="mt-2">
                      <div className="flex items-center justify-center space-x-1">
                        <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-red-600 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-red-600 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Camera className="h-4 w-4 mr-2" />
                    Add Photo
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <MapPin className="h-4 w-4 mr-2" />
                    Add Location
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Voice Notes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      title: "TechFlow Solutions Meeting",
                      duration: "12:34",
                      transcript: "Discussed implementation timeline and budget requirements...",
                      time: "2 hours ago",
                    },
                    {
                      title: "Global Manufacturing Call",
                      duration: "8:45",
                      transcript: "Reviewed technical specifications and integration needs...",
                      time: "1 day ago",
                    },
                  ].map((note, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{note.title}</h4>
                        <span className="text-xs text-gray-500">{note.duration}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{note.transcript}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{note.time}</span>
                        <Button size="sm" variant="outline">
                          View Full
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
