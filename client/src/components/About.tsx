import { Badge } from "@/components/ui/badge";
import profileImage from "@assets/generated_images/aboutImage.png";

export default function About() {
  const skills = [
    // "React", "TypeScript", "Node.js", "Python", "AWS",
    // "Docker", "PostgreSQL", "GraphQL", "TailwindCSS", "Next.js",
    // "Express", "MongoDB", "Redis", "Kubernetes", "CI/CD"
    "Football", "Movies", "Track & Field", "Badminton", "Reading", "Bike Rides", "Drawing", "Gym" 
  ];

  return (
    <section id="about" className="pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb- text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex bg-red aspect-square object-cover">
            <img
              src={profileImage}
              alt="Profile"
              // className="rounded-md w-full max-w-md aspect-square"
            />
          </div>

          <div>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              I'm a passionate full-stack developer with over 5 years of experience
              building web applications. I specialize in creating scalable,
              user-friendly solutions using modern technologies.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Beyond development, I take pride in mentoring junior developers and leading teams to deliver impactful internal tools still used across organizations. My approach blends strong technical expertise with practical problem-solving, ensuring that every project I contribute to is efficient, maintainable, and built to scale. I’m always eager to explore new technologies and continue evolving as a developer who bridges functionality and innovation.
            </p>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                 Other Interest
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" data-testid={`badge-skill-${skill.toLowerCase()}`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
