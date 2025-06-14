
import { Home, BarChart, User, Calendar, Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const ChatNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "home", icon: Home, path: "/" },
    { id: "dashboard", icon: BarChart, path: "/dashboard" },
    { id: "profile", icon: User, path: "/profile" },
    { id: "calendar", icon: Calendar, path: "/calendar" },
    { id: "notifications", icon: Bell, path: "/notifications" },
    { id: "settings", icon: Settings, path: "/settings" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-4">
      {/* Logo */}
      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
        <span className="text-white font-bold text-lg">S</span>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col space-y-2">
        {navItems.slice(0, -2).map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="icon"
              className={`w-10 h-10 rounded-lg ${
                isActive(item.path) 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
              }`}
              onClick={() => navigate(item.path)}
            >
              <Icon className="w-5 h-5" />
            </Button>
          );
        })}
      </div>

      {/* Bottom Items */}
      <div className="flex-1"></div>
      <div className="flex flex-col space-y-2">
        {navItems.slice(-2).map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="icon"
              className={`w-10 h-10 rounded-lg ${
                isActive(item.path) 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
              }`}
              onClick={() => navigate(item.path)}
            >
              <Icon className="w-5 h-5" />
            </Button>
          );
        })}
      </div>

      {/* User Avatar */}
      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
        <span className="text-white font-medium text-sm">A</span>
      </div>
    </div>
  );
};

export default ChatNavigation;
