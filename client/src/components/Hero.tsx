import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowDown, Download } from "lucide-react";
import profileImage from "@assets/generated_images/Professional_developer_headshot_portrait_e31d76e2.png";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = () => {
    console.log("Download resume triggered");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Avatar className="w-32 h-32 mx-auto mb-8 border-2">
          <AvatarImage src={profileImage} alt="Profile" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>

        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
          John Doe
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Full Stack Developer & Cloud Architect
        </p>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Building scalable web applications with modern technologies.
          Passionate about clean code, user experience, and cloud infrastructure.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={scrollToProjects}
            data-testid="button-view-projects"
            className="gap-2"
          >
            View Projects <ArrowDown className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleDownload}
            data-testid="button-download-resume"
            className="gap-2"
          >
            <Download className="h-4 w-4" /> Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
