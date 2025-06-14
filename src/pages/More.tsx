
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Settings, 
  HelpCircle, 
  FileText, 
  Shield, 
  Bell,
  Download,
  Share,
  LogOut,
  MessageSquare,
  Star,
  Users,
  Zap
} from "lucide-react";

const More = () => {
  const menuItems = [
    {
      title: "Account Settings",
      description: "Manage your account preferences and security",
      icon: <Settings className="w-5 h-5 text-gray-600" />,
      action: () => console.log("Settings")
    },
    {
      title: "Notifications",
      description: "Control your notification preferences",
      icon: <Bell className="w-5 h-5 text-gray-600" />,
      action: () => console.log("Notifications")
    },
    {
      title: "Privacy & Security",
      description: "Manage your privacy settings and data",
      icon: <Shield className="w-5 h-5 text-gray-600" />,
      action: () => console.log("Privacy")
    },
    {
      title: "Export Data",
      description: "Download your data and documents",
      icon: <Download className="w-5 h-5 text-gray-600" />,
      action: () => console.log("Export")
    }
  ];

  const supportItems = [
    {
      title: "Help Center",
      description: "Find answers to common questions",
      icon: <HelpCircle className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Contact Support",
      description: "Get help from our support team",
      icon: <MessageSquare className="w-5 h-5 text-green-600" />
    },
    {
      title: "Documentation",
      description: "Learn how to use all features",
      icon: <FileText className="w-5 h-5 text-purple-600" />
    },
    {
      title: "Community",
      description: "Connect with other users",
      icon: <Users className="w-5 h-5 text-orange-600" />
    }
  ];

  const aboutItems = [
    {
      title: "Rate App",
      description: "Help us improve by rating the app",
      icon: <Star className="w-5 h-5 text-yellow-600" />
    },
    {
      title: "Share App",
      description: "Tell your friends about agentics",
      icon: <Share className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "What's New",
      description: "Check out the latest features",
      icon: <Zap className="w-5 h-5 text-pink-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            More
          </h1>
          <p className="text-gray-600">
            Settings, support, and additional features
          </p>
        </div>

        {/* Settings Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Settings
          </h2>
          <div className="grid gap-4">
            {menuItems.map((item, index) => (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-gray-200 bg-white"
                onClick={item.action}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Support
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {supportItems.map((item, index) => (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-gray-200 bg-white"
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            About
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {aboutItems.map((item, index) => (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-gray-200 bg-white"
              >
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <div className="text-center">
          <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default More;
