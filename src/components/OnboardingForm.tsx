
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Upload, GraduationCap } from "lucide-react";

const OnboardingForm = () => {
  const [researchInterest, setResearchInterest] = useState('');
  const [programType, setProgramType] = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { researchInterest, programType, cvFile });
    // This would trigger the University Discovery Agent
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  return (
    <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-2xl shadow-blue-500/20">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your Journey</h3>
          <p className="text-gray-600">Tell us about your research interests to get personalized matches</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="research" className="block text-sm font-medium text-gray-700 mb-2">
              Research Interest *
            </label>
            <input
              id="research"
              type="text"
              value={researchInterest}
              onChange={(e) => setResearchInterest(e.target.value)}
              placeholder="e.g., AI in agriculture, Sustainable architecture"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
              Target Program Type *
            </label>
            <select
              id="program"
              value={programType}
              onChange={(e) => setProgramType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            >
              <option value="">Select program type</option>
              <option value="masters">Master's</option>
              <option value="phd">PhD</option>
              <option value="postdoc">Postdoc</option>
            </select>
          </div>

          <div>
            <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-2">
              Upload CV/Resume (Optional)
            </label>
            <div className="relative">
              <input
                id="cv"
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
              <label
                htmlFor="cv"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl cursor-pointer flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-all"
              >
                <Upload className="w-5 h-5 mr-2" />
                {cvFile ? cvFile.name : 'Choose file'}
              </label>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl"
          >
            Start Discovery
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default OnboardingForm;
