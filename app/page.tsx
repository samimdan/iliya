import Image from "next/image";
import NavBar from "./components/navbar/navBar";
import localFont from 'next/font/local'
import { cn } from "@/lib/utils";
const iranSansXFont=localFont({src:'./fonts/woff/IRANSansX-Regular.woff'})
export default function Home() {
  return (
    <div className={cn("max-w-[1325px] mx-auto",iranSansXFont.className)}>
      <NavBar />
    </div>
  );
}
