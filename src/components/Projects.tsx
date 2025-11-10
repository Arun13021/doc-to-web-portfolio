import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Community Connect",
    description: "A comprehensive community networking platform designed to connect people and foster meaningful relationships. This project demonstrates full-stack development skills and user-centric design principles.",
    technologies: ["Web Development", "Community Platform", "User Engagement"],
    category: "Social Networking",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with React and modern web technologies for optimal performance and user experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web Development",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Showcasing my work and problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="p-6 shadow-medium hover:shadow-large transition-all duration-300 border-border/50 hover:border-primary/50 bg-card"
            >
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-3">{project.title}</h3>
                </div>
                
                <p className="text-foreground/80 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium bg-secondary text-foreground px-3 py-1 rounded-full border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
