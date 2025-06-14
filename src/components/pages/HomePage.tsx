import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Brain, 
  Globe, 
  Users, 
  Award, 
  Upload,
  Mic,
  Camera,
  Clock,
  ArrowRight,
  Loader2,
  AlertCircle
} from "lucide-react";
import { useChat } from "../../hooks/chat";
import ChatInterface from "./ChatInterface";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showChat, setShowChat] = useState(false);
  const { messages, isLoading, error, sendMessage, clearChat } = useChat();

  const handleSearch = async (query?: string) => {
    const searchTerm = query || searchQuery;
    if (!searchTerm.trim()) return;

    setShowChat(true);
    await sendMessage(searchTerm);
    setSearchQuery("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    const cleanSuggestion = suggestion.replace(/^[🌍🎓💰👥📝]\s*/, '');
    handleSearch(cleanSuggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  if (showChat) {
    return (
      <ChatInterface
        messages={messages}
        isLoading={isLoading}
        error={error}
        onSendMessage={sendMessage}
        onBack={() => {
          setShowChat(false);
          clearChat();
        }}
      />
    );
  }

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
                placeholder="Ask anything about universities, scholarships, or research..."
                className="flex-1 text-lg bg-transparent border-none outline-none placeholder-gray-400 text-gray-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
              />
              <div className="flex items-center space-x-3 ml-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-teal-600 hover:bg-teal-50 p-2 h-auto rounded-lg"
                  disabled={isLoading}
                >
                  <Camera className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-teal-600 hover:bg-teal-50 p-2 h-auto rounded-lg"
                  disabled={isLoading}
                >
                  <Mic className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-2 h-auto rounded-full"
                  onClick={() => handleSearch()}
                  disabled={isLoading || !searchQuery.trim()}
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
          
          {/* Error Display */}
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2 text-red-700">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          )}
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
              onClick={() => handleSuggestionClick(suggestion)}
              disabled={isLoading}
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
            bgColor: "bg-teal-50",
            query: "Help me find universities with programs that match my research interests"
          },
          {
            title: "Professor Matching",
            description: "Connect with faculty whose research aligns with yours",
            icon: <Users className="w-6 h-6 text-blue-600" />,
            bgColor: "bg-blue-50",
            query: "Help me find professors whose research aligns with my interests"
          },
          {
            title: "Scholarship Search",
            description: "Discover funding opportunities and fellowships",
            icon: <Award className="w-6 h-6 text-amber-600" />,
            bgColor: "bg-amber-50",
            query: "Help me find scholarships and funding opportunities for my studies"
          },
          {
            title: "Application Support",
            description: "Get help with SOPs, emails, and applications",
            icon: <Upload className="w-6 h-6 text-purple-600" />,
            bgColor: "bg-purple-50",
            query: "Help me with my application materials and SOPs"
          }
        ].map((action, index) => (
          <Card 
            key={index} 
            className="cursor-pointer hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-teal-200 bg-white group"
            onClick={() => handleSearch(action.query)}
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
};

export default HomePage;