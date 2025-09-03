"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, TrendingUp, Phone, Mail, Calendar, Star, Target, Brain, Zap, Building2 } from "lucide-react"

export function ProspectingEngine() {
  const [searchQuery, setSearchQuery] = useState("")

  const aiRecommendations = [
    {
      id: 1,
      company: "TechFlow Solutions",
      contact: "Jennifer Martinez",
      title: "VP of Sales",
      score: 94,
      reason: "High intent signals: Downloaded 3 whitepapers, visited pricing 5x",
      industry: "SaaS",
      employees: "250-500",
      revenue: "$50M-100M",
      signals: ["Website visits", "Content downloads", "Competitor research"],
      nextAction: "Call within 2 hours",
      priority: "hot",
    },
    {
      id: 2,
      company: "Global Manufacturing Inc",
      contact: "Robert Chen",
      title: "Chief Technology Officer",
      score: 87,
      reason: "Technology stack match + recent funding announcement",
      industry: "Manufacturing",
      employees: "1000+",
      revenue: "$100M+",
      signals: ["Funding news", "Job postings", "Tech stack analysis"],
      nextAction: "Send personalized email",
      priority: "warm",
    },
    {
      id: 3,
      company: "StartupX",
      contact: "Alex Thompson",
      title: "Founder & CEO",
      score: 82,
      reason: "Similar company profile to recent wins",
      industry: "Fintech",
      employees: "50-100",
      revenue: "$10M-25M",
      signals: ["Similar profile", "Growth stage", "Recent hiring"],
      nextAction: "LinkedIn connection",
      priority: "warm",
    },
  ]

  const leadSources = [
    { name: "AI Recommendations", count: 47, trend: "+12%" },
    { name: "ZoomInfo", count: 23, trend: "+8%" },
    { name: "LinkedIn Sales Nav", count: 18, trend: "+5%" },
    { name: "Salesforce", count: 15, trend: "+3%" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">VelocityIQ</h1>
            <span className="text-gray-500">Prospecting Engine</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* AI Insights Header */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <Brain className="h-6 w-6 text-rose-600" />
            <h2 className="text-2xl font-bold text-gray-900">AI-Powered Prospecting</h2>
          </div>
          <p className="text-gray-600">Intelligent lead scoring and recommendations based on real-time signals</p>
        </div>

        {/* Search and Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search companies, contacts, or industries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Hot Prospects</p>
                  <p className="text-2xl font-bold text-rose-600">12</p>
                </div>
                <Zap className="h-8 w-8 text-rose-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">AI Score Avg</p>
                  <p className="text-2xl font-bold text-blue-600">87</p>
                </div>
                <Target className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="recommendations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
            <TabsTrigger value="sources">Lead Sources</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="recommendations" className="space-y-4">
            {aiRecommendations.map((prospect) => (
              <Card key={prospect.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={`/abstract-geometric-shapes.png?height=48&width=48&query=${prospect.contact}`} />
                        <AvatarFallback>
                          {prospect.contact
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg">{prospect.contact}</h3>
                        <p className="text-gray-600">{prospect.title}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Building2 className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{prospect.company}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm text-gray-600">AI Score</span>
                        <Badge
                          variant={prospect.priority === "hot" ? "destructive" : "secondary"}
                          className={prospect.priority === "hot" ? "bg-rose-600" : "bg-amber-500"}
                        >
                          {prospect.score}
                        </Badge>
                      </div>
                      <Progress value={prospect.score} className="w-20 h-2" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Industry</p>
                      <p className="font-medium">{prospect.industry}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Company Size</p>
                      <p className="font-medium">{prospect.employees}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Revenue</p>
                      <p className="font-medium">{prospect.revenue}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">AI Insight</p>
                    <p className="text-sm bg-blue-50 p-3 rounded-lg border border-blue-200">{prospect.reason}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Buying Signals</p>
                    <div className="flex flex-wrap gap-2">
                      {prospect.signals.map((signal, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {signal}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-amber-500" />
                      <span className="text-sm font-medium text-rose-600">{prospect.nextAction}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </Button>
                      <Button size="sm" className="bg-rose-600 hover:bg-rose-700">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="sources" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leadSources.map((source, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {source.name}
                      <Badge variant="outline" className="text-green-600">
                        {source.trend}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold">{source.count}</span>
                      <TrendingUp className="h-8 w-8 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Active prospects this week</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Rate</CardTitle>
                  <CardDescription>AI recommendations to meetings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">34.2%</div>
                  <p className="text-sm text-gray-600">+5.2% vs last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Response Rate</CardTitle>
                  <CardDescription>Outreach response rate</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">28.7%</div>
                  <p className="text-sm text-gray-600">+3.1% vs last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pipeline Value</CardTitle>
                  <CardDescription>From AI recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-rose-600">$2.4M</div>
                  <p className="text-sm text-gray-600">+18% vs last month</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
