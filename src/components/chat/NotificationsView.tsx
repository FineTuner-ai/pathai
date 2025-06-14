
import { Bell, Check, X, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NotificationsView = () => {
  const notifications = [
    {
      id: 1,
      title: "New message in Project Clover",
      description: "Vermillion Gray sent a message",
      time: "2 minutes ago",
      unread: true,
      type: "message"
    },
    {
      id: 2,
      title: "Meeting reminder",
      description: "Team standup in 15 minutes",
      time: "15 minutes ago",
      unread: true,
      type: "reminder"
    },
    {
      id: 3,
      title: "Project update",
      description: "Project Satan milestone completed",
      time: "1 hour ago",
      unread: false,
      type: "update"
    },
    {
      id: 4,
      title: "New space created",
      description: "Admin created 'Design Team' space",
      time: "2 hours ago",
      unread: false,
      type: "space"
    }
  ];

  return (
    <div className="flex-1 bg-gray-50 p-4 sm:p-6 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Bell className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Notifications</h1>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Check className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Mark all read</span>
              <span className="sm:hidden">Read all</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="bg-white rounded-lg shadow">
          {notifications.map((notification, index) => (
            <div
              key={notification.id}
              className={`p-4 sm:p-6 ${index !== notifications.length - 1 ? 'border-b border-gray-100' : ''} ${
                notification.unread ? 'bg-blue-50/50' : ''
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  notification.unread ? 'bg-blue-600' : 'bg-gray-300'
                }`}></div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-sm sm:text-base font-medium ${
                        notification.unread ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {notification.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                      <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      {notification.unread && (
                        <Badge variant="secondary" className="text-xs">New</Badge>
                      )}
                      <Button variant="ghost" size="icon" className="w-6 h-6">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if no notifications */}
        {notifications.length === 0 && (
          <div className="bg-white rounded-lg shadow p-8 sm:p-12 text-center">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
            <p className="text-gray-600">You're all caught up! Check back later for updates.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsView;
