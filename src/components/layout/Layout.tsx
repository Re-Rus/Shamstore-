import { Outlet } from "react-router-dom";
export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}
