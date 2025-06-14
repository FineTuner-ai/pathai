
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Plus, 
  Upload,
  Mic,
  Paperclip,
  FileText,
  Image,
  Code,
  MessageSquare
} from "lucide-react";

const New = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const templates = [
    {
      title: "Research Proposal",
      description: "Create a comprehensive research proposal with structured sections",
      icon: <FileText className="w-6 h-6 text-blue-600" />
    },
    {
      title: "University Application",
      description: "Draft your university application essays and statements",
      icon: <Upload className="w-6 h-6 text-green-600" />
    },
    {
      title: "Academic Paper",
      description: "Write and format academic papers with proper citations",
      icon: <Code className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Email Template",
      description: "Generate professional emails for professors and institutions",
      icon: <MessageSquare className="w-6 h-6 text-orange-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Create Something New
          </h1>
          <p className="text-gray-600">
            Start with a template or create from scratch
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative bg-white rounded-lg border border-gray-200">
            <div className="flex items-center px-4 py-4">
              <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
              <input
                type="text"
                placeholder="What would you like to create?"
                className="flex-1 text-base bg-transparent border-none outline-none placeholder-gray-400 text-gray-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="flex items-center space-x-2 ml-3">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-gray-600 p-2 h-auto"
                >
                  <Paperclip className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-gray-600 p-2 h-auto"
                >
                  <Mic className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {templates.map((template, index) => (
            <Card 
              key={index} 
              className="cursor-pointer hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-gray-200 bg-white"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    {template.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {template.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {template.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex justify-center space-x-4">
          <Button className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Start from Scratch</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Image className="w-4 h-4" />
            <span>Upload Document</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default New;
