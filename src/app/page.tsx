import Image from "next/image";
import { NavBar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Footer } from "./components/footer";
import Link from "next/link";




export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      
      <Footer />
      
    </div>
  );
}
