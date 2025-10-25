import { Badge } from "@/components/ui/badge";
import profileImage from "@assets/generated_images/Professional_developer_headshot_portrait_e31d76e2.png";

export default function About() {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "AWS",
    "Docker", "PostgreSQL", "GraphQL", "TailwindCSS", "Next.js",
    "Express", "MongoDB", "Redis", "Kubernetes", "CI/CD"
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-md w-full max-w-md aspect-square object-cover"
            />
          </div>

          <div>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              I'm a passionate full-stack developer with over 5 years of experience
              building web applications. I specialize in creating scalable,
              user-friendly solutions using modern technologies.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              My expertise spans from frontend frameworks like React to backend
              technologies and cloud infrastructure. I'm committed to writing clean,
              maintainable code and continuously learning new technologies to stay
              at the forefront of web development.
            </p>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                Technical Skills
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
