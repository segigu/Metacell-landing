import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ShieldCheck } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_image_of_a_sleek_medical_device_2ddda277.png";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      {/* Abstract Medical Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-primary font-semibold text-xs tracking-wide uppercase"
            >
              <ShieldCheck className="h-4 w-4" />
              <span>РУ №РЗН 2024/12345 Росздравнадзор</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-[1.1] text-gray-900">
              MCT Unit: <span className="text-primary">Технология экзосом.</span> <br />
              Первая в России.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Эксклюзивно для вашей клиники. Одобрено Росздравнадзором. 
              Основано на Нобелевских премиях 2013 и 2024.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="rounded-full bg-primary hover:bg-[#066a7e] text-white h-14 px-8 text-lg shadow-xl shadow-primary/20">
                Стать первопроходцами
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-2 border-gray-200 hover:border-primary hover:text-primary h-14 px-8 text-lg bg-white/50 backdrop-blur-sm">
                Подробнее о технологии
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl transform scale-90" />
              <img
                src={heroImage}
                alt="MCT Unit Apparatus"
                className="relative w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-primary max-w-[260px] hidden md:block"
              >
                <div className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-1">Эксклюзивность</div>
                <div className="text-xs text-gray-500">Технология доступна только для сертифицированных партнеров</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
