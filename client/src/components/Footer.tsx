import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-heading font-bold text-primary tracking-tighter mb-4 block">
              MCT<span className="text-foreground font-light">System</span>
            </span>
            <p className="text-muted-foreground max-w-xs">
              Инновационные решения для регенеративной медицины. 
              Ваш партнер в мире современных биотехнологий.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Главная</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Технология</a></li>
              <li><a href="#specs" className="text-muted-foreground hover:text-primary transition-colors">Характеристики</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Контакты</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Москва, Россия</li>
              <li>+7 (800) 000-00-00</li>
              <li>info@mct-system.ru</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MCT System. Все права защищены.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground">Политика конфиденциальности</a>
            <a href="#" className="hover:text-foreground">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
