import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export default function Packages() {
  return (
    <section className="py-32 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-20 text-center">
          Варианты внедрения
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* Basic */}
          <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
            <Card className="border-gray-200 shadow-xl rounded-3xl overflow-hidden h-full bg-white">
              <CardHeader className="p-8 bg-gray-50">
                <h3 className="text-2xl font-bold text-gray-900">Базовый</h3>
                <p className="text-gray-500">Для легкого старта</p>
              </CardHeader>
              <CardContent className="space-y-4 p-8">
                {["Аппарат MCT Unit", "Обучение персонала", "Стартовый комплект"].map((item, i) => (
                  <div key={i} className="flex gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 text-gray-600" />
                    </div>
                    {item}
                  </div>
                ))}
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button variant="outline" className="w-full h-12 rounded-xl text-lg border-gray-300 hover:bg-gray-100">Запросить цену</Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Premium - Highlighted */}
          <motion.div 
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.03 }} 
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <Card className="border-primary shadow-2xl shadow-primary/20 rounded-[2rem] overflow-hidden h-full bg-white relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />
              <CardHeader className="p-10 bg-primary/5 pb-6">
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4 w-fit">
                  <Star className="h-3 w-3 fill-current" /> Популярный выбор
                </div>
                <h3 className="text-3xl font-bold text-primary">Премиум</h3>
                <p className="text-gray-600">Максимальная отдача</p>
              </CardHeader>
              <CardContent className="space-y-5 p-10 pt-6">
                {["Аппарат MCT Unit", "Расширенное обучение", "Комплект расходников XL", "Маркетинговые материалы", "Сопровождение 3 месяца"].map((item, i) => (
                  <div key={i} className="flex gap-3 text-gray-800 font-medium">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    {item}
                  </div>
                ))}
              </CardContent>
              <CardFooter className="p-10 pt-0">
                <Button className="w-full h-14 rounded-xl text-lg bg-primary hover:bg-[#066a7e] shadow-lg shadow-primary/30">Запросить цену</Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Corporate */}
          <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
            <Card className="border-gray-200 shadow-xl rounded-3xl overflow-hidden h-full bg-white">
              <CardHeader className="p-8 bg-gray-50">
                <h3 className="text-2xl font-bold text-gray-900">Корпоративный</h3>
                <p className="text-gray-500">Для сетей клиник</p>
              </CardHeader>
              <CardContent className="space-y-4 p-8">
                {["Несколько аппаратов", "Индивидуальные условия", "Выездное обучение", "Персональный менеджер"].map((item, i) => (
                  <div key={i} className="flex gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 text-gray-600" />
                    </div>
                    {item}
                  </div>
                ))}
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button variant="outline" className="w-full h-12 rounded-xl text-lg border-gray-300 hover:bg-gray-100">Обсудить условия</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
