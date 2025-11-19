import { motion } from "framer-motion";
import { Package, BookOpen, Headset, Box } from "lucide-react";

export default function Support() {
  const items = [
    {
      icon: Package,
      title: "Сертификация",
      desc: "РУ Росздравнадзора получен. Полностью легально."
    },
    {
      icon: BookOpen,
      title: "Обучение",
      desc: "1 день обучения, выдаем сертификат. На русском языке."
    },
    {
      icon: Headset,
      title: "Техподдержка",
      desc: "24/7 на русском языке. Официальная гарантия 2 года."
    },
    {
      icon: Box,
      title: "Расходники",
      desc: "MCT Kit всегда в наличии. Поставки в РФ налажены."
    }
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-waves opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 text-center">
          Всё для быстрого старта
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white/10 transition-colors border border-transparent hover:border-white/20"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <item.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-blue-100">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
