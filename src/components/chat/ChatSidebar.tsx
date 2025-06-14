
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Plus, Menu, X, Calendar } from "lucide-react";

interface ChatSidebarProps {
  selectedChat: string;
  setSelectedChat: (chatId: string) => void;
  onCloseSidebar: () => void;
}

const ChatSidebar = ({ selectedChat, setSelectedChat, onCloseSidebar }: ChatSidebarProps) => {
  const feeds = [
    {
      id: "welcome",
      name: "Welcome",
      description: "Fintech Crypto b2b SaaS",
      time: "12:25",
      color: "bg-green-500"
    },
    {
      id: "project-clover",
      name: "Project Clover",
      description: "Healthcare AI ML SaaS",
      time: "12:25",
      color: "bg-blue-500"
    },
    {
      id: "project-satan",
      name: "Project Satan",
      description: "SaaS Web Scraping",
      time: "12:25",
      color: "bg-pink-500"
    },
    {
      id: "project-x2",
      name: "Project X2",
      description: "AI ML Chatbot Scrape",
      time: "12:25",
      color: "bg-indigo-500"
    }
  ];

  const spaces = [
    { id: "general", name: "General", icon: "💬" },
    { id: "announcements", name: "Announcements", icon: "📢" },
    { id: "ramen-club", name: "Ramen Club", icon: "🍜" },
    { id: "project-flow", name: "Project Flow", icon: "🔧" },
    { id: "marketing-updates", name: "Marketing Updates", icon: "📊" },
    { id: "product-vision", name: "Product Vision", icon: "👁️" },
    { id: "construction-team", name: "Construction Team", icon: "🏗️" }
  ];

  const schedules = [
    {
      id: "presentation",
      title: "Upcoming Presentation",
      date: "2028/08/12 at 11:21 AM"
    },
    {
      id: "marketing",
      title: "Marketing Updates",
      date: "2028/08/12 at 11:21 AM"
    },
    {
      id: "graduation",
      title: "Graduation",
      date: "2028/08/12 at 11:21 AM"
    }
  ];

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <h1 className="font-semibold text-gray-900">Gradapp</h1>
        </div>
        <Button variant="ghost" size="icon" onClick={onCloseSidebar} className="lg:hidden">
          <X className="w-4 h-4" />
        </Button>
      </div>

      <ScrollArea className="flex-1">
        {/* Stats */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>187 People</span>
            </div>
            <span>887 Chats Total</span>
          </div>
        </div>

        {/* Feeds */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-gray-900">Feeds</h3>
            <div className="flex space-x-1">
              <Button variant="ghost" size="icon" className="w-6 h-6">
                <Plus className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-6 h-6">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            {feeds.map((feed) => (
              <div
                key={feed.id}
                className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-gray-50 ${
                  selectedChat === feed.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                }`}
                onClick={() => setSelectedChat(feed.id)}
              >
                <div className={`w-3 h-3 rounded ${feed.color}`}></div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-gray-900 truncate">{feed.name}</p>
                  <p className="text-xs text-gray-500 truncate">{feed.description}</p>
                </div>
                <span className="text-xs text-gray-400">{feed.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Spaces */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <h3 className="font-medium text-gray-900">Spaces</h3>
              <Badge variant="secondary" className="text-xs">25</Badge>
            </div>
            <div className="flex space-x-1">
              <Button variant="ghost" size="icon" className="w-6 h-6">
                <Plus className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-6 h-6">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-1">
            {spaces.map((space) => (
              <div
                key={space.id}
                className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-gray-50"
              >
                <span className="text-sm">{space.icon}</span>
                <span className="text-sm text-gray-700">{space.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Schedules */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <h3 className="font-medium text-gray-900">Schedules</h3>
              <Badge variant="secondary" className="text-xs">25</Badge>
            </div>
            <div className="flex space-x-1">
              <Button variant="ghost" size="icon" className="w-6 h-6">
                <Plus className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-6 h-6">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            {schedules.map((schedule) => (
              <div key={schedule.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                <Calendar className="w-4 h-4 text-blue-500" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-gray-900 truncate">{schedule.title}</p>
                  <p className="text-xs text-gray-500">{schedule.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatSidebar;
