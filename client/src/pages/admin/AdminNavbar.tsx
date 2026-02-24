"use client";

import { Search, Sun, Moon, Menu } from "lucide-react";
import logo from "../../../public/logo/Logo.png";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

interface NavbarProps {
  setIsOpen: (value: boolean) => void;
}

export default function AdminNavbar({ setIsOpen }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/admin/products?title=${search}`);
    }
  };

  return (
    <header
      className="
        fixed top-0 right-0 left-0 lg:left-64
        z-40
        h-20
        flex items-center justify-between
        px-4 sm:px-6
        bg-gray-50 dark:bg-neutral-900
        border-b border-gray-200 dark:border-neutral-800
        shadow-sm
      "
    >
      
      <div className="flex items-center gap-3">
       
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden bg-warm-gold text-white p-2 rounded-md shadow"
        >
          <Menu size={20} />
        </button>

        
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="IshwarRugs Logo"
            className="h-20 w-20 object-contain"
          />
        </Link>
      </div>

     
      <div className="flex sm:flex items-center w-[220px] md:w-[350px] lg:w-[420px]">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here..."
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="
            w-full h-9
            rounded-l-md
            px-3
            border border-gray-300
            dark:border-neutral-700
            bg-white dark:bg-neutral-800
            outline-none
            text-sm
          "
        />
        <button
          onClick={handleSearch}
          className="
            h-9 px-4
            bg-warm-gold text-white
            rounded-r-md
            hover:opacity-90
            transition
          "
        >
          <Search size={18} />
        </button>
      </div>

    
      <div className="flex items-center  gap-3">
      
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className="
            text-gray-700 dark:text-gray-300
            hover:text-premium-gold
            hover:bg-gray-100 dark:hover:bg-neutral-800
            transition
          "
        >
          {theme === "dark" ? (
            <Sun className="h-5  w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>

        
        <div
          className="
            items-center gap-2 
            px-3 py-1.5
            rounded-lg shadow
            bg-warm-gold text-white
            sm:gap-3 sm:px-4 hidden md:flex
          "
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white text-black rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold">
            A
          </div>

          <span className="text-xs sm:text-sm font-medium">
            Angelina Deo
          </span>
        </div>
        <div className="w-8 h-8 md:hidden  sm:w-8 sm:h-8 bg-white text-black rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold">
            A
          </div>
      </div>
    </header>
  );
}