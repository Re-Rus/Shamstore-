import { useState } from 'react';
import { Link} from 'react-router-dom'; // أضفنا التوجيه
import logo from "../../../assets/logo.png";
import { useTranslation } from "react-i18next";
import { Mail, EyeClosed, Eye, LockKeyhole } from 'lucide-react';

export default function SignInCard() {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();


  // 1. إنشاء States لحفظ ما يكتبه المستخدم في الحقول
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2. دالة تسجيل الدخول والحفظ في الذاكرة المحلية
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    // تحقق بسيط للتأكد من أن الحقول غير فارغة
    if (!email || !password) {
      alert("يرجى إدخال البريد الإلكتروني وكلمة المرور!");
      return;
    }

    // تجهيز كائن البيانات (بدون كلمة المرور لأسباب أمنية)
    const sessionData = {
      email: email,
      isLoggedIn: true,
      role: 'customer',
      token: "techsouk_mock_token_892374" // محاكاة لرمز الجلسة من السيرفر
    };

    // حفظ البيانات في localStorage وتحويلها إلى نص (String)
    localStorage.setItem('techsouk_session', JSON.stringify(sessionData));

    console.log("Session saved:", sessionData);
    
    
  window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-hero-start from-0% via-hero-end via-65% to-hero-mid p-4 font-sans gap-20">
      <div className="w-full max-w-md bg-white rounded-[32px] shadow-2xl p-8 md:p-10 flex flex-col items-center">
        
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-[70px] h-[70px] object-contain"
          />
        </div>

        <h1 className="text-3xl font-bold text-primary tracking-tight mb-2">{t("log.title")}</h1>
        <p className="text-sm font-medium text-accent mb-8">{t("log.def")}</p>

        {/* 3. ربط النموذج بدالة handleLogin */}
        <form className="w-[400px] space-y-5" onSubmit={handleLogin}>
          
          <div className="flex flex-col space-y-1.5">
            <label className="text-sm font-semibold text-[#374151] px-1">{t("log.email")}</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-accent">
                  <Mail />
              </span>
              <input
                type="email" 
                value={email} // ربط القيمة بالـ State
                onChange={(e) => setEmail(e.target.value)} // تحديث الـ State عند الكتابة
                placeholder="your.email@example.com" 
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-gray-400 text-gray-700"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1.5">
            <label className="text-sm font-semibold text-[#374151] px-1">{t("log.pass")}</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-accent">
                <LockKeyhole />
              </span>
              <input 
                type={showPassword ? "text" : "password"} 
                value={password} // ربط القيمة بالـ State
                onChange={(e) => setPassword(e.target.value)} // تحديث الـ State عند الكتابة
                placeholder="Enter your password" 
                className="w-full pl-12 pr-12 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-gray-400 text-gray-700"
              />
              
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <Eye /> : <EyeClosed />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm pt-1">
            <label className="flex items-center space-x-2 cursor-pointer select-none">
              <input type="checkbox" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-accent accent-accent" />
              <span className="text-gray-600 font-medium">{t("log.warnn")}</span>
            </label>
            <a href="#forgot" className="text-accent font-semibold hover:underline">{t("log.forgot")}</a>
          </div>

          <button 
            type="submit" 
            className="w-full py-3.5 mt-2 bg-gradient-to-br from-hero-start from-0% via-hero-end via-65% to-hero-mid text-white font-bold rounded-2xl shadow-lg shadow-blue-900/20 hover:opacity-95 transition-opacity duration-200"
          >
            {t("log.sign")}
          </button>
        </form>

        <div className="w-full flex items-center my-6">
          <div className="flex-1 h-[1px] bg-gray-200"></div>
          <span className="px-3 text-xs font-semibold text-gray-400 bg-white uppercase tracking-wider">{t("log.choose")}</span>
          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        <div className="w-full grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors duration-200">
            <span className="text-sm font-bold text-gray-700">Google</span>
          </button>
          <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-accent rounded-2xl hover:bg-amber-50/30 transition-colors duration-200">
            <span className="text-sm font-bold text-gray-700">Apple</span>
          </button>
        </div>

        <p className="text-sm font-medium text-gray-500 mt-8">
          {t("log.dont")}{' '}
          <Link to="/signup" className="text-accent font-bold hover:underline">{t("log.Sign")}</Link>
        </p>

      </div>
    </div>
  );
}