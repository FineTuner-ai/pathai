
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search, Users, BookOpen, Mail, FileText, Award, Globe, Brain, Zap, Target, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const agents = [
    {
      name: "University Discovery Agent",
      description: "Semantic search across global university databases with intelligent filtering",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      name: "Professor Matching Agent",
      description: "AI-powered matching with faculty based on research overlap and compatibility",
      icon: <Users className="w-6 h-6" />,
      color: "bg-green-500"
    },
    {
      name: "Professor Insight Agent",
      description: "Deep research analysis and publication insights from multiple academic sources",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-purple-500"
    },
    {
      name: "Scholarship Discovery Agent",
      description: "Comprehensive funding search across internal and external scholarship databases",
      icon: <Award className="w-6 h-6" />,
      color: "bg-yellow-500"
    },
    {
      name: "Cold Email Generator",
      description: "Personalized outreach emails using CV analysis and professor insights",
      icon: <Mail className="w-6 h-6" />,
      color: "bg-red-500"
    },
    {
      name: "SOP Enhancement Agent",
      description: "AI-powered statement refinement tailored to specific programs and professors",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-indigo-500"
    }
  ];

  const features = [
    {
      title: "Intelligent University Discovery",
      description: "Advanced semantic search across global academic databases to find the perfect program match for your research interests.",
      icon: <Search className="w-8 h-8" />
    },
    {
      title: "Professor Research Alignment",
      description: "Deep analysis of faculty research using NLP to identify professors whose work aligns with your academic goals.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Comprehensive Funding Search",
      description: "Automated discovery of scholarships, fellowships, and fee waivers from universities and external organizations.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Personalized Application Materials",
      description: "AI-generated cold emails and enhanced SOPs tailored to specific programs and professors.",
      icon: <FileText className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Agentics AI
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
            <Link to="#agents" className="text-gray-600 hover:text-gray-900 transition-colors">AI Agents</Link>
            <Link to="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it Works</Link>
            <Button variant="outline" className="ml-4">Sign In</Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
            <Zap className="w-3 h-3 mr-1" />
            Powered by Advanced AI Agents
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
            Your AI-Powered Academic
            <br />
            Application Assistant
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Navigate your graduate school journey with intelligent agents that discover universities, 
            match you with professors, find scholarships, and craft personalized application materials.
          </p>

          {/* Search-like Input */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative bg-white rounded-2xl shadow-lg border border-gray-200 p-2">
              <div className="flex items-center">
                <Search className="w-5 h-5 text-gray-400 ml-4" />
                <input 
                  type="text" 
                  placeholder="Enter your research interest (e.g., 'AI in agriculture', 'Sustainable architecture')"
                  className="flex-1 px-4 py-4 text-lg bg-transparent outline-none placeholder-gray-400"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl px-6">
                  Start Discovery
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            
            {/* Quick Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {["Machine Learning", "Biomedical Engineering", "Climate Science", "Digital Humanities", "Quantum Computing"].map((tag) => (
                <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-gray-200 transition-colors">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg">
              Begin Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything you need for your academic journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI agents work together to provide comprehensive support throughout your graduate school application process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section id="agents" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Your AI Agent Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each specialized agent handles a different aspect of your application journey, working together seamlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <Card key={index} className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${agent.color} rounded-lg flex items-center justify-center text-white`}>
                      {agent.icon}
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {agent.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {agent.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Agentics AI Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined workflow powered by intelligent agents that guide you through every step.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: "01", title: "Onboarding & Input Collection", description: "Share your research interests, target program type, and upload your CV to get started." },
                { step: "02", title: "University & Professor Discovery", description: "Our agents perform semantic searches to find matching universities and faculty members." },
                { step: "03", title: "Funding & Scholarship Search", description: "Discover internal fellowships, external scholarships, and application fee waivers." },
                { step: "04", title: "Application Material Generation", description: "Generate personalized cold emails and enhanced SOPs tailored to each program." },
                { step: "05", title: "Complete Application Toolkit", description: "Receive your comprehensive application package ready for submission." }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to transform your academic journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who have successfully navigated their graduate school applications with AI assistance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Agentics AI</span>
              </div>
              <p className="text-gray-400">
                Empowering students with AI-driven academic application assistance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="#" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">AI Agents</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="#" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Agentics AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
