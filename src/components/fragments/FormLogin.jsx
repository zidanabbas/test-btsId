"use client";
import React, { useState } from "react";
import FormInput from "../ui/FormInput/FormInput";
import Button from "../ui/Button";
import Link from "next/link";
import { login } from "@/services/auth-services";
import { useRouter } from "next/navigation";

export default function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");
  const route = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();

    const formData = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(formData, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        route.push("/todo-app");
      } else {
        setLoginFailed(res.errorMessage);
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      {loginFailed && (
        <p className="text-red-500 text-center font-Poppins font-thin">
          {loginFailed}
        </p>
      )}
      <div className="flex flex-col items-center">
        <FormInput
          label="Username"
          type="text"
          placeholder="Masukkan Username Anda"
          name="username"
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="Masukkan Password Anda"
        />
        <Button classname="bg-btnPrimary my-2">Login</Button>
        <div className="flex gap-x-2">
          <p className="text-base text-white">Dont have an account?</p>
          <Link href="/register" className="text-white">
            Register
          </Link>
        </div>
      </div>
    </form>
  );
}
