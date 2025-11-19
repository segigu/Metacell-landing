import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ShieldCheck, Play } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_image_of_a_sleek_medical_device_2ddda277.png";

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 1000], [0, 300]);
  const rotateDevice = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Rich Animated Background */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[80px] mix-blend-multiply animate-float" />
        <div className="absolute inset-0 bg-pattern-waves opacity-30" />
      </motion.div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-primary/20 shadow-lg text-primary font-bold text-xs tracking-wide uppercase"
            >
              <ShieldCheck className="h-4 w-4" />
              <span>РУ №РЗН 2024/12345</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] text-gray-900 tracking-tight">
              MCT Unit <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Технология Экзосом
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Первая в России. Эксклюзивно для вашей клиники. 
              Основано на Нобелевских премиях 2013 и 2024.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-2xl bg-primary hover:bg-[#066a7e] text-white h-16 px-10 text-lg shadow-[0_10px_40px_-10px_rgba(8,125,149,0.5)] transition-all hover:-translate-y-1">
                Стать первопроходцами
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl border-2 border-white bg-white/50 hover:bg-white text-gray-700 h-16 px-8 text-lg backdrop-blur-sm shadow-sm">
                <Play className="mr-2 h-5 w-5 fill-current" /> Видео о технологии
              </Button>
            </div>
          </motion.div>

          <motion.div
            style={{ rotateY: rotateDevice }}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="relative z-10 perspective-1000"
          >
            <div className="relative">
              {/* Dynamic Glowing Background behind Product */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse-slow" />
              
              <img
                src={heroImage}
                alt="MCT Unit Apparatus"
                className="relative w-full h-auto drop-shadow-2xl z-10 transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Glass Cards */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 glass-panel p-4 rounded-2xl max-w-[180px] hidden lg:block z-20"
              >
                <div className="text-3xl font-bold text-primary">13x</div>
                <div className="text-xs font-bold text-gray-600 uppercase">Активность экзосом</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-10 glass-panel p-4 rounded-2xl max-w-[200px] hidden lg:block z-20 border-l-4 border-accent"
              >
                <div className="text-sm font-bold text-gray-900">Аутологично</div>
                <div className="text-xs text-gray-500">100% биосовместимость</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
