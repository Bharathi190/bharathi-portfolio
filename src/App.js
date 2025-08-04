import { useState } from 'react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const tools = [
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Docker', category: 'Containers' },
    { name: 'Kubernetes', category: 'Containers' },
    { name: 'GitHub Actions', category: 'CI/CD' },
    { name: 'Prometheus', category: 'Monitoring' },
    { name: 'Grafana', category: 'Monitoring' },
    { name: 'Trivy', category: 'Security' },
    { name: 'Hasicorp Vault', category: 'Security' },
    { name: 'MySQL', category: 'Databases' },
    { name: 'PostgreSQL', category: 'Databases' },
    { name: 'MongoDB', category: 'Databases' }
  ];

  const categories = ['All', 'Cloud', 'CI/CD', 'Infrastructure', 'Containers', 'Monitoring', 'Security', 'Databases', 'OS'];

  const filteredTools = activeCategory === 'All' ? tools : tools.filter(tool => tool.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <header className="py-24 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Hello, I'm Bharathi</h1>
        <p className="text-xl mb-3">
          DevOps Engineer building scalable cloud platforms, streamlining CI/CD pipelines,
          and ensuring secure, zero-downtime deployments.
        </p>
        <p className="text-green-400 text-sm mb-6">🚀 Delivered 100+ production deployments across AWS & Azure</p>
        <div className="flex justify-center gap-4 mb-6">
          {tools.map((tool, idx) => (
            <p key={idx} className="text-white text-sm">{tool.name}</p>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded">Get in touch</a>
          <a href="#projects" className="border border-blue-600 px-6 py-2 rounded hover:bg-blue-600">View Projects</a>
        </div>
        <p className="mt-6 text-sm text-gray-400">↓ Scroll to explore</p>
      </header>

      <main className="px-8 max-w-5xl mx-auto">
        <section id="experience" className="py-16">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">Professional Experience</h2>
          <div className="bg-slate-800 p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold">DevOps Engineer</h3>
            <p className="text-lg">Intain Technologies, Chennai, India</p>
            <p className="text-sm text-gray-400">December 2022 – Present</p>
          </div>
        </section>

        <section id="projects" className="py-16 border-t border-slate-700">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid gap-6">
            <div className="bg-slate-800 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Secure CI/CD Pipeline for AI Applications</h3>
              <p>Implemented GitHub Actions-based pipelines integrated with Trivy, SonarQube, Docker, and AKS for secure AI deployments.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Centralized Monitoring and Logging</h3>
              <p>Configured Prometheus, Grafana, and Loki for real-time infrastructure monitoring and alerts using kube-state-metrics and node exporters.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Automated Backup and Recovery</h3>
              <p>Designed and deployed automated DB backups on all platforms using CronJobs and Azure Blob Storage, with secure credentials and a tested restore process.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="py-16 border-t border-slate-700">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & Tools</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1 rounded ${activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-slate-700 text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {filteredTools.map((tool, idx) => (
              <div key={idx} className="bg-slate-800 p-6 rounded shadow">
                <p className="text-white text-lg font-medium">{tool.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16 border-t border-slate-700">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <div className="text-center">
            <p className="text-lg mb-2">📧 bharathi2mm2@gmail.com</p>
            <p className="text-lg">📞 +91 9361592306</p>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm py-6 bg-slate-900 text-gray-500">
        &copy; 2025 Bharathi M. All rights reserved.
      </footer>
    </div>
  );
}
