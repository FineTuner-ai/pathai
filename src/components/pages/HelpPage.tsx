
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  HelpCircle, 
  MessageCircle, 
  Book,
  Mail,
  Phone,
  Search,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

const HelpPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Help & Support</h1>
        <p className="text-gray-600 text-lg">Find answers to your questions and get the help you need</p>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search help articles..."
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Contact Support",
            description: "Get direct help from our support team",
            icon: MessageCircle,
            color: "bg-blue-50 text-blue-600",
            action: "Chat Now"
          },
          {
            title: "Video Tutorials",
            description: "Watch step-by-step video guides",
            icon: Book,
            color: "bg-green-50 text-green-600",
            action: "Watch Videos"
          },
          {
            title: "Feature Request",
            description: "Suggest new features or improvements",
            icon: Settings,
            color: "bg-purple-50 text-purple-600",
            action: "Submit Idea"
          }
        ].map((action, index) => (
          <Card key={index} className="hover:shadow-lg transition-all cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className={`w-16 h-16 rounded-full ${action.color} mx-auto mb-4 flex items-center justify-center`}>
                <action.icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{action.description}</p>
              <Button variant="outline" size="sm">
                {action.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQ Categories */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              category: "Getting Started",
              questions: [
                "How do I create my first application?",
                "How to set up my profile?",
                "What information do I need to provide?",
                "How to search for universities?"
              ]
            },
            {
              category: "Applications",
              questions: [
                "How to track my applications?",
                "Can I edit submitted applications?",
                "How to upload documents?",
                "What are the deadlines?"
              ]
            },
            {
              category: "Scholarships",
              questions: [
                "How to find relevant scholarships?",
                "What documents are required?",
                "How to apply for funding?",
                "When are results announced?"
              ]
            },
            {
              category: "Account & Billing",
              questions: [
                "How to update my account?",
                "How to change my password?",
                "What are the subscription plans?",
                "How to cancel my subscription?"
              ]
            }
          ].map((category, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.questions.map((question, qIndex) => (
                    <div
                      key={qIndex}
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer group"
                    >
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">
                        {question}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-gray-900 mb-6">Contact Us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Email Support</h4>
              <p className="text-sm text-gray-600 mb-3">Get help via email within 24 hours</p>
              <Button variant="outline" size="sm">
                support@pharmaiq.com
                <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Live Chat</h4>
              <p className="text-sm text-gray-600 mb-3">Chat with us in real-time</p>
              <Button variant="outline" size="sm">Start Chat</Button>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Phone Support</h4>
              <p className="text-sm text-gray-600 mb-3">Call us during business hours</p>
              <Button variant="outline" size="sm">
                +1 (555) 123-4567
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpPage;
