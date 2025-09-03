import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart3, TrendingUp, Target, Phone, Calendar } from "lucide-react"

export function ManagerDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">VelocityIQ</h1>
            <span className="text-gray-500">Manager Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              This Week
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>MG</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Good morning, Manager</h2>
          <p className="text-gray-600">Here's how your team is performing this week</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Team Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$847.2k</div>
              <p className="text-xs text-muted-foreground">+12.5% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Deals</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">+8 new this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Team Activity</CardTitle>
              <Phone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342</div>
              <p className="text-xs text-muted-foreground">Calls made today</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23.4%</div>
              <p className="text-xs text-muted-foreground">+2.1% improvement</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Team Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Team Performance</CardTitle>
              <CardDescription>Individual rep metrics and goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Alexis Chen", quota: 85, calls: 47, deals: 12, revenue: "$142k" },
                  { name: "Marcus Rodriguez", quota: 92, calls: 52, deals: 15, revenue: "$178k" },
                  { name: "Sarah Kim", quota: 78, calls: 41, deals: 9, revenue: "$124k" },
                  { name: "David Thompson", quota: 88, calls: 49, deals: 13, revenue: "$156k" },
                ].map((rep, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {rep.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{rep.name}</p>
                        <p className="text-sm text-gray-500">
                          {rep.calls} calls • {rep.deals} deals
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{rep.revenue}</p>
                      <div className="flex items-center space-x-2">
                        <Progress value={rep.quota} className="w-16 h-2" />
                        <span className="text-xs text-gray-500">{rep.quota}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card>
            <CardHeader>
              <CardTitle>AI Insights & Recommendations</CardTitle>
              <CardDescription>Data-driven coaching opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Badge variant="secondary" className="bg-rose-100 text-rose-800">
                      High Impact
                    </Badge>
                  </div>
                  <p className="text-sm mt-2">
                    <strong>Sarah Kim</strong> has 3 high-intent prospects that haven't been contacted in 5+ days.
                    Recommend immediate outreach.
                  </p>
                  <Button size="sm" className="mt-2 bg-rose-600 hover:bg-rose-700">
                    Send Coaching Alert
                  </Button>
                </div>

                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Opportunity
                    </Badge>
                  </div>
                  <p className="text-sm mt-2">
                    <strong>Marcus Rodriguez</strong> has the highest conversion rate this week. Consider having him
                    mentor other reps.
                  </p>
                  <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                    Schedule Peer Session
                  </Button>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      Trend Alert
                    </Badge>
                  </div>
                  <p className="text-sm mt-2">
                    Team call volume is down 15% vs. last week. Consider reviewing daily activity goals.
                  </p>
                  <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                    Review Goals
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
