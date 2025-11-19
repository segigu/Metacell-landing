import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import techIcon from "@assets/generated_images/Abstract_tech_icon_54528a53.png";
import regenIcon from "@assets/generated_images/Cell_regeneration_icon_fc406b27.png";
import kitIcon from "@assets/generated_images/Medical_kit_icon_aa0debc6.png";

const features = [
  {
    title: "Научная база",
    description: "Основано на открытиях механизмов везикулярного транспорта и микроРНК, удостоенных Нобелевских премий 2013 и 2024 годов.",
    icon: techIcon,
  },
  {
    title: "Экзосомы",
    description: "Внеклеточные везикулы (40-250 нм), переносящие белки, липиды и РНК для межклеточной коммуникации и регенерации.",
    icon: regenIcon,
  },
  {
    title: "MCT Kit & Unit",
    description: "Уникальная система с фототермической активацией для обработки 10 мл любого аутологичного материала.",
    icon: kitIcon,
  },
];

export default function Features() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the flying particles
  const yParticles = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacityParticles = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="features" className="py-32 relative overflow-hidden">
      {/* Flying Particles Background Animation */}
      <motion.div 
        style={{ y: yParticles, opacity: opacityParticles }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      >
         {Array.from({ length: 30 }).map((_, i) => (
           <div 
             key={i}
             className="absolute w-1 h-1 bg-accent rounded-full blur-[1px]"
             style={{
               top: `${Math.random() * 100}%`,
               left: `${Math.random() * 100}%`,
               opacity: Math.random() * 0.5 + 0.2,
             }}
           />
         ))}
         <div className="absolute top-1/4 left-0 w-full h-[500px] bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl transform -skew-y-12" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/10 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              От науки к <span className="text-accent">клинической практике</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Экзосомы играют ключевую роль в заживлении ран, иммуномодуляции и метаболическом перепрограммировании.
              MCT System делает эту технологию доступной для врача.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="text-right">
               <div className="text-4xl font-mono font-bold text-white">01</div>
               <div className="text-sm text-accent uppercase tracking-widest">Science Core</div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-black/40 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(8,125,149,0.15)] group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-4 group-hover:scale-110 transition-transform duration-500">
                    <img 
                      src={feature.icon} 
                      alt={feature.title} 
                      className="w-full h-full object-contain filter brightness-0 invert drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400 leading-relaxed relative z-10">
                  {feature.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
