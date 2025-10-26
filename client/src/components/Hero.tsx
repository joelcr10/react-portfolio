import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowDown, Download, Code2, Sparkles } from "lucide-react";
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
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Enhanced gradient background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 py-20">
        {/* Profile image with enhanced styling */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s' }} />
          <Avatar className="w-40 h-40 mx-auto border-4 border-background shadow-xl relative">
            <AvatarImage src={profileImage} alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
            <Sparkles className="h-5 w-5" />
          </div>
        </div>

        {/* Greeting text */}
        <div className="mb-4 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
          <Code2 className="h-4 w-4" />
          <span>Welcome to my portfolio</span>
        </div>

        {/* Main heading with enhanced typography */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
          John Doe
        </h1>

        {/* Subtitle with accent */}
        <div className="mb-6">
          <p className="text-2xl md:text-3xl font-semibold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Full Stack Developer & Cloud Architect
          </p>
        </div>

        {/* Description with better spacing */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed px-4">
          Crafting elegant solutions through code. Specializing in scalable web applications,
          cloud infrastructure, and modern development practices.
          Let's build something amazing together.
        </p>

        {/* CTA buttons with improved styling */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            onClick={scrollToProjects}
            data-testid="button-view-projects"
            className="gap-2 text-base px-8"
          >
            View Projects <ArrowDown className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleDownload}
            data-testid="button-download-resume"
            className="gap-2 text-base px-8 bg-background/50 backdrop-blur-sm"
          >
            <Download className="h-4 w-4" /> Download Resume
          </Button>
        </div>

        {/* Stats or highlights */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-border/50">
          <div>
            <div className="text-3xl font-bold text-primary mb-1">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-1">3</div>
            <div className="text-sm text-muted-foreground">AWS Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
}
