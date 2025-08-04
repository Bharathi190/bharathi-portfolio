export default function Portfolio() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Bharathi</h1>
        <p className="mt-4 text-xl">DevOps Engineer | Cloud & Automation Enthusiast</p>
        <p className="mt-2">
          <a href="https://www.linkedin.com/in/bharathi-356035236" className="underline mr-4" target="_blank">LinkedIn</a>
          <a href="https://github.com/Bharathi190" className="underline" target="_blank">GitHub</a>
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg">
          I’m a DevOps Engineer with 2 years of experience streamlining development pipelines, deploying scalable infrastructure, and building robust monitoring systems. My passion lies in automating deployments, enhancing cloud security, and optimizing operational workflows.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-bold">🚀 CI/CD Pipeline for Containerized Applications</h3>
          <p>
            Developed GitHub Actions workflows for secure and automated CI/CD pipelines. Integrated Trivy and SonarQube for security and quality checks. Deployed Docker containers to Azure Kubernetes Service (AKS) with seamless rollouts and email alerts.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">📊 Centralized Monitoring & Alerting</h3>
          <p>
            Implemented a robust monitoring stack using Prometheus, Grafana, and Loki. Designed custom dashboards and proactive alerts to monitor infrastructure, services, and endpoints with 85%+ utilization thresholds.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Skills & Tools</h2>
        <div className="grid grid-cols-2 gap-4 text-lg">
          <ul className="list-disc list-inside">
            <li>Cloud: Azure, AWS</li>
            <li>CI/CD: GitHub Actions, Jenkins</li>
            <li>Containers: Docker, Kubernetes</li>
          </ul>
          <ul className="list-disc list-inside">
            <li>Monitoring: Prometheus, Grafana, Loki</li>
            <li>Source Control: Git, GitHub</li>
            <li>OS: Linux (Ubuntu)</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Azure Administrator – Microsoft, Oct 2024</li>
          <li>DevSecOps – KodeKloud, Sept 2024</li>
          <li>AWS Certification – Btree Systems, Mar 2024</li>
          <li>Advanced Kubernetes/AKS – Udemy, Dec 2023</li>
          <li>GitOps with ArgoCD – Udemy, Dec 2023</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-lg">📧 bharathi2mm2@gmail.com</p>
        <p className="text-lg">📞 +91 9361592306</p>
      </section>
    </div>
  );
}
