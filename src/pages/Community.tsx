
import { useState } from "react";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatMain from "@/components/chat/ChatMain";
import ChatNavigation from "@/components/chat/ChatNavigation";
import CalendarView from "@/components/chat/CalendarView";
import NotificationsView from "@/components/chat/NotificationsView";
import SettingsView from "@/components/chat/SettingsView";
import DashboardView from "@/components/chat/DashboardView";
import ProfileView from "@/components/chat/ProfileView";

const Community = () => {
  const [selectedChat, setSelectedChat] = useState("project-clover");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState("community"); // community, calendar, notifications, settings, dashboard, profile
  const [searchQuery, setSearchQuery] = useState("");

  const renderActiveView = () => {
    switch (activeView) {
      case "calendar":
        return <CalendarView />;
      case "notifications":
        return <NotificationsView />;
      case "settings":
        return <SettingsView />;
      case "dashboard":
        return <DashboardView />;
      case "profile":
        return <ProfileView />;
      default:
        return (
          <div className="flex flex-1">
            {/* Sidebar - hidden on mobile when closed */}
            <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block transition-all duration-300`}>
              <ChatSidebar 
                selectedChat={selectedChat} 
                setSelectedChat={setSelectedChat}
                onCloseSidebar={() => setIsSidebarOpen(false)}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
            
            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
              <ChatMain 
                selectedChat={selectedChat}
                onOpenSidebar={() => setIsSidebarOpen(true)}
                isSidebarOpen={isSidebarOpen}
                searchQuery={searchQuery}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Navigation */}
      <ChatNavigation activeView={activeView} setActiveView={setActiveView} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex">
        {renderActiveView()}
      </div>
    </div>
  );
};

export default Community;
