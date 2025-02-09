import { TrainersData } from "@/data/trainers";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Trainers = () => {
   const trainers = TrainersData;

   return (
      <section id="trainers" className="mt-12 mb-6 relative">
         <div className="blur-orange blur-tl"></div>
         <div className="blur-red blur-br"></div>
         <div className="container mx-auto p-2">
            <h1 className="sectionTitle text-center">Nossos <span>Treinadores</span></h1>
            <h2 className="sectionSubtitle"></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 py-10 place-items-center">
               {trainers.map(trainer => (
                  <div className="w-72 mb-2 hover:brightness-110 transition duration-200">
                     <div className="bg-trainer w-full relative">
                        <img src={`trainers/${trainer.image}`} alt="treinador 1" className="relative w-full bottom-4 scale-110" />
                     </div>
                     <div className="bg-[#141414] p-3 brightness-125">
                        <div className="flex items-end gap-3">
                           <p className="text-xl font-bold">{trainer.name}</p>
                           <span className="text-[--second-color] font-semibold">+{trainer.experience} exp</span>
                        </div>
                        <p className="my-2 opacity-70 text-sm">{trainer.role}</p>
                        <div className="flex items-center gap-3">
                           <a href="#">Ver mais</a>
                           <FaLongArrowAltRight className="text-[--third-color] text-xl"/>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}