import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import techIcon from "@assets/generated_images/Abstract_tech_icon_54528a53.png";
import regenIcon from "@assets/generated_images/Cell_regeneration_icon_fc406b27.png";
import kitIcon from "@assets/generated_images/Medical_kit_icon_aa0debc6.png";

const features = [
  {
    title: "Фототермическая биомодуляция",
    description: "Инновационный метод воздействия на биологические ткани для ускорения процессов регенерации.",
    icon: techIcon,
  },
  {
    title: "Аутологичные продукты",
    description: "Использование собственных клеток пациента (PRP, АТФ, Экзосомы) для полной биосовместимости.",
    icon: regenIcon,
  },
  {
    title: "MCT Kit & Unit",
    description: "Комплексное решение: специализированные пробирки и аппаратный модуль.",
    icon: kitIcon,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* Brand Pattern Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#087D95 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-heading font-bold text-black">Технология будущего</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#087D95] to-[#4dbdc6] mx-auto" />
          <p className="text-lg text-gray-600">
            Сочетание передовых научных разработок и клинически доказанной эффективности.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group rounded-none relative overflow-hidden">
                {/* Top Border Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#087D95] to-[#4dbdc6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <CardHeader className="pb-4 pt-8">
                  <div className="w-20 h-20 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-[#bde2ee]/30 rounded-full transform group-hover:scale-125 transition-transform duration-500" />
                    <img 
                      src={feature.icon} 
                      alt={feature.title} 
                      className="w-full h-full object-contain relative z-10"
                    />
                  </div>
                  <CardTitle className="text-xl text-center font-bold text-gray-900 font-heading">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600 leading-relaxed px-6 pb-8">
                  {feature.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
