import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const skillGroups = [
  { label: "Languages", skills: ["C/C++", "Python", "JavaScript", "TypeScript", "SQL"] },
  { label: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS", "Redux"] },
  { label: "Backend", skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase"] },
  { label: "AI & Cloud", skills: ["Docker", "Gemini API", "LangChain", "RAG", "CrewAI", "Pinecone"] },
  { label: "Tools", skills: ["Git", "GitHub", "Figma", "Postman", "VS Code"] },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const About = () => (
  <section id="about" className="py-28 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div {...fadeUp} className="mb-4">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">About</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold">
          A bit about <span className="text-gradient">me</span>
        </h2>
      </motion.div>

      <motion.p {...fadeUp} className="text-muted-foreground leading-relaxed mb-12 max-w-2xl text-[15px]">
        I'm a passionate full-stack developer and AI enthusiast pursuing B.Tech in Computer Science
        at Netaji Subhas University of Technology, Delhi. I love building products that are both
        technically robust and delightful to use — from AI-powered platforms to real-time collaboration tools.
      </motion.p>

      {/* Education */}
      <motion.div
        {...fadeUp}
        whileHover={{ y: -2, boxShadow: "0 8px 30px -12px hsl(0 0% 0% / 0.08)" }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border border-border bg-card p-6 mb-12 cursor-default"
      >
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-muted text-foreground">
            <GraduationCap size={22} />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="font-semibold text-foreground">Netaji Subhas University of Technology</h3>
              <span className="text-xs text-muted-foreground">2022 – 2026</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">B.Tech, Computer Science & Engineering</p>
            <p className="text-xs text-muted-foreground mt-2">CGPA: <span className="text-foreground font-medium">9.0 / 10</span></p>
          </div>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={container}
      >
        <motion.p variants={item} className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Tech Stack</motion.p>
        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <motion.div key={group.label} variants={item}>
              <p className="text-sm font-medium text-foreground mb-2.5">{group.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-[11px] font-normal rounded-md px-2.5 py-1 hover:bg-foreground hover:text-background transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
