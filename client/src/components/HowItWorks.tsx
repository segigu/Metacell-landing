import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Забор крови",
      desc: "Стандартная процедура забора венозной крови пациента в пробирку."
    },
    {
      num: "02",
      title: "Обработка в MCT Unit",
      desc: "5-15 минут фототермической активации для стимуляции выработки экзосом."
    },
    {
      num: "03",
      title: "Получение материала",
      desc: "Получение активированной плазмы с концентрацией экзосом в 13 раз выше нормы."
    },
    {
      num: "04",
      title: "Инъекция",
      desc: "Введение готового аутологичного препарата пациенту."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Фототермическая биостимуляция
          </h2>
          <p className="text-gray-600 text-lg">
            Просто, быстро и эффективно. Время процедуры: 30-40 минут.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center group hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 mx-auto bg-blue-50 text-primary font-bold text-xl rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
