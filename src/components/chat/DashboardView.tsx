
import { BarChart, Users, MessageSquare, Calendar, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardView = () => {
  const stats = [
    {
      title: "Total Messages",
      value: "12,345",
      icon: MessageSquare,
      change: "+12%",
      positive: true
    },
    {
      title: "Active Users",
      value: "187",
      icon: Users,
      change: "+5%",
      positive: true
    },
    {
      title: "Projects",
      value: "24",
      icon: BarChart,
      change: "+2",
      positive: true
    },
    {
      title: "Events Today",
      value: "8",
      icon: Calendar,
      change: "-1",
      positive: false
    }
  ];

  const recentActivity = [
    {
      user: "Vermillion Gray",
      action: "created a new project",
      project: "Project Alpha",
      time: "2 minutes ago"
    },
    {
      user: "Oarack Babama",
      action: "updated",
      project: "Project Clover",
      time: "15 minutes ago"
    },
    {
      user: "Mai Sakurajima",
      action: "completed milestone in",
      project: "Project Satan",
      time: "1 hour ago"
    },
    {
      user: "Saylor Twift",
      action: "joined",
      project: "Marketing Updates",
      time: "2 hours ago"
    }
  ];

  return (
    <div className="flex-1 bg-gray-50 p-4 sm:p-6 overflow-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <BarChart className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-gray-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className={`text-xs flex items-center ${
                  stat.positive ? 'text-green-600' : 'text-red-600'
                }`}>
                  <TrendingUp className={`w-3 h-3 mr-1 ${
                    !stat.positive ? 'rotate-180' : ''
                  }`} />
                  {stat.change} from last month
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {recentActivity.map((activity, index) => (
              <div key={index} className="px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.user}</span>
                      {' '}{activity.action}{' '}
                      <span className="font-medium text-blue-600">{activity.project}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <MessageSquare className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-medium text-gray-900">Start New Chat</h3>
              <p className="text-sm text-gray-600 mt-1">Create a new conversation</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-medium text-gray-900">Invite Users</h3>
              <p className="text-sm text-gray-600 mt-1">Add new team members</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-medium text-gray-900">Schedule Event</h3>
              <p className="text-sm text-gray-600 mt-1">Plan a team meeting</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
