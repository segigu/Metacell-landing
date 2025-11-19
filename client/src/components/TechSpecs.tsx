import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Zap, Shield, Award } from "lucide-react";

const specs = [
  { label: "Технология", value: "Фототермическая биомодуляция" },
  { label: "Длина волны", value: "Специальный спектр (Запатентовано)" },
  { label: "Режимы работы", value: "Автоматический, Ручной" },
  { label: "Питание", value: "220В / 50Гц" },
  { label: "Гарантия", value: "2 года" },
  { label: "Сертификация", value: "Медицинское изделие РФ" },
];

const benefits = [
  { text: "Ускорение реабилитации в 2 раза", icon: Zap },
  { text: "Безболезненность процедур", icon: Shield },
  { text: "Совместимость с любыми пробирками", icon: CheckCircle2 },
  { text: "Простой и интуитивный интерфейс", icon: Award },
  { text: "Компактный дизайн для любой клиники", icon: CheckCircle2 },
  { text: "Отсутствие расходных материалов", icon: CheckCircle2 },
];

export default function TechSpecs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  
  return (
    <section ref={ref} id="specs" className="py-32 bg-secondary text-secondary-foreground relative overflow-hidden rounded-t-[4rem] -mt-12 shadow-inner-lg">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-5xl font-heading font-bold text-white">
                Технические <br /> <span className="text-primary-foreground/60">характеристики</span>
              </h2>
              <p className="text-lg text-white/60 max-w-md">
                Максимальная эффективность в компактном корпусе. Разработано инженерами для врачей.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden">
              {specs.map((spec, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex justify-between p-6 hover:bg-white/5 transition-colors ${
                    index !== specs.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <span className="font-medium text-white/70">{spec.label}</span>
                  <span className="font-bold text-white">{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h2 className="text-4xl font-heading font-bold text-white">
              Преимущества системы
            </h2>
            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="flex items-center gap-6 bg-white/5 p-6 rounded-3xl border border-white/5 transition-all duration-300 cursor-default"
                >
                  <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary-foreground shrink-0 shadow-lg shadow-primary/5">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xl font-medium text-white/90">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
