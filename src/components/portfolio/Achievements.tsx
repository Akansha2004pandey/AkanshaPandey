import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

const achievements = [
  {
    title: "Google AI for Impact Hackathon",
    detail: "Top 10 globally — Built Sanjeevani, an AI health assistant selected among thousands of submissions worldwide.",
    icon: Trophy,
  },
  {
    title: "HansInnovers' 2025",
    detail: "Top 10 out of 250+ teams — Developed ProcureWise, an AI-powered procurement optimization platform.",
    icon: Award,
  },
];

const Achievements = () => (
  <section id="achievements" className="py-28 px-6 bg-muted/30">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Recognition</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold">Achievements</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -3, boxShadow: "0 12px 30px -10px hsl(0 0% 0% / 0.08)" }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20 cursor-default"
          >
            <motion.div
              className="p-2.5 rounded-xl bg-muted text-foreground w-fit mb-4"
              whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
            >
              <a.icon size={20} />
            </motion.div>
            <h3 className="font-semibold text-foreground mb-2">{a.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{a.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
