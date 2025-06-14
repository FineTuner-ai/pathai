
import { User, Edit, Settings, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const ProfileView = () => {
  const userStats = [
    { label: "Messages Sent", value: "2,456" },
    { label: "Projects Joined", value: "12" },
    { label: "Events Attended", value: "34" },
    { label: "Days Active", value: "89" }
  ];

  const recentProjects = [
    { name: "Project Clover", role: "Lead", status: "Active", color: "bg-blue-500" },
    { name: "Project Satan", role: "Member", status: "In Progress", color: "bg-pink-500" },
    { name: "Project X2", role: "Contributor", status: "Completed", color: "bg-indigo-500" }
  ];

  return (
    <div className="flex-1 bg-gray-50 p-4 sm:p-6 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <User className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Profile</h1>
          </div>
          <Button variant="outline">
            <Edit className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Edit Profile</span>
            <span className="sm:hidden">Edit</span>
          </Button>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Avatar className="w-20 h-20 sm:w-24 sm:h-24">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="text-xl">JD</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">John Doe</h2>
                  <p className="text-gray-600 mt-1">Senior Developer</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">Admin</Badge>
                    <Badge variant="outline">Team Lead</Badge>
                  </div>
                </div>
                <div className="flex space-x-2 mt-4 sm:mt-0">
                  <Button size="sm">
                    <Mail className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">john.doe@example.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {userStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Projects</h3>
          <div className="space-y-4">
            {recentProjects.map((project, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded ${project.color}`}></div>
                  <div>
                    <h4 className="font-medium text-gray-900">{project.name}</h4>
                    <p className="text-sm text-gray-600">{project.role}</p>
                  </div>
                </div>
                <Badge variant={project.status === 'Active' ? 'default' : 
                              project.status === 'In Progress' ? 'secondary' : 'outline'}>
                  {project.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
