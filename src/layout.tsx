import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app_sidebar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <main className="flex-1">
          <div className="p-4">
            <SidebarTrigger />
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default Layout;
