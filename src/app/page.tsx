import { Header } from "@/components/header";
import { Hero } from "./(auth)/_components/hero";
import { Emphasis } from "./(auth)/_components/emphasis";
import { Services } from "./(auth)/_components/services";
import { Plans } from "./(auth)/_components/plans";
import { Trainers } from "./(auth)/_components/trainers";
import { Reviews } from "./(auth)/_components/reviews";
import { Faq } from "./(auth)/_components/faq";
import { Footer } from "@/components/footer";

export default function Home() {

   return (
      <main>
         <Header/>
         <Hero/>
         <Emphasis/>
         <Services/>
         <Plans/>
         <Trainers/>
         <Reviews/>
         <Faq/>
         <Footer/>
      </main>
   )
}