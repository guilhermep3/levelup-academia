import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type props = {
   isModalOpen: boolean,
   setIsModalOpen: () => void
}
export const Modal = ({isModalOpen, setIsModalOpen}: props) => {

   return (
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
         <DialogContent>
            <DialogHeader>
               <DialogTitle className="text-center">Parabéns !</DialogTitle>
               <DialogDescription className="text-center my-3">Você terminou a primeira etapa para se cadastrar na nossa academia.</DialogDescription>
            </DialogHeader>
            <div className="flex justify-center flex-col gap-5 text-center">
               <p>Nós mandaremos um email para $email para finalizar a última etapa.</p>
               <Button onClick={setIsModalOpen}>Fechar</Button>
            </div>
         </DialogContent>
      </Dialog>
   )
}