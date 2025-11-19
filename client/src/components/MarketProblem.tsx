import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock } from "lucide-react";

export default function MarketProblem() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Рынок PRP насыщен. <br />
            <span className="text-destructive relative inline-block">
              Вы теряете прибыль
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-destructive/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 text-xl">
            Пациенты выбирают по цене, а не по качеству. Пора выделиться.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: AlertTriangle,
              title: "Конкуренция",
              desc: "Каждая клиника предлагает PRP. Нет отличий.",
              delay: 0
            },
            {
              icon: TrendingDown,
              title: "Демпинг цен",
              desc: "Пациенты сравнивают только стоимость процедур.",
              delay: 0.1
            },
            {
              icon: Clock,
              title: "Устаревание",
              desc: "PRP - технология вчерашнего дня. Рынок ждет нового.",
              delay: 0.2
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-destructive group-hover:text-white transition-colors duration-300">
                <item.icon className="h-8 w-8 text-destructive group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
