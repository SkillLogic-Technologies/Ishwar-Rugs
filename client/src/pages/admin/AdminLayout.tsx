import { ReactNode, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-neutral-950 text-primary-brown dark:text-white overflow-hidden">
      
     
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      
      <aside
          className={`
            fixed top-0 left-0
            h-screen w-64
            z-50
            bg-white dark:bg-neutral-900
            shadow-lg lg:shadow-none
            transform transition-transform duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
          `}
        >
          <AdminSidebar setIsOpen={setIsOpen} isOpen={isOpen} />
      </aside>

      
      <div className="flex flex-col flex-1 lg:ml-64 w-full">
        
       
        <AdminNavbar setIsOpen={setIsOpen} isOpen={isOpen} />

        
        <main className="flex-1 overflow-y-auto sm:p-6">
          {children}
        </main>

      </div>
    </div>
  );
}