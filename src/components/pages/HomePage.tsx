
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight,
  Play,
  Star,
  Users,
  MessageCircle,
  Shield,
  Zap,
  Globe,
  Smartphone,
  Monitor,
  CheckCircle,
  Quote
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Greetza</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Resources</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Community</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">Log in</Button>
              <Button size="sm" className="bg-gray-900 hover:bg-gray-800">
                Get started free
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Give your customers a voice
                <span className="block text-emerald-600">with Community</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with others and get to know them better by engaging in meaningful conversations and building lasting relationships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                  Start building for free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 px-8 py-3">
                  <Play className="w-5 h-5 mr-2" />
                  Watch demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Community Dashboard</h3>
                    <p className="text-gray-600 mt-2">Connect and engage with your audience</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need for building an engaging community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build a community managers link back they need to nurture relationships and turn them into loyal customers. Perfect for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-emerald-600" />,
                title: "Secure & Private",
                description: "End-to-end encryption ensures your community conversations stay private and secure."
              },
              {
                icon: <Zap className="w-8 h-8 text-blue-600" />,
                title: "Lightning Fast",
                description: "Built for speed with real-time messaging and instant notifications."
              },
              {
                icon: <Users className="w-8 h-8 text-purple-600" />,
                title: "Team Collaboration",
                description: "Seamlessly collaborate with team members and manage community together."
              },
              {
                icon: <Globe className="w-8 h-8 text-green-600" />,
                title: "Global Reach",
                description: "Connect with people from around the world with multi-language support."
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-orange-600" />,
                title: "Rich Messaging",
                description: "Share files, images, videos and create rich conversation experiences."
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-teal-600" />,
                title: "Easy Integration",
                description: "Simple setup with powerful APIs and webhook integrations."
              }
            ].map((feature, index) => (
              <Card key={index} className="border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Support clients of all shapes and sizes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Finance & Banking", color: "bg-emerald-500", icon: "💰" },
              { title: "Healthcare Solutions", color: "bg-blue-500", icon: "🏥" },
              { title: "Educational Platforms", color: "bg-purple-500", icon: "🎓" },
              { title: "E-commerce Stores", color: "bg-orange-500", icon: "🛍️" },
              { title: "Technology Startups", color: "bg-teal-500", icon: "🚀" },
              { title: "Creative Agencies", color: "bg-pink-500", icon: "🎨" }
            ].map((item, index) => (
              <Card key={index} className={`${item.color} text-white hover:scale-105 transition-transform duration-300 cursor-pointer`}>
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Community, without limits.
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of businesses building meaningful connections with their customers.
          </p>
          
          <div className="relative">
            <div className="flex justify-center items-center space-x-8 mb-12">
              {[
                { color: "bg-blue-500", icon: "👥" },
                { color: "bg-emerald-500", icon: "💬" },
                { color: "bg-orange-500", icon: "🚀" },
                { color: "bg-purple-500", icon: "⭐" },
                { color: "bg-pink-500", icon: "💡" },
                { color: "bg-teal-500", icon: "🌟" },
                { color: "bg-yellow-500", icon: "🎯" },
                { color: "bg-red-500", icon: "❤️" }
              ].map((item, index) => (
                <div key={index} className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white text-lg animate-pulse`} style={{ animationDelay: `${index * 0.2}s` }}>
                  {item.icon}
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
              Join our community
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              iOS. Android. Web. It just works.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Access your community from anywhere, on any device.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" className="bg-black text-white hover:bg-gray-800">
                <Smartphone className="w-5 h-5 mr-2" />
                Download iOS
              </Button>
              <Button variant="outline" className="bg-black text-white hover:bg-gray-800">
                <Monitor className="w-5 h-5 mr-2" />
                Download Android
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Seamless experience across all devices
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Whether you're on mobile, tablet, or desktop, your community experience remains consistent and beautiful.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Real-time synchronization",
                      "Offline mode support",
                      "Push notifications",
                      "Cross-platform compatibility"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Monitor className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">Multi-Platform</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
          <blockquote className="text-2xl font-medium text-gray-900 mb-6">
            "In the next decade we will be dominated by Community Link or support. Vision doors right, community drives sales behaviors through better customer experience and increased alignment between your business and your customers."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              G
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Google</p>
              <p className="text-gray-600">Technology Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to create your community experience?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of businesses already building stronger relationships with their customers.
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-50 px-8 py-3">
            Get started free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Greetza</span>
              </div>
              <p className="text-gray-400">
                Building meaningful connections between businesses and their customers.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Community Building</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customer Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Team Collaboration</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integration</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Greetza. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
