const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "E-Commerce UI",
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <h2 className="section-title">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
            <img src={p.img} className="h-56 w-full object-cover"/>
            <div className="p-4">
              <h3 className="font-bold">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;