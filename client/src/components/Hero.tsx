import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_image_of_a_sleek_medical_device_2ddda277.png";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative min-h-[110vh] flex items-center overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-200/30 rounded-full blur-3xl" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-3xl" 
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/50 backdrop-blur-sm shadow-sm text-primary font-semibold text-sm tracking-wide mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Инновации в регенерации
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-heading font-bold leading-[1.1] text-foreground tracking-tight">
              Ваш быстрый путь <br />
              <span className="text-gradient">к восстановлению</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
              MCT — сертификация будущего. Улучшение аутологичных продуктов методом фототермической биомодуляции.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" className="rounded-full text-lg px-10 h-16 shadow-xl shadow-primary/20 hover:scale-105 transition-transform duration-300">
                Узнать подробнее
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-lg px-10 h-16 border-2 bg-white/50 backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300 group">
                <PlayCircle className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                Смотреть демо
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/50 ring-1 ring-black/5 bg-white/10 backdrop-blur-sm">
            <img
              src={heroImage}
              alt="MCT System Device"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
            />
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 p-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg max-w-[200px] hidden md:block"
            >
              <div className="text-sm font-bold text-primary">Smart Touch</div>
              <div className="text-xs text-gray-500">Интуитивный интерфейс управления</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
