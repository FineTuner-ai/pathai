
import { Settings as SettingsIcon, User, Bell, Shield, Palette, Globe, HelpCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  const settingsSections = [
    {
      title: "Profile Settings",
      icon: User,
      items: [
        { label: "Full Name", type: "input", value: "John Doe" },
        { label: "Email", type: "input", value: "john.doe@email.com" },
        { label: "Research Interests", type: "input", value: "AI, Machine Learning" }
      ]
    },
    {
      title: "Notifications",
      icon: Bell,
      items: [
        { label: "Email Notifications", type: "switch", checked: true },
        { label: "Push Notifications", type: "switch", checked: false },
        { label: "Professor Match Alerts", type: "switch", checked: true },
        { label: "Application Reminders", type: "switch", checked: true }
      ]
    },
    {
      title: "Privacy & Security",
      icon: Shield,
      items: [
        { label: "Make Profile Public", type: "switch", checked: false },
        { label: "Share Research Interests", type: "switch", checked: true },
        { label: "Two-Factor Authentication", type: "switch", checked: false }
      ]
    },
    {
      title: "Appearance",
      icon: Palette,
      items: [
        { label: "Dark Mode", type: "switch", checked: false },
        { label: "Compact View", type: "switch", checked: false }
      ]
    },
    {
      title: "Language & Region",
      icon: Globe,
      items: [
        { label: "Language", type: "select", value: "English" },
        { label: "Time Zone", type: "select", value: "UTC-5" },
        { label: "Date Format", type: "select", value: "MM/DD/YYYY" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <SettingsIcon className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {settingsSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Icon className="w-5 h-5 text-gray-600" />
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between">
                      <Label htmlFor={`${section.title}-${itemIndex}`} className="text-sm font-medium text-gray-700">
                        {item.label}
                      </Label>
                      
                      {item.type === 'input' && (
                        <Input
                          id={`${section.title}-${itemIndex}`}
                          defaultValue={item.value}
                          className="w-64"
                        />
                      )}
                      
                      {item.type === 'switch' && (
                        <Switch
                          id={`${section.title}-${itemIndex}`}
                          defaultChecked={item.checked}
                        />
                      )}
                      
                      {item.type === 'select' && (
                        <select className="w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option value={item.value}>{item.value}</option>
                        </select>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Options */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Additional Options</h2>
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <HelpCircle className="w-4 h-4 mr-3" />
              Help & Support
            </Button>
            <Separator />
            <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="w-4 h-4 mr-3" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
