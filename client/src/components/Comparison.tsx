import { Check, X } from "lucide-react";

export default function Comparison() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
          MCT Unit vs Аллогенные экзосомы
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className="text-left p-6 bg-gray-50 rounded-tl-xl text-gray-500 font-medium">Критерий</th>
                <th className="text-left p-6 bg-primary/10 text-primary font-bold text-xl border-t-4 border-primary">MCT Unit (Аутологичные)</th>
                <th className="text-left p-6 bg-gray-50 rounded-tr-xl text-gray-500 font-medium">Аллогенные экзосомы</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-6 font-medium text-gray-900">Безопасность</td>
                <td className="p-6 bg-primary/5 text-gray-900"><Check className="inline w-5 h-5 text-green-500 mr-2" /> Свой биоматериал, нет рисков</td>
                <td className="p-6 text-gray-600"><X className="inline w-5 h-5 text-red-400 mr-2" /> Риск аллергии, иммунного ответа</td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-gray-900">Легальность</td>
                <td className="p-6 bg-primary/5 text-gray-900"><Check className="inline w-5 h-5 text-green-500 mr-2" /> Одобрено для инъекций</td>
                <td className="p-6 text-gray-600"><X className="inline w-5 h-5 text-red-400 mr-2" /> FDA НЕ одобрил для инъекций</td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-gray-900">Экономика</td>
                <td className="p-6 bg-primary/5 text-gray-900"><Check className="inline w-5 h-5 text-green-500 mr-2" /> Не зависите от поставок</td>
                <td className="p-6 text-gray-600"><X className="inline w-5 h-5 text-red-400 mr-2" /> Закупка дорогих препаратов</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
