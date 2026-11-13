import { useState } from "react";
import Bonnie from "../assets/bonnie-head.webp";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [buttonState, setButtonState] = useState(false);

  function toggle() {
    setButtonState(!buttonState);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border px-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className="flex items-center gap-3 group-hover:scale-105 transition-transform">
              <img
                src={Bonnie}
                alt="Bonnie the dog"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full bg-primary/10 object-cover"
              />
              <p className="text-lg font-semibold">EJS</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-md text-muted-foreground hover:text-accent-strong transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-md text-muted-foreground hover:text-accent-strong transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-md text-muted-foreground hover:text-accent-strong transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-md text-muted-foreground hover:text-accent-strong transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-md text-muted-foreground hover:text-accent-strong transition-colors"
            >
              Contact
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={toggle}
            aria-label="Toggle menu"
          >
            {buttonState ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {buttonState && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a
                href="#about"
                className="text-sm text-muted-foreground hover:text-accent-strong transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-sm text-muted-foreground hover:text-accent-strong transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-sm text-muted-foreground hover:text-accent-strong transition-colors"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-sm text-muted-foreground hover:text-accent-strong transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-accent-strong transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
