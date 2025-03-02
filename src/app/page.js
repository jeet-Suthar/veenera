import Image from "next/image";
import NavBar from "@/components/NavBar";
import Main from "@/components/Main";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Footer} from "../components/Footer";


export default function Home() {
  return (
    <>
    <NavBar />
    <Main />
    <Footer />
  
    </>
  );
}
