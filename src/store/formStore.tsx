import { create } from "zustand"

interface FormState {
   formData: {
      name: string;
      lastname: string;
      birthday: string;
      genre: "Masculino" | "Feminino" | "Outro";
      cpf: string;
      signature: "Plano Básico" | "Plano Prime" | "Plano Pro";
      number: string;
      email: string;
   },
   setFormData: (data: Partial<FormState["formData"]>) => void,
   resetFormData: () => void
}

export const useFormStore = create<FormState>((set) => ({
   formData: {
     name: '',
     lastname: '',
     birthday: '',
     genre: "Masculino",
     cpf: '',
     signature: "Plano Pro",
     number: '',
     email: '',
   },
   setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data}})),
   resetFormData: () => set({ formData: {
      name: '',
      lastname: '',
      birthday: '',
      genre: "Masculino",
      cpf: '',
      signature: "Plano Pro",
      number: '',
      email: '',
   }})
}))