import Image from "next/image";
import hero from "../public/images/hero.svg";
import { NavBar } from "./components/NavBar";
import TextArea from "./components/TextArea";
export default function Home() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="flex items-center justify-end pt-10 pr-[100px]">
        <div className="text-left ml-[100px]">
          <TextArea />
        </div>
        <div className="items-center">
          <Image src={hero} alt="hero-img" height={500} width={500} />
        </div>
      </div>
    </div>
  );
}
