import { MapPin, Shield, Zap, Users, MessageSquare, Settings } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Location-Based Chats",
    description: "Connect with people in your immediate area. See what's happening within walking distance."
  },
  {
    icon: Shield,
    title: "Anonymous & Safe",
    description: "Chat without revealing your identity. Your privacy is protected while you connect with locals."
  },
  {
    icon: Zap,
    title: "Expand Your Radius",
    description: "Start local, then expand your reach. Control how far your conversations can spread."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join ongoing discussions or start new topics. Build your local community connections."
  },
  {
    icon: MessageSquare,
    title: "Real-Time Messaging",
    description: "Instant messaging with people nearby. No delays, just genuine local conversations."
  },
  {
    icon: Settings,
    title: "Customizable Experience",
    description: "Set your preferences for distance, topics, and notification settings to match your needs."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-primary-gradient bg-clip-text text-transparent mb-4">
            Why Choose LoConv?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The only platform designed specifically for anonymous local community conversations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-card-gradient border border-primary/20 rounded-lg backdrop-blur-sm hover:shadow-card-glow transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;