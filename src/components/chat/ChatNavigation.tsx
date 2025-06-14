
import { Home, BarChart, User, Calendar, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatNavigationProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const ChatNavigation = ({ activeView, setActiveView }: ChatNavigationProps) => {
  const navItems = [
    { id: "community", icon: Home, label: "Community" },
    { id: "dashboard", icon: BarChart, label: "Dashboard" },
    { id: "profile", icon: User, label: "Profile" },
    { id: "calendar", icon: Calendar, label: "Calendar" },
  ];

  const isActive = (viewId: string) => activeView === viewId;

  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-4">
      {/* Logo at the top */}
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
        <span className="text-white font-bold text-sm">L</span>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="icon"
              className={`w-10 h-10 rounded-lg ${
                isActive(item.id) 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
              }`}
              onClick={() => setActiveView(item.id)}
              title={item.label}
            >
              <Icon className="w-5 h-5" />
            </Button>
          );
        })}
      </div>

      {/* Bottom Items - Settings with login functionality */}
      <div className="flex-1"></div>
      <div className="flex flex-col space-y-2">
        <Button
          variant="ghost"
          size="icon"
          className={`w-10 h-10 rounded-lg ${
            isActive("settings") 
              ? 'bg-blue-100 text-blue-600' 
              : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
          }`}
          onClick={() => setActiveView("settings")}
          title="Settings & Login"
        >
          <Settings className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default ChatNavigation;
