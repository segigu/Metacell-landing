import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Microscope, ShieldCheck, Zap, Award } from "lucide-react";

export default function Solution() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const features = [
    {
      icon: Award,
      title: "Эксклюзивность",
      description: "Только получили РУ в РФ. Первые клиники получат особые условия."
    },
    {
      icon: Microscope,
      title: "Научность",
      description: "Основано на 2 Нобелевских премиях (2013 и 2024)."
    },
    {
      icon: Zap,
      title: "Эффективность",
      description: "Экзосомы в 13 раз активнее стандартной PRP терапии."
    },
    {
      icon: ShieldCheck,
      title: "Безопасность",
      description: "Аутологичный материал. Одобрено FDA."
    }
  ];

  return (
    <section ref={ref} id="solution" className="py-32 relative overflow-hidden bg-mesh-dark text-white">
      {/* Abstract Shapes Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent rounded-full blur-[120px] mix-blend-overlay" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary rounded-full blur-[100px] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div style={{ y: yParallax }} className="max-w-4xl mb-20">
          <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6 text-accent font-bold tracking-wider text-sm">
            РЕШЕНИЕ НОВОГО ПОКОЛЕНИЯ
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
            MCT Unit — процедура будущего. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">
              Пока только у вас.
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel-dark p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group border-white/5"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-accent/50 transition-shadow">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
