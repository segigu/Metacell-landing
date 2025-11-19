import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock } from "lucide-react";

export default function MarketProblem() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Конкуренция",
      description: "Каждая клиника предлагает PRP. Нет реальных отличий для пациента."
    },
    {
      icon: TrendingDown,
      title: "Цена",
      description: "Пациенты сравнивают только стоимость процедуры, выбирая самое дешевое."
    },
    {
      icon: Clock,
      title: "Устаревание",
      description: "PRP — это технология вчерашнего дня. Рынок требует новых решений."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Рынок PRP насыщен. <br />
            <span className="text-destructive">Вы теряете прибыль.</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Стандартные методы больше не создают конкурентного преимущества.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-destructive">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
