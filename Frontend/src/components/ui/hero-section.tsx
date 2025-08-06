import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Your Dream Journey
          <span className="block text-primary">Awaits</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in">
          Discover breathtaking destinations and create unforgettable memories with our expertly crafted travel packages.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Link to="/packages">
            <Button size="lg" className="text-lg px-8 py-3 group">
              Explore Packages
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20">
              Plan Custom Trip
            </Button>
          </Link>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <MapPin className="h-8 w-8 text-primary mr-2" />
              <span className="text-3xl font-bold text-white">50+</span>
            </div>
            <p className="text-gray-200">Destinations</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-8 w-8 text-primary mr-2" />
              <span className="text-3xl font-bold text-white">10k+</span>
            </div>
            <p className="text-gray-200">Happy Travelers</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="h-8 w-8 text-primary mr-2" />
              <span className="text-3xl font-bold text-white">4.9</span>
            </div>
            <p className="text-gray-200">Rating</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;