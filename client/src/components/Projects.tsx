import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ProjectModal from "./ProjectModal";
import ilpexImg from "@assets/generated_images/ilpex.png";
import imdbImg from "@assets/generated_images/imdb.png";
import learnchessImg from "@assets/generated_images/lco.png";
import propTechImg from "@assets/generated_images/propTech.png";
import childcareImg from "@assets/generated_images/childcare.png";

type ProjectDetails = {
  title: string;
  description: string;
  image: string;
  background?: string;
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
  const [showAll, setShowAll] = useState(false);

  const projects: ProjectDetails[] = [
    {
      title: "PropTech + FinTech Web App",
      description: "A Website developed for an Indian startup that teaches chess to 500+ children across 10+ countries.",
      image: propTechImg,
      background: 'bg-gradient-to-r from-[#9db9b9] via-white-400 to-green-200',
      techStack: ["HTML", "CSS", "Javascript", "PHP"],
      longDescription: "During my third year of college, I took on a paid freelance project for a startup that provides online chess training to students across 10+ countries with over 500 active learners. Along with a teammate, I designed and developed their website from scratch, conducting weekly requirement meetings to ensure the product aligned with the client’s vision. The project was successfully delivered and deployed, earning positive feedback and full payment upon completion for our professionalism and quality of work.",
      features: [
        "Designed the complete website layout in Figma from scratch, ensuring a modern and user-friendly interface that was later approved by the client.",
        "Conducted weekly requirement discussions and demo sessions to stay aligned with the client’s goals and incorporate feedback effectively.",
        "Implemented a mailing feature that allows users to easily book free demo classes through the website.",
        "Developed a fully responsive website with smooth animations for an engaging user experience across all devices.",
        "Deployed the website on the client’s domain, ensuring a seamless launch and stable performance post-deployment.",
      ],
      role: "Web Developer",
      duration: "4 months",
      teamSize: "2 developers",
      githubUrl: "https://github.com/joelcr10/learn-chess.online",
      liveUrl: "https://learnchess.online/"
    },
    {
      title: "All-in-One Childcare Management",
      description: "A Website developed for an Indian startup that teaches chess to 500+ children across 10+ countries.",
      image: childcareImg,
      background: 'bg-gradient-to-r from-purple-400 via-white-400 to-blue-400',
      techStack: ["HTML", "CSS", "Javascript", "PHP"],
      longDescription: "During my third year of college, I took on a paid freelance project for a startup that provides online chess training to students across 10+ countries with over 500 active learners. Along with a teammate, I designed and developed their website from scratch, conducting weekly requirement meetings to ensure the product aligned with the client’s vision. The project was successfully delivered and deployed, earning positive feedback and full payment upon completion for our professionalism and quality of work.",
      features: [
        "Designed the complete website layout in Figma from scratch, ensuring a modern and user-friendly interface that was later approved by the client.",
        "Conducted weekly requirement discussions and demo sessions to stay aligned with the client’s goals and incorporate feedback effectively.",
        "Implemented a mailing feature that allows users to easily book free demo classes through the website.",
        "Developed a fully responsive website with smooth animations for an engaging user experience across all devices.",
        "Deployed the website on the client’s domain, ensuring a seamless launch and stable performance post-deployment.",
      ],
      role: "Web Developer",
      duration: "4 months",
      teamSize: "2 developers",
      githubUrl: "https://github.com/joelcr10/learn-chess.online",
      liveUrl: "https://learnchess.online/"
    },
    {
      title: "E-Learning Tracking Tool",
      description: "A React-Native mobile application that is used by L&D team to track the performance and progress of trainees in the E-Learning phase.",
      image: ilpexImg,
      background: 'bg-gradient-to-r from-purple-400 via-white-400 to-blue-500',
      techStack: ["React-Native", "Node.js", "MySQL", "AWS"],
      longDescription: `During my trainee phase at Experion, I led a team and developed a tracking tool for the Learning & Development (L&D) team to monitor progress of newly onboarded trainees. The tool tracks and analyzes individual performance via the Percipio platform and allows trainees to follow their daily learning materials.

                       
      It also enables L&D to manage multiple trainee batches, each with customized learning playlists. Initially developed as a POC, the tool is still actively used, saving countless hours of manual tracking previously done in Excel.`,
      features: [
        "Integrated Percipio, a third-party learning platform, to consolidate and visualize trainee progress in one unified dashboard.",
        "Implemented automated notification and reminder systems to boost trainee engagement, assessment completion, and overall learning outcomes.",
        "Advanced product search and filtering",
        "Customer review and rating system",
        "Comprehensive admin dashboard with analytics",
        "Mobile-responsive design for all devices",
        "Email notifications for orders and shipping updates"
      ],
      role: "Team Lead / Full Stack Developer",
      duration: "3 months",
      teamSize: "7 developers",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, kanban boards, and team collaboration features.",
      image: imdbImg,
      background: 'bg-gradient-to-r from-orange-400 via-white-400 to-red-500',
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
      title: "learnchess.online",
      description: "A Website developed for an Indian startup that teaches chess to 500+ children across 10+ countries.",
      image: learnchessImg,
      background: 'bg-gradient-to-r from-green-400 via-white-400 to-yellow-500',
      techStack: ["HTML", "CSS", "Javascript", "PHP"],
      longDescription: "During my third year of college, I took on a paid freelance project for a startup that provides online chess training to students across 10+ countries with over 500 active learners. Along with a teammate, I designed and developed their website from scratch, conducting weekly requirement meetings to ensure the product aligned with the client’s vision. The project was successfully delivered and deployed, earning positive feedback and full payment upon completion for our professionalism and quality of work.",
      features: [
        "Designed the complete website layout in Figma from scratch, ensuring a modern and user-friendly interface that was later approved by the client.",
        "Conducted weekly requirement discussions and demo sessions to stay aligned with the client’s goals and incorporate feedback effectively.",
        "Implemented a mailing feature that allows users to easily book free demo classes through the website.",
        "Developed a fully responsive website with smooth animations for an engaging user experience across all devices.",
        "Deployed the website on the client’s domain, ensuring a seamless launch and stable performance post-deployment.",
      ],
      role: "Web Developer",
      duration: "4 months",
      teamSize: "2 developers",
      githubUrl: "https://github.com/joelcr10/learn-chess.online",
      liveUrl: "https://learnchess.online/"
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0,5);

  const handleProjectClick = (project: ProjectDetails) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover-elevate" data-testid={`card-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <CardHeader className= {`p-2 ${project.background}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-contain"
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
         <Button variant="default" size="lg" className="mt-10" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show Less': 'View All Projects'}</Button>
      </div>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
