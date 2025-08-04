export default function Portfolio() {
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
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" className="h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" alt="GitLab" className="h-8" />
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

        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">🚀 Secured CI/CD Pipeline for AI Applications</h3>
              <p>
                Architected and implemented a secure CI/CD pipeline tailored for AI/ML applications using GitHub Actions and Kubernetes. Incorporated secret management using HashiCorp Vault, image vulnerability scanning with Trivy, and automated deployments to AKS. Integrated SonarQube for static code analysis and enforced security policies to ensure model integrity and infrastructure compliance.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">📊 Centralized Monitoring</h3>
              <p>
                Built a comprehensive observability platform by deploying Prometheus and Grafana. Configured Node Exporter, kube-state-metrics, and custom Grafana dashboards for real-time visibility into infrastructure and application metrics. Set up alerting rules for proactive incident response.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">🔐 Automated Backup and Recovery</h3>
              <p>
                Engineered an automated backup and recovery solution using Velero and Azure Blob Storage to safeguard Kubernetes clusters and databases. CronJobs managed routine snapshots, and secrets were securely handled using HashiCorp Vault, ensuring compliance and quick disaster recovery.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="py-16 border-t border-slate-700">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center text-white">
            <div>
              <h3 className="text-xl font-semibold mb-2">Cloud</h3>
              <p>Azure, AWS</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Azure Services</h3>
              <p>Azure VM, VNet, AKS, Azure Disks, Blob Storage, Azure Fileshare, VNet Peering, Microsoft Entra (IAM), Azure SFTP</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">AWS Services</h3>
              <p>EC2, IAM, S3, VPC, Load Balancer, Autoscale, CloudWatch</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">CI/CD</h3>
              <p>GitHub Actions, Jenkins</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Containerization</h3>
              <p>Docker, Kubernetes</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Monitoring & Logging</h3>
              <p>Prometheus, Grafana, Loki</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p>HashiCorp Vault</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">SSL Certificates</h3>
              <p>Cert-Manager for K8s, Certbot for VMs</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Web Servers & API Gateway</h3>
              <p>Nginx, Ingress Controller, Gateway API</p>
            </div>
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
