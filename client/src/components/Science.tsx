import { motion } from "framer-motion";

export default function Science() {
  return (
    <section id="science" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Основано на прорывах науки
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-primary"
          >
            <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Нобелевская премия 2013</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Открытие везикулярного транспорта</h3>
            <p className="text-gray-600 mb-4">Джеймс Ротман, Рэнди Шекман, Томас Зюдоф</p>
            <p className="text-gray-500 text-sm">
              Фундаментальное понимание того, как клетки упаковывают и доставляют молекулы через везикулы (экзосомы).
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-accent"
          >
            <div className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Нобелевская премия 2024</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Открытие микроРНК</h3>
            <p className="text-gray-600 mb-4">Виктор Амброс, Гэри Равкин</p>
            <p className="text-gray-500 text-sm">
              Понимание роли микроРНК в пост-транскрипционной регуляции генов — ключевого механизма действия экзосом.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
