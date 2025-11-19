import { motion } from "framer-motion";
import { TrendingUp, Users, Banknote, Calendar } from "lucide-react";

export default function Economy() {
  const stats = [
    {
      icon: Banknote,
      value: "20-30",
      suffix: "тыс₽",
      label: "Средний чек"
    },
    {
      icon: TrendingUp,
      value: "4-6",
      suffix: "мес",
      label: "Окупаемость"
    },
    {
      icon: Calendar,
      value: "3-4",
      suffix: "/нед",
      label: "Загрузка"
    },
    {
      icon: Users,
      value: "2-3",
      suffix: "млн₽",
      label: "Потенциал выручки"
    }
  ];

  return (
    <section id="economy" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Экономика успеха
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
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
              className="relative bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-7 w-7" />
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-gray-900">{stat.value}</span>
                  <span className="text-xl font-medium text-gray-500">{stat.suffix}</span>
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
