
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Plus, 
  Brain, 
  Globe, 
  Users, 
  Award, 
  Upload,
  Mic,
  Paperclip,
  History,
  User,
  Settings,
  Clock,
  Menu,
  X
} from "lucide-react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const navItems = [
    { id: "new", name: "New", icon: <Plus className="w-5 h-5" /> },
    { id: "discover", name: "Discover", icon: <Globe className="w-5 h-5" /> },
    { id: "history", name: "History", icon: <History className="w-5 h-5" /> },
    { id: "profile", name: "Profile", icon: <User className="w-5 h-5" /> },
    { id: "settings", name: "Settings", icon: <Settings className="w-5 h-5" /> },
  ];

  const quickActions = [
    {
      title: "University Discovery",
      description: "Find programs that match your research interests",
      icon: <Globe className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Professor Matching",
      description: "Connect with faculty whose research aligns with yours",
      icon: <Users className="w-5 h-5 text-green-600" />
    },
    {
      title: "Scholarship Search",
      description: "Discover funding opportunities and fellowships",
      icon: <Award className="w-5 h-5 text-yellow-600" />
    },
    {
      title: "Application Support",
      description: "Get help with SOPs, emails, and applications",
      icon: <Upload className="w-5 h-5 text-purple-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-white border-r border-gray-200 hidden md:flex flex-col transition-all duration-300`}>
        {/* Logo and Toggle */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          {!sidebarCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                agentics
              </span>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2"
          >
            {sidebarCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={`w-full ${sidebarCollapsed ? 'justify-center px-3' : 'justify-start'} text-gray-600 hover:text-gray-900 hover:bg-gray-50 h-10`}
                title={sidebarCollapsed ? item.name : undefined}
              >
                {item.icon}
                {!sidebarCollapsed && (
                  <span className="ml-3 text-sm font-medium">{item.name}</span>
                )}
              </Button>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Main Content Area */}
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            {/* Welcome Section with Centered Logo */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">
                agentics
              </h1>
              
              {/* Centered Search Box */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center px-4 py-4">
                    <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Ask anything..."
                      className="flex-1 text-base bg-transparent border-none outline-none placeholder-gray-400 text-gray-900"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="flex items-center space-x-2 ml-3">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-400 hover:text-gray-600 p-2 h-auto"
                      >
                        <Paperclip className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-400 hover:text-gray-600 p-2 h-auto"
                      >
                        <Mic className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suggestion Pills */}
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {[
                  "Current Events",
                  "Research Programs", 
                  "Scholarship Search",
                  "Professor Match",
                  "Application Help"
                ].map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="rounded-full bg-white border-gray-200 text-gray-600 hover:bg-gray-50 px-4 py-2"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {quickActions.map((action, index) => (
                <Card 
                  key={index} 
                  className="cursor-pointer hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-gray-200 bg-white"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gray-50 rounded-xl">
                        {action.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {action.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Clock className="w-5 h-5 text-gray-400" />
                <h2 className="font-semibold text-gray-900">Recent Activity</h2>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "AI Research Programs in Europe",
                    description: "Found 15 universities with strong AI research programs",
                    time: "2 hours ago"
                  },
                  {
                    title: "Scholarship Opportunities - Computer Science",
                    description: "Discovered 8 funding opportunities including DAAD",
                    time: "1 day ago"
                  },
                  {
                    title: "Professor Outreach - Stanford AI Lab",
                    description: "Generated personalized email for Dr. Sarah Chen",
                    time: "2 days ago"
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-gray-100"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <span className="text-xs text-gray-500">{item.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
