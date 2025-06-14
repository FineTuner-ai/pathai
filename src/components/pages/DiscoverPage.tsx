
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  TrendingUp, 
  Star, 
  Calendar,
  MapPin,
  Users,
  BookOpen,
  ArrowRight
} from "lucide-react";

const DiscoverPage = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Discover Opportunities</h1>
        <p className="text-gray-600 text-lg">Explore trending programs, universities, and research areas</p>
      </div>

      {/* Trending Topics */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-6">
          <TrendingUp className="w-5 h-5 text-teal-600" />
          <h2 className="text-xl font-semibold text-gray-900">Trending Research Areas</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Artificial Intelligence",
            "Quantum Computing",
            "Climate Science",
            "Biotechnology",
            "Renewable Energy",
            "Space Technology",
            "Neuroscience",
            "Cybersecurity"
          ].map((topic, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 justify-start hover:bg-teal-50 hover:border-teal-200"
            >
              <div className="text-left">
                <div className="font-medium text-gray-900">{topic}</div>
                <div className="text-sm text-gray-500">+{Math.floor(Math.random() * 50 + 10)}% interest</div>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Featured Universities */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-teal-600" />
            <h2 className="text-xl font-semibold text-gray-900">Featured Universities</h2>
          </div>
          <Button variant="ghost" className="text-teal-600 hover:text-teal-700">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "MIT",
              location: "Cambridge, MA",
              programs: 127,
              rating: 4.9,
              specialty: "Technology & Engineering"
            },
            {
              name: "Stanford University",
              location: "Stanford, CA",
              programs: 98,
              rating: 4.8,
              specialty: "Computer Science & AI"
            },
            {
              name: "Oxford University",
              location: "Oxford, UK",
              programs: 156,
              rating: 4.9,
              specialty: "Research & Academia"
            }
          ].map((university, index) => (
            <Card key={index} className="hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{university.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {university.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm font-medium text-amber-600">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {university.rating}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">{university.specialty}</div>
                  <div className="flex items-center text-sm text-gray-500">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {university.programs} Programs Available
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Deadlines */}
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <Calendar className="w-5 h-5 text-teal-600" />
          <h2 className="text-xl font-semibold text-gray-900">Upcoming Deadlines</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              title: "PhD Applications - Computer Science",
              university: "Carnegie Mellon University",
              deadline: "December 15, 2024",
              daysLeft: 45
            },
            {
              title: "Graduate Research Fellowship",
              university: "National Science Foundation",
              deadline: "January 20, 2025",
              daysLeft: 81
            },
            {
              title: "Master's Program - Data Science",
              university: "University of California, Berkeley",
              deadline: "February 1, 2025",
              daysLeft: 93
            }
          ].map((deadline, index) => (
            <Card key={index} className="hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">{deadline.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{deadline.university}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      Due: {deadline.deadline}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      deadline.daysLeft <= 30 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {deadline.daysLeft} days left
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;
