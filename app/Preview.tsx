import Image from "next/image";

export default function PreviewSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="font-bold text-4xl text-center">
          Intip Tampilan <span className="text-blue-600">PayFlow</span>
        </h2>
        <div className="mt-8">
          {/* Preview content goes here */}
          <div className="w-full h-[80vh] bg-white rounded-lg shadow-md">
            <div className="flex items-center px-2 flex-col justify-center gap-2 h-full text-gray-400">
              <Image
                src="/assets/preview.png"
                alt="payflow preview"
                width={720}
                height={400}
                className="rounded-xl shadow-xl shadow-slate-400 mx-auto "
                priority
              />
              <h2 className="text-lg font-semibold">Preview Content</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
                excepturi. (Gambar dibuat oleh ChatGPT)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
