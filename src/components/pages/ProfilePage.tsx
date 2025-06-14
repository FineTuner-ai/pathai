
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Mail, 
  MapPin, 
  Calendar,
  BookOpen,
  Award,
  Target,
  Edit,
  Settings,
  Bell,
  Shield
} from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <Button variant="outline">
          <Edit className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Alex Johnson</h2>
              <p className="text-gray-600 mb-4">PhD Candidate in Computer Science</p>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">alex.johnson@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Joined December 2023</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-600">Applications</span>
                  </div>
                  <span className="font-medium text-gray-900">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm text-gray-600">Scholarships</span>
                  </div>
                  <span className="font-medium text-gray-900">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Goals Met</span>
                  </div>
                  <span className="font-medium text-gray-900">8/10</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Research Interests */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Research Interests</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Computer Vision",
                  "Deep Learning",
                  "Neural Networks",
                  "Data Science"
                ].map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-teal-200 pl-4">
                  <h4 className="font-medium text-gray-900">PhD in Computer Science</h4>
                  <p className="text-sm text-gray-600">Stanford University • 2022 - Present</p>
                  <p className="text-sm text-gray-500 mt-1">Focus: Artificial Intelligence and Machine Learning</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-4">
                  <h4 className="font-medium text-gray-900">Master of Science in Computer Science</h4>
                  <p className="text-sm text-gray-600">UC Berkeley • 2020 - 2022</p>
                  <p className="text-sm text-gray-500 mt-1">GPA: 3.9/4.0</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-4">
                  <h4 className="font-medium text-gray-900">Bachelor of Science in Computer Engineering</h4>
                  <p className="text-sm text-gray-600">MIT • 2016 - 2020</p>
                  <p className="text-sm text-gray-500 mt-1">Magna Cum Laude</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Settings */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Account Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-3">
                    <Bell className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">Notifications</p>
                      <p className="text-sm text-gray-500">Manage your notification preferences</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Configure</Button>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">Privacy & Security</p>
                      <p className="text-sm text-gray-500">Control your privacy settings</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Manage</Button>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">Account Settings</p>
                      <p className="text-sm text-gray-500">Update your account information</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
