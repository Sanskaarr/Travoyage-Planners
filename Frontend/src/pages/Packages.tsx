import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Star } from 'lucide-react';

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await fetch('http://localhost:5050/api/packages');
        const data = await res.json();
        setPackages(data);
      } catch (err) {
        console.error('Failed to fetch packages:', err);
      }
    };
    fetchPackages();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Travel Packages
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our carefully curated collection of travel packages designed to create unforgettable experiences.
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg._id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="relative">
                <img
                  src={pkg.image || pkg.imageUrl}
                  alt={pkg.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {pkg.duration}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {pkg.destination}
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-medium">{pkg.rating}</span>
                    <span className="text-muted-foreground ml-1">({pkg.reviewCount})</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {pkg.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(pkg.highlights || []).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between">
                <div className="text-2xl font-bold text-primary">
                  ₹{pkg.price}
                  <span className="text-sm text-muted-foreground font-normal"> / person</span>
                </div>
                <Button className="group/btn">
                  Book Now
                  <Calendar className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;