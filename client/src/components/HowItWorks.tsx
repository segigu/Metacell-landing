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
      title: "Обработка",
      desc: "5-15 минут фототермической активации в MCT Unit для стимуляции экзосом."
    },
    {
      num: "03",
      title: "Активация",
      desc: "Получение плазмы с концентрацией экзосом в 13 раз выше нормы."
    },
    {
      num: "04",
      title: "Инъекция",
      desc: "Введение готового аутологичного препарата пациенту."
    }
  ];

  return (
    <section id="process" className="py-32 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Фототермическая биостимуляция
          </h2>
          <p className="text-gray-600 text-xl">
            Просто. Быстро. Эффективно. <span className="text-primary font-bold">30-40 минут.</span>
          </p>
        </div>

        <div className="relative">
          {/* Animated Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-2 bg-gray-100 -translate-y-1/2 rounded-full overflow-hidden">
             <motion.div 
               initial={{ x: "-100%" }}
               whileInView={{ x: "100%" }}
               transition={{ duration: 2, ease: "linear", repeat: Infinity }}
               className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
             />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg text-center group hover:border-primary hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-white border-4 border-blue-50 text-primary font-bold text-2xl rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
