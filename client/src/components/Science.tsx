import { motion } from "framer-motion";
import { Atom, Zap, Heart } from "lucide-react";

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

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-primary/20 flex gap-6 items-start group hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">13×</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Активность экзосом</h3>
              <p className="text-gray-600 leading-relaxed">
                Фототермическая обработка увеличивает выработку и высвобождение экзосом из тромбоцитов более чем в 13 раз
              </p>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-accent/20 flex gap-6 items-start group hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Биосовместимость</h3>
              <p className="text-gray-600 leading-relaxed">
                Аутологичный материал — собственная кровь пациента, без риска отторжения и аллергических реакций
              </p>
            </div>
          </div>
        </motion.div>

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
