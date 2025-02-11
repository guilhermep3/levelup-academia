"use client"
import { ReviewsData } from "@/data/reviews";
import { useEffect, useState } from "react";
import { FaQuoteRight, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Reviews = () => {
   const reviews = ReviewsData;
   const [currentSlide, setCurrentSlide] = useState<number>(0);
   const [itemsPerPage, setItemsPerPage] = useState<number>(2);
   const [slideWidth, setSlideWidth] = useState<number>(1160)
   const [newMargin, setNewMargin] = useState<number>(0);

   const totalSlides = Math.ceil(reviews.length / itemsPerPage);

   useEffect(() => {
      setItemsPerPage(window.innerWidth < 1024 ? 1 : 2);
      setSlideWidth(window.innerWidth < 1024 ? 353 : 1160)
   }, [])

   useEffect(() => {
      updateMargin()
   }, [currentSlide])

   function handlePrevSlide(){
      setCurrentSlide((prev) => prev > 0 ? prev -1 : totalSlides -1);
   }

   function handleNextSlide(){
      setCurrentSlide((prev) => prev < totalSlides -1 ? prev +1 : 0);
   }

   function updateMargin(){
      setNewMargin(currentSlide * slideWidth)
      console.log("newMargin: "+ newMargin)
   }


   return (
      <section id="review" className="mt-12 mb-6">
         <div className="container mx-auto p-2">
            <h1 className="sectionTitle"><span>Avaliações</span> dos Clientes</h1>
            <h2 className="sectionSubtitle">Veja algumas das avaliações recentes de nossos clientes.</h2>
            <div className="flex justify-start relative w-full mx-auto p-3 sm:p-10 overflow-hidden">
               <div
                  className="flex transition duration-500"
                  style={{ width: `calc(100vw * ${totalSlides})`, marginLeft: `-${newMargin}px`, transition: 'all 0.5s ease' }}
               >
                  {reviews.map((review, index) => (
                     <div
                        key={index}
                        className="p-5 pt-6 bg-[#141414] w-80 lg:w-[500px] mx-4 md:mx-10 rounded-xl relative"
                     >
                        <FaQuoteRight className="absolute top-0 text-4xl -mt-5 text-[--second-color]" />
                        <p className="text-lg sm:text-xl font-bold">{review.title}</p>
                        <p className="text-sm sm:text-base py-3">{review.body}</p>
                        <div className="flex gap-3 h-16 mt-2">
                           <div className="w-16 h-16 rounded-2xl overflow-hidden">
                              <img src={`reviews/${review.image}`} alt="review1" className="w-full h-full bg-zinc-700 object-cover" />
                           </div>
                           <div className="flex-1 flex flex-col justify-between">
                           <div className="flex justify-between">
                              <p className="text-base sm:text-lg font-semibold">{review.name}</p>
                              <div className="flex items-center gap-1">
                                 <FaStar className="text-lg sm:text-xl text-[--third-color]" />
                                 <p className="text-lg sm:text-xl text-[--third-color] font-bold">{review.rating.toFixed(1)}</p>
                              </div>
                           </div>
                              <p className="text-sm sm:text-base">{review.profession}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="flex justify-center gap-10 mt-3">
               <button onClick={handlePrevSlide} className="p-3 rounded-full bg-[#141414] border-2 border-transparent hover:border-[--second-color] transition">
                  <FaArrowLeft className="text-xl text-[--second-color]" />
               </button>
               <button onClick={handleNextSlide} className="p-3 rounded-full bg-[#141414] border-2 border-transparent hover:border-[--second-color] transition">
                  <FaArrowRight className="text-xl text-[--second-color]" />
               </button>
            </div>
         </div>
      </section>
   )
}