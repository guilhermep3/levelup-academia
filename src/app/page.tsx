import { Header } from "@/components/header";
import { Hero } from "./(auth)/_components/hero";
import { Emphasis } from "./(auth)/_components/emphasis";
import { Services } from "./(auth)/_components/services";
import { Plans } from "./(auth)/_components/plans";
import { Trainers } from "./(auth)/_components/trainers";

export default function Home() {

   return (
      <main>
         <Header/>
         <Hero/>
         <Emphasis/>
         <Services/>
         <Plans/>
         <Trainers/>
      </main>
   )
}