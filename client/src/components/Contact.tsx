import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const formSchema = z.object({
  clinic: z.string().min(2, "Введите название клиники"),
  city: z.string().min(2, "Введите город"),
  name: z.string().min(2, "Введите ФИО"),
  phone: z.string().min(10, "Введите телефон"),
  email: z.string().email("Введите корректный email"),
  agreement: z.boolean().refine(val => val === true, "Необходимо согласие на обработку данных"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clinic: "",
      city: "",
      name: "",
      phone: "",
      email: "",
      agreement: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 24 часов.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-primary">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-pattern-waves opacity-20" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-[20%] -right-[20%] w-[800px] h-[800px] bg-accent rounded-full blur-[100px] opacity-40" 
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
              Станьте первой клиникой с технологией экзосом <br />
              <span className="text-accent">в вашем городе</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-lg">
              Получите конкурентное преимущество, которое невозможно скопировать. Запросите коммерческое предложение прямо сейчас.
            </p>
            <div className="flex flex-col gap-4 pt-8 border-t border-white/20">
              <div className="text-sm font-bold uppercase tracking-widest text-accent">Контакты отдела продаж</div>
              <div className="text-3xl font-bold">+7 (800) 000-00-00</div>
              <div className="text-xl text-blue-100">info@mct-system.ru</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Запросить условия</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="clinic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Название клиники</FormLabel>
                        <FormControl>
                          <Input placeholder="Med Clinic" className="bg-gray-50 h-12 rounded-xl border-gray-200" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Город</FormLabel>
                        <FormControl>
                          <Input placeholder="Москва" className="bg-gray-50 h-12 rounded-xl border-gray-200" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">ФИО контактного лица</FormLabel>
                      <FormControl>
                        <Input placeholder="Иванов Иван" className="bg-gray-50 h-12 rounded-xl border-gray-200" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Телефон</FormLabel>
                        <FormControl>
                          <Input placeholder="+7 (999) 000-00-00" className="bg-gray-50 h-12 rounded-xl border-gray-200" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="mail@example.com" className="bg-gray-50 h-12 rounded-xl border-gray-200" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="agreement"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal text-gray-500">
                          Я даю согласие на обработку персональных данных
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg text-white">
                  Получить коммерческое предложение
                </Button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                  Ответим в течение 24 часов. Конфиденциальность гарантируем.
                </p>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
