import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2e2a47]">
            Bienvenido!
          </h1>
          <p className="text-base text-[#7e8ca0]">
            Iniciar session o Crear una cuenta para continuar en tu panel
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded >
            <SignIn />
          </ClerkLoaded>
          <ClerkLoading >
            <Loader2 size={20} className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
          
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image src="/logo.svg" alt="Logo" width={200} height={200} />
      </div>
    </div>
  );
}

