import FormLogin from "@/components/fragments/FormLogin";
import AuthLayouts from "@/components/layouts/AuthLayouts";
import React from "react";

export default function LoginPage() {
  return (
    <section>
      <div className="min-h-screen grid items-center">
        <AuthLayouts title="Login" desc="Login for your account">
          <FormLogin />
        </AuthLayouts>
      </div>
    </section>
  );
}
