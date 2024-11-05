import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      {/* ESQUERDA*/}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image 
        src="/logo.png" 
        width={173}
        height={39}
        alt="Finance AI"
        className="mb-8" 
       />
        <h1>Bem-vindo</h1>
        <p>A finance AI é uma plataforma de gestão financeira que utiliza IA para manitorar suas movimentações, oferecer insights personalizadas, facilitando o controle do seu orçamento.</p>
      <Button variant="outline">
        <LogInIcon className="mr-2">
        </LogInIcon>
          Fazer login ou criar conta
      </Button>
      </div>
      {/* DIREITA */}
      <div className="relative h-full w-full">
        <Image src="/login.png" alt="Faça login" fill className="object-cover"></Image>
      </div>
    </div>
  )
}

export default LoginPage;