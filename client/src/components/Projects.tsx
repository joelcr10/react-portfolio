import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ecommerceImg from "@assets/generated_images/E-commerce_website_project_screenshot_6bb37839.png";
import taskManagementImg from "@assets/generated_images/Task_management_app_screenshot_c9e507eb.png";
import analyticsImg from "@assets/generated_images/Analytics_dashboard_project_screenshot_4e942d9a.png";

type Project = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart management, payment integration, and admin dashboard.",
      image: ecommerceImg,
      techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, kanban boards, and team collaboration features.",
      image: taskManagementImg,
      techStack: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      link: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics platform with data visualization, custom reports, and business intelligence insights.",
      image: analyticsImg,
      techStack: ["React", "Python", "AWS", "D3.js"],
      link: "#"
    }
  ];

  const handleProjectClick = (title: string) => {
    console.log(`View project: ${title}`);
  };

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover-elevate" data-testid={`card-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <CardHeader className="p-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  variant="outline"
                  onClick={() => handleProjectClick(project.title)}
                  data-testid={`button-view-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="gap-2"
                >
                  View Details <ExternalLink className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
