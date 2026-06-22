const Skills = () => {
  const skills = ["React", "Tailwind", "JavaScript", "HTML", "CSS", "Python", "django"];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <h2 className="section-title">My Skills</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, i) => (
          <div key={i} className="bg-white shadow-md px-6 py-3 rounded-lg hover:scale-105 transition">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;