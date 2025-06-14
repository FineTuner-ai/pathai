
import { useState } from "react";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatMain from "@/components/chat/ChatMain";
import ChatNavigation from "@/components/chat/ChatNavigation";

const Community = () => {
  const [selectedChat, setSelectedChat] = useState("project-clover");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Navigation */}
      <ChatNavigation />
      
      {/* Sidebar - hidden on mobile when closed */}
      <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block transition-all duration-300`}>
        <ChatSidebar 
          selectedChat={selectedChat} 
          setSelectedChat={setSelectedChat}
          onCloseSidebar={() => setIsSidebarOpen(false)}
        />
      </div>
      
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <ChatMain 
          selectedChat={selectedChat}
          onOpenSidebar={() => setIsSidebarOpen(true)}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
    </div>
  );
};

export default Community;
