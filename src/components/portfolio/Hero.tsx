import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
    {/* Decorative grid */}
    <div className="absolute inset-0 bg-[linear-gradient(hsl(0_0%_0%/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_0%/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

    {/* Floating decorative elements */}
    <motion.div
      className="absolute top-1/4 right-[15%] w-72 h-72 rounded-full border border-border/40 opacity-40"
      animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-1/3 left-[10%] w-48 h-48 rounded-full border border-border/30 opacity-30"
      animate={{ scale: [1, 1.08, 1], rotate: [0, -5, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />

    <div className="relative z-10 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-xs tracking-wide text-muted-foreground mb-8"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
        Available for opportunities
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
      >
        <span className="font-display">Akansha</span>{" "}
        <motion.span
          className="font-display text-gradient inline-block"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Pandey
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed"
      >
        Full-Stack Developer & AI Enthusiast crafting intelligent,
        elegant digital experiences. CSE @ NSUT, Delhi.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 flex items-center justify-center gap-4"
      >
        <Button asChild size="lg" className="rounded-full px-8 hover:scale-[1.03] transition-transform duration-200">
          <a href="#projects">
            View Work
            <ArrowRight size={16} className="ml-1" />
          </a>
        </Button>
        <Button variant="outline" asChild size="lg" className="rounded-full px-8 hover:scale-[1.03] transition-transform duration-200">
          <a href="#contact">Contact</a>
        </Button>
      </motion.div>
    </div>

    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
    >
      <ArrowDown size={18} className="animate-bounce" />
    </motion.a>
  </section>
);

export default Hero;
