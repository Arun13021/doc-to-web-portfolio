import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "SRM Easwari Engineering College, Chennai",
    period: "Ongoing",
    graduation: "Expected 2027",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary Education (12th Grade)",
    institution: "Chettinad Vidyashram, Chennai",
    period: "Completed",
    graduation: "2023",
    icon: BookOpen,
  },
  {
    degree: "Secondary School Education (10th Grade)",
    institution: "Chettinad Vidyashram, Chennai",
    period: "Completed",
    graduation: "2021",
    icon: BookOpen,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Education & Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My academic journey and professional development
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-hero hidden md:block"></div>

          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="relative">
                <Card className="p-6 ml-0 md:ml-20 shadow-medium hover:shadow-large transition-all duration-300 border-border/50 hover:border-primary/50">
                  <div className="absolute -left-12 top-6 hidden md:flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full shadow-medium">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{item.degree}</h3>
                      <p className="text-foreground/70 font-medium">{item.institution}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {item.graduation}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="px-3 py-1 bg-secondary rounded-full border border-border/50">
                      {item.period}
                    </span>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <Card className="mt-12 p-6 bg-gradient-card border-border/50 shadow-medium">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Looking for Opportunities</h3>
              <p className="text-foreground/80">
                I'm actively seeking internship opportunities where I can apply my skills, 
                learn from experienced professionals, and contribute to meaningful projects. 
                Open to roles in software development, web development, and emerging technologies.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
