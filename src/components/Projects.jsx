import data from "../data/projectsData";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export default function Projects() {

      const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#9076f3"),
    backgroundColor: "#9076f3",
    "&:hover": {
      backgroundColor: "rgba(144, 118, 243, 0.9)",
    },
  }));

  const OutlineButton = styled(Button)({
    color: "#9076f3",
    borderColor: "#9076f3",
    textColor: "#9076f3",
    "&:hover": {
      backgroundColor: "rgba(144, 118, 243, 0.1)",
    },
  });

  return (
    <section id="projects" className="py-32 px-10 md:py-40 md:px-24 bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {data.map((project) => (
    <Card
      key={project.id}
      className="overflow-hidden bg-card border border-border hover:border-primary/50 transition-all group"
    >
  
      <div className="relative aspect-video overflow-hidden bg-muted">
        <CardMedia
          component="img"
          image={project.image}
          alt={`Picture of project called ${project.name}`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

  
      <CardContent sx={{ p: 0 }}>
        <div className="px-6 py-2" >
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

          {project.technologies?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 mt-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={`${project.id}-${tech}-${i}`}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

    
          <div className="flex gap-2">
            <OutlineButton
              variant="outlined"
              size="small"
              className="flex-1 bg-transparent"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center"
              >
                Code
              </a>
            </OutlineButton>

            <ColorButton
              variant="contained"
              size="small"
              className="flex-1"
            >
              <a
                href={project.site}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center"
              >
                Demo
              </a>
            </ColorButton>
          </div>
        </div>
      </CardContent>
    </Card>
  ))}
</div>

        </div>
      </div>
    </section>
  );
}
