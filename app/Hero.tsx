import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="lg:hidden w-32">
            <Image
              src="/assets/payflow.png"
              alt="Logo"
              width={100}
              height={100}
              className="rounded-xl shadow-xl w-32 shadow-slate-400 mx-auto p-3"
              priority
            />
          </div>
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Kelola Keuangan Lebih Cerdas <br />
              <span className="text-blue-600">Dengan PayFlow</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-md leading-relaxed mx-auto md:mx-0">
              Pantau pengeluaran, atur budget, dan capai target finansial Anda
              dengan dashboard yang simple dan modern.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              <Link href="#">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Mulai Sekarang
                </Button>
              </Link>
              <Link href="#">
                <Button size="lg" variant="outline">
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/assets/payflow.png"
              alt="Logo"
              width={420}
              height={420}
              className="rounded-xl shadow-xl shadow-slate-400 mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
