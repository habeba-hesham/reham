export default function Certificate() {
  return (
    <div
      className="flex flex-col items-center justify-start text-center px-6 pt-10 pb-6"
      style={{ background: '#FFD8DF' }}
    >

      {/* 🎀 البون */}
      <img
        src="/bow.png"
        className="w-48 mb-3"
        alt="bow"
      />

      {/* العنوان */}
      <h1
        className="text-4xl font-bold mb-3"
        style={{ color: '#CA6180' }}
      >
        شهادة تقدير
      </h1>

      {/* سطر تحت العنوان */}
      <p className="text-base mb-1">
        تُمنح هذه الشهادة إلى
      </p>

      {/* الاسم */}
      <h2
        className="text-5xl font-bold mb-3"
        style={{ color: '#CA6180' }}
      >
        ريهام
      </h2>

      {/* سطر صغير */}
      <p className="text-base mb-2">
        تقديرًا لاجتيازها
      </p>

      {/* السطر المهم */}
      <p className="text-base mb-6 flex items-center justify-center gap-2">
        <span>💗</span>
        عامًا آخر في حياتي بنجاح
      </p>

      {/* النص */}
      <p className="text-base leading-relaxed mb-6 max-w-md">
        مع خالص التهاني بهذا الإنجاز الرائع،<br />
        وأتمنى دوامك في حياتي دائمًا ✨
      </p>

      {/* التاريخ والتوقيع */}
      <div className="flex justify-between w-full max-w-md text-sm mt-4 px-2">
        <p>التوقيع: أ / حبيبه هشام</p>
        <p>2026 / 4 / 16 :التاريخ</p>
      </div>

    </div>
  );
}