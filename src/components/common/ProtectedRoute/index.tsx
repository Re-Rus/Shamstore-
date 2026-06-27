import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const session = localStorage.getItem('techsouk_session');
  
  // قراءة الجلسة وتحليلها
  const parsedSession = session ? JSON.parse(session) : null;
  
  // التحقق من شرطين: مسجل دخول + يمتلك صلاحية مدير
  const isLoggedIn = parsedSession?.isLoggedIn || false;
  const isAdmin = parsedSession?.role === 'admin';

  // إذا لم يكن مسجل دخول، أو كان زبوناً عادياً، نطرده إلى صفحة دخول الإدارة
  if (!isLoggedIn || !isAdmin) {
    return <Navigate to="/admin-login" replace />;
  }

  // إذا كان مديراً، نفتح له الداشبورد
  return <Outlet />;
}