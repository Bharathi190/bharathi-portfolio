import { useState } from 'react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('IaC');

  const tools = [
    { name: 'AWS', category: 'Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'Azure', category: 'Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Docker', category: 'Containers', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', category: 'Containers', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'GitHub Actions', category: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Prometheus', category: 'Monitoring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
    { name: 'Grafana', category: 'Monitoring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
    { name: 'Trivy', category: 'Security', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trivy/trivy-original.svg' },
    { name: 'Hasicorp Vault', category: 'Security', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vault/vault-original.svg' },
    { name: 'MySQL', category: 'Databases', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', category: 'Databases', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', category: 'Databases', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Ubuntu', category: 'OS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg' },
    { name: 'Terraform', category: 'IaC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' }
  ];

  const categories = ['Cloud', 'CI/CD', 'IaC', 'Containers', 'Monitoring', 'Security', 'Databases', 'OS'];

  const filteredTools = tools.filter(tool => activeCategory === tool.category);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <main className="px-8 max-w-5xl mx-auto">
        <section id="projects" className="py-16 border-t border-slate-700">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid gap-6">
            <div className="bg-slate-800 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">CI/CD for AI Apps</h3>
              <p>Integrated GitHub Actions with SonarQube, Trivy, DockerHub, and AKS to create secure, automated deployment workflows for AI services.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Monitoring and Alerting Stack</h3>
              <p>Implemented centralized monitoring using Prometheus, Grafana, and Loki with node-exporter and kube-state-metrics for cluster insights.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Backup and Restore</h3>
              <p>Automated DB backups across environments using CronJobs and Azure Blob Storage, with restoration validation pipelines.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Helm & ArgoCD App Management</h3>
              <p>Streamlined Kubernetes deployment using Helm charts and GitOps through ArgoCD with access control and automated sync.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">SSL, Ingress, and Gateway API</h3>
              <p>Provisioned cert-manager and Let's Encrypt for certificates and designed secure API routing using Ingress controller and Gateway API.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 border-t border-slate-700">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <div className="text-center space-y-2">
            <p className="text-lg">📧 bharathi2mm2@gmail.com</p>
            <p className="text-lg">📞 +91 9361592306</p>
            <p className="text-lg">🔗 <a className="text-blue-400 hover:underline" href="https://www.linkedin.com/in/bharathi-m-devops/" target="_blank">LinkedIn</a></p>
          </div>
        </section>
      </main>
    </div>
  );
}
