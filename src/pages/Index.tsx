
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
  BarChart3,
  Rocket,
  Trophy
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-bold text-gray-900">MarkitUp</span>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  Home
                </Link>
                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  Services
                </Link>
                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  About
                </Link>
                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg">
                Join us on Discord
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
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 text-blue-300">
          <div className="w-6 h-6 rotate-45 border-2 border-current"></div>
        </div>
        <div className="absolute top-32 right-32 text-blue-300">
          <div className="w-4 h-4 rotate-45 border-2 border-current"></div>
        </div>
        <div className="absolute bottom-40 left-40 text-blue-300">
          <div className="w-8 h-8 rotate-45 border-2 border-current"></div>
        </div>
        <div className="absolute bottom-32 right-20 text-blue-300">
          <div className="w-6 h-6 rotate-45 border-2 border-current"></div>
        </div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Join India's First<br />
              <span className="text-blue-600">Builders Community</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              We help individuals to grow by unleashing the potential of social media 🚀
            </p>

            {/* Community Image with floating avatars */}
            <div className="relative max-w-2xl mx-auto mb-16">
              <div className="bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Community celebration" 
                  className="w-full h-64 object-cover rounded-2xl"
                />
                
                {/* Floating elements */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-between mt-8 max-w-md mx-auto">
                <div className="text-left">
                  <div className="text-sm text-gray-600 mb-2">Trusted by</div>
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{i}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <div>
                      <div className="text-sm font-bold text-gray-900">Best Community</div>
                      <div className="text-xs text-gray-600">Award 2022</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">40,000+</div>
                <div className="text-blue-100">Community members</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">300+</div>
                <div className="text-blue-100">Discord Sessions</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-blue-100">Side projects done</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything you need to build an<br />
              amazing community experience
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Community Building</h3>
                <p className="text-gray-600">Connect with like-minded builders and grow together</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Skill Development</h3>
                <p className="text-gray-600">Learn new skills and improve your existing ones</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Project Support</h3>
                <p className="text-gray-600">Get help and feedback on your side projects</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg rounded-lg">
              Join Our Community
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-bold text-gray-900">MarkitUp</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Building India's first builders community to help individuals grow.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg text-gray-900">Community</h4>
              <ul className="space-y-3 text-gray-600">
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Discord</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Events</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Projects</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Mentorship</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg text-gray-900">Resources</h4>
              <ul className="space-y-3 text-gray-600">
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Getting Started</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Guidelines</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Help Center</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg text-gray-900">Company</h4>
              <ul className="space-y-3 text-gray-600">
                <li><Link to="#" className="hover:text-blue-600 transition-colors">About</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Blog</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Careers</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 MarkitUp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
