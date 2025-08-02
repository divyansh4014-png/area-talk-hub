import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-hero-gradient animate-pulse opacity-20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <MapPin className="w-8 h-8 text-primary animate-bounce" />
      </div>
      <div className="absolute top-40 right-20 opacity-30">
        <MessageCircle className="w-6 h-6 text-primary animate-pulse" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-30">
        <Users className="w-10 h-10 text-primary animate-bounce delay-1000" />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-6 animate-fade-in">
          LoConv
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          Connect anonymously with your local community
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          Join conversations happening right around you. Chat anonymously, expand your reach, 
          and discover what your neighbors are talking about.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Start Chatting Nearby
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4">
            How It Works
          </Button>
        </div>
        
        {/* Live activity indicator */}
        <div className="mt-12 p-4 bg-card-gradient border border-primary/20 rounded-lg backdrop-blur-sm shadow-card-glow max-w-md mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Live in your area</span>
            </div>
            <span className="text-primary font-semibold">12 active chats</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;