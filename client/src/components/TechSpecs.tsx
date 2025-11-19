import { motion } from "framer-motion";
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
  "Ускорение реабилитации в 2 раза",
  "Безболезненность процедур",
  "Совместимость с любыми пробирками",
  "Простой и интуитивный интерфейс",
  "Компактный дизайн",
  "Отсутствие расходных материалов",
];

export default function TechSpecs() {
  return (
    <section id="specs" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-heading font-bold text-black">
                Технические <br />характеристики
              </h2>
              <div className="w-20 h-1 bg-primary" />
            </div>

            <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
              {specs.map((spec, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex justify-between py-4 hover:bg-gray-50 transition-colors px-2"
                >
                  <span className="font-medium text-gray-500">{spec.label}</span>
                  <span className="font-bold text-primary">{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#087D95] text-white p-10 md:p-12 relative overflow-hidden shadow-2xl"
          >
            {/* Background Gradient Decoration */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#4dbdc6] rounded-full blur-3xl opacity-50" />
            
            <h3 className="text-3xl font-heading font-bold mb-8 relative z-10">Преимущества</h3>
            
            <div className="grid gap-6 relative z-10">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
