
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  User,
  Home,
  ChevronRight,
  Mic,
  Paperclip
} from "lucide-react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const sidebarItems = [
    { id: "home", name: "Home", icon: <Home className="w-5 h-5" />, active: true },
    { id: "discover", name: "Discover", icon: <Globe className="w-5 h-5" />, active: false },
    { id: "spaces", name: "Spaces", icon: <MessageCircle className="w-5 h-5" />, active: false },
    { id: "account", name: "Account", icon: <User className="w-5 h-5" />, active: false },
  ];

  const quickTopics = [
    "University Discovery",
    "Professor Matching", 
    "Scholarship Search",
    "Application Guidance",
    "SOP Enhancement"
  ];

  const recentConversations = [
    {
      id: 1,
      title: "AI Research Programs in Europe",
      preview: "Found 15 universities with strong AI research programs...",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      title: "Scholarship Opportunities - Computer Science",
      preview: "Discovered 8 funding opportunities including DAAD...",
      timestamp: "1 day ago"
    },
    {
      id: 3,
      title: "Professor Outreach - Stanford AI Lab",
      preview: "Generated personalized email for Dr. Sarah Chen...",
      timestamp: "2 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              agentics
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                item.active 
                  ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        {/* New Research Button */}
        <div className="p-4 border-t border-gray-100">
          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            New Research
          </Button>
        </div>

        {/* Recent Conversations */}
        <div className="px-4 pb-4">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Recent</h3>
          <div className="space-y-2">
            {recentConversations.slice(0, 3).map((conv) => (
              <div key={conv.id} className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer border border-transparent hover:border-gray-200 transition-all">
                <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-1">{conv.title}</h4>
                <p className="text-xs text-gray-500">{conv.timestamp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Account</p>
            </div>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">agentics</h1>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Search Interface */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
          <div className="w-full max-w-3xl">
            {/* Main Search */}
            <div className="mb-8">
              <div className="relative">
                <div className="relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center px-4 py-4">
                    <Search className="w-5 h-5 text-gray-400 mr-3" />
                    <input
                      type="text"
                      placeholder="Ask about universities, professors, scholarships, or application guidance..."
                      className="flex-1 text-lg bg-transparent border-none outline-none placeholder-gray-400"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="flex items-center space-x-2 ml-4">
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                        <Paperclip className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                        <Mic className="w-4 h-4" />
                      </Button>
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6">
                        Search
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Topics */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {quickTopics.map((topic, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center space-x-2"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{topic}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center bg-white border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Universities Found</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-1">24</p>
                  <p className="text-sm text-gray-500">+12 from last search</p>
                </CardContent>
              </Card>

              <Card className="text-center bg-white border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Professor Matches</h3>
                  <p className="text-3xl font-bold text-green-600 mb-1">18</p>
                  <p className="text-sm text-gray-500">High compatibility</p>
                </CardContent>
              </Card>

              <Card className="text-center bg-white border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Scholarships</h3>
                  <p className="text-3xl font-bold text-yellow-600 mb-1">31</p>
                  <p className="text-sm text-gray-500">$2.3M total value</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="cursor-pointer hover:shadow-md transition-shadow bg-white border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Start University Search</h3>
                      <p className="text-gray-600 text-sm">Discover programs that match your research interests</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow bg-white border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Professors</h3>
                      <p className="text-gray-600 text-sm">Connect with faculty whose research aligns with yours</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow bg-white border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Explore Funding</h3>
                      <p className="text-gray-600 text-sm">Find scholarships and fellowship opportunities</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow bg-white border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Draft Applications</h3>
                      <p className="text-gray-600 text-sm">Generate emails and enhance your SOP</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
