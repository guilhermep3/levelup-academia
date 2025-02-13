"use client"
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { validarCPF } from "@/utils/validarCpf";
import { PatternFormat } from "react-number-format";
import { useFormStore } from "@/store/formStore";
import { LoaderCircle } from "@/components/loader";
import { Modal } from "@/app/(auth)/_components/modal";

const registerSchema = z.object({
   name: z.string().min(2, "Mínimo 2 caracteres"),
   lastname: z.string().min(2, "Mínimo 2 caracteres"),
   birthday: z.string()
      .refine(value => {
         const date = new Date(value);
         return !isNaN(date.getTime());
      }, { message: "Data inválida" })
      .refine(value => {
         const date = new Date(value);
         const today = new Date();
         const minAge = 18;
         const age = today.getFullYear() - date.getFullYear();
         return age > minAge || (age === minAge && today >= new Date(date.getFullYear() + minAge, date.getMonth(), date.getDate()));
      }, { message: "Você precisa ter pelo menos 18 anos" }),
   genre: z.enum(["Masculino", "Feminino", "Outro"]),
   cpf: z.string().min(11, "CPF Inválido").refine(validarCPF, { message: "CPF Inválido refine" }),
   signature: z.enum(["Plano Básico", "Plano Pro", "Plano Prime"]),
   number: z.string().min(9, "Número inválido"),
   email: z.string().email("Email inválido")
});

export const FormRegister = () => {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   const { formData, setFormData } = useFormStore();
   const [isLoading, setIsLoading] = useState(false);

   const methods = useForm<z.infer<typeof registerSchema>>({
      resolver: zodResolver(registerSchema),
      defaultValues: {
         name: "",
         lastname: "",
         birthday: "",
         genre: "Masculino",
         cpf: "",
         signature: formData.signature,
         number: "",
         email: ""
      }
   });

   function onSubmit(data: z.infer<typeof registerSchema>) {
      setIsLoading(true);
      setTimeout(() => {
         setFormData(data);
         setIsModalOpen(!isModalOpen);
         setIsLoading(false);
      }, 2000);
      methods.reset();
   }

   return (
      <>
         {isLoading && <LoaderCircle />}
         <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="flex w-full flex-col space-y-4">
               <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <FormField control={methods.control} name="name" render={({ field }) => (
                     <FormItem className="flex-1">
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                           <Input className="bg-[--black-opaque] border-zinc-700 text-white text-base sm:text-lg p-2" style={{ marginTop: '4px' }} placeholder="Digite seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )} />
                  <FormField control={methods.control} name="lastname" render={({ field }) => (
                     <FormItem className="flex-1">
                        <FormLabel>Sobrenome</FormLabel>
                        <FormControl>
                           <Input className="bg-[--black-opaque] border-zinc-700 text-white text-base sm:text-lg p-2" style={{ marginTop: '4px' }} placeholder="Digite seu sobrenome" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )} />
               </div>
               <div className="flex flex-row gap-2 sm:gap-4">
                  <FormField control={methods.control} name="birthday" render={({ field }) => (
                     <FormItem className="flex-1">
                        <FormLabel>Data de nascimento</FormLabel>
                        <FormControl>
                           <Input className="bg-[--black-opaque] border-zinc-700 text-white text-base sm:text-lg p-2" style={{ marginTop: '4px' }} type="date" placeholder="Ano / Mês / Dia" {...field} value={field.value} onChange={(e) => field.onChange(e.target.value)} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )} />
                  <FormField control={methods.control} name="genre" render={({ field }) => (
                     <FormItem className="flex-1">
                        <FormLabel>Gênero</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                           <SelectTrigger className="bg-[--black-opaque] border-zinc-700" style={{ marginTop: '4px' }}>
                              <SelectValue placeholder="Selecione seu genero" />
                           </SelectTrigger>
                           <SelectContent className="bg-zinc-900">
                              <SelectItem value="Masculino" className="text-white focus:text-white bg-zinc-900 focus:bg-zinc-800">Masculino</SelectItem>
                              <SelectItem value="Feminino" className="text-white focus:text-white bg-zinc-900 focus:bg-zinc-800">Feminino</SelectItem>
                              <SelectItem value="Outro" className="text-white focus:text-white bg-zinc-900 focus:bg-zinc-800">Outro</SelectItem>
                           </SelectContent>
                           <FormMessage />
                        </Select>
                     </FormItem>
                  )} />
               </div>
               <div className="flex flex-row gap-2 sm:gap-4">
                  <FormField control={methods.control} name="cpf" render={({ field }) => (
                     <FormItem className="flex-1">
                        <FormLabel>Seu CPF</FormLabel>
                        <FormControl>
                           <PatternFormat {...field} format="###.###.###-##" mask="_" customInput={Input} className="bg-[--black-opaque] border-zinc-700 text-white text-base sm:text-lg p-2" style={{ marginTop: '4px' }} placeholder="Digite seu cpf" />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )} />
                  <FormField control={methods.control} name="signature" render={({ field }) => (
                     <FormItem className="flex-1">
                        <FormLabel>Plano da academia</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                           <SelectTrigger className="bg-[--black-opaque] border-zinc-700" style={{ marginTop: '4px' }}>
                              <SelectValue placeholder="Selecione o plano da academia" />
                           </SelectTrigger>
                           <SelectContent className="bg-zinc-900">
                              <SelectItem value="Plano Básico" className="text-white focus:text-white bg-zinc-900 focus:bg-zinc-800">Plano Básico</SelectItem>
                              <SelectItem value="Plano Prime" className="text-white focus:text-white bg-zinc-900 focus:bg-zinc-800">Plano Prime</SelectItem>
                              <SelectItem value="Plano Pro" className="text-white focus:text-white bg-zinc-900 focus:bg-zinc-800">Plano Pro</SelectItem>
                           </SelectContent>
                        </Select>
                     </FormItem>
                  )} />
               </div>
               <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <FormField control={methods.control} name="number" render={({ field }) => (
                     <FormItem className="flex-1">
                        <FormLabel>Número de telefone</FormLabel>
                        <FormControl>
                           <Input className="bg-[--black-opaque] border-zinc-700 text-white text-base sm:text-lg p-2" style={{ marginTop: '4px' }} placeholder="Digite seu número" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )} />
                  <FormField control={methods.control} name="email" render={({ field }) => (
                     <FormItem className="flex-1">
                        <FormLabel>Seu Email</FormLabel>
                        <FormControl>
                           <Input className="bg-[--black-opaque] border-zinc-700 text-white text-base sm:text-lg p-2" style={{ marginTop: '4px' }} placeholder="Digite seu email" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )} />
               </div>
               <Button type="submit" className="w-full bg-[--second-color] text-lg hover:brightness-110 hover:bg-[--second-color] mt-2 text-white">Enviar</Button>
            </form>
         </FormProvider>
         {isModalOpen && <Modal isModalOpen={isModalOpen} setIsModalOpen={() => setIsModalOpen(!isModalOpen)} />}
      </>
   );
};
