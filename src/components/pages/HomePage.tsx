
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Play,
  CheckCircle,
  Users,
  MessageSquare,
  Heart,
  Star,
  ArrowRight,
  Monitor,
  Smartphone,
  Globe,
  Headphones,
  UserCheck,
  Settings,
  BarChart3,
  Shield,
  Zap,
  Download
} from "lucide-react";

const HomePage = () => {
  const [emailInput, setEmailInput] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-gray-900">Gredce</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Overview</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Community</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">Log in</button>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6">
            Get started free
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20 text-center relative overflow-hidden">
        {/* Floating avatars */}
        <div className="absolute top-20 left-20">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute top-32 right-20">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-20 left-32">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-32 right-32">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Give your customers a voice
            <br />
            <span className="text-gray-700">with Community</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect real people and start delivering outstanding customer experiences and build better products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg">
              Start building your community
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg border-gray-300">
              Book a demo
            </Button>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-100 flex items-center justify-center relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=450&fit=crop" 
                alt="Customer support representative"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full p-4">
                  <Play className="w-8 h-8" />
                </Button>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Gredce</h3>
                  <p className="text-gray-600">Customer success platform</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">1.2k members</span>
                  </div>
                  <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                    Join community
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need for build an
          </h2>
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            engaging community.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-emerald-500 rounded-2xl p-8 text-white">
              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded"></div>
                  <span className="text-white font-medium">Community Dashboard</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Built for community managers</h3>
              <p className="text-emerald-100 mb-6">
                Easy to manage with the tools they need to nurture thriving communities and deliver personalized customer experiences.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Moderation and content management tools</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Advanced member segmentation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Real-time analytics and engagement metrics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Integration with existing customer support workflows</span>
                </li>
              </ul>
              <Button className="mt-6 bg-white text-emerald-500 hover:bg-gray-100">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <BarChart3 className="w-8 h-8 text-blue-500 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Analytics & Insights</h4>
                <p className="text-gray-600 text-sm">Track engagement and measure community health with detailed analytics.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <Shield className="w-8 h-8 text-green-500 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Advanced Moderation</h4>
                <p className="text-gray-600 text-sm">Keep your community safe with AI-powered moderation tools.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <Zap className="w-8 h-8 text-yellow-500 mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Real-time Engagement</h4>
                <p className="text-gray-600 text-sm">Foster meaningful conversations with instant notifications and updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Cards Section */}
      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Support clients of all
          </h2>
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            shapes and sizes.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-emerald-500 text-white overflow-hidden">
              <CardContent className="p-8">
                <UserCheck className="w-12 h-12 mb-6" />
                <h3 className="text-xl font-bold mb-4">Streamline customer onboarding</h3>
                <p className="text-emerald-100">
                  Guide new customers through your product with interactive tutorials and community support.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop" 
                  alt="Customer interaction"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Direct customer interaction</h3>
                  <p className="text-gray-600 text-sm">
                    Connect directly with your customers through integrated messaging and video calls.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-500 text-white overflow-hidden">
              <CardContent className="p-8">
                <Settings className="w-12 h-12 mb-6" />
                <h3 className="text-xl font-bold mb-4">Technical optimization</h3>
                <p className="text-purple-100">
                  Optimize your community platform with advanced configuration options and integrations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop" 
                  alt="Team collaboration"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Creating content together</h3>
                  <p className="text-gray-600 text-sm">
                    Collaborate with your team to create engaging content that drives community growth.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-orange-500 text-white overflow-hidden">
              <CardContent className="p-8">
                <Headphones className="w-12 h-12 mb-6" />
                <h3 className="text-xl font-bold mb-4">Personalized customer service</h3>
                <p className="text-orange-100">
                  Deliver exceptional customer service with personalized support and community-driven solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-500 text-white overflow-hidden">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 mb-6" />
                <h3 className="text-xl font-bold mb-4">Global brand expansion</h3>
                <p className="text-blue-100">
                  Scale your community globally with multi-language support and regional customization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Icons Section */}
      <section className="px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Community,
          </h2>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            without Limits.
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            Connect with millions of community members across all platforms and channels.
          </p>
          
          <div className="flex justify-center items-center relative">
            <div className="grid grid-cols-3 gap-8 items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">f</span>
              </div>
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
            </div>
          </div>
          
          <Button className="mt-12 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3">
            Explore integrations
          </Button>
        </div>
      </section>

      {/* Cross-platform Section */}
      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            iOS. Android. Web.
          </h2>
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            It just works.
          </h2>
          
          <div className="flex justify-center space-x-4 mb-12">
            <Button className="bg-gray-900 text-white">
              <Download className="w-5 h-5 mr-2" />
              Download for iOS
            </Button>
            <Button className="bg-gray-900 text-white">
              <Download className="w-5 h-5 mr-2" />
              Download for Android
            </Button>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="space-y-4">
                <Monitor className="w-12 h-12 text-blue-500 mx-auto" />
                <h3 className="font-bold text-gray-900">Web Platform</h3>
                <p className="text-gray-600 text-sm">Full-featured web experience</p>
              </div>
              <div className="space-y-4">
                <Smartphone className="w-12 h-12 text-green-500 mx-auto" />
                <h3 className="font-bold text-gray-900">Mobile Apps</h3>
                <p className="text-gray-600 text-sm">Native iOS and Android apps</p>
              </div>
              <div className="space-y-4">
                <Globe className="w-12 h-12 text-purple-500 mx-auto" />
                <h3 className="font-bold text-gray-900">Cross-platform</h3>
                <p className="text-gray-600 text-sm">Seamless experience everywhere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl text-emerald-500 mb-8">"</div>
          <blockquote className="text-2xl text-gray-900 mb-8 leading-relaxed">
            The next decade will be dominated by Community-Led Growth. When done right, community drives sales, reduces support costs, creates product-market alignment between your business and your customers.
          </blockquote>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 mt-4">— Community Leaders</p>
          <div className="flex justify-center mt-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="Google" className="h-8 opacity-60" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-20 bg-emerald-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to create your
          </h2>
          <h2 className="text-4xl font-bold mb-8">
            community experience?
          </h2>
          <div className="flex justify-center">
            <div className="flex bg-white rounded-lg p-2 max-w-md w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-gray-900 bg-transparent outline-none"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                Get started free
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Gredce</h3>
              <p className="text-gray-400 text-sm mb-4">
                Build engaging communities that drive customer success and product growth.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Community Management</a></li>
                <li><a href="#" className="hover:text-white">Customer Support</a></li>
                <li><a href="#" className="hover:text-white">Analytics</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API Reference</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Gredce. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
