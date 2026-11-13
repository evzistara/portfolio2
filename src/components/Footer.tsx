import Button from "@mui/material/Button";
import { ColorButton } from "./Buttons";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {

  return (
    <footer id="contact" className="py-16 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4 text-balance">
            Let's Work Together
          </h2>
          <p className="text-md text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm looking for a data engineering role in Ålesund. If you have
            something that could fit, or just want to talk data, get in touch!
          </p>

          <ColorButton
            size="large"
            component="a"
            href="mailto:evzi.stara@gmail.com"
            startIcon={<MdOutlineEmail className="h-5 w-5" />}
          >
            Get In Touch
          </ColorButton>

          <div className="flex items-center justify-center gap-4 mb-8 mt-8">
            <Button
              component="a"
              href="https://github.com/evzistara"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </Button>
            <Button
              component="a"
              href="https://www.linkedin.com/in/evzenie-jitka-stara/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-5 w-5" />
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
