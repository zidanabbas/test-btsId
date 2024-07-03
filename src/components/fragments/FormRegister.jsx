"use client";
import React, { useState } from "react";
import FormInput from "../ui/FormInput/FormInput";
import Button from "../ui/Button";
import Link from "next/link";
import { register } from "@/services/auth-services";
import { useRouter } from "next/navigation";

export default function FormRegister() {
  const [registerFailed, setRegisterFailed] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    try {
      await register(formData, (status, data) => {
        if (status) {
          console.log("Register success:", data);
          router.push("/login");
        } else {
          setRegisterFailed(data.errorMessage || "Register failed");
        }
      });
    } catch (error) {
      console.error("Register error:", error);
      setRegisterFailed("Register failed");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      {registerFailed && (
        <p className="text-red-500 text-center font-Poppins font-thin">
          {registerFailed}
        </p>
      )}
      <div className="flex flex-col items-center">
        <FormInput
          label="Email"
          type="email"
          placeholder="Masukkan Email Anda"
          name="email"
        />
        <FormInput
          label="Username"
          type="text"
          placeholder="Masukkan Username Anda"
          name="username"
        />
        <FormInput
          label="Password"
          type="password"
          placeholder="Masukkan Password Anda"
          name="password"
        />
        <Button className="bg-btnPrimary my-2" type="submit">
          Register
        </Button>
        <div className="flex gap-x-2">
          <p className="text-base text-white">Sudah punya akun?</p>
          <Link href="/login" className="text-white">
            Login
          </Link>
        </div>
      </div>
    </form>
  );
}
