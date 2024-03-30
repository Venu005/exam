import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
const TextArea = () => {
  return (
    <div>
      <h1
        className={cn(
          "text-6xl font-semibold text-blue-600 drop-shadow-md",
          font.className
        )}
      >
        Exam Management System
      </h1>
      <p className="text-md mt-5 text-left text-slate-700">
        Simplify exam administration with our comprehensive solution.Explore our
        features and start simplifying exam administration today!
      </p>
      <div className="flex space-x-20 mt-10 ">
        <Button className="rounded-2xl">
          <Link href="/auth/login">Login</Link>
        </Button>
        <Button variant="secondary" className="rounded-2xl">
            <Link href="/auth/signup">Sign Up</Link>
        </Button>
      </div>
    </div>
  );
};

export default TextArea;
