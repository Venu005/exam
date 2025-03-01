"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../../../components/ui/button";
const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button className="w-full" size="lg" variant="outline" onClick={() => {}}>
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button className="w-full" size="lg" variant="outline" onClick={() => {}}>
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;
