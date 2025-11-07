import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Instagram, Facebook, Youtube, Plane, Camera, Mountain, Star, Bus, Wifi, Calendar, Compass, Users, Sparkles, ArrowRight, Play, Globe, Clock, MapIcon, CreditCard, Zap } from 'lucide-react';

const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <div 
    className="animate-float" 
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);

const PulsingIcon = ({ icon: Icon, delay = 0 }: { icon: any; delay?: number }) => (
  <div 
    className="animate-pulse" 
    style={{ animationDelay: `${delay}s` }}
  >
    <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-turquoise-400" />
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, color, delay }: { 
  icon: any; 
  title: string; 
  description: string; 
  color: string;
  delay: number;
}) => (
  <div 
    className="group bg-white/95 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slide-up"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className={`w-12 h-12 sm:w-16 sm:h-16 ${color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{title}</h3>
    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
    <div className="mt-4 sm:mt-6 flex items-center text-turquoise-600 font-semibold group-hover:text-turquoise-700 transition-colors">
      <span className="text-sm sm:text-base">Learn more</span>
      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </div>
  </div>
);

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      console.log('Email submitted:', email);
    }
  };

  if (isSubmitted) {
    return (
      <div className="animate-bounce-gentle bg-gradient-to-r from-turquoise-50 to-primary-50 border-2 border-turquoise-200 rounded-3xl p-6 sm:p-8 text-center shadow-xl">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-turquoise-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg animate-pulse">
          <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-turquoise-900 mb-2 sm:mb-3">🎉 Welcome to TurkiyePass!</h3>
        <p className="text-base sm:text-lg text-turquoise-700">Get ready for the most amazing experiences in Turkiye!</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-xl border-2 border-white/40 rounded-3xl p-6 sm:p-8 shadow-2xl">
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">🚀 Be the First to Explore!</h3>
        <p className="text-sm sm:text-base text-gray-600">Join thousands waiting for the ultimate Turkiye experience</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for early access"
              className="w-full px-4 py-4 sm:px-6 sm:py-5 text-base sm:text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-turquoise-300 focus:border-turquoise-500 transition-all duration-300 shadow-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-4 sm:px-8 sm:py-5 bg-gradient-to-r from-turquoise-500 via-primary-500 to-turquoise-600 text-white font-bold text-base sm:text-lg rounded-2xl hover:from-turquoise-600 hover:via-primary-600 hover:to-turquoise-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl animate-pulse"
          >
            Get Early Access 🎯
          </button>
        </div>
      </form>
    </div>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 23,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => ({
        ...prev,
        seconds: prev.seconds > 0 ? prev.seconds - 1 : 59,
        minutes: prev.seconds === 0 ? (prev.minutes > 0 ? prev.minutes - 1 : 59) : prev.minutes
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary-500 to-turquoise-500 rounded-3xl p-6 sm:p-8 text-white text-center animate-slide-up shadow-2xl">
      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center justify-center gap-2">
        <Clock className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" />
        <span className="text-base sm:text-2xl">Launching Soon!</span>
      </h3>
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <div key={unit} className="bg-white/20 backdrop-blur rounded-2xl p-3 sm:p-4 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="text-xl sm:text-3xl font-bold">{value}</div>
            <div className="text-xs sm:text-sm capitalize">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExperienceShowcase = () => {
  const experiences = [
    { 
      image: "https://images.pexels.com/photos/1440731/pexels-photo-1440731.jpeg", 
      title: "Istanbul", 
      category: "Historical" 
    },
    { 
      image: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg", 
      title: "Cappadocia", 
      category: "Adventure" 
    },
    { 
      image: "https://images.pexels.com/photos/6552988/pexels-photo-6552988.jpeg", 
      title: "Pamukkale", 
      category: "Nature" 
    },
    { 
      image: "https://images.pexels.com/photos/10023331/pexels-photo-10023331.jpeg", 
      title: "Antalya", 
      category: "Beach" 
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {experiences.map((exp, index) => (
        <div 
          key={index}
          className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <img 
            src={exp.image} 
            alt={exp.title}
            className="w-full h-48 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
            <div className="text-xs bg-turquoise-500 px-2 py-1 rounded-full inline-block mb-1 sm:mb-2">{exp.category}</div>
            <h4 className="font-bold text-sm sm:text-base">{exp.title}</h4>
          </div>
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white bg-turquoise-500 rounded-full p-1 sm:p-2" />
          </div>
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-turquoise-50 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-4 sm:left-10 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-r from-turquoise-400 to-primary-400 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-96 right-4 sm:right-20 w-32 h-32 sm:w-60 sm:h-60 bg-gradient-to-r from-primary-400 to-turquoise-400 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 sm:w-48 sm:h-48 bg-gradient-to-r from-turquoise-300 to-primary-300 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Animated Logo */}
          <div className="animate-fade-in mb-8 sm:mb-12">
            <div className="flex flex-col sm:inline-flex sm:flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8 group">
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-turquoise-500 to-primary-500 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-white animate-bounce" />
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black bg-gradient-to-r from-turquoise-600 via-primary-600 to-turquoise-700 bg-clip-text text-transparent animate-pulse">
                TurkiyePass
              </h1>
            </div>
          </div>

          {/* Dynamic Headline with Icons */}
          <div className="animate-slide-up mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <PulsingIcon icon={Sparkles} delay={0} />
              <PulsingIcon icon={Globe} delay={0.5} />
              <PulsingIcon icon={Zap} delay={1} />
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-8xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
              Explore Turkiye
              <span className="block text-transparent bg-gradient-to-r from-turquoise-500 via-primary-500 to-pink-500 bg-clip-text animate-pulse">
                Like Never Before
              </span>
            </h2>
            <p className="text-lg sm:text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 font-medium px-4">
              🎯 Tours • 🎪 Events • 🚌 Bus Tickets • 📶 eSIM • ✨Unique Experiences
            </p>
          </div>

          {/* Email Signup */}
          <div className="animate-slide-up mb-12 sm:mb-16 max-w-3xl mx-auto">
            <EmailSignup />
          </div>

          {/* Countdown Timer */}
          <div className="animate-slide-up mb-12 sm:mb-16 max-w-2xl mx-auto">
            <CountdownTimer />
          </div>

          {/* Experience Showcase */}
          <div className="animate-slide-up mb-16 sm:mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-3 px-4">
              <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-turquoise-600 animate-bounce" />
              <span className="text-center">Preview Amazing Experiences</span>
              <Mountain className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 animate-bounce" />
            </h3>
            <ExperienceShowcase />
          </div>
        </div>

        {/* Dynamic Floating Elements - Hidden on small screens */}
        <div className="absolute top-20 left-4 sm:left-10 hidden md:block">
          <FloatingElement delay={0}>
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-turquoise-400 to-primary-400 rounded-3xl flex items-center justify-center shadow-2xl animate-spin-slow">
              <Bus className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
            </div>
          </FloatingElement>
        </div>

        <div className="absolute top-32 right-4 sm:right-20 hidden md:block">
          <FloatingElement delay={2}>
            <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-r from-primary-400 to-pink-400 rounded-3xl flex items-center justify-center shadow-2xl animate-bounce">
              <Wifi className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
            </div>
          </FloatingElement>
        </div>

        <div className="absolute bottom-40 left-8 sm:left-32 hidden lg:block">
          <FloatingElement delay={4}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
          </FloatingElement>
        </div>

        <div className="absolute top-1/2 right-4 sm:right-10 hidden xl:block">
          <FloatingElement delay={6}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-turquoise-300 to-primary-300 rounded-2xl flex items-center justify-center shadow-xl animate-spin">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </FloatingElement>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative py-12 sm:py-20 bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <Compass className="w-8 h-8 sm:w-12 sm:h-12 text-turquoise-600 animate-spin" />
              <span>Everything You Need</span>
              <Users className="w-8 h-8 sm:w-12 sm:h-12 text-primary-600 animate-bounce" />
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              One platform, endless possibilities. Discover, book, and experience Turkiye like never before!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <ServiceCard
              icon={MapIcon}
              title="Epic Tours"
              description="Guided tours to Turkiye's most spectacular destinations with expert local guides"
              color="bg-gradient-to-r from-turquoise-500 to-turquoise-600"
              delay={0}
            />
            <ServiceCard
              icon={Calendar}
              title="Live Events"
              description="Concerts, festivals, cultural shows and exclusive events across the country"
              color="bg-gradient-to-r from-primary-500 to-primary-600"
              delay={0.2}
            />
            <ServiceCard
              icon={Bus}
              title="Bus Tickets"
              description="Comfortable intercity travel with premium bus operators nationwide"
              color="bg-gradient-to-r from-pink-500 to-pink-600"
              delay={0.4}
            />
            <ServiceCard
              icon={Wifi}
              title="eSIM Cards"
              description="Stay connected everywhere with high-speed data plans for travelers"
              color="bg-gradient-to-r from-orange-500 to-orange-600"
              delay={0.6}
            />
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-gradient-to-r from-turquoise-500 to-primary-500 text-white px-8 py-4 sm:px-12 sm:py-6 rounded-3xl text-lg sm:text-2xl font-bold shadow-2xl hover:scale-105 transition-transform duration-300 animate-bounce-gentle">
              <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />
              <span>One Pass, All Access</span>
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex flex-col sm:inline-flex sm:flex-row items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-turquoise-500 to-primary-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <MapPin className="w-6 h-6 sm:w-9 sm:h-9 text-white" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-turquoise-400 to-primary-400 bg-clip-text text-transparent">
                TurkiyePass
              </h3>
            </div>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">The future of travel is here! 🚀</p>
            
            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <p className="text-gray-400 font-medium text-sm sm:text-base">Join our journey:</p>
              <div className="flex gap-3 sm:gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg animate-bounce"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 sm:w-7 sm:h-7" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 sm:w-7 sm:h-7" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg animate-bounce"
                  style={{ animationDelay: '0.4s' }}
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 sm:w-7 sm:h-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-base sm:text-lg px-4">
              © 2025 TurkiyePass. Made with ❤️ for amazing travelers in Turkiye!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
