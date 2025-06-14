
import { useState } from "react";
import Navigation from "@/components/Navigation";
import HomePage from "@/components/pages/HomePage";
import DiscoverPage from "@/components/pages/DiscoverPage";
import LibraryPage from "@/components/pages/LibraryPage";
import ProfilePage from "@/components/pages/ProfilePage";
import HelpPage from "@/components/pages/HelpPage";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomePage />;
      case "discover":
        return <DiscoverPage />;
      case "library":
        return <LibraryPage />;
      case "profile":
        return <ProfilePage />;
      case "help":
        return <HelpPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
