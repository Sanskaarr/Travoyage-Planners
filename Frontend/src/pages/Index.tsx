import HeroSection from '@/components/ui/hero-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { MapPin, Users, Star, ArrowRight, Plane, Shield, Award, Clock } from 'lucide-react';

const Index = () => {
  // Featured packages for homepage
  const featuredPackages = [
    {
      id: 1,
      title: "Tropical Paradise Getaway",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: 1299,
      location: "Maldives",
      duration: "7 Days"
    },
    {
      id: 2,
      title: "European Cultural Tour",
      image: "https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: 2199,
      location: "Europe",
      duration: "10 Days"
    },
    {
      id: 3,
      title: "African Safari Experience",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: 1799,
      location: "Kenya & Tanzania",
      duration: "6 Days"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Travoyage Planners?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're more than just a travel agency. We're your partners in creating unforgettable experiences 
              that will last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Expert Planning</h3>
              <p className="text-muted-foreground">Our experienced team crafts personalized itineraries tailored to your preferences.</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Secure Booking</h3>
              <p className="text-muted-foreground">Safe and secure payment processing with full protection for your bookings.</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Award Winning</h3>
              <p className="text-muted-foreground">Recognized for excellence in customer service and travel planning.</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Round-the-clock customer support to ensure your journey goes smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Travel Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our most popular destinations and start planning your next adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {pkg.duration}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {pkg.location}
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {pkg.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">
                    ${pkg.price}
                    <span className="text-sm text-muted-foreground font-normal"> / person</span>
                  </div>
                  <Link to="/packages">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/packages">
              <Button size="lg" className="text-lg px-8 py-3 group">
                View All Packages
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Absolutely incredible experience! The team planned every detail perfectly. 
                  Our European tour was seamless and unforgettable."
                </p>
                <div className="font-semibold text-foreground">Sarah Johnson</div>
                <div className="text-sm text-primary">European Cultural Tour</div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The tropical paradise getaway exceeded all expectations. Crystal clear waters, 
                  amazing resort, and top-notch customer service."
                </p>
                <div className="font-semibold text-foreground">Mike Chen</div>
                <div className="text-sm text-primary">Tropical Paradise Getaway</div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Amazing mountain adventure! The guides were knowledgeable and the views 
                  were breathtaking. Perfect for nature lovers."
                </p>
                <div className="font-semibold text-foreground">Emily Rodriguez</div>
                <div className="text-sm text-primary">Mountain Adventure Trek</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/testimonials">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let our travel experts help you plan the perfect trip. Contact us today and turn your travel dreams into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-3 border-white hover:bg-white hover:text-primary">
                Get Started
              </Button>
            </Link>
            <Link to="/packages">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-3 border-white hover:bg-white hover:text-primary">
                Browse Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
