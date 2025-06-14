
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
  Play,
  Star,
  CheckCircle,
  MessageCircle,
  Heart,
  Share2,
  Download,
  Smartphone,
  Monitor,
  Tablet
} from "lucide-react";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Floating avatars */}
        <div className="absolute top-20 left-20 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
          <Users className="w-6 h-6 text-white" />
        </div>
        <div className="absolute top-32 right-32 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <div className="absolute bottom-32 left-32 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
          <Heart className="w-6 h-6 text-white" />
        </div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
          <Share2 className="w-6 h-6 text-white" />
        </div>

        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Give your customers a voice with 
            <span className="text-emerald-600"> Community</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with others and start to solve driving community discussions. Get answers, give back, and join our growing community.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-full">
              Get started for free
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-full border-2">
              <Play className="w-5 h-5 mr-2" />
              Watch demo
            </Button>
          </div>
        </div>
      </div>

      {/* Video/Demo Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-100 rounded-2xl p-8 relative">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full w-20 h-20 relative z-10">
                  <Play className="w-8 h-8" />
                </Button>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Community discussion"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything you need for build an engaging community.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Give community managers the tools they need to nurture your users and to successfully and organizationally gather community intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-200" />
                  <span>Real-time community discussions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-200" />
                  <span>Advanced moderation tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-200" />
                  <span>Analytics and insights dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-200" />
                  <span>Customizable community themes</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold">Community Update</div>
                      <div className="text-sm text-gray-400">2 minutes ago</div>
                    </div>
                  </div>
                  <p className="text-gray-300">New features released! Check out our latest community tools.</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="text-sm text-gray-400">Active now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Support clients of all shapes and sizes.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-500 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Pricing & Licensing</h3>
              <p className="text-emerald-100 mb-6">Get the most out of your community platform with flexible pricing options.</p>
              <Button variant="outline" className="text-emerald-500 bg-white hover:bg-emerald-50 border-white">
                Learn more
              </Button>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Customer success</h3>
              <p className="text-blue-100 mb-6">Our dedicated team helps you succeed with 24/7 support and guidance.</p>
              <Button variant="outline" className="text-blue-500 bg-white hover:bg-blue-50 border-white">
                Contact us
              </Button>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Partner optimization</h3>
              <p className="text-purple-100 mb-6">Maximize your community's potential with our optimization tools.</p>
              <Button variant="outline" className="text-purple-500 bg-white hover:bg-purple-50 border-white">
                Get started
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Building community culture</h3>
              <p className="text-orange-100 mb-6">Foster engagement and build lasting relationships within your community.</p>
              <Button variant="outline" className="text-orange-500 bg-white hover:bg-orange-50 border-white">
                Explore
              </Button>
            </div>
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Community management</h3>
              <p className="text-amber-100 mb-6">Streamline your community operations with powerful management tools.</p>
              <Button variant="outline" className="text-amber-600 bg-white hover:bg-amber-50 border-white">
                Learn how
              </Button>
            </div>
            <div className="bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Social & Networking</h3>
              <p className="text-teal-100 mb-6">Connect your community across multiple platforms and social networks.</p>
              <Button variant="outline" className="text-teal-600 bg-white hover:bg-teal-50 border-white">
                Connect
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Community Icons Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Community, without Limits.
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Connect with millions of users across all platforms and channels.
          </p>

          <div className="relative">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-full mt-12">
            Join the community
          </Button>
        </div>
      </div>

      {/* Cross-Platform Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            iOS. Android. Web.
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-8">
            It just works.
          </h3>
          <p className="text-xl text-gray-600 mb-12">
            Access your community from anywhere, on any device. Native apps and responsive web design ensure a seamless experience.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <Button variant="outline" className="flex items-center gap-2 px-6 py-3 rounded-lg border-2">
              <Download className="w-5 h-5" />
              Download for iOS
            </Button>
            <Button variant="outline" className="flex items-center gap-2 px-6 py-3 rounded-lg border-2">
              <Download className="w-5 h-5" />
              Get it on Android
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-gray-400">
            <Smartphone className="w-8 h-8" />
            <Tablet className="w-8 h-8" />
            <Monitor className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <div className="text-6xl text-emerald-500 mb-6">"</div>
            <blockquote className="text-2xl text-gray-800 font-medium mb-8 leading-relaxed">
              The next decade will be dominated by Community-Led Growth. When done right, community drives sales, reduces support costs, and creates an invaluable feedback alignment between your business and your customers.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-gray-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Community Expert</div>
                <div className="text-gray-600">Growth Strategist</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to create your community experience?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of successful communities already using our platform.
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full">
            Get started today
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
                <li><a href="#" className="hover:text-white">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Enterprise</a></li>
                <li><a href="#" className="hover:text-white">Small Business</a></li>
                <li><a href="#" className="hover:text-white">Startups</a></li>
                <li><a href="#" className="hover:text-white">Non-profits</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">API Docs</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex items-center justify-between">
            <p className="text-gray-400">© 2024 Community Platform. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
