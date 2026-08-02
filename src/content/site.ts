export type Locale = "en" | "th";

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
}

export interface ProofPoint {
  value: string;
  label: string;
}

export interface ArchitectureNode {
  label: string;
  detail: string;
}

export interface CaseStudy {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  summary: string;
  challengeLabel: string;
  challenge: string;
  decisionLabel: string;
  decisions: string[];
  proof: ProofPoint[];
  architecture: ArchitectureNode[];
  stack: string[];
  link: string;
  linkLabel: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  summary: string;
}

export interface CapabilityGroup {
  title: string;
  items: string[];
}

export interface SiteContent {
  locale: Locale;
  localeName: string;
  seo: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    experience: string;
    capabilities: string;
    contact: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    headline: string;
    statement: string;
    availability: string;
    primaryCta: string;
    secondaryCta: string;
    scroll: string;
    imageAlt: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    body: string;
    proof: string;
  };
  workflow: {
    eyebrow: string;
    title: string;
    description: string;
    steps: WorkflowStep[];
  };
  work: {
    eyebrow: string;
    title: string;
    description: string;
    cases: CaseStudy[];
  };
  experience: {
    eyebrow: string;
    title: string;
    items: ExperienceItem[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    groups: CapabilityGroup[];
  };
  certifications: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  writing: {
    eyebrow: string;
    title: string;
    description: string;
    articleLabel: string;
    articleTitle: string;
    articleSummary: string;
    articleCta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    phoneLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };
  footer: string;
}

