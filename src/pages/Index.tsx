
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Play, 
  Users, 
  MessageCircle, 
  Heart,
  Star,
  Shield,
  Zap,
  Globe,
  Smartphone,
  Monitor,
  Quote,
  Menu,
  X,
  Search,
  Brain,
  GraduationCap,
  BookOpen,
  Award,
  Mail,
  FileText,
  Target,
  Database,
  Bot,
  CheckCircle,
  TrendingUp,
  UserPlus,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Grevice</span>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Overview
                </Link>
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Resources
                </Link>
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Networking
                </Link>
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Pricing
                </Link>
              </nav>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                Log in
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800">
                Get started
              </Button>
            </div>
            <Button
              variant="ghost"
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Give your<br />
                customers a voice<br />
                with <span className="text-black">Community</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Connect real voices and ideas to achieve thriving community experiences. Build trust, drive growth.
              </p>
              <div className="flex items-center space-x-4">
                <Button className="bg-emerald-500 text-white hover:bg-emerald-600 px-8 py-4 text-lg rounded-lg">
                  Start building for free
                </Button>
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-6 py-4 text-lg">
                  <Play className="w-5 h-5 mr-2" />
                  Watch demo
                </Button>
              </div>
            </div>
            
            {/* Right side with community avatars */}
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Community member" 
                  className="w-64 h-64 object-cover rounded-2xl"
                />
                
                {/* Floating avatars */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="User" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="User" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="User" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="User" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Building Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Everything you need for build an<br />
              engaging community.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Build community and manage</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6" />
                    <span className="text-lg">Seamless</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6" />
                    <span className="text-lg">Fully responsive and mobile optimized</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6" />
                    <span className="text-lg">Amazing customization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6" />
                    <span className="text-lg">Outstanding customer support</span>
                  </div>
                </div>
                <Button className="bg-white text-emerald-600 hover:bg-gray-100 mt-8 px-8 py-3">
                  Learn more
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="bg-gray-900 rounded-2xl p-8 text-white relative">
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-bold">One and Done</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <span>Members</span>
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <span>Posts</span>
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <span>Engagement</span>
                    <Heart className="w-5 h-5 text-red-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Support clients of all<br />
              shapes and sizes.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-emerald-500 text-white border-0 overflow-hidden">
              <CardContent className="p-8">
                <Users className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Teams & Startups</h3>
                <p className="text-emerald-100">Build and scale your community from day one with powerful tools.</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-500 text-white border-0 overflow-hidden">
              <CardContent className="p-8">
                <Building2 className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Small businesses</h3>
                <p className="text-blue-100">Engage your customers and build lasting relationships.</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-500 text-white border-0 overflow-hidden">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Global enterprises</h3>
                <p className="text-purple-100">Scale your community across regions and teams.</p>
              </CardContent>
            </Card>

            <Card className="bg-orange-500 text-white border-0 overflow-hidden">
              <CardContent className="p-8">
                <GraduationCap className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Leading universities</h3>
                <p className="text-orange-100">Connect students, faculty, and alumni in meaningful ways.</p>
              </CardContent>
            </Card>

            <Card className="bg-pink-500 text-white border-0 overflow-hidden">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Non-profits</h3>
                <p className="text-pink-100">Mobilize supporters and volunteers for your cause.</p>
              </CardContent>
            </Card>

            <Card className="bg-indigo-500 text-white border-0 overflow-hidden">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Gov & Enterprise</h3>
                <p className="text-indigo-100">Secure, scalable solutions for large organizations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Icons Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Community,<br />
            without Limits.
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            Connect and engage with your audience across all platforms and touchpoints.
          </p>

          {/* Social Platform Icons */}
          <div className="relative max-w-lg mx-auto h-80 mb-16">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div className="absolute top-12 right-12 w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="absolute top-20 left-8 w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="absolute bottom-20 right-8 w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center shadow-xl">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="absolute bottom-12 left-12 w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center shadow-xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </div>

          <Button className="bg-emerald-500 text-white hover:bg-emerald-600 px-10 py-4 text-lg">
            Start building
          </Button>
        </div>
      </section>

      {/* Cross Platform Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            iOS. Android. Web.<br />
            It just works.
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            Your community experience across every device and platform.
          </p>

          <div className="flex justify-center space-x-6 mb-16">
            <Button variant="outline" className="bg-black text-white border-black hover:bg-gray-800 px-8 py-4 text-lg">
              <Monitor className="w-5 h-5 mr-3" />
              App Store
            </Button>
            <Button variant="outline" className="bg-black text-white border-black hover:bg-gray-800 px-8 py-4 text-lg">
              <Smartphone className="w-5 h-5 mr-3" />
              Google Play
            </Button>
          </div>

          {/* Device Mockups */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-end">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 flex items-center justify-center">
                  <Monitor className="w-16 h-16 text-gray-400" />
                </div>
              </div>
              <div className="bg-white rounded-3xl shadow-2xl p-6">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-80 flex items-center justify-center">
                  <Smartphone className="w-12 h-12 text-gray-400" />
                </div>
              </div>
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 flex items-center justify-center">
                  <Globe className="w-16 h-16 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-500">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Ready to create your<br />
              community experience?
            </h2>
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-4 text-lg">
              Get started now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">G</span>
                </div>
                <span className="text-xl font-bold">Grevice</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Building communities that connect and engage.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Solutions</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="#" className="hover:text-white transition-colors">Community Building</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Engagement Tools</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Analytics</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="#" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">API</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Grevice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Missing import
import { Building2 } from "lucide-react";

export default Index;
