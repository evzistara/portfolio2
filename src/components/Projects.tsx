import data, { type Project } from "../data/projectsData";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ColorButton, OutlineButton } from "./Buttons";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden bg-card border border-border hover:border-accent/60 transition-all group">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <CardMedia
          component="img"
          image={project.image}
          alt={`Picture of project called ${project.name}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <CardContent sx={{ p: 0 }}>
        <div className="px-6 py-2">
          <Typography
            variant="h6"
            component="h3"
            className="text-xl font-semibold text-foreground mb-2"
          >
            {project.name}
          </Typography>

          <Typography
            variant="body2"
            className="text-sm text-muted-foreground mb-4 leading-relaxed"
          >
            {project.description}
          </Typography>

          {project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 mt-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary-strong text-xs rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-2">
            {project.github && (
              <OutlineButton
                variant="outlined"
                size="small"
                className="flex-1 bg-transparent"
                component="a"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </OutlineButton>
            )}
            {project.site && (
              <ColorButton
                variant="contained"
                size="small"
                className="flex-1"
                component="a"
                href={project.site}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.siteLabel ?? "Demo"}
              </ColorButton>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-10 md:py-24 md:px-24 bg-background/80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-4 py-1.5 text-primary-strong rounded-lg text-md uppercase">
            Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-3 text-balance">
            Frontend Projects
          </h2>
          <div aria-hidden="true" className="h-1 w-10 rounded-full bg-accent mb-6" />

          <div className="grid md:grid-cols-2 gap-6">
            {data.frontend.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
