
import { Bell, Check, X, Clock, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "message",
      title: "New message from Dr. Smith",
      description: "Regarding your research proposal submission",
      time: "2 minutes ago",
      unread: true,
      icon: MessageSquare,
      color: "blue"
    },
    {
      id: 2,
      type: "update",
      title: "Profile updated successfully",
      description: "Your academic profile has been updated",
      time: "1 hour ago",
      unread: true,
      icon: User,
      color: "green"
    },
    {
      id: 3,
      type: "reminder",
      title: "Application deadline approaching",
      description: "MIT PhD application due in 3 days",
      time: "3 hours ago",
      unread: false,
      icon: Clock,
      color: "orange"
    },
    {
      id: 4,
      type: "match",
      title: "New professor match found",
      description: "Dr. Johnson at Stanford matches your research interests",
      time: "1 day ago",
      unread: false,
      icon: User,
      color: "purple"
    }
  ];

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-100",
      green: "text-green-600 bg-green-100",
      orange: "text-orange-600 bg-orange-100",
      purple: "text-purple-600 bg-purple-100"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Bell className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
            <Badge variant="destructive" className="ml-2">
              {notifications.filter(n => n.unread).length}
            </Badge>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Check className="w-4 h-4 mr-2" />
              Mark all read
            </Button>
            <Button variant="outline">
              <X className="w-4 h-4 mr-2" />
              Clear all
            </Button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map(notification => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className={`bg-white rounded-lg shadow p-6 border-l-4 ${
                  notification.unread ? 'border-l-blue-500' : 'border-l-gray-200'
                } hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-full ${getIconColor(notification.color)}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`font-semibold ${
                        notification.unread ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {notification.title}
                      </h3>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                    <p className="text-gray-600 mb-2">{notification.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{notification.time}</span>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Check className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {notifications.length === 0 && (
          <div className="text-center py-12">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
            <p className="text-gray-500">You're all caught up!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
