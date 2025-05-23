
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Duo Dine",
      description: "Multi-Restaurant Food Ordering App with real-time tracking, secure payments, and role-based notifications",
      technologies: ["Flutter", "Dart", "Appwrite", "Firebase"],
      image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 2,
      title: "Edan Homestay",
      description: "Room Booking Website with Django including booking system, payments, refunds, and admin control",
      technologies: ["Django", "Python", "MySQL", "JavaScript"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "Dev Portfolio",
      description: "Modern developer portfolio website with dark theme and interactive elements",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "Full-featured online store with product management, cart system, and payment integration",
      technologies: ["MERN Stack", "Redux", "Stripe", "AWS"],
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        <p className="text-zinc-400">
          A collection of applications I've built
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
            <AspectRatio ratio={16 / 9}>
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full brightness-75 hover:brightness-90 transition-all duration-300"
              />
            </AspectRatio>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="text-zinc-400">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="bg-zinc-800 hover:bg-zinc-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button variant="outline" size="sm" className="flex-1">
                Demo
              </Button>
              <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                Source Code
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
          View All Projects
        </Button>
      </div>
    </div>
  );
};

export default Projects;
