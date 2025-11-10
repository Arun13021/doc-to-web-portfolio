import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 shadow-medium border-border/50 bg-card">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-hero rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground/70 text-sm">Email</p>
                  <a
                    href="mailto:arunsundar2006@gmail.com"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    arunsundar2006@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground/70 text-sm">Location</p>
                  <p className="text-lg font-medium">Chennai, India</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Available for internships and collaborative projects
                </p>
                <Button className="w-full bg-gradient-hero hover:opacity-90">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-medium border-border/50 bg-card">
            <h3 className="text-2xl font-bold mb-6">About Me</h3>
            
            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                I'm a passionate computer science student with a strong curiosity for technology 
                and problem-solving. My journey in tech is driven by a desire to create meaningful 
                solutions and continuously learn.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                With a foundation in various programming languages and concepts, I'm eager to 
                apply my skills in real-world projects and contribute to innovative teams.
              </p>

              <div className="pt-4 space-y-2">
                <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <span className="font-medium">Date of Birth</span>
                  <span className="text-muted-foreground">13 Feb 2006</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <span className="font-medium">Current Status</span>
                  <span className="text-accent font-semibold">Open to Work</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            © 2024 Arun Sundar M. Built with passion and dedication.
          </p>
        </div>
      </div>
    </section>
  );
};