const homelabLinks = {
  homelab: "https://github.com/zawawee37/homelab",
  kubeLab: "https://github.com/zawawee37/kube-selfstudy-lab",
};

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    locale: "en",
    localeName: "English",
    seo: {
      title: "Sawawee Sareh-esor | Senior Cloud Platform Engineer",
      description:
        "Senior Cloud Platform and Infrastructure Engineer building secure, resilient cloud platforms from requirements through production handover.",
    },
    nav: {
      work: "Selected work",
      experience: "Experience",
      capabilities: "Capabilities",
      contact: "Contact",
      menu: "Open navigation",
    },
    hero: {
      eyebrow: "Bangkok · Thailand + Remote",
      name: "Sawawee Sareh-esor",
      role: "Senior Cloud Platform & Infrastructure Engineer",
      headline: "Secure platforms. Clear delivery. Production ready.",
      statement:
        "I turn infrastructure requirements into resilient cloud platforms—aligning architecture, security, implementation and operations from first review to handover.",
      availability:
        "Open to senior Cloud Platform, Infrastructure and DevSecOps opportunities.",
      primaryCta: "Email me",
      secondaryCta: "Download CV",
      scroll: "Explore selected work",
      imageAlt:
        "Sawawee Sareh-esor standing confidently with arms crossed in a navy business suit",
    },
    intro: {
      eyebrow: "What I bring",
      title: "One engineer across the delivery line.",
      body:
        "Eight-plus years across enterprise support, cloud infrastructure, platform engineering and hybrid environments taught me that reliable systems are built between teams—not inside a single tool.",
      proof:
        "I connect application needs, infrastructure decisions, security controls and operational ownership so delivery stays clear all the way to production.",
    },
    workflow: {
      eyebrow: "How I work",
      title: "From requirement to reliable operations.",
      description:
        "A practical delivery path that keeps architecture, security and operations aligned before the first production change.",
      steps: [
        {
          number: "01",
          title: "Understand",
          description: "Capture application, SLA, security and cost constraints.",
        },
        {
          number: "02",
          title: "Review",
          description: "Challenge sizing, subscriptions, network and security assumptions.",
        },
        {
          number: "03",
          title: "Build",
          description: "Translate decisions into repeatable infrastructure and delivery plans.",
        },
        {
          number: "04",
          title: "Ready",
          description: "Validate access, vulnerabilities, monitoring and operational readiness.",
        },
        {
          number: "05",
          title: "Handover",
          description: "Document the system so operations can own it with confidence.",
        },
      ],
    },
    work: {
      eyebrow: "Selected work",
      title: "Proof lives in the decisions.",
      description:
        "Two hands-on platforms that show how I approach resilience, delivery and security when the constraints are real.",
      cases: [
        {
          id: "homelab",
          index: "01",
          eyebrow: "Flagship build",
          title: "A resilient Kubernetes platform, built from the hardware up.",
          summary:
            "A self-hosted 3-node high-availability Kubernetes platform on VMware ESXi, designed around quorum, safe access and a runbook that records the failures—not just the happy path.",
          challengeLabel: "The challenge",
          challenge:
            "Build a credible platform lab without vCenter, public inbound ports or managed load balancers, while keeping failure recovery understandable and repeatable.",
          decisionLabel: "Key engineering decisions",
          decisions: [
            "kube-vip provides a floating API endpoint across three control-plane nodes.",
            "Cloudflare Tunnel exposes services through outbound-only connectivity.",
            "PostgreSQL runs on a dedicated VM to keep the first data boundary explicit.",
            "Ten real incidents document root cause, recovery and the signal that should have caught each failure earlier.",
          ],
          proof: [
            { value: "3", label: "control planes" },
            { value: "2/3", label: "etcd quorum" },
            { value: "10", label: "real incidents" },
            { value: "0", label: "inbound ports" },
          ],
          architecture: [
            { label: "VMware ESXi 8", detail: "Compute foundation" },
            { label: "kubeadm + etcd", detail: "HA control plane" },
            { label: "MetalLB + ingress", detail: "Service entry" },
            { label: "Cloudflare Tunnel", detail: "Outbound-only edge" },
            { label: "PostgreSQL 18", detail: "Dedicated data host" },
          ],
          stack: [
            "Kubernetes",
            "VMware ESXi",
            "kube-vip",
            "MetalLB",
            "ingress-nginx",
            "Cloudflare Tunnel",
            "PostgreSQL",
            "Python",
          ],
          link: homelabLinks.homelab,
          linkLabel: "Explore the runbook",
        },
        {
          id: "devsecops",
          index: "02",
          eyebrow: "DevSecOps lab",
          title: "A GitOps delivery path that makes security visible before production.",
          summary:
            "A build-by-hand learning platform that moves a three-tier application from Docker Compose to Kubernetes, ArgoCD and an observable security pipeline.",
          challengeLabel: "The challenge",
          challenge:
            "Connect local infrastructure to cloud CI, keep three environments declarative and show exactly where image, dependency, secret and code risk enters the delivery path.",
          decisionLabel: "Key engineering decisions",
          decisions: [
            "Kustomize base and overlays keep dev, staging and production changes reviewable.",
            "ArgoCD owns deployment state so releases do not depend on manual kubectl apply commands.",
            "A self-hosted runner bridges GitHub Actions with private lab infrastructure.",
            "Six focused scanners feed a single security view instead of hiding risk behind one pass/fail check.",
          ],
          proof: [
            { value: "3", label: "environments" },
            { value: "6", label: "security scanners" },
            { value: "1", label: "GitOps control plane" },
            { value: "0", label: "manual deploys" },
          ],
          architecture: [
            { label: "GitHub Actions", detail: "Build + policy gates" },
            { label: "GHCR", detail: "Versioned images" },
            { label: "ArgoCD", detail: "Desired state" },
            { label: "Kubernetes", detail: "3 environments" },
            { label: "DefectDojo", detail: "Security findings" },
          ],
          stack: [
            "Kubernetes",
            "ArgoCD",
            "Kustomize",
            "GitHub Actions",
            "GHCR",
            "Trivy",
            "Gitleaks",
            "SonarQube",
            "DefectDojo",
          ],
          link: homelabLinks.kubeLab,
          linkLabel: "Open the lab guide",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Enterprise context. Hands-on depth.",
      items: [
        {
          period: "May 2025 — Present",
          role: "Hybrid IT Specialist (Emerging Technology)",
          company: "Fujitsu (Thailand)",
          summary:
            "Coordinate enterprise infrastructure delivery across AWS, Azure, hybrid and private cloud—from requirements and solution review through security readiness and operational handover.",
        },
        {
          period: "2023 — 2025",
          role: "System & Cloud Engineer",
          company: "Toyota Connected Asia Pacific",
          summary:
            "Supported AWS and Azure production environments, automated infrastructure with Terraform, maintained CI/CD pipelines and investigated incidents across Linux and Windows platforms.",
        },
        {
          period: "2021 — 2022",
          role: "System Engineer",
          company: "Vintcom Technology",
          summary:
            "Implemented enterprise server, virtualization and storage solutions across Oracle Linux, Red Hat, Solaris, VMware ESXi and Oracle VM.",
        },
        {
          period: "Earlier experience",
          role: "IT Support Engineer",
          company: "Lenovo / Dell Project, Malaysia",
          summary:
            "Delivered remote enterprise support, technical diagnosis and resolution while working against customer SLA commitments.",
        },
      ],
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "A platform view, not a tool list.",
      groups: [
        {
          title: "Cloud & hybrid",
          items: ["AWS", "Microsoft Azure", "OCI", "Hybrid Cloud", "Private Cloud"],
        },
        {
          title: "Platform & IaC",
          items: [
            "Terraform",
            "Kubernetes",
            "Docker",
            "VMware",
            "GitHub Actions",
            "GitLab CI",
            "Jenkins",
          ],
        },
        {
          title: "Systems & data",
          items: [
            "Linux",
            "Windows Server",
            "Networking",
            "DNS",
            "Microsoft SQL Server",
            "MySQL",
            "PostgreSQL",
          ],
        },
        {
          title: "Security & operations",
          items: [
            "IAM",
            "Firewall",
            "Network segmentation",
            "Application Security Testing",
            "Vulnerability remediation",
            "Incident analysis",
            "Production support",
          ],
        },
        {
          title: "AI-enabled engineering",
          items: [
            "AI solution design",
            "AI agents",
            "LLMs",
            "RAG",
            "Local LLM",
            "Prompt engineering",
            "Workflow automation",
          ],
        },
      ],
    },
    certifications: {
      eyebrow: "Certifications",
      title: "Validated cloud foundations.",
      items: [
        "AWS Certified Solutions Architect — Associate",
        "AWS Certified SysOps Administrator — Associate",
        "Microsoft Certified: Azure Administrator Associate (AZ-104)",
        "Oracle Cloud Infrastructure Foundations Associate",
      ],
    },
    writing: {
      eyebrow: "Technical writing",
      title: "I document what breaks—not only what works.",
      description:
        "Clear technical writing turns a lab result into reusable engineering judgment. I share the constraint, the observed behavior and the operational takeaway.",
      articleLabel: "AWS · Networking · Security",
      articleTitle: "Securing EC2 access with Session Manager and VPC endpoints",
      articleSummary:
        "A hands-on explanation of private versus public EC2 access, Private DNS behavior and why one endpoint configuration cannot serve both paths without careful design.",
      articleCta: "Read on LinkedIn",
    },
    contact: {
      eyebrow: "Start a conversation",
      title: "Need someone who can carry infrastructure from review to reality?",
      description:
        "I am open to senior Cloud Platform, Infrastructure and DevSecOps opportunities in Thailand and remote teams.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    footer: "Designed and engineered with intent. Deployed on Cloudflare.",
  },
  th: {
    locale: "th",
    localeName: "ภาษาไทย",
    seo: {
      title: "Sawawee Sareh-esor | Senior Cloud Platform Engineer",
      description:
        "วิศวกร Cloud Platform และ Infrastructure ระดับ Senior ออกแบบและส่งมอบระบบ Cloud ที่ปลอดภัยตั้งแต่เก็บ Requirement จนถึง Production Handover",
    },
    nav: {
      work: "ผลงาน",
      experience: "ประสบการณ์",
      capabilities: "ความเชี่ยวชาญ",
      contact: "ติดต่อ",
      menu: "เปิดเมนู",
    },
    hero: {
      eyebrow: "กรุงเทพฯ · ประเทศไทย + Remote",
      name: "Sawawee Sareh-esor",
      role: "Senior Cloud Platform & Infrastructure Engineer",
      headline: "แพลตฟอร์มปลอดภัย ส่งมอบชัดเจน พร้อมใช้งานจริง",
      statement:
        "ผมเปลี่ยน Infrastructure Requirement ให้เป็น Cloud Platform ที่มั่นคง โดยเชื่อม Architecture, Security, Implementation และ Operations ตั้งแต่การ Review ครั้งแรกจนถึง Handover",
      availability:
        "เปิดรับโอกาสระดับ Senior ด้าน Cloud Platform, Infrastructure และ DevSecOps",
      primaryCta: "ส่งอีเมล",
      secondaryCta: "ดาวน์โหลด CV",
      scroll: "ดูผลงานที่คัดเลือก",
      imageAlt:
        "Sawawee Sareh-esor ยืนกอดอกอย่างมั่นใจในชุดสูทธุรกิจสีน้ำเงินกรมท่า",
    },
    intro: {
      eyebrow: "สิ่งที่ผมนำมาสู่ทีม",
      title: "คนเดียวที่เชื่อมทุกช่วงของการส่งมอบ",
      body:
        "ประสบการณ์มากกว่า 8 ปี ตั้งแต่ Enterprise Support, Cloud Infrastructure, Platform Engineering และ Hybrid Environment ทำให้ผมเห็นว่าระบบที่เชื่อถือได้เกิดจากการทำงานร่วมกันของหลายทีม ไม่ใช่จากเครื่องมือตัวเดียว",
      proof:
        "ผมเชื่อมความต้องการของ Application, การตัดสินใจด้าน Infrastructure, Security Control และ Operational Ownership เพื่อให้งานชัดเจนจนถึง Production",
    },
    workflow: {
      eyebrow: "แนวทางการทำงาน",
      title: "จาก Requirement สู่ระบบที่ดูแลต่อได้จริง",
      description:
        "กระบวนการส่งมอบที่ทำให้ Architecture, Security และ Operations เห็นภาพเดียวกันก่อนการเปลี่ยนแปลงบน Production",
      steps: [
        {
          number: "01",
          title: "Understand",
          description: "เก็บ Application, SLA, Security และข้อจำกัดด้านต้นทุน",
        },
        {
          number: "02",
          title: "Review",
          description: "ตรวจสอบ Sizing, Subscription, Network และ Security Assumption",
        },
        {
          number: "03",
          title: "Build",
          description: "แปลงการตัดสินใจเป็น Infrastructure และแผนส่งมอบที่ทำซ้ำได้",
        },
        {
          number: "04",
          title: "Ready",
          description: "ตรวจ Access, Vulnerability, Monitoring และ Operational Readiness",
        },
        {
          number: "05",
          title: "Handover",
          description: "จัดทำเอกสารให้ Operations รับช่วงดูแลระบบได้อย่างมั่นใจ",
        },
      ],
    },
    work: {
      eyebrow: "ผลงานที่คัดเลือก",
      title: "หลักฐานอยู่ในการตัดสินใจทางวิศวกรรม",
      description:
        "สองแพลตฟอร์มที่ลงมือทำจริง แสดงวิธีคิดด้าน Resilience, Delivery และ Security ภายใต้ข้อจำกัดที่เกิดขึ้นจริง",
      cases: [
        {
          id: "homelab",
          index: "01",
          eyebrow: "Flagship build",
          title: "Kubernetes Platform ที่ทนทาน สร้างตั้งแต่ระดับ Hardware",
          summary:
            "High-availability Kubernetes บน VMware ESXi ที่ออกแบบรอบ Quorum, Secure Access และ Runbook ที่บันทึก Failure จริง ไม่ใช่เฉพาะ Happy Path",
          challengeLabel: "โจทย์",
          challenge:
            "สร้าง Platform Lab ที่น่าเชื่อถือโดยไม่มี vCenter, ไม่มี Public Inbound Port และไม่มี Managed Load Balancer พร้อมทำให้การกู้ระบบเข้าใจและทำซ้ำได้",
          decisionLabel: "การตัดสินใจสำคัญ",
          decisions: [
            "ใช้ kube-vip เป็น Floating API Endpoint สำหรับ Control Plane สามโหนด",
            "ใช้ Cloudflare Tunnel เปิดบริการผ่าน Outbound-only Connectivity",
            "แยก PostgreSQL ไว้บน VM เฉพาะเพื่อให้ Data Boundary ชัดเจน",
            "บันทึก Incident จริง 10 กรณี พร้อม Root Cause, Recovery และสัญญาณที่ควรตรวจพบได้ก่อน",
          ],
          proof: [
            { value: "3", label: "Control Planes" },
            { value: "2/3", label: "etcd Quorum" },
            { value: "10", label: "Incidents จริง" },
            { value: "0", label: "Inbound Ports" },
          ],
          architecture: [
            { label: "VMware ESXi 8", detail: "Compute Foundation" },
            { label: "kubeadm + etcd", detail: "HA Control Plane" },
            { label: "MetalLB + ingress", detail: "Service Entry" },
            { label: "Cloudflare Tunnel", detail: "Outbound-only Edge" },
            { label: "PostgreSQL 18", detail: "Dedicated Data Host" },
          ],
          stack: [
            "Kubernetes",
            "VMware ESXi",
            "kube-vip",
            "MetalLB",
            "ingress-nginx",
            "Cloudflare Tunnel",
            "PostgreSQL",
            "Python",
          ],
          link: homelabLinks.homelab,
          linkLabel: "ดู Runbook",
        },
        {
          id: "devsecops",
          index: "02",
          eyebrow: "DevSecOps lab",
          title: "GitOps Delivery Path ที่ทำให้เห็น Security Risk ก่อนถึง Production",
          summary:
            "แพลตฟอร์มเรียนรู้แบบลงมือสร้างเอง ที่พา Three-tier Application จาก Docker Compose ไปสู่ Kubernetes, ArgoCD และ Security Pipeline ที่ตรวจสอบได้",
          challengeLabel: "โจทย์",
          challenge:
            "เชื่อม Private Lab เข้ากับ Cloud CI, ดูแลสาม Environment แบบ Declarative และแสดงให้เห็นว่า Image, Dependency, Secret และ Code Risk เข้าสู่ Delivery Path ตรงไหน",
          decisionLabel: "การตัดสินใจสำคัญ",
          decisions: [
            "ใช้ Kustomize Base และ Overlay แยก Dev, Staging และ Production ให้ Review ได้",
            "ให้ ArgoCD เป็นเจ้าของ Deployment State โดยไม่พึ่ง Manual kubectl apply",
            "ใช้ Self-hosted Runner เชื่อม GitHub Actions กับ Private Lab Infrastructure",
            "รวม Scanner เฉพาะทาง 6 ตัวเข้าสู่ Security View เดียว แทนการซ่อนความเสี่ยงไว้หลังผล Pass/Fail เดียว",
          ],
          proof: [
            { value: "3", label: "Environments" },
            { value: "6", label: "Security Scanners" },
            { value: "1", label: "GitOps Control Plane" },
            { value: "0", label: "Manual Deploys" },
          ],
          architecture: [
            { label: "GitHub Actions", detail: "Build + Policy Gates" },
            { label: "GHCR", detail: "Versioned Images" },
            { label: "ArgoCD", detail: "Desired State" },
            { label: "Kubernetes", detail: "3 Environments" },
            { label: "DefectDojo", detail: "Security Findings" },
          ],
          stack: [
            "Kubernetes",
            "ArgoCD",
            "Kustomize",
            "GitHub Actions",
            "GHCR",
            "Trivy",
            "Gitleaks",
            "SonarQube",
            "DefectDojo",
          ],
          link: homelabLinks.kubeLab,
          linkLabel: "เปิด Lab Guide",
        },
      ],
    },
    experience: {
      eyebrow: "ประสบการณ์",
      title: "เข้าใจบริบทองค์กร และลงมือทำได้จริง",
      items: [
        {
          period: "พฤษภาคม 2025 — ปัจจุบัน",
          role: "Hybrid IT Specialist (Emerging Technology)",
          company: "Fujitsu (Thailand)",
          summary:
            "ประสานและขับเคลื่อน Enterprise Infrastructure Delivery บน AWS, Azure, Hybrid และ Private Cloud ตั้งแต่ Requirement, Solution Review, Security Readiness จนถึง Operational Handover",
        },
        {
          period: "2023 — 2025",
          role: "System & Cloud Engineer",
          company: "Toyota Connected Asia Pacific",
          summary:
            "ดูแล AWS และ Azure Production, ทำ Infrastructure Automation ด้วย Terraform, ดูแล CI/CD และวิเคราะห์ Incident บน Linux และ Windows",
        },
        {
          period: "2021 — 2022",
          role: "System Engineer",
          company: "Vintcom Technology",
          summary:
            "ติดตั้งและดูแล Enterprise Server, Virtualization และ Storage บน Oracle Linux, Red Hat, Solaris, VMware ESXi และ Oracle VM",
        },
        {
          period: "ประสบการณ์ช่วงแรก",
          role: "IT Support Engineer",
          company: "Lenovo / Dell Project, Malaysia",
          summary:
            "ให้บริการ Remote Enterprise Support วิเคราะห์และแก้ปัญหาด้านเทคนิคตาม SLA ของลูกค้า",
        },
      ],
    },
    capabilities: {
      eyebrow: "ความเชี่ยวชาญ",
      title: "มองเป็น Platform ไม่ใช่แค่รายชื่อเครื่องมือ",
      groups: [
        {
          title: "Cloud & Hybrid",
          items: ["AWS", "Microsoft Azure", "OCI", "Hybrid Cloud", "Private Cloud"],
        },
        {
          title: "Platform & IaC",
          items: [
            "Terraform",
            "Kubernetes",
            "Docker",
            "VMware",
            "GitHub Actions",
            "GitLab CI",
            "Jenkins",
          ],
        },
        {
          title: "Systems & Data",
          items: [
            "Linux",
            "Windows Server",
            "Networking",
            "DNS",
            "Microsoft SQL Server",
            "MySQL",
            "PostgreSQL",
          ],
        },
        {
          title: "Security & Operations",
          items: [
            "IAM",
            "Firewall",
            "Network Segmentation",
            "Application Security Testing",
            "Vulnerability Remediation",
            "Incident Analysis",
            "Production Support",
          ],
        },
        {
          title: "AI-enabled Engineering",
          items: [
            "AI Solution Design",
            "AI Agents",
            "LLMs",
            "RAG",
            "Local LLM",
            "Prompt Engineering",
            "Workflow Automation",
          ],
        },
      ],
    },
    certifications: {
      eyebrow: "ใบรับรอง",
      title: "Cloud Foundation ที่ผ่านการรับรอง",
      items: [
        "AWS Certified Solutions Architect — Associate",
        "AWS Certified SysOps Administrator — Associate",
        "Microsoft Certified: Azure Administrator Associate (AZ-104)",
        "Oracle Cloud Infrastructure Foundations Associate",
      ],
    },
    writing: {
      eyebrow: "Technical Writing",
      title: "ผมบันทึกสิ่งที่พัง ไม่ใช่เฉพาะสิ่งที่ทำงาน",
      description:
        "การเขียนที่ชัดเจนเปลี่ยนผลจาก Lab ให้เป็น Engineering Judgment ที่นำกลับมาใช้ได้ โดยอธิบายทั้งข้อจำกัด พฤติกรรมที่พบ และผลต่อการดูแลระบบ",
      articleLabel: "AWS · Networking · Security",
      articleTitle: "การเข้าถึง EC2 อย่างปลอดภัยด้วย Session Manager และ VPC Endpoint",
      articleSummary:
        "อธิบายจากการทดลองจริงถึง Public และ Private EC2, พฤติกรรมของ Private DNS และเหตุผลที่ Endpoint Configuration เดียวไม่สามารถรองรับทั้งสองเส้นทางได้โดยไม่ออกแบบให้รอบคอบ",
      articleCta: "อ่านบน LinkedIn",
    },
    contact: {
      eyebrow: "เริ่มต้นพูดคุย",
      title: "กำลังมองหาคนที่พา Infrastructure จาก Review ไปสู่ระบบจริงหรือไม่?",
      description:
        "ผมเปิดรับโอกาสระดับ Senior ด้าน Cloud Platform, Infrastructure และ DevSecOps ทั้งในประเทศไทยและ Remote Team",
      emailLabel: "อีเมล",
      phoneLabel: "โทรศัพท์",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    footer: "ออกแบบและสร้างอย่างมีเป้าหมาย เผยแพร่บน Cloudflare",
  },
};
