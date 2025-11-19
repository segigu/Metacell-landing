import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
  "Компактный дизайн для любой клиники",
  "Отсутствие расходных материалов (кроме Kit)",
];

export default function TechSpecs() {
  return (
    <section id="specs" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-heading font-bold text-foreground">
              Технические характеристики
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
              {specs.map((spec, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between p-5 ${
                    index !== specs.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="font-medium text-muted-foreground">{spec.label}</span>
                  <span className="font-bold text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-heading font-bold text-foreground">
              Преимущества системы
            </h2>
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-transparent hover:border-primary/20 transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <span className="text-lg font-medium text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
