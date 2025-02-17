"use client"
import React, { useEffect, useRef, useState } from "react"

type props = {
   children: React.ReactNode;
   transition?: string;
   XorY?: "X" | "Y" | "x" | "y";
   minusplus?: string;
}
export const ScrollReveal = ({ children, transition, XorY, minusplus }: props) => {
   const revealRef = useRef<HTMLDivElement | null>(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const handleScrollEvent = () => {
         if (revealRef.current) {
            const top = revealRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (top < windowHeight) {
               setIsVisible(true)
            } else {
               setIsVisible(false)
            }
         }
      }
      window.addEventListener('scroll', handleScrollEvent);
      handleScrollEvent();
      return () => {
         window.removeEventListener('scroll', handleScrollEvent)
      }
   }, [])


   return (
      <div ref={revealRef}
         style={{
            display: 'inline-block',
            opacity: isVisible ? '1' : '0',
            transform: isVisible ? `translate${XorY ? XorY : 'x'}(0px)` : `translate${XorY ? XorY : 'x'}(${minusplus ? minusplus : '-'}100px)`,
            transition: `all ${transition ? transition : '1s'} ease-out`
         }}
      >
         {children}
      </div>
   )
}