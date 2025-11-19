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
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-6"
          >
            <h2 className="text-5xl font-heading font-bold text-foreground tracking-tight">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Оставьте заявку, и наши специалисты проконсультируют вас по всем вопросам
              приобретения и использования системы MCT.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden"
          >
            {/* Decorative blobs inside card */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl" />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base pl-2">Ваше имя</FormLabel>
                      <FormControl>
                        <Input placeholder="Иван Петров" className="bg-gray-50/50 h-14 rounded-2xl border-gray-200 focus:border-primary/50 focus:bg-white transition-all text-lg px-6" {...field} />
                      </FormControl>
                      <FormMessage className="pl-2" />
                    </FormItem>
                  )}
                />
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base pl-2">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="ivan@example.com" className="bg-gray-50/50 h-14 rounded-2xl border-gray-200 focus:border-primary/50 focus:bg-white transition-all text-lg px-6" {...field} />
                        </FormControl>
                        <FormMessage className="pl-2" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base pl-2">Телефон</FormLabel>
                        <FormControl>
                          <Input placeholder="+7 (999) 000-00-00" className="bg-gray-50/50 h-14 rounded-2xl border-gray-200 focus:border-primary/50 focus:bg-white transition-all text-lg px-6" {...field} />
                        </FormControl>
                        <FormMessage className="pl-2" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base pl-2">Сообщение (необязательно)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Меня интересует стоимость..." className="bg-gray-50/50 min-h-[150px] rounded-3xl border-gray-200 focus:border-primary/50 focus:bg-white transition-all resize-none text-lg p-6" {...field} />
                      </FormControl>
                      <FormMessage className="pl-2" />
                    </FormItem>
                  )}
                />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" size="lg" className="w-full rounded-full h-16 text-xl font-semibold shadow-lg shadow-primary/20">
                    Отправить заявку
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
