import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import {  
  Atom, 
  Laptop
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
  description: string;
}

interface SkillWithMeta extends Skill {
  icon: JSX.Element;
  color: string;
}

interface CategoryGroup {
  name: string;
  skills: { name: string; level: number }[];
}

// Skill metadata with Lucide icons and colors
const skillMeta: Record<string, { icon: JSX.Element; color: string; description: string }> = {
  "JavaScript": { icon:<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
   className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, color: "#F7DF1E", description: "Dynamic web scripting" },
  "TypeScript": { icon:<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
   className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, color: "#3178C6", description: "Type-safe JS" },
  "React": { icon: <Atom className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, color: "#61DAFB", description: "Component-based UI" },
  "Next.js": { icon: 
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
   className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, color: "#000000", description: "React full-stack framework" },
  "Tailwind CSS": { icon:<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, color: "#38BDF8", description: "Utility-first CSS" },
  "Node.js": { icon:     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
   className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, color: "#339933", description: "JS backend runtime" },
  "Python": { icon:<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"   className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, color: "#3776AB", description: "General-purpose language" },
  "Angularjs": { icon:<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, color: "#E34F26", description: "Web service interfaces" },
  "CosmosDB": { icon:<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cosmosdb/cosmosdb-original.svg"
   className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, color: "#0078D4", description: "Globally distributed DB" },
  "MySQL": { icon: 
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"/>, color: "#4479A1", description: "Relational database" },
  "Git": { icon:<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
  , color: "#F05032", description: "Version control" },
  "CI/CD": { icon:<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg"
   className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, color: "#00BFFF", description: "DevOps pipelines" },
};

const skillCategories: CategoryGroup[] = [
  {
    name: "Frontend",
    skills: [
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 87 },
      { name: "Angularjs", level: 50 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 84 },
      { name: "Python", level: 92 },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "CosmosDB", level: 80 },
      { name: "MySQL", level: 78 },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Git", level: 75 },
      { name: "CI/CD", level: 70 },
    ],
  },
];

// Create flattened array with all metadata
const flattenedSkills: SkillWithMeta[] = skillCategories.flatMap((category) =>
  category.skills.map((s) => ({
    ...s,
    icon: skillMeta[s.name]?.icon || <div>❓</div>,
    color: skillMeta[s.name]?.color || "#888",
    description: skillMeta[s.name]?.description || "No description",
    category: category.name,
  }))
);

