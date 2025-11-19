import { Check, X } from "lucide-react";

export default function Comparison() {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-full bg-pattern-dots opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
          MCT Unit vs Аллогенные экзосомы
        </h2>

        <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-100 bg-white">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className="text-left p-8 bg-gray-50 text-gray-500 font-bold uppercase tracking-wider text-sm">Критерий</th>
                <th className="text-left p-8 bg-primary text-white font-bold text-xl w-1/3">MCT Unit (Аутологичные)</th>
                <th className="text-left p-8 bg-gray-50 text-gray-500 font-bold text-xl w-1/3">Аллогенные экзосомы</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: "Безопасность", mct: "Свой биоматериал, нет рисков", allo: "Риск аллергии, иммунного ответа" },
                { name: "Легальность", mct: "Одобрено для инъекций", allo: "FDA НЕ одобрил для инъекций" },
                { name: "Экономика", mct: "Не зависите от поставок", allo: "Закупка дорогих препаратов" },
                { name: "Доступность", mct: "Всегда в клинике", allo: "Сложная логистика (холодовая цепь)" }
              ].map((row, index) => (
                <tr key={index} className="group hover:bg-blue-50/30 transition-colors">
                  <td className="p-8 font-bold text-gray-900">{row.name}</td>
                  <td className="p-8 bg-primary/5 text-primary font-medium border-l-4 border-primary group-hover:bg-primary/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      {row.mct}
                    </div>
                  </td>
                  <td className="p-8 text-gray-600">
                    <div className="flex items-center gap-3">
                       <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0">
                        <X className="w-4 h-4" />
                      </div>
                      {row.allo}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
