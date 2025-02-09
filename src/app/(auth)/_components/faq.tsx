"use client"
import { FaqData } from "@/data/faq";
import { useState } from "react"

export const Faq = () => {
   const faqs = FaqData;
   const [showAnswer, setShowAnswer] = useState<number | null>(null);

   function handleShowAnswer(id: number){
      setShowAnswer((prev) => (prev === id ? null : id))
   }

   return (
      <section id="faq" className="mt-12 mb-32 relative">
         <div className="blur-orange blur-center"></div>
         <div className="container mx-auto p-2">
            <h1 className="sectionTitle"><span>Perguntas</span> frequentes</h1>
            <div className="flex flex-col gap-2 mt-6">
               {faqs.map(faq => (
                  <div key={faq.id} className="bg-[#141414] w-full sm:w-3/4 mx-auto">
                     <button onClick={() => handleShowAnswer(faq.id)} className="w-full text-left p-4 border-2 border-[--main-color] rounded-t-xl text-base font-semibold flex cursor-pointer z-30">
                        {faq.question}
                     </button>
                     <p style={{transition: 'all 0.5s'}} className={`transition duration-300 border-2 border-[--second-color] z-0 text-sm sm:text-base
                        ${showAnswer === faq.id ? 'max-h-96 opacity-80 p-4 pointer-events-auto' : 'max-h-0 px-4 opacity-0 pointer-events-none'}`}>
                        {faq.answer}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}