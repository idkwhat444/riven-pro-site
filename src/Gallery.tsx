export default function Gallery() {
  return (
    <section className="py-16 px-4 text-center bg-black text-white">
      <h2 className="text-3xl font-bold mb-8">작업 인증 갤러리</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <img src="/images/proof1.jpg" alt="작업1" className="w-80 rounded-lg shadow-lg hover:scale-105 transition" />
        <img src="/images/proof2.jpg" alt="작업2" className="w-80 rounded-lg shadow-lg hover:scale-105 transition" />
        <img src="/images/proof3.jpg" alt="작업3" className="w-80 rounded-lg shadow-lg hover:scale-105 transition" />
      </div>
    </section>
  );
}
