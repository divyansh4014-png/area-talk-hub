import { MapPin, MessageCircle, Users, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Share Your Location",
    description: "Allow LoConv to see your general area to connect you with nearby conversations.",
    step: "01"
  },
  {
    icon: MessageCircle,
    title: "Join or Start Chats",
    description: "Browse active conversations in your area or start a new topic that interests you.",
    step: "02"
  },
  {
    icon: Users,
    title: "Chat Anonymously",
    description: "Engage in meaningful conversations while maintaining your privacy and anonymity.",
    step: "03"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-secondary-gradient bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started with LoConv is simple and takes less than a minute
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-primary-gradient rounded-full flex items-center justify-center mb-6 mx-auto">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-gradient rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-secondary-foreground">{step.step}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-8 h-8 -translate-x-4">
                  <ArrowRight className="w-6 h-6 text-primary opacity-50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;