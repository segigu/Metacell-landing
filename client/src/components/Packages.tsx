import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Packages() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-16 text-center">
          Варианты внедрения
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Базовый</h3>
              <p className="text-gray-500">Для старта</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3 text-sm text-gray-700">
                <Check className="h-5 w-5 text-primary shrink-0" /> Аппарат MCT Unit
              </div>
              <div className="flex gap-3 text-sm text-gray-700">
                <Check className="h-5 w-5 text-primary shrink-0" /> Обучение персонала
              </div>
              <div className="flex gap-3 text-sm text-gray-700">
                <Check className="h-5 w-5 text-primary shrink-0" /> Стартовый комплект расходников
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">Запросить цену</Button>
            </CardFooter>
          </Card>

          <Card className="border-primary shadow-lg relative scale-105 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              Популярный выбор
            </div>
            <CardHeader>
              <h3 className="text-2xl font-bold text-primary">Премиум</h3>
              <p className="text-gray-500">Максимальная отдача</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3 text-sm text-gray-700">
                <Check className="h-5 w-5 text-primary shrink-0" /> Аппарат MCT Unit
              </div>
              <div className="flex gap-3 text-sm text-gray-700">
                <Check className="h-5 w-5 text-primary shrink-0" /> Расширенное обучение
              </div>
              <div className="flex gap-3 text-sm text-gray-700">
                <Check className="h-5 w-5 text-primary shrink-0" /> Комплект расходников XL
              </div>
              <div className="flex gap-3 text-sm font-bold text-gray-900">
                <Check className="h-5 w-5 text-primary shrink-0" /> Маркетинговые материалы
              </div>
              <div className="flex gap-3 text-sm font-bold text-gray-900">
                <Check className="h-5 w-5 text-primary shrink-0" /> Сопровождение 3 месяца
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-[#066a7e] text-white">Запросить цену</Button>
            </CardFooter>
          </Card>

          <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Корпоративный</h3>
              <p className="text-gray-500">Для сетей клиник</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3 text-sm text-gray-700">
                <Check className="h-5 w-5 text-primary shrink-0" /> Несколько аппаратов
              </div>
              <div className="flex gap-3 text-sm text-gray-700">
                <Check className="h-5 w-5 text-primary shrink-0" /> Индивидуальные условия
              </div>
              <div className="flex gap-3 text-sm text-gray-700">
                <Check className="h-5 w-5 text-primary shrink-0" /> Выездное обучение
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">Обсудить условия</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
