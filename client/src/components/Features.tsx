import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import techIcon from "@assets/generated_images/Abstract_tech_icon_54528a53.png";
import regenIcon from "@assets/generated_images/Cell_regeneration_icon_fc406b27.png";
import kitIcon from "@assets/generated_images/Medical_kit_icon_aa0debc6.png";

const features = [
  {
    title: "Фототермическая биомодуляция",
    description: "Инновационный метод воздействия на биологические ткани для ускорения процессов регенерации и заживления.",
    icon: techIcon,
  },
  {
    title: "Аутологичные продукты",
    description: "Использование собственных клеток пациента (PRP, АТФ, Экзосомы) гарантирует полную биосовместимость.",
    icon: regenIcon,
  },
  {
    title: "MCT Kit & Unit",
    description: "Комплексное решение: специализированные пробирки и аппаратный модуль для подготовки материала.",
    icon: kitIcon,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-heading font-bold text-foreground">Технология будущего</h2>
          <p className="text-lg text-muted-foreground">
            Сочетание передовых научных разработок и клинически доказанной эффективности
            для лучших результатов в эстетической медицине.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-secondary/30 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-white p-4 shadow-sm">
                    <img 
                      src={feature.icon} 
                      alt={feature.title} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl text-center font-bold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
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
