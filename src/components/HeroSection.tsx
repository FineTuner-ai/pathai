
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Target } from "lucide-react";
import OnboardingForm from './OnboardingForm';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-40 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-40 left-40 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>
      
      {/* Floating icons */}
      <div className="absolute top-32 right-20 w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
        <Star className="w-8 h-8 text-yellow-500" />
      </div>
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
        <Target className="w-8 h-8 text-blue-500" />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Trust indicators */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-sm text-gray-600 font-medium">Trusted by</span>
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-600">40,000+ students</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Join the Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                Academic Discovery
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              We help individuals grow by unleashing the potential of AI-powered university matching, professor insights, and personalized application assistance 🚀
            </p>

            {/* Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 mr-2" />
                  </div>
                  <div className="text-2xl font-bold">40,000+</div>
                  <div className="text-sm text-blue-100">Students matched</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Target className="w-6 h-6 mr-2" />
                  </div>
                  <div className="text-2xl font-bold">300+</div>
                  <div className="text-sm text-blue-100">Universities covered</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-6 h-6 mr-2" />
                  </div>
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm text-blue-100">Success stories</div>
                </div>
              </div>
            </div>

            {/* Award badge */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-900">Best AI Platform</div>
                <div className="text-sm text-gray-600">Award 2024</div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex justify-center lg:justify-end">
            <OnboardingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
