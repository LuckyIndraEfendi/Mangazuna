"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataSignInSchema } from "@/lib/schema";
type Value = {
  email: string;
  password: string;
};
const useSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Value>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(FormDataSignInSchema),
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const onSubmit: SubmitHandler<Value> = async (data) => {
    setIsLoading(true);
    try {
      await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/",
      });
      setIsLoading(false);
      console.log("Signing in successfull");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return { onSubmit, isLoading, handleSubmit, register, errors, isSubmitting };
};

export default useSignIn;
