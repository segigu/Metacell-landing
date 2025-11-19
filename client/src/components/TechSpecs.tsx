import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Zap, Shield, Award, Cpu, Microscope } from "lucide-react";

const specs = [
  { label: "623.5 нм (Красный)", value: "12 J/min" },
  { label: "530 нм (Зеленый)", value: "10 J/min" },
  { label: "467 нм (Синий)", value: "10 J/min" },
  { label: "591 нм (Желтый)", value: "7.5 J/min" },
  { label: "850 нм (ИК)", value: "10 J/min" },
  { label: "Охлаждение / Нагрев", value: "4°С / 42°С" },
];

const benefits = [
  { text: "Увеличение регенерации в 13 раз", icon: Zap },
  { text: "Высокая биосовместимость", icon: Shield },
  { text: "Низкая иммуногенность", icon: Microscope },
  { text: "Работа с любым аутологичным материалом", icon: Cpu },
  { text: "Простота использования (предустановки)", icon: Award },
  { text: "Закрытая стерильная система MCT Kit", icon: Check },
];

export default function TechSpecs() {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} id="specs" className="py-32 bg-[#050a0c] relative">
      {/* Grid Pattern */}
      <div className="absolute inset-0 w-full h-full grid-pattern opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Technical Specs Table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                Спецификации
              </h2>
              <p className="text-accent font-mono text-sm uppercase tracking-widest">
                Energy & Wavelengths
              </p>
            </div>

            <div className="bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm overflow-hidden">
              {specs.map((spec, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between p-5 hover:bg-white/5 transition-colors ${
                    index !== specs.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <span className="font-mono text-sm text-gray-400 uppercase tracking-wider flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    {spec.label}
                  </span>
                  <span className="font-bold text-white text-right">{spec.value}</span>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-gray-500 italic">
              * MCT Kit изготовлен из полимера медицинского назначения для оптимального рассеивания.
            </p>
          </motion.div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
             <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                Клинические преимущества
              </h2>
              <p className="text-accent font-mono text-sm uppercase tracking-widest">
                Why Exosomes?
              </p>
            </div>

            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-5 p-4 rounded-xl border border-transparent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 flex items-center justify-center shrink-0 group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(77,189,198,0.2)] transition-all">
                    <benefit.icon className="h-6 w-6 text-white group-hover:text-accent" />
                  </div>
                  <span className="text-lg font-medium text-gray-200 group-hover:text-white">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="p-6 bg-accent/10 border border-accent/20 rounded-xl">
              <p className="text-gray-300 text-sm">
                "Фототермическая обработка тромбоцитов стимулирует выработку и высвобождение экзосом, увеличивая регенеративную способность аутологичного материала более чем в 13 раз."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
