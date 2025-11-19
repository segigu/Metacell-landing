import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  email: z.string().email("Введите корректный email"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  message: z.string().optional(),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Glowing Background Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-16 shadow-2xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Стать партнером</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Запросите коммерческое предложение или запишитесь на демонстрацию работы системы MCT в вашем регионе.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">ФИО Врача / Представителя</FormLabel>
                      <FormControl>
                        <Input placeholder="Иванов Иван Иванович" className="bg-white/5 border-white/10 h-12 rounded-lg text-white placeholder:text-gray-600 focus:border-accent focus:ring-accent/20" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Телефон</FormLabel>
                      <FormControl>
                        <Input placeholder="+7 (999) 000-00-00" className="bg-white/5 border-white/10 h-12 rounded-lg text-white placeholder:text-gray-600 focus:border-accent focus:ring-accent/20" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Email клиники</FormLabel>
                    <FormControl>
                      <Input placeholder="info@clinic.ru" className="bg-white/5 border-white/10 h-12 rounded-lg text-white placeholder:text-gray-600 focus:border-accent focus:ring-accent/20" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Комментарий</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Интересует стоимость аппарата и сроки поставки..." className="bg-white/5 border-white/10 min-h-[120px] rounded-lg text-white placeholder:text-gray-600 focus:border-accent focus:ring-accent/20 resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold rounded-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-[0_0_20px_rgba(8,125,149,0.3)] border-none">
                Отправить запрос
              </Button>
            </form>
          </Form>
        </motion.div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center border-t border-white/10 pt-12">
          <div>
            <div className="text-accent font-bold text-lg mb-2">Офис</div>
            <div className="text-gray-400">Москва, Пресненская наб. 12</div>
          </div>
          <div>
            <div className="text-accent font-bold text-lg mb-2">Контакты</div>
            <div className="text-gray-400">+7 (800) 000-00-00<br/>info@mct-system.ru</div>
          </div>
          <div>
            <div className="text-accent font-bold text-lg mb-2">Поддержка</div>
            <div className="text-gray-400">Пн-Пт: 9:00 - 18:00<br/>Сервисный центр 24/7</div>
          </div>
        </div>
      </div>
    </section>
  );
}
