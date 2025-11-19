import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_image_of_a_sleek_medical_device_2ddda277.png";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-secondary/50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide">
              Инновации в регенерации
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight text-foreground">
              Ваш быстрый путь <br />
              <span className="text-gradient">к восстановлению</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              MCT — это сертифицированная медицинская система для улучшения
              аутологичных продуктов методом фототермической биомодуляции.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full text-lg px-8 h-14 shadow-lg shadow-primary/20">
                Узнать подробнее
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-lg px-8 h-14 border-primary/20 hover:bg-primary/5">
                Смотреть видео <ArrowRight className="ml-2 h-5 w-5" />
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
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-50" />
              <img
                src={heroImage}
                alt="MCT System Device"
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-white/50"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
  );
}