const SkillsOrbit: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [isMounted, setIsMounted] = useState(false);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Calculate category counts
  const categoryCounts = skillCategories.map(category => ({
    name: category.name,
    count: category.skills.length,
    color: flattenedSkills.find(skill => skill.category === category.name)?.color || "#888"
  }));

  // Handle window resize and initial mount
  useEffect(() => {
    setIsMounted(true);
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Start animation when component comes into view
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimationStarted(true);
        const expandTimer = setTimeout(() => setIsExpanded(true), 1500);
        return () => clearTimeout(expandTimer);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  // Calculate responsive values based on viewport size
  const getResponsiveValues = () => {
    if (!isMounted) {
      return {
        radius: 180,
        cardSize: 'w-16 h-16',
        iconSize: 'w-4 h-4',
        fontSize: 'text-xs',
        progressSize: 'w-8 h-8',
        containerHeight: 'h-[300px]'
      };
    }
    
    const { width } = windowSize;
    
    if (width < 640) { // Mobile
      return {
        radius: 100,
        cardSize: 'w-16 h-16',
        iconSize: 'w-3 h-3',
        fontSize: 'text-[0.4rem]',
        progressSize: 'w-6 h-6',
        containerHeight: 'h-[220px]'
      };
    }
    if (width < 768) { // Small tablets
      return {
        radius: 120,
        cardSize: 'w-18 h-18',
        iconSize: 'w-3 h-3',
        fontSize: 'text-[0.6rem]',
        progressSize: 'w-7 h-7',
        containerHeight: 'h-[250px]'
      };
    }
    if (width < 1024) { // Tablets
      return {
        radius: 160,
        cardSize: 'w-20 h-20',
        iconSize: 'w-4 h-4',
        fontSize: 'text-xs',
        progressSize: 'w-8 h-8',
        containerHeight: 'h-[320px]'
      };
    }
    // Desktop
    return {
      radius: 200,
      cardSize: 'w-24 h-24',
      iconSize: 'w-5 h-5',
      fontSize: 'text-sm',
      progressSize: 'w-10 h-10',
      containerHeight: 'h-[400px]'
    };
  };

  const { radius, cardSize, iconSize, fontSize, progressSize, containerHeight } = getResponsiveValues();

  return (
    <div className="flex flex-col lg:flex-row min-h-[70vh] w-full items-center justify-center gap-8 lg:gap-12 p-4 sm:p-8 mt-5">
      {/* Left Section - Orbit Visualization */}
      <div 
        className="relative w-full lg:w-1/2 flex items-center justify-center"
        ref={inViewRef}
      >
        {/* Center glowing hub */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <div className={`transition-transform duration-1000 ${inView ? 'scale-100' : 'scale-0'}`}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg sm:shadow-xl animate-pulse">
              <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-black/80 flex items-center justify-center">
                <Laptop className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Main skill orbit */}
        <div className={`relative w-full ${containerHeight} max-w-2xl mx-auto mb-2`}>
          {flattenedSkills.map((skill, index) => {
            const angle = (index * 360) / flattenedSkills.length;
            const currentAngle = isExpanded ? angle : (index * 45);
            const spacingRadius = isExpanded ? radius : radius * 0.7;
            const x = Math.cos((currentAngle - 90) * (Math.PI / 180)) * spacingRadius;
            const y = Math.sin((currentAngle - 90) * (Math.PI / 180)) * spacingRadius;

            return (
              <div
                key={index}
                className={`absolute transition-all duration-1000 ease-out ${
                  animationStarted ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                  transitionDelay: `${index * 50}ms`,
                  zIndex: hoveredSkill === index ? 50 : 10,
                }}
              >
                <div
                  className={`transition-transform duration-500 ease-out relative group`}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{ transform: hoveredSkill === index ? "scale(1.15)" : "scale(1)" }}
                >
                  <div
                    className="absolute inset-0 rounded-xl sm:rounded-2xl blur-md sm:blur-lg opacity-60"
                    style={{ backgroundColor: skill.color }}
                  />
                  <div className={`relative bg-slate-800/90 backdrop-blur-md border border-slate-600 rounded-xl sm:rounded-2xl p-2 ${cardSize} flex flex-col justify-between`}>
                    <div className={`flex justify-center items-center h-4 sm:h-6 mt-1`} style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    {/* <div className={`text-center text-white ${fontSize} font-bold line-clamp-1`}>
                      {skill.name}
                    </div> */}
                    <div className={`relative ${progressSize} mx-auto`}>
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#374151"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke={skill.color}
                          strokeWidth="3"
                          strokeDasharray={`${animationStarted ? skill.level : 0}, 100`}
                          strokeLinecap="round"
                          className="transition-all duration-1000 ease-out"
                          style={{ transitionDelay: `${index * 100 + 500}ms` }}
                        />
                      </svg>
                      <div className={`absolute inset-0 flex items-center justify-center text-white ${fontSize} font-bold`}>
                        {skill.level}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Section - Category Counts */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center space-y-6 max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Skills by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {categoryCounts.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-700 flex items-center space-x-3 transition-transform hover:scale-105"
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${category.color}30` }}
              >
                <div style={{ color: category.color }}>
                  {skillCategories[index].skills[0] && 
                    flattenedSkills.find(s => s.name === skillCategories[index].skills[0].name)?.icon}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white">{category.name}</h3>
                <p className="text-slate-400 text-sm">{category.count} skills</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full mt-6 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-2">Skill Distribution</h3>
          <div className="space-y-3">
            {categoryCounts.map((category, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className="h-3 rounded-full mr-2"
                  style={{ 
                    width: `${(category.count / flattenedSkills.length) * 100}%`,
                    backgroundColor: category.color
                  }}
                />
                <span className="text-sm text-slate-300">
                  {category.name} ({category.count})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsOrbit;