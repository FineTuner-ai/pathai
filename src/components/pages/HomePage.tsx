
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Brain, 
  Globe, 
  Users, 
  Award, 
  Upload,
  Mic,
  Camera,
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Download
} from "lucide-react";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Give your{" "}
                  <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                    academic journey
                  </span>{" "}
                  a voice with{" "}
                  <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                    AI Community
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Connect with fellow students and share your academic journey. 
                  AI-powered matching to help you find your perfect study community.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Start for free
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 hover:border-teal-600 text-gray-700 hover:text-teal-600 px-8 py-4 rounded-full text-lg font-semibold transition-all"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch demo
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 border-2 border-white flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">2,000+</span> students already connected
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Video/Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20"></div>
                  <div className="relative z-10 text-center">
                    <Brain className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-700">AI-Powered Community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need for building an{" "}
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                engaging community
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our community platform has built-in features you need to nurture your academic connections and accelerate your learning journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Smart Matching",
                description: "AI-powered algorithm connects you with students who share your academic interests and goals.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Study Groups",
                description: "Create and join study groups for your courses. Share resources and collaborate effectively.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Achievement Tracking",
                description: "Track your academic progress and celebrate milestones with your study community.",
                color: "from-amber-500 to-orange-500"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Network",
                description: "Connect with students from universities worldwide. Expand your academic network.",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: <Upload className="w-8 h-8" />,
                title: "Resource Sharing",
                description: "Share notes, study materials, and academic resources with your study group.",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: "Research Collaboration",
                description: "Find research partners and collaborate on academic projects and publications.",
                color: "from-pink-500 to-rose-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Support students of all{" "}
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                backgrounds and goals
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Undergraduate Students",
                description: "Connect with peers in your field of study",
                color: "from-green-400 to-teal-500",
                textColor: "text-white"
              },
              {
                title: "Graduate Research",
                description: "Find research collaborators and mentors",
                color: "from-blue-400 to-indigo-500",
                textColor: "text-white"
              },
              {
                title: "International Students",
                description: "Navigate academic systems with support",
                color: "from-purple-400 to-pink-500",
                textColor: "text-white"
              },
              {
                title: "Study Abroad Programs",
                description: "Connect before and during your exchange",
                color: "from-amber-400 to-orange-500",
                textColor: "text-white"
              },
              {
                title: "Professional Development",
                description: "Network for career advancement",
                color: "from-rose-400 to-pink-500",
                textColor: "text-white"
              },
              {
                title: "Academic Writing",
                description: "Improve your writing with peer feedback",
                color: "from-cyan-400 to-blue-500",
                textColor: "text-white"
              }
            ].map((item, index) => (
              <Card key={index} className={`bg-gradient-to-br ${item.color} border-0 hover:scale-105 transition-transform cursor-pointer`}>
                <CardContent className="p-8">
                  <h3 className={`text-xl font-semibold mb-3 ${item.textColor}`}>{item.title}</h3>
                  <p className={`${item.textColor} opacity-90`}>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Community,{" "}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              without limits
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join thousands of students who are already building meaningful academic connections
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            {[
              { name: "LinkedIn", color: "bg-blue-600" },
              { name: "Twitter", color: "bg-blue-400" },
              { name: "Discord", color: "bg-indigo-500" },
              { name: "Slack", color: "bg-green-500" },
              { name: "Reddit", color: "bg-orange-500" },
              { name: "GitHub", color: "bg-gray-800" }
            ].map((social, index) => (
              <div key={index} className={`w-16 h-16 rounded-full ${social.color} flex items-center justify-center hover:scale-110 transition-transform cursor-pointer`}>
                <Users className="w-8 h-8 text-white" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Web. Mobile. Desktop.{" "}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              It just works
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Access your academic community from any device, anywhere
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg">
              <Download className="w-5 h-5 mr-2" />
              Download for iOS
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg">
              <Download className="w-5 h-5 mr-2" />
              Download for Android
            </Button>
          </div>

          {/* Platform Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                    <Brain className="w-16 h-16 text-teal-600" />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                    <Users className="w-12 h-12 text-teal-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to create your{" "}
            <span className="underline decoration-white/50">
              community experience?
            </span>
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Join thousands of students building meaningful academic connections
          </p>
          <Button 
            size="lg" 
            className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Get started now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
