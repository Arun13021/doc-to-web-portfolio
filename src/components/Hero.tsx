import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 animate-fade-in-up">
          <div className="space-y-2">
            <p className="text-accent font-semibold text-lg">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Arun Sundar M
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Computer Science Engineering Student
            </p>
          </div>
          
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            An enthusiastic and driven engineering student seeking opportunities to apply and grow 
            in the fields of computer science and emerging technologies. I aim to build a strong 
            foundation in software development while embracing challenges that foster both technical 
            and personal growth.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-hero hover:opacity-90 transition-opacity"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>

          <div className="flex justify-center gap-4 pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">2027</p>
              <p className="text-sm text-muted-foreground">Expected Graduation</p>
            </div>
            <div className="w-px bg-border"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">3+</p>
              <p className="text-sm text-muted-foreground">Certifications</p>
            </div>
            <div className="w-px bg-border"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">B.E</p>
              <p className="text-sm text-muted-foreground">CSE Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
