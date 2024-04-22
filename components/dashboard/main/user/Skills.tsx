type SkillsProps = {
  skills: { id: number; slug: string; label: string }[];
  selectedSkills: any;
  onchange: any;
};
const Skills = ({ skills, selectedSkills, onchange }: SkillsProps) => {
  return (
    <div>
      <h3 className="text-neutral-800 mt-3 mb-6">مهارت ها</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {skills.map((skill) => (
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              value={skill.label}
              checked={selectedSkills.includes(skill.label)}
              onChange={onchange}
              className="form-checkbox h-4 w-4 text-[#19C1DC] rounded-md"
            />
            <span className="mr-2 text-gray-700">{skill.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Skills;
