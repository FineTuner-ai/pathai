
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Send, Plus, Search, Settings, Smile, Paperclip, Mic, Image as ImageIcon, Bell, User } from "lucide-react";

interface Message {
  id: number;
  user: string;
  avatar: string;
  time: string;
  content: string;
  tags?: string[];
  reactions?: { 
    heart?: number; 
    thumbsUp?: number; 
    smile?: number; 
  };
  isAdmin?: boolean;
  image?: string;
  timestamp?: string;
  links?: string[];
}

interface ChatMainProps {
  selectedChat: string;
  onOpenSidebar: () => void;
  isSidebarOpen: boolean;
  searchQuery: string;
}

const ChatMain = ({ selectedChat, onOpenSidebar, isSidebarOpen, searchQuery }: ChatMainProps) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
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
  ]);

  const [onlineUsers] = useState([
    { id: 1, name: "Vermillion Gray", avatar: "/placeholder.svg", status: "online" },
    { id: 2, name: "Oarack Babama", avatar: "/placeholder.svg", status: "online" },
    { id: 3, name: "Smoothie D. Joe", avatar: "/placeholder.svg", status: "away" },
    { id: 4, name: "Mai Sakurajima", avatar: "/placeholder.svg", status: "online" },
    { id: 5, name: "Saylor Twift", avatar: "/placeholder.svg", status: "busy" },
    { id: 6, name: "Gerard White", avatar: "/placeholder.svg", status: "online" }
  ]);

  const [notifications] = useState([
    { id: 1, title: "New message from Vermillion Gray", time: "2 min ago", unread: true },
    { id: 2, title: "Meeting in 15 minutes", time: "15 min ago", unread: true },
    { id: 3, title: "Project update completed", time: "1 hour ago", unread: false }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        user: "You",
        avatar: "/placeholder.svg",
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        content: message,
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleUserClick = (user: typeof onlineUsers[0]) => {
    // Handle private chat
    console.log("Starting private chat with:", user.name);
  };

  const filteredMessages = messages.filter(msg => 
    msg.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    msg.user.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getChatTitle = () => {
    switch (selectedChat) {
      case "project-clover":
        return "Project Clover";
      case "welcome":
        return "Welcome";
      case "project-satan":
        return "Project Satan";
      case "project-x2":
        return "Project X2";
      case "general":
        return "General";
      case "announcements":
        return "Announcements";
      default:
        return selectedChat.charAt(0).toUpperCase() + selectedChat.slice(1);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "away": return "bg-yellow-500";
      case "busy": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white w-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center space-x-3">
          {!isSidebarOpen && (
            <Button variant="ghost" size="icon" onClick={onOpenSidebar} className="lg:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          )}
          <div className="hidden sm:block">
            <h2 className="font-semibold text-gray-900">{getChatTitle()}</h2>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Active</span>
              </div>
              <span className="hidden md:block">187 People</span>
              <span className="hidden lg:block">887 Chats Total</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {/* Notifications Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-4 h-4" />
                {notifications.filter(n => n.unread).length > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    {notifications.filter(n => n.unread).length}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="p-2 border-b">
                <h3 className="font-semibold">Notifications</h3>
              </div>
              {notifications.map((notification) => (
                <DropdownMenuItem key={notification.id} className="p-3 cursor-pointer">
                  <div className="flex items-start space-x-3">
                    {notification.unread && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm font-medium">{notification.title}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">A</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => navigate('/profile')}>
                <User className="w-4 h-4 mr-2" />
                View Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            size="icon" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => navigate('/dashboard')}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Messages Area */}
        <div className="flex-1 flex flex-col">
          <ScrollArea className="flex-1 p-2 sm:p-4">
            <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
              {filteredMessages.map((msg) => (
                <div key={msg.id} className="flex space-x-2 sm:space-x-3">
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                    <AvatarImage src={msg.avatar} />
                    <AvatarFallback>{msg.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-gray-900 text-sm sm:text-base truncate">{msg.user}</span>
                      {msg.isAdmin && (
                        <Badge variant="secondary" className="text-xs">Admin</Badge>
                      )}
                      <span className="text-xs text-gray-500">{msg.time}</span>
                    </div>
                    
                    {msg.content && (
                      <p className="text-gray-700 text-sm leading-relaxed mb-2">{msg.content}</p>
                    )}
                    
                    {msg.tags && (
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                        {msg.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            📎 <span className="hidden sm:inline">{tag}</span>
                            <span className="sm:hidden">{tag.split(' ')[0]}</span>
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    {msg.links && (
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                        {msg.links.map((link, index) => (
                          <Badge key={index} variant="outline" className="text-xs cursor-pointer hover:bg-gray-100">
                            🔗 <span className="hidden sm:inline">{link}</span>
                            <span className="sm:hidden">{link.split(' ')[0]}</span>
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    {msg.image && (
                      <div className="mb-2">
                        <div className="w-48 sm:w-64 h-36 sm:h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="w-12 sm:w-16 h-12 sm:h-16 bg-black rounded"></div>
                        </div>
                        {msg.timestamp && (
                          <p className="text-center text-xs text-gray-500 mt-2">{msg.timestamp}</p>
                        )}
                      </div>
                    )}
                    
                    {msg.reactions && (
                      <div className="flex items-center space-x-2 sm:space-x-3 mt-2">
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
              
              <div className="flex items-center justify-center my-6">
                <div className="bg-gray-100 px-3 py-1 rounded-full">
                  <span className="text-xs text-gray-600">Today</span>
                </div>
              </div>
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="p-2 sm:p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center space-x-2 max-w-4xl mx-auto">
              <Button variant="ghost" size="icon" className="flex-shrink-0">
                <Plus className="w-4 h-4" />
              </Button>
              
              <div className="flex-1 relative">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your response..."
                  className="pr-20 sm:pr-32"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                  <Button variant="ghost" size="icon" className="w-6 h-6 hidden sm:flex">
                    <Smile className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-6 h-6">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-6 h-6 hidden sm:flex">
                    <ImageIcon className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-6 h-6 hidden sm:flex">
                    <Mic className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <Button onClick={handleSendMessage} size="icon" className="bg-blue-600 hover:bg-blue-700 flex-shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Online Users Sidebar */}
        <div className="w-64 border-l border-gray-200 bg-gray-50 p-4 hidden lg:block">
          <h3 className="font-semibold text-gray-900 mb-4">Online Users ({onlineUsers.length})</h3>
          <div className="space-y-2">
            {onlineUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100"
                onClick={() => handleUserClick(user)}
              >
                <div className="relative">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${getStatusColor(user.status)} rounded-full border-2 border-white`}></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{user.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;
