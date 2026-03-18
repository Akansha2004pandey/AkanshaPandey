import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Akansha2004pandey" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/akansha-pandey-aa5aa4250/" },
  { icon: Mail, label: "Email", href: "mailto:akanshaoptimist@gmail.com" },
];

const Contact = () => (
  <section id="contact" className="py-28 px-6">
    <div className="max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Contact</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
          Let's <span className="text-gradient">connect</span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-muted-foreground mb-10 text-[15px]"
      >
        I'm always open to new opportunities, collaborations, or just a friendly chat.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="flex items-center justify-center gap-3"
      >
        {socials.map((s) => (
          <motion.a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -2, scale: 1.04 }}
            transition={{ duration: 0.25 }}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
          >
            <s.icon size={16} />
            {s.label}
          </motion.a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Contact;
