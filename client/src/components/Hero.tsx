import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_image_of_a_sleek_medical_device_2ddda277.png";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Brand Gradient Overlay - Right Side */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-bl from-[#bde2ee]/40 via-white to-white -z-10 clip-path-slant" />
      
      {/* Decorative Circle from Brand Manual */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full border-[40px] border-[#bde2ee]/20 -z-10 animate-pulse" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 border-l-4 border-primary bg-[#bde2ee]/20 text-primary font-semibold text-sm tracking-wider uppercase"
            >
              Регенеративная медицина
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] text-black tracking-tight">
              Ваш быстрый путь <br />
              <span className="text-primary">к восстановлению</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg font-light">
              MCT — сертифицированная медицинская система для улучшения аутологичных продуктов методом фототермической биомодуляции.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-none text-lg px-10 h-14 bg-primary hover:bg-[#066a7e] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Узнать подробнее
              </Button>
              <Button variant="outline" size="lg" className="rounded-none text-lg px-10 h-14 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <PlayCircle className="mr-2 h-5 w-5" />
                Смотреть видео
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {/* Image Container with Brand Styling */}
            <div className="relative z-10">
              <div className="absolute -inset-4 bg-brand-gradient opacity-20 blur-2xl rounded-full" />
              <img
                src={heroImage}
                alt="MCT System Device"
                className="relative w-full h-auto object-contain drop-shadow-2xl"
              />
              
              {/* Floating Feature Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl border-l-4 border-primary max-w-[240px] hidden md:block"
              >
                <div className="text-4xl font-bold text-primary mb-1">2x</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Ускорение реабилитации</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
