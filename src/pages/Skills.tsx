import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to LoConv
            </Link>
            <h1 className="text-xl font-semibold">Developer Profile</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-4">
              Divyansh
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Deep Learning Enthusiast & LoConv Creator
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Certified Developer
              </Badge>
            </div>
          </div>

          {/* Certificates Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </h3>
            
            <Card className="overflow-hidden border-primary/20 bg-card-gradient shadow-card-glow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Intro to Deep Learning</h4>
                    <div className="space-y-2 text-muted-foreground mb-4">
                      <p className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Completed: August 3, 2025
                      </p>
                      <p>Issued by: Kaggle</p>
                      <p>Instructors: Ryan Holbrook & Alexis Cook</p>
                    </div>
                    <Button variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View on Kaggle
                    </Button>
                  </div>
                  
                  <div className="flex justify-center">
                    <img 
                      src="/lovable-uploads/8284e049-f4df-4eda-bf9f-ffb52255ae97.png" 
                      alt="Kaggle Deep Learning Certificate for Divyansh"
                      className="max-w-full h-auto rounded-lg shadow-lg border border-border/20"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Skills Section */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Deep Learning",
                "Machine Learning",
                "Python",
                "React",
                "TypeScript",
                "Neural Networks",
                "Data Science",
                "Web Development",
                "Location-based Services"
              ].map((skill) => (
                <Card key={skill} className="bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-4 text-center">
                    <span className="font-medium">{skill}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Project Highlight */}
          <section>
            <h3 className="text-2xl font-semibold mb-6">Featured Project</h3>
            <Card className="border-primary/20 bg-card-gradient shadow-card-glow">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-3">LoConv - Location-based Community Chat</h4>
                <p className="text-muted-foreground mb-6">
                  A modern web application that enables anonymous, location-based community conversations. 
                  Built with React, TypeScript, and advanced geolocation features to connect neighbors 
                  and local communities.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "TypeScript", "Geolocation API", "Real-time Chat", "Community Building"].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <Link to="/">
                  <Button className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Live Project
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Skills;