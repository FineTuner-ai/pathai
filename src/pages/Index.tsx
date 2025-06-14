
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
  Trophy,
  Sparkles,
  University,
  UserCheck,
  FileSearch,
  DollarSign,
  Send,
  PenTool
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50/30">
      {/* Header */}
      <header className="bg-white/80 sticky top-0 z-50 shadow-sm border-b backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Agentics AI</span>
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
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-xl transition-all duration-300">
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
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-40 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-40 left-40 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl animate-pulse"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center animate-float">
          <University className="w-8 h-8 text-blue-500" />
        </div>
        <div className="absolute top-64 left-32 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center animate-bounce">
          <Brain className="w-7 h-7 text-purple-500" />
        </div>
        <div className="absolute bottom-32 right-32 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center animate-pulse">
          <Sparkles className="w-8 h-8 text-emerald-500" />
        </div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Detailed Intelligent System Workflow</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-scale-in">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                Agentics AI:
              </span>
              <br />
              <span className="text-gray-800">
                Intelligent Academic
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Discovery Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              From university discovery to personalized applications - our AI agents work together to streamline your academic journey with intelligent matching, professor insights, and tailored application materials 🚀
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 group">
                <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Start Applications
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 group">
                <Users className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                Join Community
                <MessageCircle className="w-5 h-5 ml-3 group-hover:animate-bounce transition-all" />
              </Button>
            </div>

            {/* Community Showcase with floating avatars */}
            <div className="relative max-w-4xl mx-auto mb-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Academic community collaboration" 
                  className="w-full h-72 object-cover rounded-2xl shadow-lg"
                />
                
                {/* Floating AI Agent Icons */}
                <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <Search className="w-7 h-7 text-white" />
                </div>
                <div className="absolute top-8 right-8 w-14 h-14 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <UserCheck className="w-7 h-7 text-white" />
                </div>
                <div className="absolute bottom-8 left-8 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="absolute bottom-4 right-4 w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <PenTool className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Trust indicators with enhanced styling */}
              <div className="flex items-center justify-between mt-8 max-w-2xl mx-auto">
                <div className="text-left">
                  <div className="text-sm text-gray-600 mb-3 font-medium">Trusted by</div>
                  <div className="flex -space-x-3">
                    {[1,2,3,4,5,6].map((i) => (
                      <div key={i} className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-3 border-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <span className="text-white text-sm font-bold">{i}</span>
                      </div>
                    ))}
                    <div className="w-10 h-10 bg-gray-100 rounded-full border-3 border-white flex items-center justify-center shadow-lg">
                      <span className="text-gray-600 text-xs font-bold">40K+</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-2xl shadow-2xl">
                    <Trophy className="w-6 h-6 text-white" />
                    <div className="text-white">
                      <div className="text-lg font-bold">Best AI Platform</div>
                      <div className="text-sm opacity-90">Award 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Enhanced Design */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-12 text-white shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center group hover:scale-105 transition-transform">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <University className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl font-bold mb-3">300+</div>
                <div className="text-blue-100 text-lg">Universities Covered</div>
              </div>
              <div className="flex flex-col items-center group hover:scale-105 transition-transform">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <UserCheck className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl font-bold mb-3">40,000+</div>
                <div className="text-blue-100 text-lg">Students Matched</div>
              </div>
              <div className="flex flex-col items-center group hover:scale-105 transition-transform">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl font-bold mb-3">1000+</div>
                <div className="text-blue-100 text-lg">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Workflow Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Intelligent AI Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nine specialized AI agents working together to create your complete application toolkit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">University Discovery</h3>
                <p className="text-gray-600">Semantic search across global universities matching your research interests</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Professor Matching</h3>
                <p className="text-gray-600">AI-powered matching with professors whose research aligns with yours</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Professor Insights</h3>
                <p className="text-gray-600">Deep research analysis and publication summaries for targeted outreach</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Scholarship Discovery</h3>
                <p className="text-gray-600">Find funding opportunities including fellowships and external scholarships</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Fee Waiver Agent</h3>
                <p className="text-gray-600">Automatically find and apply for application fee waivers</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Cold Email Generator</h3>
                <p className="text-gray-600">Personalized outreach emails based on your CV and professor research</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-2xl shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Explore All AI Agents
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white/80 backdrop-blur-sm border-t">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Agentics AI</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Intelligent academic discovery platform powered by AI agents for seamless university applications.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg text-gray-900">Platform</h4>
              <ul className="space-y-3 text-gray-600">
                <li><Link to="#" className="hover:text-blue-600 transition-colors">University Search</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Professor Matching</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Scholarship Finder</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Application Tools</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg text-gray-900">Resources</h4>
              <ul className="space-y-3 text-gray-600">
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Getting Started</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">AI Agent Guide</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Success Stories</Link></li>
                <li><Link to="#" className="hover:text-blue-600 transition-colors">Help Center</Link></li>
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
            <p>&copy; 2024 Agentics AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
