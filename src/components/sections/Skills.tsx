
import { CheckCircle } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "HTML", "CSS", "JavaScript", "TypeScript"],
      icon: "💻",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Django", "Python", "REST APIs"],
      icon: "⚙️",
    },
    {
      category: "Mobile",
      skills: ["Flutter", "Dart", "Mobile UI/UX", "Cross-platform development"],
      icon: "📱",
    },
    {
      category: "Database",
      skills: ["MySQL", "MongoDB", "Firebase", "Data Modeling"],
      icon: "🗄️",
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "Appwrite", "VS Code", "Figma"],
      icon: "🛠️",
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        <p className="text-zinc-400">
          A collection of technologies and tools I work with
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{category.icon}</span>
              <h3 className="text-xl font-semibold">{category.category}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center text-zinc-400">
                  <CheckCircle className="h-4 w-4 mr-2 text-purple-500" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
