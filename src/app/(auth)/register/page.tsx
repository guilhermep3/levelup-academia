import { FormRegister } from "@/components/form";
import { Header } from "@/components/header";

export default function RegisterPage() {

   return (
      <section className="relative sm:min-h-screen">
         <Header showNav={false} />
         <div className="blur-red blur-tl"></div>
         <div className="blur-orange blur-br"></div>
         <div className="container mx-auto lg:max-w-[800px] sm:pt-24 2xl:pt-32">
            <div className="px-4 py-7 rounded-2xl bg-[#30303080] w-full mt-20 sm:mt-0">
               <h1 className="text-2xl sm:text-3xl font-bold mb-1 text-center">Cadastre-se na LevelUP</h1>
               <h2 className="text-sm sm:text-base text-center opacity-80 mb-5">Seu primeiro passo para a mudança</h2>
               <FormRegister/>
            </div>
         </div>
      </section>
   )
}