export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-blue-900 text-white py-12 text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Bharathi 👋</h1>
        <p className="mt-4 text-xl">DevOps Engineer | CI/CD | Cloud | Monitoring</p>
        <div className="mt-4">
          <a href="https://www.linkedin.com/in/bharathi-356035236" className="underline mr-4" target="_blank">LinkedIn</a>
          <a href="https://github.com/Bharathi190" className="underline" target="_blank">GitHub</a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">About Me</h2>
          <p className="text-lg leading-relaxed">
            I’m a DevOps Engineer with 2+ years of experience streamlining CI/CD pipelines, managing containerized applications using Docker & Kubernetes, and optimizing infrastructure on Azure and AWS. I specialize in GitOps, secure automation, and scalable cloud deployments. I love working on systems that are robust, observable, and easy to maintain.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Projects</h2>
          <div className="space-y-6">
            <div className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">🚀 CI/CD for Containerized Apps</h3>
              <p>
                Built secure CI/CD pipelines using GitHub Actions. Integrated Trivy for image scanning, SonarQube for code quality, and automated deployments to AKS clusters with rollbacks and notifications.
              </p>
              <p className="text-sm text-gray-600 mt-2">Tools: GitHub, Trivy, SonarQube, Docker, AKS</p>
            </div>

            <div className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">📊 Centralized Monitoring & Alerting</h3>
              <p>
                Configured a full monitoring stack using Prometheus, Grafana, and Loki. Built visual dashboards and alerting systems using kube-state-metrics and exporters for infrastructure insights.
              </p>
              <p className="text-sm text-gray-600 mt-2">Tools: Prometheus, Grafana, Loki, Node Exporter</p>
            </div>

            <div className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">🔐 Automated Backups with Security</h3>
              <p>
                Automated database and file backups across cloud environments using CronJobs and Azure Blob Storage. Integrated Velero for cluster state recovery and security-compliant restore processes.
              </p>
              <p className="text-sm text-gray-600 mt-2">Tools: Azure Blob, CronJobs, Velero</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Skills</h2>
          <div className="grid grid-cols-2 gap-6 text-lg">
            <ul className="list-disc list-inside">
              <li>Cloud: Azure, AWS</li>
              <li>CI/CD: GitHub Actions, Jenkins</li>
              <li>Containers: Docker, Kubernetes</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>Monitoring: Prometheus, Grafana, Loki</li>
              <li>GitOps & Version Control: Git, GitHub</li>
              <li>Operating Systems: Linux (Ubuntu)</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Certifications</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Azure Administrator – Microsoft, Oct 2024</li>
            <li>DevSecOps – KodeKloud, Sept 2024</li>
            <li>AWS Certification – Btree Systems, Mar 2024</li>
            <li>Advanced Kubernetes/AKS – Udemy, Dec 2023</li>
            <li>GitOps with ArgoCD – Udemy, Dec 2023</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Contact</h2>
          <p className="text-lg">📧 <a href="mailto:bharathi2mm2@gmail.com" className="underline">bharathi2mm2@gmail.com</a></p>
          <p className="text-lg">📞 +91 9361592306</p>
        </section>
      </main>

      <footer className="text-center text-sm py-6 bg-gray-100 text-gray-500">
        &copy; 2025 Bharathi M. All rights reserved.
      </footer>
    </div>
  );
}
