import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

type EducationItem = {
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
  coursework?: string[];
};

export default function Education() {
  const education: EducationItem[] = [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      location: "San Francisco, CA",
      startDate: "2015",
      endDate: "2019",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List all semesters",
        "Outstanding Senior Project Award",
        "President of Computer Science Club"
      ],
      coursework: [
        "Data Structures",
        "Algorithms",
        "Database Systems",
        "Web Development",
        "Cloud Computing",
        "Machine Learning"
      ]
    },
    {
      institution: "Lincoln High School",
      degree: "High School Diploma",
      field: "Science & Mathematics",
      location: "San Francisco, CA",
      startDate: "2011",
      endDate: "2015",
      gpa: "3.9/4.0",
      achievements: [
        "Valedictorian",
        "National Honor Society Member",
        "Science Olympiad State Champion"
      ]
    }
  ];

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Education
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            My academic journey and educational qualifications
          </p>
        </div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <Card 
              key={index} 
              className="hover-elevate"
              data-testid={`card-education-${item.institution.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {item.institution}
                      </h3>
                      <p className="text-base font-medium text-primary mb-2">
                        {item.degree} - {item.field}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{item.startDate} - {item.endDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{item.location}</span>
                        </div>
                        {item.gpa && (
                          <div className="flex items-center gap-1">
                            <Award className="h-4 w-4" />
                            <span>GPA: {item.gpa}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {item.achievements && item.achievements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Achievements
                    </h4>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.coursework && item.coursework.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <Badge key={course} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
