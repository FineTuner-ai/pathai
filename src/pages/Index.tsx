
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
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="text-xl font-bold text-black">Gnoice</span>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <Link to="#" className="text-gray-600 hover:text-black transition-colors">Features</Link>
                <Link to="#" className="text-gray-600 hover:text-black transition-colors">Resources</Link>
                <Link to="#" className="text-gray-600 hover:text-black transition-colors">Consulting</Link>
                <Link to="#" className="text-gray-600 hover:text-black transition-colors">Pricing</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600">Log in</Button>
              <Button className="bg-black text-white hover:bg-gray-800">Get started for free</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Floating avatars */}
            <div className="relative mb-12">
              <div className="absolute -top-4 left-1/4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-8 right-1/3 w-10 h-10 bg-green-500 rounded-full"></div>
              <div className="absolute top-4 right-1/4 w-8 h-8 bg-purple-500 rounded-full"></div>
              <div className="absolute -top-2 left-1/3 w-6 h-6 bg-orange-500 rounded-full"></div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Give your<br />
                customers a voice<br />
                <span className="text-black">with Community</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with followers and fans to deliver amazing community 
              experiences that keep them coming back for more.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button size="lg" className="bg-emerald-500 text-white hover:bg-emerald-600 px-8 py-3">
                Try Gnoice for free
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3">
                Book a demo call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Video demo" 
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-gray-800 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Browser mockup elements */}
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything you need for build an<br />engaging community.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="bg-emerald-500 p-8 rounded-2xl text-white">
                <MessageCircle className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Rich community features</h3>
                <p className="opacity-90">Give community managers the tools they need to nurture their existing community and help it grow naturally.</p>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700">Amazing community management</span>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700">Reward your community</span>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700">Engaging community experiences</span>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700">A powerful design system to make community building fun with beautiful interfaces</span>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-12 h-8 bg-emerald-500 rounded-lg mb-4"></div>
                  <h4 className="text-lg font-semibold mb-2">Community Dashboard</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="h-2 bg-gray-600 rounded w-20 mb-1"></div>
                        <div className="h-2 bg-gray-700 rounded w-16"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                      <div>
                        <div className="h-2 bg-gray-600 rounded w-24 mb-1"></div>
                        <div className="h-2 bg-gray-700 rounded w-20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-emerald-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Support clients of all<br />shapes and sizes.</h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            <Card className="bg-emerald-500 text-white p-6 md:col-span-2">
              <CardContent className="p-0">
                <Shield className="w-8 h-8 mb-4" />
                <h3 className="font-semibold mb-2">Secure & Optimized</h3>
                <p className="text-emerald-100 text-sm">Built for performance and security from the ground up.</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-100 p-6 md:col-span-2">
              <CardContent className="p-0">
                <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Community" className="w-full h-24 object-cover rounded-lg mb-4" />
                <h3 className="font-semibold text-gray-800">Community management</h3>
              </CardContent>
            </Card>

            <Card className="bg-purple-100 p-6 md:col-span-2">
              <CardContent className="p-0">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Engagement" className="w-full h-24 object-cover rounded-lg mb-4" />
                <h3 className="font-semibold text-gray-800">Increase engagement</h3>
              </CardContent>
            </Card>

            <Card className="bg-orange-100 p-6 md:col-span-2">
              <CardContent className="p-0">
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Analytics" className="w-full h-24 object-cover rounded-lg mb-4" />
                <h3 className="font-semibold text-gray-800">Gathering community insights</h3>
              </CardContent>
            </Card>

            <Card className="bg-yellow-100 p-6 md:col-span-2">
              <CardContent className="p-0">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Moderation" className="w-full h-24 object-cover rounded-lg mb-4" />
                <h3 className="font-semibold text-gray-800">Advanced moderation tools</h3>
              </CardContent>
            </Card>

            <Card className="bg-green-100 p-6 md:col-span-2">
              <CardContent className="p-0">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Collaboration" className="w-full h-24 object-cover rounded-lg mb-4" />
                <h3 className="font-semibold text-gray-800">Social & Goal alignment</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Community,<br />without Limits.</h2>
            <p className="text-gray-600">Connect and engage with your community across all your favorite social networks and beyond.</p>
          </div>

          {/* Social Icons */}
          <div className="relative max-w-md mx-auto h-64 mb-12">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">f</span>
            </div>
            <div className="absolute top-8 right-8 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div className="absolute top-16 left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <div className="absolute bottom-16 right-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">Y</span>
            </div>
            <div className="absolute bottom-8 left-8 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">I</span>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">in</span>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">T</span>
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
          </div>

          <Button className="bg-emerald-500 text-white hover:bg-emerald-600">
            Get started
          </Button>
        </div>
      </section>

      {/* Cross Platform Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">iOS. Android. Web.<br />It just works.</h2>
          <p className="text-gray-600 mb-12">Available on all platforms</p>

          <div className="flex justify-center space-x-4 mb-12">
            <Button variant="outline" className="bg-black text-white border-black hover:bg-gray-800">
              <Smartphone className="w-4 h-4 mr-2" />
              App Store
            </Button>
            <Button variant="outline" className="bg-black text-white border-black hover:bg-gray-800">
              <Smartphone className="w-4 h-4 mr-2" />
              Google Play
            </Button>
          </div>

          {/* Device Mockups */}
          <div className="relative max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                  <Monitor className="w-16 h-16 text-gray-400" />
                </div>
              </div>
              <div className="bg-white rounded-3xl shadow-xl p-4 max-w-xs mx-auto">
                <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
                  <Smartphone className="w-12 h-12 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
            <blockquote className="text-2xl font-medium text-gray-900 mb-8">
              "In the next decade we will be dominated by Community Led organizations. We've done the right community-first sales playbook from leads to qualified sales and scaled to six-figure alignments between our business and our customers."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                alt="Testimonial author" 
                className="w-12 h-12 rounded-full"
              />
              <div className="text-left">
                <p className="font-semibold">John Smith</p>
                <p className="text-gray-500 text-sm">CEO, TechCorp</p>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-500">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to create your<br />community experience?</h2>
            <div className="flex justify-center">
              <Button className="bg-white text-emerald-500 hover:bg-gray-100 px-8 py-3">
                Get started for free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">G</span>
                </div>
                <span className="text-xl font-bold">Gnoice</span>
              </div>
              <p className="text-gray-400">
                Building communities that bring people together.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="#" className="hover:text-white transition-colors">Community Platform</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Engagement Tools</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Analytics</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Moderation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="#" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">API</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Gnoice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
