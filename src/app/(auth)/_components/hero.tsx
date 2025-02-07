import Link from "next/link";
import Image from "next/image";
import HeroImg from "../../../../public/hero.png";
import { BsFillLightningChargeFill } from "react-icons/bs";

export const Hero = () => {

   return (
      <section className="pt-20 pb-5 sm:py-32 relative">
         <div className="blur-red blur-tl"></div>
         <div className="blur-orange blur-br"></div>
         <div className="container mx-auto p-3 flex justify-center items-center flex-col sm:flex-row h-full">
            <div className="flex-1">
               <div className="text-center mt-5 sm:mt-0">
                  <h1 className="h1-hero text-2xl sm:text-4xl font-bold">Alcance seu
                     <br/><strong className="text-3xl sm:text-5xl">POTENCIAL MÁXIMO</strong><br/>
                     com LevelUP
                  </h1>
                  <p className="mt-6 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rem animi vitae hic sunt! Repellat quisquam ea, numquam porro obcaecati eos dolorum expedita perspiciatis autem, quod deserunt ab ratione nemo?</p>
                  <Link href={'/register'} className="btn-big">Começar minha jornada</Link>
               </div>
            </div>
            <div className="flex-1 flex justify-center items-center relative w-full mt-10 sm:mt-0">
               <Image src={HeroImg} alt="imagem do hero" className="w-56 sm:w-72" />
               <BsFillLightningChargeFill className="text-[360px] sm:text-[440px] absolute z-[-1] -mt-20 text-[--second-color]"/>
               <div className="p-3 text-center bg-[#0a0a0a] border-2 border-[--main-color] rounded-xl absolute top-0 right-6 sm:right-24">
                  <span>+1300</span>
                  <p className="opacity-80 text-sm">Avaliações</p>
               </div>
               <div className="p-2 text-center bg-[#0a0a0a] border-2 border-[--main-color] rounded-xl absolute bottom-0 left-6 sm:left-24">
                  <span>+80</span>
                  <p className="opacity-80 text-sm">Treinadores</p>
               </div>
            </div>
         </div>
      </section>
   )
}