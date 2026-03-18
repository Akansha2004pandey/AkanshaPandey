import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="border-t border-border py-8 px-6"
  >
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
      <p>© {new Date().getFullYear()} Akansha Pandey</p>
      <p>Crafted with care</p>
    </div>
  </motion.footer>
);

export default Footer;
