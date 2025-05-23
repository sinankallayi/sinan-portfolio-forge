
import { ArrowRight, Code, Smartphone, Server } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Full Stack Web Development",
      description: "End-to-end web application development using modern technology stacks. From responsive UI to robust backends and APIs.",
      icon: <Code className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using Flutter. Create beautiful, responsive apps that work on both iOS and Android.",
      icon: <Smartphone className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "Backend Solutions",
      description: "Powerful server-side applications with Django and Node.js. Database design, API development, and authentication systems.",
      icon: <Server className="h-10 w-10 text-purple-500" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        <p className="text-zinc-400">
          Solutions I can provide to meet your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="bg-zinc-900 border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
          >
            <CardHeader className="pb-4">
              <div className="mb-4">{service.icon}</div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-zinc-400">
              <p>{service.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 p-0 flex items-center gap-2">
                Learn more <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
