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

          <div className="flex flex-wrap gap-4 lg:gap-10">
            {data.map((project) => (
              <Card key={project.id} className="py-4 overflow-hidden w-xs bg-card border-border hover:border-primary/50 transition-all group">
                <CardMedia
                  sx={{ height: 200 }}
                  image={project.image}
                  title={`Picture of project called ${project.name}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                 {project.description}
                  </Typography>
                  <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech,index) => (
                    <div key={index} className="inline-block px-2 py-1 bg-primary/10 text-primary rounded-lg text-xs font-semibold">
            {tech}
          </div>))}</div>
                </CardContent>
                <CardActions>
                   
                  <OutlineButton variant="outlined" size="small" className="w-1/2"><a href={project.github}>Code</a></OutlineButton>
                  <ColorButton variant="contained" size="small" className="w-1/2"><a href={project.site}>Demo</a></ColorButton>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
