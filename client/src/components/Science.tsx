import { motion } from "framer-motion";
import { Atom } from "lucide-react";

export default function Science() {
  return (
    <section id="science" className="py-32 bg-mesh-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase mb-4">
            <Atom className="h-5 w-5 animate-spin-slow" />
            <span>Science Core</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
            Основано на прорывах науки
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              year: "2013",
              title: "Открытие везикулярного транспорта",
              names: "Джеймс Ротман, Рэнди Шекман, Томас Зюдоф",
              desc: "Фундаментальное понимание того, как клетки упаковывают и доставляют молекулы через везикулы (экзосомы).",
              color: "primary"
            },
            {
              year: "2024",
              title: "Открытие микроРНК",
              names: "Виктор Амброс, Гэри Равкин",
              desc: "Понимание роли микроРНК в пост-транскрипционной регуляции генов — ключевого механизма действия экзосом.",
              color: "accent"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl border border-white/50 relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}/10 rounded-bl-full transition-transform group-hover:scale-150 duration-700`} />
              
              <div className={`text-6xl font-bold text-${item.color}/20 mb-6 font-heading`}>{item.year}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">{item.title}</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mb-6" />
              <p className="text-gray-800 font-medium mb-4">{item.names}</p>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-primary/20"
        >
          <p className="text-lg text-gray-700">
            "Экзосомы — внеклеточные везикулы, содержащие белки, липиды, микроРНК. 
            <span className="font-bold text-primary"> MCT Unit стимулирует выработку экзосом фототермической энергией.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
