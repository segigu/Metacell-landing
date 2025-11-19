import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Activity } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_image_of_a_sleek_medical_device_2ddda277.png";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const yDevice = useTransform(scrollY, [0, 1000], [0, 150]);
  const rotateDevice = useTransform(scrollY, [0, 1000], [0, 5]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  
  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Complex Dark Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[100px]" 
        />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ opacity: opacityText }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 text-accent font-medium tracking-wider uppercase text-sm">
              <Activity className="h-4 w-4" />
              <span>Медицинская сертификация РФ</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] text-white tracking-tight">
              Интеллектуальная <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-white animate-pulse">
                биомодуляция
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg border-l-2 border-white/10 pl-6">
              MCT System — профессиональное решение для регенеративной терапии. 
              Клинически доказанная эффективность для врачей-экспертов.
            </p>
            
            <div className="flex flex-wrap gap-5 pt-4">
              <Button size="lg" className="rounded-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-[0_0_20px_rgba(8,125,149,0.4)] border-none h-14 px-8 text-lg">
                Получить КП
              </Button>
              <Button variant="ghost" size="lg" className="rounded-lg text-gray-300 hover:text-white hover:bg-white/5 h-14 px-8 text-lg group">
                О технологии <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <div className="relative perspective-1000">
            <motion.div
              style={{ y: yDevice, rotateY: rotateDevice }}
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: -5 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative z-10"
            >
              {/* Glowing Ring behind device */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-3xl transform scale-90" />
              
              <img
                src={heroImage}
                alt="MCT Medical Device"
                className="relative w-full h-auto drop-shadow-[0_0_50px_rgba(8,125,149,0.3)]"
              />
              
              {/* Floating Technical UI Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-[20%] -left-10 bg-black/60 backdrop-blur-md border border-accent/30 p-4 rounded-lg shadow-2xl hidden lg:block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-xs text-accent font-mono uppercase">Status: Active</span>
                </div>
                <div className="text-2xl font-mono text-white font-bold">850 nm</div>
                <div className="text-xs text-gray-500">Длина волны</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-[20%] -right-10 bg-black/60 backdrop-blur-md border border-primary/30 p-4 rounded-lg shadow-2xl hidden lg:block"
              >
                 <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-xs text-green-500 font-mono uppercase">Ready</span>
                </div>
                <div className="text-2xl font-mono text-white font-bold">37°C</div>
                <div className="text-xs text-gray-500">Термоконтроль</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
