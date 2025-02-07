export const Emphasis = () => {

   return (
      <div className="container mx-auto flex justify-center items-center flex-wrap flex-col gap-4 sm:flex-row">
         <div className="sm:border-r-4 border-[--third-color] px-6 text-center flex-1">
            <div className="flex justify-center items-end gap-3">
               <span className="text-[--main-color] text-3xl">96%</span>
               <p className="text-lg">Satisfação dos clientes</p>
            </div>
            <p className="opacity-70 mt-2">Nossos membros amam o local e atendimento.</p>
         </div>
         <div className="sm:border-r-4 border-[--third-color] px-6 text-center flex-1">
            <div className="flex justify-center items-end gap-3">
               <span className="text-[--second-color] text-3xl">+5</span>
               <p className="text-lg">Anos de experiência.</p>
            </div>
            <p className="opacity-70 mt-2">Histórico comprovado de transformação</p>
         </div>
         <div className="sm:border-r-4 border-[--third-color] px-6 text-center flex-1">
            <div className="flex justify-center items-end gap-3">
               <span className="text-[--main-color] text-3xl">+800</span>
               <p className="text-lg">Membros ativos.</p>
            </div>
            <p className="opacity-70 mt-2">Junte-se a nossa comunidade fitness.</p>
         </div>
         <div className="px-6 text-center flex-1">
            <div className="flex justify-center items-end gap-3">
               <span className="text-[--second-color] text-3xl">24/7</span>
               <p className="text-lg">Suporte disponível.</p>
            </div>
            <p className="opacity-70 mt-2">Suporte de assistência disponível 24 horas por dia.</p>
         </div>
      </div>
   )
}