"use client"

import Certificate from "@/components/certificate";
import Hero from "@/components/hero";
import Project from "@/components/project";
import Skills from "@/components/skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out-sine",
      delay: 100,
      anchorPlacement: "bottom-bottom",
      mirror: true,
      offset: 160,
    });
    AOS.refresh()
  }, []);
  return (
    <div>
     
     <Hero/>
    
     <Project/>
     <Skills/>
    <Certificate/>
    
   
    </div>
   
  );
}
