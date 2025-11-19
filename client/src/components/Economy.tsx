import { motion } from "framer-motion";
import { TrendingUp, Users, Banknote, Calendar } from "lucide-react";

export default function Economy() {
  const stats = [
    {
      icon: Banknote,
      value: "20-30 тыс₽",
      label: "Средний чек процедуры"
    },
    {
      icon: TrendingUp,
      value: "4-6 месяцев",
      label: "Окупаемость (50-70 процедур)"
    },
    {
      icon: Calendar,
      value: "3-4 в неделю",
      label: "Реальная загрузка"
    },
    {
      icon: Users,
      value: "2-3 млн₽",
      label: "Годовой потенциал выручки"
    }
  ];

  return (
    <section id="economy" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Окупаемость и потенциал</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Инвестиция, которая начинает работать на вас с первого месяца.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl text-center hover:bg-white/20 transition-colors"
            >
              <div className="w-12 h-12 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/70 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
