
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navigation */}
      <header className="border-b bg-white/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Gnoice</span>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <Link to="#" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">Features</Link>
                <Link to="#" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">Resources</Link>
                <Link to="#" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">Consulting</Link>
                <Link to="#" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">Pricing</Link>
              </nav>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-emerald-600">Log in</Button>
              <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 shadow-lg">
                Get started for free
              </Button>
            </div>
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            {/* Floating elements */}
            <div className="relative mb-16">
              <div className="absolute -top-4 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-8 right-1/3 w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-lg"></div>
              <div className="absolute top-4 right-1/4 w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-lg"></div>
              <div className="absolute -top-2 left-1/3 w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg"></div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Give your</span><br />
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">customers a voice</span><br />
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">with Community</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Connect with followers and fans to deliver amazing community 
              experiences that keep them coming back for more.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 px-10 py-4 text-lg shadow-xl">
                Try Gnoice for free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="px-10 py-4 text-lg border-2 hover:bg-gray-50">
                <Play className="w-5 h-5 mr-2" />
                Watch demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Video demo" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white bg-opacity-95 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform cursor-pointer">
                    <Play className="w-10 h-10 text-emerald-600 ml-1" />
                  </div>
                </div>
              </div>
              
              {/* Browser mockup elements */}
              <div className="absolute top-6 left-6 flex space-x-3">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Everything you need to build an<br />engaging community.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-10 rounded-3xl text-white shadow-xl">
                <MessageCircle className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Rich community features</h3>
                <p className="text-emerald-100 text-lg leading-relaxed">
                  Give community managers the tools they need to nurture their existing community and help it grow naturally.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  "Amazing community management",
                  "Reward your community", 
                  "Engaging community experiences",
                  "A powerful design system to make community building fun with beautiful interfaces"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 text-white relative overflow-hidden shadow-xl">
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="w-16 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl mb-6"></div>
                  <h4 className="text-2xl font-bold mb-3">Community Dashboard</h4>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                      <div>
                        <div className="h-3 bg-gray-600 rounded w-24 mb-2"></div>
                        <div className="h-2 bg-gray-700 rounded w-20"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                      <div>
                        <div className="h-3 bg-gray-600 rounded w-28 mb-2"></div>
                        <div className="h-2 bg-gray-700 rounded w-24"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Support clients of all<br />shapes and sizes.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-8 md:col-span-2 border-0 shadow-xl">
              <CardContent className="p-0">
                <Shield className="w-12 h-12 mb-6" />
                <h3 className="font-bold text-xl mb-3">Secure & Optimized</h3>
                <p className="text-emerald-100 leading-relaxed">Built for performance and security from the ground up.</p>
              </CardContent>
            </Card>

            <Card className="bg-white p-8 md:col-span-2 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Community" className="w-full h-32 object-cover rounded-2xl mb-6" />
                <h3 className="font-bold text-lg text-gray-800">Community management</h3>
              </CardContent>
            </Card>

            <Card className="bg-white p-8 md:col-span-2 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Engagement" className="w-full h-32 object-cover rounded-2xl mb-6" />
                <h3 className="font-bold text-lg text-gray-800">Increase engagement</h3>
              </CardContent>
            </Card>

            <Card className="bg-white p-8 md:col-span-2 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Analytics" className="w-full h-32 object-cover rounded-2xl mb-6" />
                <h3 className="font-bold text-lg text-gray-800">Gathering community insights</h3>
              </CardContent>
            </Card>

            <Card className="bg-white p-8 md:col-span-2 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Moderation" className="w-full h-32 object-cover rounded-2xl mb-6" />
                <h3 className="font-bold text-lg text-gray-800">Advanced moderation tools</h3>
              </CardContent>
            </Card>

            <Card className="bg-white p-8 md:col-span-2 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Collaboration" className="w-full h-32 object-cover rounded-2xl mb-6" />
                <h3 className="font-bold text-lg text-gray-800">Social & Goal alignment</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Community,<br />without Limits.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">Connect and engage with your community across all your favorite social networks and beyond.</p>
          </div>

          {/* Social Icons */}
          <div className="relative max-w-lg mx-auto h-80 mb-16">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-xl">f</span>
            </div>
            <div className="absolute top-12 right-12 w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div className="absolute top-20 left-8 w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div className="absolute bottom-20 right-8 w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-xl">Y</span>
            </div>
            <div className="absolute bottom-12 left-12 w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-white font-bold">in</span>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-xl">P</span>
            </div>
          </div>

          <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 px-10 py-4 text-lg shadow-xl">
            Get started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Cross Platform Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            iOS. Android. Web.<br />It just works.
          </h2>
          <p className="text-xl text-gray-600 mb-16">Available on all platforms</p>

          <div className="flex justify-center space-x-6 mb-16">
            <Button variant="outline" className="bg-gray-900 text-white border-gray-900 hover:bg-gray-800 px-8 py-4 text-lg">
              <Smartphone className="w-5 h-5 mr-3" />
              App Store
            </Button>
            <Button variant="outline" className="bg-gray-900 text-white border-gray-900 hover:bg-gray-800 px-8 py-4 text-lg">
              <Smartphone className="w-5 h-5 mr-3" />
              Google Play
            </Button>
          </div>

          {/* Device Mockups */}
          <div className="relative max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-80 flex items-center justify-center">
                  <Monitor className="w-20 h-20 text-gray-400" />
                </div>
              </div>
              <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-sm mx-auto">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-96 flex items-center justify-center">
                  <Smartphone className="w-16 h-16 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <Quote className="w-16 h-16 text-emerald-500 mx-auto mb-8" />
            <blockquote className="text-3xl font-medium text-gray-900 mb-12 leading-relaxed">
              "In the next decade we will be dominated by Community Led organizations. We've done the right community-first sales playbook from leads to qualified sales and scaled to six-figure alignments between our business and our customers."
            </blockquote>
            <div className="flex items-center justify-center space-x-6">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                alt="Testimonial author" 
                className="w-16 h-16 rounded-full border-4 border-emerald-100"
              />
              <div className="text-left">
                <p className="font-bold text-lg">John Smith</p>
                <p className="text-gray-500">CEO, TechCorp</p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-10 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 to-emerald-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-5xl font-bold mb-8 leading-tight">Ready to create your<br />community experience?</h2>
            <div className="flex justify-center">
              <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-4 text-lg shadow-xl">
                Get started for free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <span className="text-2xl font-bold">Gnoice</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Building communities that bring people together.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Solutions</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="#" className="hover:text-white transition-colors">Community Platform</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Engagement Tools</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Analytics</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Moderation</Link></li>
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
            <p>&copy; 2024 Gnoice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
