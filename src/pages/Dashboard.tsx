
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Plus, 
  MessageCircle, 
  Brain, 
  Globe, 
  Users, 
  Award, 
  Mail, 
  FileText, 
  Upload,
  ExternalLink,
  Star,
  Clock,
  TrendingUp,
  Zap,
  Settings,
  Bell,
  User
} from "lucide-react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeAgent, setActiveAgent] = useState<string | null>(null);

  const recentSearches = [
    "AI in sustainable agriculture research programs",
    "Machine learning faculty at top computer science departments",
    "STEM fellowships for international students",
    "Biomedical engineering PhD applications 2024"
  ];

  const agents = [
    {
      id: "university-discovery",
      name: "University Discovery",
      description: "Find matching universities and programs",
      icon: <Globe className="w-5 h-5" />,
      color: "bg-blue-500",
      status: "ready",
      lastUsed: "2 hours ago"
    },
    {
      id: "professor-matching",
      name: "Professor Matching",
      description: "Match with relevant faculty members",
      icon: <Users className="w-5 h-5" />,
      color: "bg-green-500",
      status: "processing",
      lastUsed: "Active now"
    },
    {
      id: "scholarship-discovery",
      name: "Scholarship Discovery",
      description: "Find funding opportunities",
      icon: <Award className="w-5 h-5" />,
      color: "bg-yellow-500",
      status: "ready",
      lastUsed: "1 day ago"
    },
    {
      id: "email-generator",
      name: "Email Generator",
      description: "Create personalized outreach emails",
      icon: <Mail className="w-5 h-5" />,
      color: "bg-red-500",
      status: "ready",
      lastUsed: "3 hours ago"
    },
    {
      id: "sop-enhancer",
      name: "SOP Enhancer",
      description: "Improve your statement of purpose",
      icon: <FileText className="w-5 h-5" />,
      color: "bg-purple-500",
      status: "ready",
      lastUsed: "5 hours ago"
    }
  ];

  const conversations = [
    {
      id: 1,
      title: "AI Research Programs in Europe",
      preview: "Found 15 universities with strong AI research programs...",
      timestamp: "2 hours ago",
      agents: ["University Discovery", "Professor Matching"]
    },
    {
      id: 2,
      title: "Scholarship Opportunities - Computer Science",
      preview: "Discovered 8 funding opportunities including DAAD...",
      timestamp: "1 day ago",
      agents: ["Scholarship Discovery"]
    },
    {
      id: 3,
      title: "Professor Outreach - Stanford AI Lab",
      preview: "Generated personalized email for Dr. Sarah Chen...",
      timestamp: "2 days ago",
      agents: ["Email Generator"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Agentics AI
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-blue-600">
                <MessageCircle className="w-4 h-4 mr-2" />
                Conversations
              </Button>
              <Button variant="ghost" size="sm">
                <Zap className="w-4 h-4 mr-2" />
                Agents
              </Button>
              <Button variant="ghost" size="sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                Analytics
              </Button>
            </nav>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* New Conversation */}
            <Card>
              <CardHeader className="pb-3">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  New Research Query
                </Button>
              </CardHeader>
            </Card>

            {/* AI Agents */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Brain className="w-5 h-5 mr-2" />
                  AI Agents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {agents.map((agent) => (
                  <div 
                    key={agent.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                      activeAgent === agent.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveAgent(agent.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className={`w-8 h-8 ${agent.color} rounded-lg flex items-center justify-center text-white`}>
                          {agent.icon}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{agent.name}</p>
                          <p className="text-xs text-gray-500">{agent.lastUsed}</p>
                        </div>
                      </div>
                      <Badge 
                        variant={agent.status === 'processing' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {agent.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Conversations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {conversations.map((conv) => (
                  <div key={conv.id} className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer transition-colors">
                    <h4 className="font-medium text-sm mb-1">{conv.title}</h4>
                    <p className="text-xs text-gray-500 mb-2">{conv.preview}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-400">{conv.timestamp}</p>
                      <div className="flex -space-x-1">
                        {conv.agents.slice(0, 2).map((agent, idx) => (
                          <div key={idx} className="w-4 h-4 bg-blue-500 rounded-full border border-white"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Interface */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Ask about universities, professors, scholarships, or application guidance..."
                        className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6">
                      Search
                    </Button>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex items-center space-x-2 mb-4">
                    <Button variant="outline" size="sm">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload CV
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      Draft SOP
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Template
                    </Button>
                  </div>

                  {/* Recent Searches */}
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 mb-2">Recent searches:</p>
                    {recentSearches.map((search, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{search}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dashboard Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="universities">Universities</TabsTrigger>
                <TabsTrigger value="professors">Professors</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Progress Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Universities Found</CardTitle>
                      <Globe className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">24</div>
                      <p className="text-xs text-muted-foreground">+12 from last search</p>
                      <Progress value={75} className="mt-2" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Professor Matches</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">18</div>
                      <p className="text-xs text-muted-foreground">High compatibility</p>
                      <Progress value={60} className="mt-2" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Scholarships</CardTitle>
                      <Award className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">31</div>
                      <p className="text-xs text-muted-foreground">$2.3M total value</p>
                      <Progress value={85} className="mt-2" />
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Actions Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Search className="w-5 h-5 mr-2 text-blue-500" />
                        Start New Search
                      </CardTitle>
                      <CardDescription>
                        Discover universities and programs that match your research interests
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Users className="w-5 h-5 mr-2 text-green-500" />
                        Find Professors
                      </CardTitle>
                      <CardDescription>
                        Connect with faculty members whose research aligns with yours
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Award className="w-5 h-5 mr-2 text-yellow-500" />
                        Explore Funding
                      </CardTitle>
                      <CardDescription>
                        Find scholarships, fellowships, and application fee waivers
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-purple-500" />
                        Draft Applications
                      </CardTitle>
                      <CardDescription>
                        Generate personalized emails and enhance your SOP
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="universities">
                <Card>
                  <CardHeader>
                    <CardTitle>University Matches</CardTitle>
                    <CardDescription>Universities that align with your research interests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <h3 className="font-semibold">Stanford University</h3>
                            <p className="text-sm text-gray-600">Computer Science - AI Research</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge>98% Match</Badge>
                              <Badge variant="secondary">PhD Available</Badge>
                            </div>
                          </div>
                          <Button variant="outline">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="professors">
                <Card>
                  <CardHeader>
                    <CardTitle>Professor Recommendations</CardTitle>
                    <CardDescription>Faculty members whose research aligns with your interests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-start space-x-4 p-4 border rounded-lg">
                          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                            JD
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">Dr. Jane Doe</h3>
                            <p className="text-sm text-gray-600">Professor of Computer Science, Stanford University</p>
                            <p className="text-sm text-gray-500 mt-1">Research: Machine Learning, Natural Language Processing</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge>95% Research Match</Badge>
                              <Badge variant="secondary">
                                <Star className="w-3 h-3 mr-1" />
                                4.8 Rating
                              </Badge>
                            </div>
                          </div>
                          <Button variant="outline">
                            <Mail className="w-4 h-4 mr-2" />
                            Contact
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="applications">
                <Card>
                  <CardHeader>
                    <CardTitle>Application Tracker</CardTitle>
                    <CardDescription>Track your application progress and deadlines</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { university: "Stanford University", status: "In Progress", deadline: "Dec 15, 2024" },
                        { university: "MIT", status: "Draft", deadline: "Dec 20, 2024" },
                        { university: "UC Berkeley", status: "Ready to Submit", deadline: "Jan 5, 2025" }
                      ].map((app, i) => (
                        <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h3 className="font-semibold">{app.university}</h3>
                            <p className="text-sm text-gray-600">Deadline: {app.deadline}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={app.status === 'Ready to Submit' ? 'default' : 'secondary'}>
                              {app.status}
                            </Badge>
                            <Button variant="outline" size="sm">
                              View Application
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
      </div>
    </div>
  );
};

export default Dashboard;
