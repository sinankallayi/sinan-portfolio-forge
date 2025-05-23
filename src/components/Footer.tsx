
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/yourusername" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/yourusername" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/yourusername" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:sinukallayi@gmail.com" },
  ];

  return (
    <footer className="border-t border-zinc-800 py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">SINAN</h2>
          
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-zinc-500 text-sm text-center">
            <p>© {currentYear} Muhammed Sinan K. All rights reserved.</p>
            <p className="mt-2">Full Stack & Flutter Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
