import { MessageCircle, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockConversations = [
  {
    id: 1,
    title: "Best coffee shop in the area?",
    participants: 8,
    distance: "0.2 miles",
    timeAgo: "2m ago",
    category: "Food & Drinks"
  },
  {
    id: 2,
    title: "Anyone else hear that noise last night?",
    participants: 15,
    distance: "0.4 miles", 
    timeAgo: "5m ago",
    category: "Local Events"
  },
  {
    id: 3,
    title: "Looking for workout buddy",
    participants: 4,
    distance: "0.6 miles",
    timeAgo: "12m ago",
    category: "Sports & Fitness"
  },
  {
    id: 4,
    title: "New restaurant recommendations?",
    participants: 11,
    distance: "0.8 miles",
    timeAgo: "18m ago",
    category: "Food & Drinks"
  }
];

const LiveActivitySection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-primary-gradient bg-clip-text text-transparent mb-4">
            What's Happening Near You
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join live conversations in your area right now
          </p>
        </div>
        
        <div className="space-y-4 mb-8">
          {mockConversations.map((conversation) => (
            <div 
              key={conversation.id}
              className="p-6 bg-card-gradient border border-primary/20 rounded-lg backdrop-blur-sm hover:shadow-card-glow transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                      {conversation.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {conversation.timeAgo}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {conversation.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {conversation.participants} chatting
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {conversation.distance} away
                    </div>
                  </div>
                </div>
                
                <Button variant="glow" size="sm">
                  Join Chat
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
            <MessageCircle className="w-5 h-5 mr-2" />
            View All Local Chats
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiveActivitySection;