"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import logo from "@/public/images/exam_time.svg";

export const NavBar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <Link href="/">
          <Image src={logo} alt="logo" height={150} width={150} />
        </Link>
      </div>
      <div className="flex mt-8">
        <Button variant="link">
          <Link href="/auth/signup">SignUp</Link>
        </Button>
        <Button variant="link">
          <Link href="/auth/login">Login</Link>
        </Button>
        <Button variant="link">
          <Link
            href="https://github.com/"
            className="flex items-center justify-center"
          >
            <FaGithub className="mr-2" width={100} height={100} />
            {/* TODO: increase github icon size */}
            <span>Github</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};
