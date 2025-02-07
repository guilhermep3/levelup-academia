export const Trainers = () => {

   return (
      <section id="trainers" className="mt-12 mb-6 relative">
         <div className="blur-orange blur-tl"></div>
         <div className="blur-red blur-br"></div>
         <div className="container mx-auto p-2">
            <h1 className="sectionTitle text-center">Nossos <span>Treinadores</span></h1>
            <div className="flex justify-center items-center flex-col sm:flex-row flex-wrap">
               <div className="bg-trainer w-80">
                  <div className="w-full">
                     <img src="trainers/trainer1.png" alt="treinador 1" />
                  </div>
                  <div>
                     <p>Samuel Castro <span>+10 exp</span></p>
                     <p>Personal Trainer</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}