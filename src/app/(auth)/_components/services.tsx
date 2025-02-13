import Image from "next/image";
import services1 from "../../../../public/services/services1.png";
import services2 from "../../../../public/services/services2.png";
import services3 from "../../../../public/services/services3.png";
import services4 from "../../../../public/services/services4.png";
import { IoIosArrowForward } from "react-icons/io";
import { ScrollReveal } from "@/utils/scrollReveal";

export const Services = () => {

   return (
      <section id="services" className="mt-12 mb-6 relative">
         <div className="blur-red blur-center"></div>
         <div className="container mx-auto p-2">
            <h1 className="sectionTitle text-center">Nossos <span>Serviços</span></h1>
            <h2 className="sectionSubtitle">Selecione o plano que se adapta aos seus objetivos de condicionamento físico</h2>
            <div className="flex justify-center items-center flex-col md:flex-row gap-5">
               <ScrollReveal XorY="y" minusplus="-" transition="1.2s">
                  <div className="serviceBox bgLinearRed relative w-80 h-80 rounded-xl overflow-hidden shadow-lg shadow-zinc-800 cursor-pointer hover:brightness-110 transition">
                     <div className="p-3 z-[5] max-w-44">
                        <p className="text-3xl font-bold text-[--main-color]">PERDER PESO</p>
                        <p className="my-2 text-sm opacity-80">Alcance uma perda de peso sustentável com nossos programas personalizados, projetados para você.</p>
                        <p>Ver nossos planos</p>
                        <IoIosArrowForward size={28} className="mt-1 text-[--third-color]"/>
                     </div>
                     <Image src={services1} alt="services1" className="absolute left-0 bottom-0 right-0 w-full h-auto object-cover opacity-90 z-[1]" />
                  </div>
               </ScrollReveal>
               <ScrollReveal XorY="y" minusplus="+" transition="1.2s">
                  <div className="serviceBox bgLinearOrange relative w-80 h-80 rounded-xl overflow-hidden shadow-lg shadow-zinc-800 cursor-pointer hover:brightness-110 transition">
                     <div className="p-3 z-[5] max-w-44">
                        <p className="text-3xl font-bold text-[--main-color]">GANHAR MÚSCULO</p>
                        <p className="my-2 text-sm opacity-80">Transforme seu corpo com nosso treinos projetados para ganho de massa muscular eficiente.</p>
                        <p>Ver nossos planos</p>
                        <IoIosArrowForward size={28} className="mt-1 text-[--third-color]"/>
                     </div>
                     <Image src={services2} alt="services2" className="absolute left-0 bottom-0 right-0 w-full h-auto object-cover opacity-90 z-[1]" />
                  </div>
               </ScrollReveal>
               <ScrollReveal XorY="y" minusplus="-" transition="1.2s">                  
                  <div className="serviceBox bgLinearRed relative w-80 h-80 rounded-xl overflow-hidden shadow-lg shadow-zinc-800 cursor-pointer hover:brightness-110 transition">
                     <div className="p-3 z-[5] max-w-44">
                        <p className="text-3xl font-bold text-[--main-color]">TREINO EM CASA</p>
                        <p className="my-2 text-sm opacity-80">Oferecemos programas de treino online adaptados ao seu espaço e nível de condicionamento.</p>
                        <p>Ver nossos planos</p>
                        <IoIosArrowForward size={28} className="mt-1 text-[--third-color]"/>
                     </div>
                     <Image src={services3} alt="services3" className="absolute left-0 bottom-0 right-0 w-full h-auto object-cover opacity-90 z-[1]" />
                  </div>
               </ScrollReveal>
               <ScrollReveal XorY="y" minusplus="+" transition="1.2s">
                  <div className="serviceBox bgLinearOrange relative w-80 h-80 rounded-xl overflow-hidden shadow-lg shadow-zinc-800 cursor-pointer hover:brightness-110 transition">
                     <div className="p-3 z-[5] max-w-44">
                        <p className="text-3xl font-bold text-[--main-color]">PLANILHA NUTRIÇÃO</p>
                        <p className="my-2 text-sm opacity-80">Nossa planilha de nutrição personalizada é criada para alinhar sua dieta aos seus treinos.</p>
                        <p>Ver nossos planos</p>
                        <IoIosArrowForward size={28} className="mt-1 text-[--third-color]"/>
                     </div>
                     <Image src={services4} alt="services3" className="absolute left-0 bottom-0 right-0 w-full h-auto object-cover opacity-90 z-[1]" />
                  </div>
               </ScrollReveal>
            </div>
         </div>
      </section>
   )
}