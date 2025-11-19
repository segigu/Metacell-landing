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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-16 text-center">
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
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
