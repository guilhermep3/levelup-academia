import Link from "next/link";
import Image from "next/image";
import HeroImg from "../../../../public/hero.png";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { ScrollReveal } from "@/utils/scrollReveal";

export const Hero = () => {

   return (
      <section id="hero" className="pt-20 pb-5 sm:py-32 relative">
         <div className="blur-red blur-tl"></div>
         <div className="blur-orange blur-br"></div>
         <div className="container mx-auto p-3 flex justify-center items-center flex-col sm:flex-row h-full">
            <div className="flex-1">
               <div className="text-center mt-5 sm:mt-0">
                  <ScrollReveal XorY="y">
                     <h1 className="h1-hero text-2xl sm:text-3xl lg:text-4xl font-bold">Alcance seu
                        <br /><strong className="text-3xl sm:text-4xl lg:text-5xl">POTENCIAL MÁXIMO</strong><br />
                        com LevelUP
                     </h1>
                  </ScrollReveal>
                  <ScrollReveal>
                     <p className="mt-6 mb-8">Na <span className="font-semibold">LevelUP</span>, oferecemos estrutura de ponta, treinos personalizados e um ambiente motivador para você alcançar seus objetivos. Aqui é o seu lugar.</p>
                  </ScrollReveal>
                  <ScrollReveal XorY="y" minusplus="+">
                     <Link href={'/register'} className="btn-big">Começar minha jornada</Link>
                  </ScrollReveal>
               </div>
            </div>
            <div className="flex-1 flex justify-center items-center relative w-full pt-11 sm:pt-0 mt-7 sm:mt-0 overflow-hidden">
               <Image src={HeroImg} alt="imagem do hero" className="w-56 sm:w-72 xl:w-[360px]" />
               <BsFillLightningChargeFill className="text-[340px] sm:text-[390px] lg:text-[440px] absolute z-[-1] -mt-20 text-[--second-color]" />
               <div className="p-2 text-center bg-[--black] border-2 border-[--main-color] rounded-xl absolute top-0 right-6 sm:right-12 lg:right-16">
                  <span>+1300</span>
                  <p className="opacity-80 text-sm">Avaliações</p>
               </div>
               <div className="p-2 text-center bg-[--black] border-2 border-[--main-color] rounded-xl absolute bottom-0 left-6 sm:left-12 lg:left-16">
                  <span>+80</span>
                  <p className="opacity-80 text-sm">Treinadores</p>
               </div>
            </div>
         </div>
      </section>
   )
}