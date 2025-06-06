import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import HeroSecion from "./components/Home/HeroSecion";
import PopularCategory from "./components/Home/PopularCategory";
import PopularFood from "./components/Home/PopularFood";
import PopularRestaurent from "./components/Home/PopularRestaurent";
import AppAdvertisement from "./components/Home/AppAdvertisement";
import Testimonial from "./components/Home/Testimonial";

export default function Home() {
  return (
   <>
   <Navbar/>
  <HeroSecion />
   <div className="container">
   <PopularCategory />
   <PopularFood />
   <PopularRestaurent />
   <AppAdvertisement />
   <Testimonial />
   </div>
   
   </>
  );
}
