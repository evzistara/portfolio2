import data from "../data/experienceData";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-10 md:py-40 md:px-24 bg-background/80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Education
          </h2>
          <div className="">
            {data.university.map((uni) => (
              <Card
                key={uni.id}
                className="p-6 mb-4 bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <Typography
                        variant="h6"
                        component="h3"
                        className="text-xl font-semibold text-foreground"
                      >
                        {uni.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        className="text-primary font-medium mt-1"
                      >
                        {uni.school}
                      </Typography>
                    </div>

                     
                      <Typography
                        variant="body2"
                        className="text-sm text-muted-foreground mt-1 md:mt-0"
                      >
                        {uni.period}
                      </Typography>
                
                  </div>

                  <Typography
                    variant="body2"
                    className="text-muted-foreground leading-relaxed"
                  >
                    {uni.info}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

          <div className="max-w-8xl mx-auto mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Experience
          </h2>
          <div className="">
            {data.work.map((work) => (
              <Card
                key={work.id}
                className="p-6 mb-4 bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <Typography
                        variant="h6"
                        component="h3"
                        className="text-xl font-semibold text-foreground"
                      >
                        {work.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        className="text-primary font-medium mt-1"
                      >
                        {work.company}
                      </Typography>
                    </div>

                 
                      <Typography
                        variant="body2"
                        className="text-sm text-muted-foreground mt-1 md:mt-0"
                      >
                        {work.period}
                      </Typography>
                    
                  </div>

                  <Typography
                    variant="body2"
                    className="text-muted-foreground leading-relaxed"
                  >
                    {work.tasks}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
