import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useFormStore } from "@/store/formStore"

type props = {
   isModalOpen: boolean,
   setIsModalOpen: () => void
}
export const Modal = ({isModalOpen, setIsModalOpen}: props) => {
   const { formData } = useFormStore()

   return (
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
         <DialogContent>
            <DialogHeader>
               <DialogTitle className="text-lg text-center">Parabéns {formData.name}!</DialogTitle>
               <DialogDescription className="text-center py-1">Você terminou a primeira etapa para se cadastrar na nossa academia.</DialogDescription>
            </DialogHeader>
            <div className="flex justify-center flex-col gap-5 text-center">
               <p>Nós mandaremos um email para <strong>{formData.email}</strong> para você finalizar a última etapa.</p>
               <Button onClick={setIsModalOpen}>Fechar</Button>
            </div>
         </DialogContent>
      </Dialog>
   )
}