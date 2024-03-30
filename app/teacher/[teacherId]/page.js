"use client";
import ImageUpload from "../_components/ImageUpload";
import { Button } from "../../../components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "../../../lib/utils";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
const FileUpload = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="text-center mb-10">
        <p
          className={cn("text-lg font-semibold drop-shadow-md", font.className)}
        >
          Please upload the question papers for your respective subjects here.
          Ensure that the file format is PDF and the file size is within the
          allowed limit.
        </p>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-full shadow" variant="secondary">
            File upload
          </Button>
        </DialogTrigger>
        <DialogContent className="border-sky-200">
          <DialogHeader>
            <DialogTitle className="text-center text-white">
              Upload your files
            </DialogTitle>
            <DialogDescription className="text-center">
              Upload question papers in pdf format
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <ImageUpload />
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
};
export default FileUpload;
