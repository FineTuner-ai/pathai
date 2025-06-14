
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
  Menu,
  X
} from "lucide-react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "new", name: "New", icon: <Plus className="w-4 h-4" /> },
    { id: "discover", name: "Discover", icon: <Globe className="w-4 h-4" /> },
    { id: "history", name: "History", icon: <History className="w-4 h-4" /> },
    { id: "account", name: "Account", icon: <User className="w-4 h-4" /> },
    { id: "settings", name: "Settings", icon: <Settings className="w-4 h-4" /> },
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
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              agentics
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-gray-100">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  className="flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 py-3"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your AI Research Assistant
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover universities, connect with professors, find scholarships, and get application support - all powered by AI.
          </p>
        </div>

        {/* Search Interface */}
        <div className="mb-16">
          <div className="relative max-w-2xl mx-auto">
            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 focus-within:shadow-lg focus-within:border-blue-300">
              <div className="flex items-center px-6 py-4">
                <Search className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Ask about universities, professors, scholarships, or application guidance..."
                  className="flex-1 text-lg bg-transparent border-none outline-none placeholder-gray-400 text-gray-900"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="flex items-center space-x-2 ml-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-gray-400 hover:text-gray-600 p-2"
                  >
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-gray-400 hover:text-gray-600 p-2"
                  >
                    <Mic className="w-4 h-4" />
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-xl font-medium"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
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
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
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
                className="bg-white rounded-xl p-4 hover:shadow-sm transition-all duration-200 cursor-pointer border border-gray-100"
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
  );
};

export default Dashboard;
