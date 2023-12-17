"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataSignUpSchema } from "@/lib/schema";
type Value = {
  username: string;
  email: string;
  password: string;
};

const useSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Value>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(FormDataSignUpSchema),
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const onSubmit: SubmitHandler<Value> = async (data) => {
    setIsLoading(true);
    try {
      await axios.post("/api/auth/register", data);
      await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/",
      });
      setIsLoading(false);
      console.log("Signup in successfull");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return { onSubmit, isLoading, handleSubmit, register, errors, isSubmitting };
};

export default useSignUp;
