
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-purple-500" />,
      label: "Phone",
      value: "+91 9746 843 149",
    },
    {
      icon: <Mail className="h-5 w-5 text-purple-500" />,
      label: "Email",
      value: "sinukallayi@gmail.com",
    },
    {
      icon: <Github className="h-5 w-5 text-purple-500" />,
      label: "GitHub",
      value: "GitHub",
      link: "https://github.com/yourusername",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-purple-500" />,
      label: "LinkedIn",
      value: "LinkedIn",
      link: "https://linkedin.com/in/yourusername",
    },
    {
      icon: <MapPin className="h-5 w-5 text-purple-500" />,
      label: "Location",
      value: "Malappuram, Kerala",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        <p className="text-zinc-400">
          Feel free to reach out for collaborations or just a friendly chat
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="mr-4 p-3 bg-zinc-900 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-zinc-400">{item.label}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-purple-400 hover:text-purple-300 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-zinc-400 mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-zinc-800 border-zinc-700 focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-zinc-800 border-zinc-700 focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-zinc-800 border-zinc-700 focus:border-purple-500 min-h-[120px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
