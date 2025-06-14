
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  BookOpen,
  Award,
  Edit,
  Download,
  Share
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const profileData = {
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "January 2024",
    bio: "PhD candidate in Computer Science with a focus on machine learning and artificial intelligence. Passionate about research in natural language processing and computer vision."
  };

  const stats = [
    { label: "Applications", value: "12", icon: <BookOpen className="w-5 h-5" /> },
    { label: "Scholarships", value: "8", icon: <Award className="w-5 h-5" /> },
    { label: "Connections", value: "45", icon: <User className="w-5 h-5" /> },
    { label: "Documents", value: "23", icon: <BookOpen className="w-5 h-5" /> }
  ];

  const recentActivity = [
    {
      title: "Applied to Stanford AI Lab",
      description: "Submitted research proposal for PhD position",
      date: "2 days ago"
    },
    {
      title: "Connected with Dr. Sarah Chen",
      description: "Professor at MIT Computer Science Department",
      date: "5 days ago"
    },
    {
      title: "Scholarship Application Submitted",
      description: "NSF Graduate Research Fellowship",
      date: "1 week ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Profile
          </h1>
          <p className="text-gray-600">
            Manage your academic profile and track your progress
          </p>
        </div>

        {/* Profile Card */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {profileData.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  {profileData.bio}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{profileData.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{profileData.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{profileData.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {profileData.joinDate}</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-2 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Recent Activity
              </h3>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="border-l-2 border-blue-600 pl-4 pb-4">
                  <h4 className="font-medium text-gray-900 mb-1">
                    {activity.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {activity.description}
                  </p>
                  <span className="text-xs text-gray-500">
                    {activity.date}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
