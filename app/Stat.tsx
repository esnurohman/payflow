import { Star } from "lucide-react";

export default function StatSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600">10K+</h3>
            <p className="text-lg text-slate-600">Pengguna Aktif</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600">99%</h3>
            <p className="text-lg text-slate-600">Transaksi Aman</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600 flex items-center justify-center gap-2">
              <Star />
              4.9/5
            </h3>
            <p className="text-lg text-slate-600">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
