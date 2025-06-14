
import { Brain, Plus, Clock, Upload, Search, Settings } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  const navItems = [
    { id: "home", name: "Home", icon: Plus },
    { id: "discover", name: "Discover", icon: Clock },
    { id: "library", name: "Library", icon: Upload },
    { id: "profile", name: "Profile", icon: Search },
    { id: "help", name: "Help", icon: Settings },
  ];

  return (
    <div className="w-20 bg-white border-r border-gray-100 flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
          <Brain className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => setActiveTab(item.id)}
              >
                <div className={`p-3 rounded-full transition-all duration-200 ${
                  activeTab === item.id 
                    ? 'bg-teal-600 text-white' 
                    : 'text-gray-500 hover:bg-teal-100 hover:text-teal-600'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`text-xs mt-2 font-medium transition-colors ${
                  activeTab === item.id 
                    ? 'text-teal-600' 
                    : 'text-gray-500 group-hover:text-teal-600'
                }`}>
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
