import { motion } from "framer-motion";

const experiences = [
  {
    company: "Microsoft",
    role: "SDE Intern",
    period: "May – Jul 2025",
    desc: "Developed AI-powered diagnostics for Azure DevOps pipelines, reducing mean time to resolve CI/CD failures. Built intelligent log analysis and root cause suggestion systems.",
  },
  {
    company: "Floneo Technologies",
    role: "Frontend Developer Intern",
    period: "2024 – 2025",
    desc: "Worked on a low-code/no-code platform with canvas editor UI, multi-device mode support, multilingual support, live app preview, run functionality, and drag-and-drop component system.",
  },
  {
    company: "Dynamic Mavens",
    role: "Frontend Intern",
    period: "Jun – Jul 2024",
    desc: "Built responsive web interfaces and improved UI/UX for client-facing applications using React and modern CSS frameworks.",
  },
  {
    company: "NSUT (Research)",
    role: "Web Developer Intern",
    period: "Jul – Aug 2024",
    desc: "Developed web applications for university research projects, implementing data visualization dashboards and interactive features.",
  },
];

const Experience = () => (
  <section id="experience" className="py-28 px-6 bg-muted/30">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Career</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold">
          Work <span className="text-gradient">Experience</span>
        </h2>
      </motion.div>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative pl-8 pb-10 last:pb-0 border-l border-border hover:border-foreground/30 transition-colors duration-300"
          >
            <motion.div
              className="absolute left-0 top-1 w-2 h-2 rounded-full bg-foreground -translate-x-1/2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 300 }}
            />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-gradient transition-colors duration-200">{exp.company}</h3>
                <p className="text-sm text-muted-foreground">{exp.role}</p>
              </div>
              <span className="text-xs text-muted-foreground font-mono">{exp.period}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
