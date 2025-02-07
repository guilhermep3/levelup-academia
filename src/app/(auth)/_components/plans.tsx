import { PlansData } from "@/data/plans"

export const Plans = () => {
   const plans = PlansData;

   return (
      <section id="plans" className="mt-12 mb-6 relative">
         <div className="blur-orange blur-center"></div>
         <div className="container mx-auto p-2">
            <h1 className="sectionTitle">Nossos <span>Planos</span></h1>
            <h2 className="sectionSubtitle">Selecione o plano que se adapta aos seus objetivos de condicionamento físico.</h2>
            <div className="flex justify-center items-center sm:items-start flex-col sm:flex-row gap-5 flex-wrap">
               {plans.map(plan => (
                  <div className={`rounded-xl p-4 w-80 text-center bg-[#0a0a0a55] border-4
                        ${plan.id % 2 === 0 ? "border-[--second-color]" : "border-[--main-color]"}
                     `}>
                     <h3 className="text-2xl font-semibold">{plan.title}</h3>
                     <h4 className="text-[--second-color] mt-3 mb-1">Descrição</h4>
                     <p className="text-sm">{plan.description}</p>
                     <h4 className="text-[--second-color] mt-3 mb-1">Recursos</h4>
                     {plan.features.map(feature => (
                        <ol className="list-disc text-start px-4 leading-[1.2]">
                           <li className="mb-2">{feature}</li>
                        </ol>
                     ))}
                     <p className="text-2xl my-4">R$<span className="text-3xl">{plan.price}</span>,00</p>
                     <button className={`text-lg py-3 w-full rounded-xl hover:brightness-110 transition
                        ${plan.id % 2 === 0 ? "bg-[--second-color]" : "bg-[--main-color]"}`}>Escolher este plano</button>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}