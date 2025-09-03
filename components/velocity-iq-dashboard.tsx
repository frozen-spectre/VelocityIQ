"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { HelpCircle, Phone, Mail, Play } from "lucide-react"

export function VelocityIQDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Header */}
      <header className="bg-white border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-semibold text-foreground">VelocityIQ</h1>
            <nav className="flex items-center gap-6">
              <span className="text-sm font-medium text-foreground">Seller Home</span>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-muted text-muted-foreground text-sm">A</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-foreground">Alexis</span>
            <Button variant="ghost" size="sm">
              <HelpCircle className="h-4 w-4" />
              Help
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-1">Good morning, Alexis</h2>
              <p className="text-muted-foreground">No prompts needed — Velocity already prioritized your day.</p>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                8 New intents
              </Badge>
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                4 Impact pings
              </Badge>
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                3 Deal nudges
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <div className="text-3xl font-bold text-foreground mb-1">8</div>
                    <div className="text-sm text-muted-foreground">New intents</div>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <div className="text-3xl font-bold text-foreground mb-1">4</div>
                    <div className="text-sm text-muted-foreground">Impact pings</div>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <div className="text-3xl font-bold text-foreground mb-1">3</div>
                    <div className="text-sm text-muted-foreground">Deal nudges</div>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <div className="text-3xl font-bold text-foreground mb-1">$14.6k</div>
                    <div className="text-sm text-muted-foreground">Projected commission</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Auto-prioritized, no prompts needed. Just work the list.
                </p>
              </CardContent>
            </Card>

            {/* Prospects List */}
            <Card>
              <CardContent className="p-0">
                <div className="space-y-0">
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-foreground">Broward Schools</span>
                      <Badge variant="outline" className="bg-pink-100 text-pink-700 border-pink-200">
                        Switcher
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">Coverage: 5G Excellent</span>
                      <span className="text-sm text-muted-foreground">Intent: 92</span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-foreground">City of Coral Springs</span>
                      <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">
                        Funding
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">Coverage: 2 gaps</span>
                      <span className="text-sm text-muted-foreground">Intent: 84</span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-foreground">Miramar Utilities</span>
                      <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-200">
                        Upgrade
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">Coverage: Strong</span>
                      <span className="text-sm text-muted-foreground">Intent: 77</span>
                      <Button size="sm" variant="outline">
                        <Mail className="h-4 w-4 mr-1" />
                        Email
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Meetings & AI Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Meetings & AI Notes</CardTitle>
                  <p className="text-sm text-muted-foreground">Transcripts, highlights, and summaries auto-logged.</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">10:30a | City of Coral Springs</span>
                    <Button variant="outline" size="sm">
                      Open notes
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">2:00p | Broward Schools</span>
                    <Button variant="outline" size="sm">
                      Prep brief
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Proposals & eSign</CardTitle>
                  <p className="text-sm text-muted-foreground">On-the-spot closing, logged automatically.</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Miramar Utilities — Draft</span>
                    <Button variant="outline" size="sm">
                      Open
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Coral Springs — Sent</span>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* PulseDial */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">PulseDial</CardTitle>
                <p className="text-sm text-muted-foreground">Click-to-call with automatic logging & AI summaries.</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Next call: Broward Schools — Procurement</span>
                  <div className="flex gap-2">
                    <Button className="bg-primary hover:bg-primary/90">
                      <Play className="h-4 w-4 mr-1" />
                      Dial
                    </Button>
                    <Button variant="outline" size="sm">
                      View script
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prospecting Pulse */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle className="text-lg">Prospecting Pulse</CardTitle>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                    Live
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Who to call, when, and why—continuously updated.</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="font-medium">12 Switcher intents</span>
                  <span className="font-medium">4 Surges</span>
                  <span className="font-medium">2 Renewals</span>
                </div>
              </CardContent>
            </Card>

            {/* Impact Meter */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Impact Meter</CardTitle>
                <p className="text-sm text-muted-foreground">Shift time from research → selling.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Research</span>
                    <span>Selling</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "72%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    72% high-impact today. Nudge: make 2 calls to hit 80%.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Next Best Step */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Next Best Step</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Call Broward Schools (switcher intent + grant)</span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Start
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Send proposal to Miramar Utilities</span>
                  <Button size="sm" variant="outline">
                    Open proposal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 VelocityIQ™ — A ConnectX brand. | Magenta visuals powered by the Velocity palette.
        </footer>
      </div>
    </div>
  )
}
