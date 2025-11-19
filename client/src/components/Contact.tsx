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
    <section id="contact" className="py-24 bg-[#087D95] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Ваш новый шаг <br />в регенерации
            </h2>
            <p className="text-xl text-white/80 font-light max-w-md">
              Оставьте заявку на консультацию или демонстрацию оборудования.
            </p>
            
            <div className="space-y-4 mt-8 border-t border-white/20 pt-8">
              <div>
                <div className="text-sm text-white/60 uppercase tracking-wider mb-1">Телефон</div>
                <div className="text-2xl font-bold">+7 (800) 000-00-00</div>
              </div>
              <div>
                <div className="text-sm text-white/60 uppercase tracking-wider mb-1">Email</div>
                <div className="text-xl font-bold">info@mct-system.ru</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 shadow-2xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-bold">Ваше имя</FormLabel>
                      <FormControl>
                        <Input placeholder="Иван Петров" className="bg-gray-50 h-12 border-gray-200 rounded-none focus:border-primary focus:ring-0" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-bold">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="ivan@example.com" className="bg-gray-50 h-12 border-gray-200 rounded-none focus:border-primary focus:ring-0" {...field} />
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
                        <FormLabel className="text-gray-700 font-bold">Телефон</FormLabel>
                        <FormControl>
                          <Input placeholder="+7 (999) 000-00-00" className="bg-gray-50 h-12 border-gray-200 rounded-none focus:border-primary focus:ring-0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-bold">Сообщение</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Меня интересует..." className="bg-gray-50 min-h-[120px] border-gray-200 rounded-none focus:border-primary focus:ring-0 resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold rounded-none bg-[#087D95] hover:bg-[#066a7e]">
                  Отправить заявку
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
