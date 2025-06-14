
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Upload, 
  FileText, 
  Bookmark, 
  Download,
  Eye,
  Trash2,
  Plus,
  Search,
  Filter,
  FolderOpen
} from "lucide-react";
import { useState } from "react";

const LibraryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Library</h1>
          <p className="text-gray-600">Manage your saved documents, bookmarks, and resources</p>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700">
          <Plus className="w-4 h-4 mr-2" />
          Upload Document
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4 bg-white p-4 rounded-lg border border-gray-100">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search your library..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: "Research Papers", count: 23, icon: FileText, color: "bg-blue-50 text-blue-600" },
          { name: "Bookmarks", count: 45, icon: Bookmark, color: "bg-green-50 text-green-600" },
          { name: "Applications", count: 12, icon: Upload, color: "bg-purple-50 text-purple-600" },
          { name: "Documents", count: 18, icon: FolderOpen, color: "bg-orange-50 text-orange-600" }
        ].map((category, index) => (
          <Card key={index} className="hover:shadow-md transition-all cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className={`w-12 h-12 rounded-lg ${category.color} mx-auto mb-3 flex items-center justify-center`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.count} items</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Documents */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Documents</h2>
        <div className="space-y-4">
          {[
            {
              name: "Research Proposal - AI in Healthcare.pdf",
              type: "PDF",
              size: "2.4 MB",
              modified: "2 hours ago",
              status: "Draft"
            },
            {
              name: "Stanford Application SOP.docx",
              type: "DOC",
              size: "1.8 MB",
              modified: "1 day ago",
              status: "Complete"
            },
            {
              name: "Professor Contact List.xlsx",
              type: "XLS",
              size: "0.9 MB",
              modified: "3 days ago",
              status: "Updated"
            },
            {
              name: "Scholarship Requirements.pdf",
              type: "PDF",
              size: "1.2 MB",
              modified: "1 week ago",
              status: "Saved"
            }
          ].map((doc, index) => (
            <Card key={index} className="hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{doc.name}</h3>
                      <p className="text-sm text-gray-500">{doc.type} • {doc.size} • Modified {doc.modified}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      doc.status === 'Complete' ? 'bg-green-100 text-green-700' :
                      doc.status === 'Draft' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {doc.status}
                    </span>
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
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

export default LibraryPage;
