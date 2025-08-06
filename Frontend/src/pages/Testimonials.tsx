import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Testimonials = () => {
  const [testimonialForm, setTestimonialForm] = useState({
    name: '',
    email: '',
    message: '',
    rating: 5
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Mock testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b742?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      message: "Absolutely incredible experience! The team at Travoyage planned every detail perfectly. Our European tour was seamless and unforgettable. Highly recommend!",
      package: "European Cultural Tour",
      date: "March 2024"
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      message: "The tropical paradise getaway exceeded all expectations. Crystal clear waters, amazing resort, and the customer service was top-notch throughout the entire trip.",
      package: "Tropical Paradise Getaway",
      date: "February 2024"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      message: "Amazing mountain adventure! The guides were knowledgeable and the views were breathtaking. Perfect for anyone who loves nature and outdoor activities.",
      package: "Mountain Adventure Trek",
      date: "January 2024"
    },
    {
      id: 4,
      name: "David Thompson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 4,
      message: "Great value for money and excellent organization. The culinary journey through Asia was a feast for the senses. Will definitely book again!",
      package: "Asian Culinary Journey",
      date: "December 2023"
    },
    {
      id: 5,
      name: "Lisa Wang",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      message: "The African safari was a once-in-a-lifetime experience. Seeing the wildlife up close was magical. The accommodation and service were exceptional.",
      package: "African Safari Experience",
      date: "November 2023"
    },
    {
      id: 6,
      name: "Alex Martinez",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      message: "NYC nightlife package was incredible! Amazing restaurants, great shows, and the rooftop experiences were unforgettable. Perfect for young travelers!",
      package: "City Lights & Nightlife",
      date: "October 2023"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTestimonialForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating: number) => {
    setTestimonialForm(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Testimonial Submitted!",
      description: "Thank you for your feedback. Your testimonial is pending approval and will be published soon.",
    });

    setTestimonialForm({ name: '', email: '', message: '', rating: 5 });
    setIsSubmitting(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
      />
    ));
  };

  const renderRatingSelector = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Button
        key={i}
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => handleRatingChange(i + 1)}
        className="p-1"
      >
        <Star
          className={`h-6 w-6 ${i < testimonialForm.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
        />
      </Button>
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Testimonials
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our happy travelers about their amazing experiences with Travoyage Planners.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription className="text-sm text-primary">
                      {testimonial.package}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-1 mt-2">
                  {renderStars(testimonial.rating)}
                  <span className="text-sm text-muted-foreground ml-2">{testimonial.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.message}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <CardHeader className="p-0 mb-8 text-center">
              <CardTitle className="text-2xl font-bold text-foreground">Share Your Experience</CardTitle>
              <CardDescription>
                We'd love to hear about your journey with us. Your feedback helps us improve and inspire other travelers.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={testimonialForm.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={testimonialForm.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Rating *</Label>
                  <div className="flex space-x-1">
                    {renderRatingSelector()}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Testimonial *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={testimonialForm.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your experience with Travoyage Planners..."
                    rows={6}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full md:w-auto text-lg px-8 py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Testimonial
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;