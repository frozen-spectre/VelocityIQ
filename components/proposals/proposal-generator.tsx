"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FileText, Wand2, Download, Send, Eye, Edit3, Clock, CheckCircle, DollarSign, Smartphone } from "lucide-react"

export function ProposalGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [contactName, setContactName] = useState("")
  const [proposalValue, setProposalValue] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const templates = [
    {
      id: "saas-enterprise",
      name: "Enterprise SaaS Solution",
      description: "Comprehensive software solution for large organizations",
      industry: "Technology",
      avgValue: "$250K",
    },
    {
      id: "consulting-services",
      name: "Professional Services",
      description: "Strategic consulting and implementation services",
      industry: "Consulting",
      avgValue: "$150K",
    },
    {
      id: "manufacturing-solution",
      name: "Manufacturing Optimization",
      description: "Process improvement and automation solutions",
      industry: "Manufacturing",
      avgValue: "$500K",
    },
  ]

  const recentProposals = [
    {
      id: 1,
      company: "TechFlow Solutions",
      contact: "Jennifer Martinez",
      value: "$275K",
      status: "sent",
      created: "2 hours ago",
      template: "Enterprise SaaS Solution",
    },
    {
      id: 2,
      company: "Global Manufacturing Inc",
      contact: "Robert Chen",
      value: "$450K",
      status: "draft",
      created: "1 day ago",
      template: "Manufacturing Optimization",
    },
    {
      id: 3,
      company: "StartupX",
      contact: "Alex Thompson",
      value: "$125K",
      status: "signed",
      created: "3 days ago",
      template: "Professional Services",
    },
  ]

  const handleGenerateProposal = () => {
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false)
    }, 3000)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "sent":
        return "bg-blue-100 text-blue-800"
      case "draft":
        return "bg-gray-100 text-gray-800"
      case "signed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "sent":
        return <Send className="h-4 w-4" />
      case "draft":
        return <Edit3 className="h-4 w-4" />
      case "signed":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">VelocityIQ</h1>
            <span className="text-gray-500">Proposal Generator</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Smartphone className="h-4 w-4 mr-2" />
              Mobile Sign
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <Wand2 className="h-6 w-6 text-rose-600" />
            <h2 className="text-2xl font-bold text-gray-900">AI Proposal Generator</h2>
          </div>
          <p className="text-gray-600">Create winning proposals in minutes with AI-powered content generation</p>
        </div>

        <Tabs defaultValue="generator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="generator">Generate New</TabsTrigger>
            <TabsTrigger value="proposals">My Proposals</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="generator" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Input Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Proposal Details</CardTitle>
                  <CardDescription>Provide key information to generate your proposal</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Enter company name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact">Primary Contact</Label>
                    <Input
                      id="contact"
                      placeholder="Enter contact name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="template">Proposal Template</Label>
                    <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a template" />
                      </SelectTrigger>
                      <SelectContent>
                        {templates.map((template) => (
                          <SelectItem key={template.id} value={template.id}>
                            {template.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="value">Estimated Value</Label>
                    <Input
                      id="value"
                      placeholder="$0"
                      value={proposalValue}
                      onChange={(e) => setProposalValue(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="requirements">Key Requirements</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Describe the client's key requirements and pain points..."
                      rows={4}
                    />
                  </div>
                  <Button
                    onClick={handleGenerateProposal}
                    className="w-full bg-rose-600 hover:bg-rose-700"
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <Wand2 className="h-4 w-4 mr-2 animate-spin" />
                        Generating Proposal...
                      </>
                    ) : (
                      <>
                        <Wand2 className="h-4 w-4 mr-2" />
                        Generate AI Proposal
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Preview/Output */}
              <Card>
                <CardHeader>
                  <CardTitle>AI-Generated Preview</CardTitle>
                  <CardDescription>Real-time proposal preview as you type</CardDescription>
                </CardHeader>
                <CardContent>
                  {isGenerating ? (
                    <div className="flex items-center justify-center h-64">
                      <div className="text-center">
                        <Wand2 className="h-12 w-12 text-rose-600 animate-spin mx-auto mb-4" />
                        <p className="text-gray-600">AI is crafting your proposal...</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold mb-2">Executive Summary</h3>
                        <p className="text-sm text-gray-600">
                          {companyName || "[Company Name]"} is seeking a comprehensive solution to address their
                          operational challenges and drive growth. Our proposed solution leverages cutting-edge
                          technology to deliver measurable results.
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold mb-2">Proposed Solution</h3>
                        <p className="text-sm text-gray-600">
                          We recommend implementing our{" "}
                          {selectedTemplate
                            ? templates.find((t) => t.id === selectedTemplate)?.name
                            : "[Selected Template]"}{" "}
                          to meet your specific requirements.
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold mb-2">Investment</h3>
                        <p className="text-sm text-gray-600">Total investment: {proposalValue || "$[Value]"}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" className="bg-rose-600 hover:bg-rose-700">
                          <Send className="h-4 w-4 mr-2" />
                          Send
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="proposals" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Recent Proposals</h3>
              <Button size="sm" className="bg-rose-600 hover:bg-rose-700">
                <FileText className="h-4 w-4 mr-2" />
                New Proposal
              </Button>
            </div>
            <div className="space-y-4">
              {recentProposals.map((proposal) => (
                <Card key={proposal.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>
                            {proposal.company
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{proposal.company}</h4>
                          <p className="text-sm text-gray-600">{proposal.contact}</p>
                          <p className="text-xs text-gray-500 mt-1">{proposal.template}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className={getStatusColor(proposal.status)}>
                            {getStatusIcon(proposal.status)}
                            <span className="ml-1 capitalize">{proposal.status}</span>
                          </Badge>
                        </div>
                        <p className="font-semibold text-lg">{proposal.value}</p>
                        <p className="text-xs text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {proposal.created}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit3 className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      {proposal.status === "draft" && (
                        <Button size="sm" className="bg-rose-600 hover:bg-rose-700">
                          <Send className="h-4 w-4 mr-2" />
                          Send
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {templates.map((template) => (
                <Card key={template.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {template.name}
                      <Badge variant="outline">{template.industry}</Badge>
                    </CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-600">Avg Value</span>
                      </div>
                      <span className="font-semibold text-green-600">{template.avgValue}</span>
                    </div>
                    <Button className="w-full bg-transparent" variant="outline">
                      Use Template
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
