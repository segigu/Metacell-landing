import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import techIcon from "@assets/generated_images/Abstract_tech_icon_54528a53.png";
import regenIcon from "@assets/generated_images/Cell_regeneration_icon_fc406b27.png";
import kitIcon from "@assets/generated_images/Medical_kit_icon_aa0debc6.png";

const features = [
  {
    title: "Фототермическая биомодуляция",
    description: "Инновационный метод воздействия на биологические ткани для ускорения процессов регенерации и заживления.",
    icon: techIcon,
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Аутологичные продукты",
    description: "Использование собственных клеток пациента (PRP, АТФ, Экзосомы) гарантирует полную биосовместимость.",
    icon: regenIcon,
    color: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "MCT Kit & Unit",
    description: "Комплексное решение: специализированные пробирки и аппаратный модуль для подготовки материала.",
    icon: kitIcon,
    color: "from-indigo-500/10 to-purple-500/10",
  },
];

export default function Features() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} id="features" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
              Технология <br />
              <span className="text-primary opacity-80">будущего</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Сочетание передовых научных разработок и клинически доказанной эффективности
              для лучших результатов в эстетической медицине.
            </p>
          </motion.div>
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
             <div className="w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border-none shadow-2xl bg-white rounded-[2.5rem] overflow-hidden group cursor-pointer relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="w-32 h-32 mx-auto mb-8 rounded-[2rem] bg-secondary/5 p-6 shadow-inner group-hover:shadow-none group-hover:bg-white/80 transition-all duration-500">
                    <img 
                      src={feature.icon} 
                      alt={feature.title} 
                      className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardTitle className="text-2xl text-center font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground text-lg leading-relaxed px-8 pb-8 relative z-10">
                  {feature.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Parallax Background Shape */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[600px] bg-gradient-to-r from-gray-100/50 to-blue-50/50 -skew-y-6 blur-3xl -z-10" 
      />
    </section>
  );
}
