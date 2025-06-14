
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Menu, Send, Plus, Search, Settings, Smile, Paperclip, Mic, Image as ImageIcon } from "lucide-react";

interface ChatMainProps {
  selectedChat: string;
  onOpenSidebar: () => void;
  isSidebarOpen: boolean;
}

const ChatMain = ({ selectedChat, onOpenSidebar, isSidebarOpen }: ChatMainProps) => {
  const [message, setMessage] = useState("");

  const messages = [
    {
      id: 1,
      user: "Vermillion Gray",
      avatar: "/placeholder.svg",
      time: "02:22 AM",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Web Design Project", "Figma App Prototype"],
      reactions: { heart: 22, thumbsUp: 241, smile: 55 }
    },
    {
      id: 2,
      user: "Oarack Babama",
      avatar: "/placeholder.svg", 
      time: "02:22 AM",
      content: "Lorem ipsum dolor sit amet,",
      isAdmin: true
    },
    {
      id: 3,
      user: "Smoothie D. Joe",
      avatar: "/placeholder.svg",
      time: "02:22 AM",
      content: "",
      image: "/placeholder.svg",
      timestamp: "Friday"
    },
    {
      id: 4,
      user: "Mai Sakurajima",
      avatar: "/placeholder.svg",
      time: "02:22 AM", 
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      links: ["Project Link", "Web Design Image"]
    },
    {
      id: 5,
      user: "Saylor Twift",
      avatar: "/placeholder.svg",
      time: "02:22 AM",
      content: "Lorem ipsum dolor sit amet,",
      reactions: { heart: 8 }
    },
    {
      id: 6,
      user: "Gerard White",
      avatar: "/placeholder.svg", 
      time: "02:22 AM",
      content: "Etiam tempor orci eu lobortis elementum. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Facilisis magna etiam tempor orci eu lobortis",
      reactions: { thumbsUp: 22, smile: 8 }
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center space-x-3">
          {!isSidebarOpen && (
            <Button variant="ghost" size="icon" onClick={onOpenSidebar} className="lg:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          )}
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <div className="hidden sm:block">
            <h2 className="font-semibold text-gray-900">Project Clover</h2>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Active</span>
              </div>
              <span>187 People</span>
              <span>887 Chats Total</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full sm:hidden"></div>
            <span className="text-sm text-green-600 sm:hidden">Active</span>
          </div>
          <Button variant="ghost" size="icon">
            <Search className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="w-4 h-4" />
          </Button>
          <Button size="icon" className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-6 max-w-4xl mx-auto">
          {messages.map((msg) => (
            <div key={msg.id} className="flex space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={msg.avatar} />
                <AvatarFallback>{msg.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium text-gray-900">{msg.user}</span>
                  {msg.isAdmin && (
                    <Badge variant="secondary" className="text-xs">Admin</Badge>
                  )}
                  <span className="text-xs text-gray-500">{msg.time}</span>
                </div>
                
                {msg.content && (
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">{msg.content}</p>
                )}
                
                {msg.tags && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {msg.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        📎 {tag}
                      </Badge>
                    ))}
                  </div>
                )}
                
                {msg.links && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {msg.links.map((link, index) => (
                      <Badge key={index} variant="outline" className="text-xs cursor-pointer hover:bg-gray-100">
                        🔗 {link}
                      </Badge>
                    ))}
                  </div>
                )}
                
                {msg.image && (
                  <div className="mb-2">
                    <div className="w-64 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16 bg-black rounded"></div>
                    </div>
                    {msg.timestamp && (
                      <p className="text-center text-xs text-gray-500 mt-2">{msg.timestamp}</p>
                    )}
                  </div>
                )}
                
                {msg.reactions && (
                  <div className="flex items-center space-x-3 mt-2">
                    {msg.reactions.heart && (
                      <div className="flex items-center space-x-1 text-xs text-gray-600">
                        <span>❤️</span>
                        <span>{msg.reactions.heart}</span>
                      </div>
                    )}
                    {msg.reactions.thumbsUp && (
                      <div className="flex items-center space-x-1 text-xs text-gray-600">
                        <span>👍</span>
                        <span>{msg.reactions.thumbsUp}</span>
                      </div>
                    )}
                    {msg.reactions.smile && (
                      <div className="flex items-center space-x-1 text-xs text-gray-600">
                        <span>😊</span>
                        <span>{msg.reactions.smile}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Today separator */}
          <div className="flex items-center justify-center my-6">
            <div className="bg-gray-100 px-3 py-1 rounded-full">
              <span className="text-xs text-gray-600">Today</span>
            </div>
          </div>
        </div>
      </ScrollArea>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center space-x-2 max-w-4xl mx-auto">
          <Button variant="ghost" size="icon">
            <Plus className="w-4 h-4" />
          </Button>
          
          <div className="flex-1 relative">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your response..."
              className="pr-32"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
              <Button variant="ghost" size="icon" className="w-6 h-6">
                <Smile className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-6 h-6">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-6 h-6">
                <ImageIcon className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-6 h-6">
                <Mic className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <Button onClick={handleSendMessage} size="icon" className="bg-blue-600 hover:bg-blue-700">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;
