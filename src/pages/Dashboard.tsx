
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
  Camera,
  Clock,
  ChevronLeft,
  ChevronRight,
  Settings,
  ArrowRight
} from "lucide-react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", name: "Home", icon: <Plus className="w-5 h-5" /> },
    { id: "discover", name: "Discover", icon: <Clock className="w-5 h-5" /> },
    { id: "library", name: "Library", icon: <Upload className="w-5 h-5" /> },
    { id: "profile", name: "Profile", icon: <Search className="w-5 h-5" /> },
    { id: "help", name: "Help", icon: <Settings className="w-5 h-5" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            {/* Welcome Section with Logo Only */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Centered Search Box - Modern and larger */}
              <div className="max-w-4xl mx-auto mb-8">
                <div className="relative bg-white rounded-2xl border border-gray-100 hover:border-teal-200 transition-colors">
                  <div className="flex items-center px-8 py-6">
                    <Search className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Ask anything..."
                      className="flex-1 text-lg bg-transparent border-none outline-none placeholder-gray-400 text-gray-900"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="flex items-center space-x-3 ml-4">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-400 hover:text-teal-600 hover:bg-teal-50 p-2 h-auto rounded-lg"
                      >
                        <Camera className="w-5 h-5" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-400 hover:text-teal-600 hover:bg-teal-50 p-2 h-auto rounded-lg"
                      >
                        <Mic className="w-5 h-5" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-2 h-auto rounded-lg"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suggestion Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {[
                  "🌍 Current Events",
                  "🎓 Research Programs", 
                  "💰 Scholarship Search",
                  "👥 Professor Match",
                  "📝 Application Help"
                ].map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="rounded-full bg-white border-gray-200 text-gray-600 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 px-5 py-2.5 transition-all"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "University Discovery",
                  description: "Find programs that match your research interests",
                  icon: <Globe className="w-6 h-6 text-teal-600" />,
                  bgColor: "bg-teal-50"
                },
                {
                  title: "Professor Matching",
                  description: "Connect with faculty whose research aligns with yours",
                  icon: <Users className="w-6 h-6 text-blue-600" />,
                  bgColor: "bg-blue-50"
                },
                {
                  title: "Scholarship Search",
                  description: "Discover funding opportunities and fellowships",
                  icon: <Award className="w-6 h-6 text-amber-600" />,
                  bgColor: "bg-amber-50"
                },
                {
                  title: "Application Support",
                  description: "Get help with SOPs, emails, and applications",
                  icon: <Upload className="w-6 h-6 text-purple-600" />,
                  bgColor: "bg-purple-50"
                }
              ].map((action, index) => (
                <Card 
                  key={index} 
                  className="cursor-pointer hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-teal-200 bg-white group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 ${action.bgColor} rounded-xl group-hover:scale-105 transition-transform`}>
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
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Clock className="w-5 h-5 text-teal-600" />
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
                    className="p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-gray-50 hover:border-gray-100"
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
          </>
        );
      case "discover":
        return (
          <div className="text-center py-20">
            <Clock className="w-16 h-16 text-teal-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Discover</h2>
            <p className="text-gray-600">Explore new opportunities and resources</p>
          </div>
        );
      case "library":
        return (
          <div className="text-center py-20">
            <Upload className="w-16 h-16 text-teal-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Library</h2>
            <p className="text-gray-600">Access your saved content and resources</p>
          </div>
        );
      case "profile":
        return (
          <div className="text-center py-20">
            <Search className="w-16 h-16 text-teal-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile</h2>
            <p className="text-gray-600">Manage your account and preferences</p>
          </div>
        );
      case "help":
        return (
          <div className="text-center py-20">
            <Settings className="w-16 h-16 text-teal-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Help & Support</h2>
            <p className="text-gray-600">Get assistance and learn how to use agentics</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-white border-r border-gray-100 hidden md:flex flex-col transition-all duration-300`}>
        {/* Logo and Toggle */}
        <div className="p-4 border-b border-gray-50 flex items-center justify-between">
          {!sidebarCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 hover:bg-gray-100"
          >
            {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                className={`w-full ${sidebarCollapsed ? 'justify-center px-3' : 'justify-start'} h-12 ${
                  activeTab === item.id 
                    ? 'bg-teal-600 text-white hover:bg-teal-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                title={sidebarCollapsed ? item.name : undefined}
                onClick={() => setActiveTab(item.id)}
              >
                {item.icon}
                {!sidebarCollapsed && (
                  <span className="ml-3 text-sm font-medium">{item.name}</span>
                )}
              </Button>
            ))}
          </div>
        </nav>

        {/* Settings at bottom */}
        <div className="p-4 border-t border-gray-50">
          <Button
            variant="ghost"
            className={`w-full ${sidebarCollapsed ? 'justify-center px-3' : 'justify-start'} text-gray-600 hover:text-gray-900 hover:bg-gray-100 h-12`}
            title={sidebarCollapsed ? "Settings" : undefined}
          >
            <Settings className="w-5 h-5" />
            {!sidebarCollapsed && (
              <span className="ml-3 text-sm font-medium">Settings</span>
            )}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Main Content Area */}
        <div className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
