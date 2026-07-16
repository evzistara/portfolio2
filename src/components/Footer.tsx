import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#9076f3"),
    backgroundColor: "#9076f3",
    "&:hover": {
      backgroundColor: "rgba(144, 118, 243, 0.9)",
    },
  }));

  return (
    <footer id="contact" className="py-16 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Let's Work Together
          </h2>
          <p className="text-md text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out if you'd like to collaborate!
          </p>

          <ColorButton size="large">
            <div className="flex gap-2 items-center ">
              <MdOutlineEmail className="mr-2 h-5 w-5" />
              <a href="mailto:evzi.stara@gmail.com">Get In Touch</a>
            </div>
          </ColorButton>

          <div className="flex items-center justify-center gap-4 mb-8 mt-8">
            <Button>
              <a
                href="https://github.com/evzistara"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </Button>
            <Button>
              <a
                href="https://www.linkedin.com/in/evzenie-jitka-stara/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Evzi Stara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
