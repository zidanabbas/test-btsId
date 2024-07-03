import FormRegister from "@/components/fragments/FormRegister";
import AuthLayouts from "@/components/layouts/AuthLayouts";
import React from "react";

export default function RegisterPage() {
  return (
    <section>
      <div className="min-h-screen grid items-center">
        <AuthLayouts title="Register" desc="Register for your account">
          <FormRegister />
        </AuthLayouts>
      </div>
    </section>
  );
}
