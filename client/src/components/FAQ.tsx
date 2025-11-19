import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "Чем отличается от обычной PRP?",
      a: "MCT Unit использует фототермическую энергию для активации тромбоцитов, что стимулирует выработку экзосом. Это повышает регенеративный потенциал материала в 13 раз по сравнению с обычной плазмой."
    },
    {
      q: "Безопасны ли аутологичные экзосомы?",
      a: "Да, абсолютно. Используется собственный материал пациента, что исключает риск аллергических реакций или отторжения, в отличие от аллогенных (чужеродных) препаратов."
    },
    {
      q: "Сколько времени занимает процедура?",
      a: "Полный цикл занимает 30-40 минут: забор крови, обработка в аппарате (5-15 минут) и инъекция."
    },
    {
      q: "Нужно ли специальное обучение?",
      a: "Мы проводим однодневное обучение для врачей. Аппарат имеет предустановленные протоколы, что делает работу с ним простой и интуитивной."
    },
    {
      q: "Есть ли РУ Росздравнадзора?",
      a: "Да, аппарат MCT Unit является сертифицированным медицинским изделием на территории РФ."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
          Часто задаваемые вопросы
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg mb-4 px-4 shadow-sm">
                <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-primary text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
