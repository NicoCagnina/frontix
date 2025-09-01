"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky pt-4 z-50 bg-white top-0 w-full shadow-xs">
      <nav className="container mx-auto flex items-center justify-between p-4 h-14">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-bold text-primary flex items-center"
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        <ul className="hidden md:flex gap-6 text-text items-center h-full">
          <li className="text-xs text-center flex items-center h-full">
            <Link href="/#frontix" className="flex items-center h-full">
              FRONTIX
            </Link>
          </li>
          <li className="text-xs text-center flex items-center h-full">
            <Link href="/#plataforma" className="flex items-center h-full">
              PRODUCTO
            </Link>
          </li>
          <li className="text-xs text-center flex items-center h-full">
            <Link href="/#modulos" className="flex items-center h-full">
              BENEFICIOS
            </Link>
          </li>
          <li className="text-xs border-1 border-secondary py-1 px-3 rounded-xl w-40 text-center flex items-center justify-center">
            <Link href="/faq">ACCESO USUARIOS</Link>
          </li>
          <li className="text-xs border-1 border-text py-1 px-3 rounded-xl flex items-center gap-1 w-40 justify-center bg-primary text-white">
            <Link href="/#contacto">ASESORAMIENTO</Link>
            <ArrowUpRightIcon className="w-4 h-4" />
          </li>
        </ul>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-text hover:text-primary transition-colors"
          aria-label="Abrir menú"
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </nav>

      <div
        className={`md:hidden bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out transform overflow-hidden ${
          isMenuOpen
            ? "opacity-100 translate-y-0 max-h-96"
            : "opacity-0 -translate-y-4 max-h-0 pointer-events-none"
        }`}
      >
        <ul className="container mx-auto py-4 space-y-4">
          <li className="text-sm text-center">
            <Link
              href="/#frontix"
              className="block py-2 px-4 hover:bg-gray-50 transition-colors text-text"
              onClick={closeMenu}
            >
              FRONTIX
            </Link>
          </li>
          <li className="text-sm text-center">
            <Link
              href="/#plataforma"
              className="block py-2 px-4 hover:bg-gray-50 transition-colors text-text"
              onClick={closeMenu}
            >
              PRODUCTO
            </Link>
          </li>
          <li className="text-sm text-center">
            <Link
              href="/#modulos"
              className="block py-2 px-4 hover:bg-gray-50 transition-colors text-text"
              onClick={closeMenu}
            >
              BENEFICIOS
            </Link>
          </li>
          <li className="text-sm text-center border border-purple-500 py-2 px-4 mx-4 rounded-xl">
            <Link href="/faq" onClick={closeMenu} className="text-text">
              ACCESO USUARIOS
            </Link>
          </li>
          <li className="text-sm text-center border border-text py-2 px-4 mx-4 rounded-xl bg-purple-900 text-white">
            <Link href="/#contacto" onClick={closeMenu}>
              ASESORAMIENTO
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
