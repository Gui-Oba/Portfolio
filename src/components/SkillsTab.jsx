import { useState } from 'react';

export default function SkillsTab() {
  const [activeTab, setActiveTab] = useState('languages');

  const skillCategories = {
    languages: {
      name: 'Languages',
      skills: [
        { name: 'Python', importance: 3 },
        { name: 'Java', importance: 2 },
        { name: 'C/C++', importance: 2 },
        { name: 'JavaScript', importance: 3 },
        { name: 'TypeScript', importance: 2 },
        { name: 'SQL', importance: 2 },
        { name: 'Bash', importance: 1 },
      ],
      icon: '/skills/FaCode.svg',
    },
    cloud: {
      name: 'Cloud Services',
      skills: [
        { name: 'AWS', importance: 3 },
        { name: 'Google Cloud', importance: 2 },
        { name: 'Oracle Cloud', importance: 2 },
      ],
      icon: '/skills/BsCloudyFill.svg',
    },
    fullstack: {
      name: 'Full Stack',
      skills: [
        { name: 'React', importance: 3 },
        { name: 'Next.js', importance: 3 },
        { name: 'Node.js', importance: 3 },
        { name: 'Flask', importance: 2 },
        { name: 'FastAPI', importance: 2 },
        { name: 'Tailwind CSS', importance: 2 },
        { name: 'HTML/CSS', importance: 2 },
        { name: 'Supabase', importance: 1 },
      ],
      icon: '/skills/BsStack.svg',
    },
    data: {
      name: 'Data & ML',
      skills: [
        { name: 'PyTorch', importance: 3 },
        { name: 'XGBoost', importance: 2 },
        { name: 'SQL', importance: 2 },
        { name: 'Pandas', importance: 3 },
        { name: 'NumPy', importance: 2 },
        { name: 'PyArrow', importance: 1 },
        { name: 'scikit-learn', importance: 2 },
        { name: 'Jupyter Notebook', importance: 2 },
      ],
      icon: '/skills/FaRobot.svg',
    },
    tools: {
      name: 'Tools & Others',
      skills: [
        { name: 'Git', importance: 3 },
        { name: 'Linux', importance: 2 },
        { name: 'Figma', importance: 2 },
        { name: 'Blender', importance: 1 },
        { name: 'VS Code', importance: 2 },
        { name: 'Microsoft Suite', importance: 1 },
        { name: 'Adobe Creative Cloud', importance: 1 },
      ],
      icon: '/skills/FaWrench.svg',
    },
  };

  const getSizeClass = (importance) => {
    switch (importance) {

      default:
        return 'text-xl font-semibold px-6 py-4';
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white border  border-gray-200 shadow-sm overflow-hidden">
      <div className="flex h-96">
        {/* Left sidebar with tabs */}
        <div className="w-1/3 bg-gray-50 border-r justify-center border-gray-200 flex flex-col">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-4 text-left cursor-pointer transition-all flex items-center gap-3 ${activeTab === key
                  ? 'bg-white font-bold text-black'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
            >
              <img src={category.icon} alt={category.name} className="w-5 h-5 flex-shrink-0" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Right side with skills display */}
        <div className="w-3/4 p-8 flex items-center justify-center">
          <div className="flex flex-wrap gap-4 justify-center content-center max-w-sm">
            {skillCategories[activeTab].skills.map((skill) => (
              <span
                key={skill.name}
                className={`inline-flex items-center border-gray-300 border text-gray-800 hover:from-gray-100 hover:to-gray-200 transition-all duration-200 cursor-default ${getSizeClass(skill.importance)}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
