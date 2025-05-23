
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "KMCT College of Engineering",
      period: "2023–2025",
      logo: "🎓",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "GEMS Arts and Science College",
      period: "2019–2022",
      logo: "🎓",
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
          <p className="text-zinc-400 leading-relaxed">
            I'm a passionate software engineer with a strong interest in
            building full-stack web and mobile applications. I enjoy solving
            complex problems and creating intuitive, user-friendly
            experiences.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Throughout my journey, I've developed expertise in a range of
            technologies including Flutter for mobile development, Django for
            backend solutions, and the MERN stack for web applications.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            I thrive in collaborative environments and am constantly seeking
            opportunities to learn and grow in this ever-evolving field.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8">Education</h3>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-blue-500 before:to-purple-400">
            {education.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-zinc-900 text-purple-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  {item.logo}
                </div>
                
                <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-900 border-zinc-800">
                  <CardContent className="p-4">
                    <div className="font-bold">{item.degree}</div>
                    <div className="text-sm text-zinc-400">{item.institution}</div>
                    <div className="text-xs text-purple-400 mt-1">{item.period}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
