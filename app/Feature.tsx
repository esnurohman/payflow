import { BarChart3, Receipt, ShieldCheck, TrendingUp } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Receipt,
    title: "Smart Expense Tracking",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, exercitationem?",
  },
  {
    icon: BarChart3,
    title: "Real-time Insights",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, exercitationem?",
  },
  {
    icon: ShieldCheck,
    title: "Secure Transactions",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, exercitationem?",
  },
  {
    icon: TrendingUp,
    title: "Budget Goals",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, exercitationem?",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-4xl">
            Mengapa <span className="text-blue-600">PayFlow</span> Pilihan Tepat
            untuk Bisnis Anda
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-2xl lg:text-center mt-4">
            PayFlow membantu Anda mengelola keuangan bisnis dengan fitur canggih
            yang dirancang untuk meningkatkan efisiensi dan produktivitas.
          </p>
          <div className="relative group w-fit">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Hover me
            </button>

            <div
              className="absolute top-full mt-3 left-1/2 -translate-x-1/2 
                  opacity-0 group-hover:opacity-100 
                  transition duration-300 
                  pointer-events-none"
            >
              <Image
                alt="abc"
                src="/payflow.png"
                width={1000}
                height={420}
                className=" rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6 items-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="p-6 border border-slate-200 rounded-xl hover:shadow-md transition flex gap-4 items-start"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>

                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
