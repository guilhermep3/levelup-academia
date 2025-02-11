"use client"
import Image from "next/image"
import { LevelUp } from "./levelup"
import Logo from "../../public/gym-logo.png";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/utils/isMobile";
import { useRouter } from "next/navigation";

type props = {
   showNav: boolean
}
export const Header = ({showNav}: props) => {
   const [isVisible, setIsVisible] = useState<boolean>(false);
   const [isMobileNav, setIsMobileNav] = useState<boolean>(false);
   const isMobile = useIsMobile(768);
   const router = useRouter()

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
   }, []);

   function handleGoRouter(route: string){
      router.push(`/${route}`);
   };

   return (
      <header className={`fixed w-full bg-transparent text-white py-4 px-3 z-40 transition duration-200 top-0 left-0 right-0
         ${isVisible ? 'header-bg' : ''} ${isMobile && 'header-bg'}`}>
         <div className="container mx-auto flex justify-between items-center w-full">
            <div onClick={() => handleGoRouter("")} className="font-bold flex items-center gap-1 cursor-pointer">
               <Image src={Logo} alt="logo" width={52} height={52} />
               <LevelUp textSize="text-xl lg:text-3xl" />
            </div>
            {showNav && 
            <nav className="hidden lg:block w-full mx-1">
               <ul className="flex justify-center sm:gap-5 md:gap-10 text-lg z-40">
                  <li className="linkHeader"><a href="#hero">Inicio</a></li>
                  <li className="linkHeader"><a href="#services">Serviços</a></li>
                  <li className="linkHeader"><a href="#plans">Planos</a></li>
                  <li className="linkHeader"><a href="#trainers">Treinadores</a></li>
                  <li className="linkHeader"><a href="#review">Avaliação</a></li>
                  <li className="linkHeader"><a href="#faq">FAQ</a></li>
               </ul>
            </nav>
            }
            <div className="flex items-center gap-2">
               <button className="btn" onClick={() =>handleGoRouter("register")}>Cadastrar</button>
               {showNav && 
               <div className={`block lg:hidden hamburger ${isMobileNav ? 'hamburger-active' : ''}`}
                  onClick={() => setIsMobileNav(!isMobileNav)}>
                  <span className="w-full h-1 bg-white"></span>
                  <span className="w-full h-1 bg-white"></span>
                  <span className="w-full h-1 bg-white"></span>
               </div>
               }
            </div>
            {showNav &&
            <nav className={`mobile-nav ${isMobileNav ? 'show-mobile-nav' : ''}`}>
               <ul className={`flex flex-col justify-center items-center gap-5 `}>
                  <li className="linkHeader" onClick={() => setIsMobileNav(!isMobileNav)}><a href="#services">Serviços</a></li>
                  <li className="linkHeader" onClick={() => setIsMobileNav(!isMobileNav)}><a href="#plans">Planos</a></li>
                  <li className="linkHeader" onClick={() => setIsMobileNav(!isMobileNav)}><a href="#trainers">Treinadores</a></li>
                  <li className="linkHeader" onClick={() => setIsMobileNav(!isMobileNav)}><a href="#review">Avaliação</a></li>
                  <li className="linkHeader" onClick={() => setIsMobileNav(!isMobileNav)}><a href="#faq">FAQ</a></li>
               </ul>
            </nav>
            }
         </div>
      </header>
   )
}