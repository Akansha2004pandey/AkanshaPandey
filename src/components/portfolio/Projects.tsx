import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "ResearchGPT",
    desc: "Intelligent research assistant combining RAG + Multi-Agent Systems for paper discovery, citation-backed Q&A, and real-time knowledge base construction using CrewAI agents.",
    tech: ["React", "FastAPI", "Python", "CrewAI", "Pinecone", "Groq", "RAG"],
    github: "https://github.com/Akansha2004pandey/ResearchGPT",
    featured: true,
  },
  {
    title: "ProcureWise",
    desc: "AI-powered procurement platform that automates vendor evaluation, contract analysis, and purchase optimization using RAG pipelines and Gemini API.",
    tech: ["Next.js", "TypeScript", "Python", "Gemini API", "RAG", "GCP"],
    github: "https://github.com/Akansha2004pandey",
  },
  {
    title: "Genix AI",
    desc: "Full-stack AI SaaS application with intelligent content generation, image creation, and conversational AI capabilities.",
    tech: ["React", "Node.js", "OpenAI", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Akansha2004pandey",
  },
  {
    title: "Sanjeevani",
    desc: "AI-powered health assistant providing preliminary diagnosis suggestions, medicine information, and health tips through natural language interaction.",
    tech: ["React", "Python", "LangChain", "Firebase", "Gemini API"],
    github: "https://github.com/Akansha2004pandey",
  },
  {
    title: "Study Sphere",
    desc: "Academic resource sharing platform serving 500+ active users with collaborative study materials, notes, and discussion forums.",
    tech: ["React", "Express.js", "MongoDB", "Redux", "Node.js"],
    github: "https://github.com/Akansha2004pandey",
  },
];

const Projects = () => (
  <section id="projects" className="py-28 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Portfolio</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold">
          Featured <span className="text-gradient">Projects</span>
        </h2>
      </motion.div>

      {/* Featured project */}
      {projects.filter(p => p.featured).map((p) => (
        <motion.a
          key={p.title}
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          whileHover={{ y: -4, boxShadow: "0 20px 40px -15px hsl(0 0% 0% / 0.1)" }}
          transition={{ duration: 0.3 }}
          className="group block rounded-2xl border border-border bg-card p-8 mb-6 transition-colors hover:border-foreground/20"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="text-[10px] font-normal px-2 py-0.5 rounded-md">
                  Featured
                </Badge>
              </div>
              <h3 className="text-xl font-semibold text-foreground mt-2">{p.title}</h3>
            </div>
            <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-2xl">{p.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <Badge key={t} variant="secondary" className="text-[11px] font-normal rounded-md px-2.5 py-1">
                {t}
              </Badge>
            ))}
          </div>
        </motion.a>
      ))}

      {/* Other projects grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {projects.filter(p => !p.featured).map((p, i) => (
          <motion.a
            key={p.title}
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -3, boxShadow: "0 12px 30px -10px hsl(0 0% 0% / 0.08)" }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
              <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 shrink-0" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <Badge key={t} variant="secondary" className="text-[11px] font-normal rounded-md px-2.5 py-1">
                  {t}
                </Badge>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
