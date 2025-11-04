import { Badge } from "@/components/ui/badge";

type Job = {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
};

export default function Experience() {
  const jobs: Job[] = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      responsibilities: [
        "Led development of microservices architecture serving 1M+ users",
        "Mentored team of 5 junior developers on best practices",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Architected cloud infrastructure on AWS with high availability"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      responsibilities: [
        "Developed customer-facing web applications using React and TypeScript",
        "Built RESTful APIs with Node.js and Express",
        "Optimized database queries improving performance by 40%",
        "Collaborated with designers to implement responsive UI/UX"
      ],
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Redis"]
    },
    {
      title: "Junior Software Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      responsibilities: [
        "Contributed to development of company's core product features",
        "Fixed bugs and implemented unit tests for existing codebase",
        "Participated in code reviews and agile development processes",
        "Assisted in migration from monolith to microservices"
      ],
      technologies: ["JavaScript", "Python", "MySQL", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
          Work Experience
        </h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {jobs.map((job, index) => (
              <div key={index} className="relative md:pl-8" data-testid={`experience-${index}`}>
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary border-4 border-background hidden md:block" />

                <div className="mb-4">
                  <h3 className="text-2xl font-semibold mb-1">{job.title}</h3>
                  <p className="text-lg text-foreground mb-1">{job.company}</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">
                    {job.period}
                  </p>
                </div>

                <ul className="space-y-2 mb-4">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-base text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
