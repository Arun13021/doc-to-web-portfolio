import { Card } from "@/components/ui/card";
import { Code2, Database, Lightbulb, Users } from "lucide-react";

const technicalSkills = [
  { name: "Python", level: "Basic", icon: Code2 },
  { name: "HTML", level: "Basic", icon: Code2 },
  { name: "SQL Database", level: "Basic", icon: Database },
  { name: "Problem Solving", level: "Basic", icon: Lightbulb },
];

const interpersonalSkills = [
  { name: "Teamwork", icon: Users },
  { name: "Empathy", icon: Users },
  { name: "Decision Making", icon: Lightbulb },
];

const certifications = [
  "Infosys Springboard - Java and Hibernate",
  "Infosys Springboard - C++ Fundamentals",
  "NPTEL - Introduction to Internet of Things",
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Tools, concepts, and abilities I bring to the table
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="p-6 shadow-medium hover:shadow-large transition-all duration-300 border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-hero rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Technical Skills</h3>
            </div>
            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <skill.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 shadow-medium hover:shadow-large transition-all duration-300 border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Interpersonal Skills</h3>
            </div>
            <div className="space-y-4">
              {interpersonalSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3">
                  <skill.icon className="h-5 w-5 text-accent" />
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-6 shadow-medium hover:shadow-large transition-all duration-300 border-border/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-primary via-accent to-primary rounded-lg">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="p-4 bg-secondary rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
              >
                <p className="text-sm font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
