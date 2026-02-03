import { Link } from "react-router-dom";
import { Globe2, Heart, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-ocean rounded-full flex items-center justify-center">
                <Globe2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                Empathy<span className="text-primary">Bridge</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm mb-6">
              Bridging the gap between climate data and human emotion. Making the global personal, the abstract tangible.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/story-generator" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Your Story</Link></li>
              <li><Link to="/explore" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Explore Data</Link></li>
              <li><Link to="/impact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Impact</Link></li>
            </ul>
          </div>

          {/* Data Sources */}
          <div>
            <h4 className="font-display font-semibold mb-4">Data Sources</h4>
            <ul className="space-y-3">
              <li><a href="https://climate.nasa.gov/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">NASA Climate</a></li>
              <li><a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">OpenWeatherMap</a></li>
              <li><a href="https://www.noaa.gov/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">NOAA</a></li>
              <li><a href="https://www.ipcc.ch/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">IPCC Reports</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2026 EmpathyBridge. Made with <Heart className="w-3 h-3 inline text-accent" /> for our planet.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Data to Empathy Bridge Project
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
