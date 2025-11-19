import { motion } from "framer-motion";
import { Microscope, ShieldCheck, Zap, Award } from "lucide-react";

export default function Solution() {
  const features = [
    {
      icon: Award,
      title: "Эксклюзивность",
      description: "Только получили РУ в РФ. Первые 10-15 клиник получат особые условия."
    },
    {
      icon: Microscope,
      title: "Научность",
      description: "Основано на 2 Нобелевских премиях (2013 - везикулярный транспорт, 2024 - микроРНК)."
    },
    {
      icon: Zap,
      title: "Эффективность",
      description: "Экзосомы в 13 раз активнее стандартной PRP терапии."
    },
    {
      icon: ShieldCheck,
      title: "Безопасность",
      description: "Аутологичный материал. Одобрено FDA для аутологичных экзосом."
    }
  ];

  return (
    <section id="solution" className="py-24 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full mb-4">РЕШЕНИЕ</div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            MCT Unit — процедура следующего поколения. <br />
            <span className="text-primary">Пока только у вас.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
