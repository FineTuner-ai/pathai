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
  Bot
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Ultra Modern Navigation */}
      <header className="border-b bg-white/95 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 ring-1 ring-blue-500/20">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 via-purple-700 to-blue-800 bg-clip-text text-transparent tracking-tight">Agentics AI</span>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-all duration-200 font-medium relative group">
                  Features
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-all duration-200 font-medium relative group">
                  Workflow
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-all duration-200 font-medium relative group">
                  Resources
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-all duration-200 font-medium relative group">
                  Pricing
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </nav>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                Log in
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 border-0">
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2" />
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
      <section className="py-32 bg-gradient-to-br from-blue-50 via-purple-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto text-center">
            {/* Floating badges */}
            <div className="relative mb-16">
              <div className="absolute -top-8 left-1/4 transform -translate-x-1/2">
                <div className="bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl px-4 py-2 shadow-xl shadow-blue-500/10">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">University Discovery</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 right-1/3 transform translate-x-1/2">
                <div className="bg-white/80 backdrop-blur-sm border border-purple-200/50 rounded-2xl px-4 py-2 shadow-xl shadow-purple-500/10">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700">Professor Matching</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-1/4 transform translate-x-1/2">
                <div className="bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-2xl px-4 py-2 shadow-xl shadow-emerald-500/10">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">Scholarships</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 bg-clip-text text-transparent">Agentics AI</span><br />
                <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent text-5xl md:text-6xl">Detailed Intelligent System</span>
              </h1>
            </div>
            
            <p className="text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              Streamline your graduate school journey with AI-powered university discovery, 
              professor matching, scholarship finding, and personalized application assistance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-12 py-6 text-xl shadow-2xl shadow-blue-500/25 hover:shadow-3xl hover:shadow-blue-500/30 transition-all duration-300 border-0 rounded-2xl">
                Start Your Journey
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              <Button size="lg" variant="outline" className="px-12 py-6 text-xl border-2 border-gray-200 hover:bg-gray-50 hover:border-blue-300 transition-all duration-300 rounded-2xl">
                <Play className="w-6 h-6 mr-3" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-blue-500/10 overflow-hidden border border-gray-100/50">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="AI Workflow Demo" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center backdrop-blur-[1px]">
                  <div className="w-24 h-24 bg-white/95 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer group">
                    <Play className="w-12 h-12 text-blue-600 ml-1 group-hover:text-blue-700 transition-colors" />
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

      {/* Workflow Features Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent leading-tight">
              Complete Application<br />Workflow System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From university discovery to application submission - our AI agents handle every step of your graduate school journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 max-w-7xl mx-auto items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-12 rounded-3xl text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative">
                  <Brain className="w-16 h-16 mb-8" />
                  <h3 className="text-3xl font-bold mb-6">Intelligent Agent System</h3>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    9 specialized AI agents work together to discover universities, match professors, find scholarships, and craft perfect applications tailored to your research interests.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Search, title: "University Discovery", desc: "Global database search" },
                  { icon: Users, title: "Professor Matching", desc: "Research alignment analysis" },
                  { icon: Award, title: "Scholarship Finding", desc: "Funding opportunities" },
                  { icon: Mail, title: "Cold Email Generation", desc: "Personalized outreach" }
                ].map((feature, index) => (
                  <div key={index} className="bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
                    <feature.icon className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="mb-10">
                  <div className="w-20 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-8 flex items-center justify-center">
                    <Database className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold mb-4">AI Workflow Dashboard</h4>
                  <p className="text-blue-100">Track your application progress across all stages</p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { stage: "Onboarding Complete", progress: "100%", color: "from-green-500 to-emerald-500" },
                    { stage: "University Discovery", progress: "87%", color: "from-blue-500 to-cyan-500" },
                    { stage: "Professor Matching", progress: "62%", color: "from-purple-500 to-pink-500" },
                    { stage: "Application Review", progress: "34%", color: "from-orange-500 to-red-500" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium">{item.stage}</span>
                        <span className="text-sm text-blue-200">{item.progress}</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className={`bg-gradient-to-r ${item.color} h-2 rounded-full transition-all duration-500`} style={{width: item.progress}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Cards Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent leading-tight">
              Complete Application<br />Toolkit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for successful graduate school applications, powered by intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main Feature Card */}
            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-10 lg:col-span-2 border-0 shadow-2xl shadow-blue-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <CardContent className="p-0 relative z-10">
                <Target className="w-16 h-16 mb-8" />
                <h3 className="font-bold text-2xl mb-4">Intelligent Matching System</h3>
                <p className="text-blue-100 leading-relaxed text-lg mb-6">
                  Our AI analyzes your research interests and matches you with the perfect universities, professors, and funding opportunities globally.
                </p>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-200">
                  Explore Matching
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Feature Cards */}
            {[
              {
                icon: GraduationCap,
                title: "University Discovery",
                desc: "Semantic search across global universities and programs",
                image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Users,
                title: "Professor Insights",
                desc: "Detailed research profiles and publication analysis",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Award,
                title: "Scholarship Discovery",
                desc: "Internal fellowships and external funding opportunities",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                icon: Mail,
                title: "Cold Email Generator",
                desc: "Personalized professor outreach based on research alignment",
                image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: FileText,
                title: "SOP Enhancement",
                desc: "AI-powered statement of purpose optimization",
                image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                gradient: "from-indigo-500 to-purple-500"
              }
            ].map((card, index) => (
              <Card key={index} className="bg-white border-0 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-80`}></div>
                    <div className="absolute bottom-4 left-4">
                      <card.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-bold text-xl text-gray-800 mb-3">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Academic Network,<br />without Limits.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">Connect with universities, professors, and opportunities across all academic platforms and databases.</p>
          </div>

          {/* Academic Platform Icons */}
          <div className="relative max-w-lg mx-auto h-80 mb-16">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div className="absolute top-12 right-12 w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="absolute top-20 left-8 w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="absolute bottom-20 right-8 w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Search className="w-8 h-8 text-white" />
            </div>
            <div className="absolute bottom-12 left-12 w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-xl">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-xl">
              <Database className="w-8 h-8 text-white" />
            </div>
          </div>

          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-10 py-4 text-lg shadow-xl">
            Start Discovery
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Cross Platform Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Web. Mobile. Desktop.<br />Seamless Experience.
          </h2>
          <p className="text-xl text-gray-600 mb-16">Access your application toolkit anywhere</p>

          <div className="flex justify-center space-x-6 mb-16">
            <Button variant="outline" className="bg-gray-900 text-white border-gray-900 hover:bg-gray-800 px-8 py-4 text-lg">
              <Monitor className="w-5 h-5 mr-3" />
              Web App
            </Button>
            <Button variant="outline" className="bg-gray-900 text-white border-gray-900 hover:bg-gray-800 px-8 py-4 text-lg">
              <Smartphone className="w-5 h-5 mr-3" />
              Mobile App
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
            <Quote className="w-16 h-16 text-blue-500 mx-auto mb-8" />
            <blockquote className="text-3xl font-medium text-gray-900 mb-12 leading-relaxed">
              "Agentics AI transformed my graduate school application process. The AI agents found perfect university matches, connected me with relevant professors, and even helped craft personalized emails. I secured admission with full funding!"
            </blockquote>
            <div className="flex items-center justify-center space-x-6">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                alt="Success story" 
                className="w-16 h-16 rounded-full border-4 border-blue-100"
              />
              <div className="text-left">
                <p className="font-bold text-lg">Sarah Chen</p>
                <p className="text-gray-500">PhD Student, MIT</p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <div className="h-12 px-6 bg-gray-100 rounded-full flex items-center">
                <span className="text-gray-600 font-medium">MIT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-5xl font-bold mb-8 leading-tight">Ready to transform your<br />graduate school journey?</h2>
            <div className="flex justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg shadow-xl">
                Start Free Trial
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
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Agentics AI</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Intelligent systems for academic success.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Solutions</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="#" className="hover:text-white transition-colors">University Discovery</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Professor Matching</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Scholarship Finding</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Application Tools</Link></li>
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
            <p>&copy; 2024 Agentics AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
