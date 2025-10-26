import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ProjectModal from "./ProjectModal";
import ecommerceImg from "@assets/generated_images/E-commerce_website_project_screenshot_6bb37839.png";
import taskManagementImg from "@assets/generated_images/Task_management_app_screenshot_c9e507eb.png";
import analyticsImg from "@assets/generated_images/Analytics_dashboard_project_screenshot_4e942d9a.png";

type ProjectDetails = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  longDescription: string;
  features: string[];
  role: string;
  duration: string;
  teamSize: string;
  githubUrl?: string;
  liveUrl?: string;
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const projects: ProjectDetails[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart management, payment integration, and admin dashboard.",
      image: ecommerceImg,
      techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
      longDescription: "Developed a comprehensive e-commerce solution from the ground up, featuring a modern storefront, secure payment processing, and a powerful admin panel. The platform handles thousands of transactions daily and provides real-time inventory management, order tracking, and customer analytics.",
      features: [
        "Secure payment processing with Stripe integration",
        "Real-time inventory management and stock tracking",
        "Advanced product search and filtering",
        "Customer review and rating system",
        "Comprehensive admin dashboard with analytics",
        "Mobile-responsive design for all devices",
        "Email notifications for orders and shipping updates"
      ],
      role: "Lead Full Stack Developer",
      duration: "6 months",
      teamSize: "4 developers",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, kanban boards, and team collaboration features.",
      image: taskManagementImg,
      techStack: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      longDescription: "Built a powerful project management platform that enables teams to collaborate seamlessly. The system features real-time synchronization, drag-and-drop kanban boards, and comprehensive task tracking. It supports multiple projects, custom workflows, and integrates with popular development tools.",
      features: [
        "Real-time collaboration with WebSocket technology",
        "Drag-and-drop kanban board interface",
        "Custom workflow creation and management",
        "Time tracking and productivity analytics",
        "File attachments and comment threads",
        "Team member permissions and roles",
        "Integration with GitHub and Slack"
      ],
      role: "Full Stack Developer",
      duration: "4 months",
      teamSize: "3 developers",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics platform with data visualization, custom reports, and business intelligence insights.",
      image: analyticsImg,
      techStack: ["React", "Python", "AWS", "D3.js"],
      longDescription: "Created a sophisticated analytics platform that processes and visualizes large datasets in real-time. The dashboard provides actionable insights through interactive charts, custom reports, and predictive analytics. Built on a scalable cloud infrastructure to handle millions of data points.",
      features: [
        "Real-time data processing and visualization",
        "Interactive charts and graphs with D3.js",
        "Custom report builder with export capabilities",
        "Predictive analytics using machine learning",
        "User behavior tracking and funnel analysis",
        "Automated alert system for key metrics",
        "Multi-tenant architecture with role-based access"
      ],
      role: "Senior Developer",
      duration: "8 months",
      teamSize: "5 developers",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  const handleProjectClick = (project: ProjectDetails) => {
    setSelectedProject(project);
    setModalOpen(true);
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
                  onClick={() => handleProjectClick(project)}
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

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
