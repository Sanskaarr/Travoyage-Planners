import { Link } from 'react-router-dom';
import { Plane, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="rounded-lg p-2">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-6 w-6 object-cover"
                />
              </div>
              <span className="text-xl font-bold text-primary">Travoyage Planners</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your trusted partner in creating unforgettable travel experiences.
              We specialize in personalized travel packages that cater to your unique preferences and budget.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/travoyageplanners" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://www.instagram.com/travoyageplanners" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/anshul-jain-a1aab0b5" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/packages" className="text-muted-foreground hover:text-primary transition-colors">Travel Packages</Link></li>
              <li><Link to="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+91 99990 77654</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">sales@travoyageplanners.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Ghaziabad, Uttar Pradesh - 201005</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Travoyage Planners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;