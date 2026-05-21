// IslamicPattern.jsx
export default function Pattern() {
    
        // نمط الزخرفة يعتمد على التكرار الثماني، لذا سنقوم بإنشاء مصفوفة من 8 عناصر
  const petals = Array.from({ length: 8 });

  return (
    <div className="absolute inset-0 z-0 flex opacity-30 items-center justify-center pointer-events-none">
      {/* نستخدم viewBox بحيث يكون المركز هو (0,0) لتسهيل عمليات التدوير هندسياً */}
      <svg
        viewBox="-100 -100 200 200"
        className="w-full max-w-md h-auto text-white drop-shadow-lg"
        fill="none"
        stroke="currentColor"
        strokeWidth="5" // يمكنك تعديل هذا الرقم لزيادة أو تقليل سُمك الخط
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        {petals.map((_, index) => (
          <g key={index} transform={`rotate(${index * 45})`}>
            {/* المسار الأساسي الذي يتم تكراره وتدويره 8 مرات لإنشاء الزخرفة */}
            <path 
              d="M 0 -95 
                 L 35 -60 
                 L 20 -25 
                 L 0 -35 
                 L -20 -25 
                 L -35 -60 
                 Z" 
            />
          </g>
        ))}
        
        {/* نجمة ثمانية صغيرة في المركز لزيادة التفاصيل (اختياري) */}
        {petals.map((_, index) => (
          <g key={`center-${index}`} transform={`rotate(${index * 45})`}>
             <path d="M 0 -12 L 4 -4 L 12 0 L 4 4 Z" className="fill-current stroke-none" />
          </g>
        ))}
      </svg>
    </div>
  );
}