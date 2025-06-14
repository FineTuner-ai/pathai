
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Globe, 
  Users, 
  Award, 
  BookOpen,
  MapPin,
  Star,
  Filter
} from "lucide-react";

const Discovery = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const discoveries = [
    {
      title: "MIT Computer Science PhD Program",
      description: "World-renowned program with focus on AI and machine learning research",
      location: "Cambridge, MA",
      rating: 4.9,
      type: "University",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Dr. Sarah Chen - Stanford AI Lab",
      description: "Leading researcher in natural language processing and deep learning",
      location: "Stanford, CA",
      rating: 4.8,
      type: "Professor",
      icon: <Users className="w-5 h-5 text-green-600" />
    },
    {
      title: "NSF Graduate Research Fellowship",
      description: "Prestigious fellowship providing funding for graduate research",
      location: "National",
      rating: 4.7,
      type: "Scholarship",
      icon: <Award className="w-5 h-5 text-yellow-600" />
    },
    {
      title: "ETH Zurich Robotics Program",
      description: "Top European program combining AI, robotics, and computer vision",
      location: "Zurich, Switzerland",
      rating: 4.9,
      type: "University",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    }
  ];

  const categories = [
    "All",
    "Universities",
    "Professors",
    "Scholarships",
    "Programs",
    "Research"
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Discover Opportunities
          </h1>
          <p className="text-gray-600">
            Find universities, professors, scholarships, and research programs
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search universities, professors, programs..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </Button>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-6">
          {discoveries.map((item, index) => (
            <Card 
              key={index} 
              className="cursor-pointer hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-gray-200 bg-white"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="p-3 bg-gray-50 rounded-xl">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">
                        {item.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>{item.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discovery;
