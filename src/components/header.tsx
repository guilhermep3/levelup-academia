"use client"
import Image from "next/image"
import { LevelUp } from "./levelup"
import Logo from "../../public/gym-logo.png";
import { useEffect, useState } from "react";

export const Header = () => {
   const [isVisible, setIsVisible] = useState<boolean>(false);
   const [isMobileNav, setIsMobileNav] = useState<boolean>(false);
   let isMobile = window.innerWidth < 768;

   useEffect(() => {
      const ScrollEvt = () => {
         if (window.scrollY > 0) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
      }
      window.addEventListener('scroll', ScrollEvt);
      ScrollEvt();

      return () => {
         window.removeEventListener('scroll', ScrollEvt)
      }
   }, [])

   return (
      <header className={`fixed w-full bg-transparent text-white py-4 px-3 z-40 transition duration-200
         ${isVisible ? 'header-bg' : ''} ${isMobile && 'header-bg'}`}>
         <div className="container mx-auto flex justify-between items-center w-full">
            <div className="font-bold flex items-center gap-1">
               <Image src={Logo} alt="logo" width={52} height={52} />
               <LevelUp textSize="text-xl lg:text-3xl" />
            </div>
            <nav className="hidden sm:block w-full mx-1">
               <ul className="flex justify-center sm:gap-5 md:gap-10 text-lg z-40">
                  <li className="linkHeader"><a href="#services"></a>Serviços</li>
                  <li className="linkHeader"><a href="#plans"></a>Planos</li>
                  <li className="linkHeader"><a href="#review"></a>Avaliação</li>
                  <li className="linkHeader"><a href="#trainers"></a>Treinadores</li>
                  <li className="linkHeader"><a href="#post"></a>Posts</li>
               </ul>
            </nav>
            <div className="flex items-center gap-2">
               <button className="btn">Cadastrar</button>
               <div className={`block sm:hidden hamburger ${isMobileNav ? 'hamburger-active' : ''}`}
                  onClick={() => setIsMobileNav(!isMobileNav)}>
                  <span className="w-full h-1 bg-white"></span>
                  <span className="w-full h-1 bg-white"></span>
                  <span className="w-full h-1 bg-white"></span>
               </div>
            </div>
            <nav className={`mobile-nav ${isMobileNav ? 'show-mobile-nav' : ''}`}>
               <ul className={`flex flex-col justify-center items-center gap-5 `}>
                  <li className="linkHeader"><a href="#services"></a>Serviços</li>
                  <li className="linkHeader"><a href="#plans"></a>Planos</li>
                  <li className="linkHeader"><a href="#review"></a>Avaliação</li>
                  <li className="linkHeader"><a href="#trainers"></a>Treinadores</li>
                  <li className="linkHeader"><a href="#post"></a>Posts</li>
               </ul>
            </nav>
         </div>
      </header>
   )
}