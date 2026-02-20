"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin,
      },
    });
    alert("Check ton email pour te connecter.");
  };

  return (
    <div style={{padding:"40px"}}>
      <h2>Connexion</h2>
      <input
        type="email"
        placeholder="Ton email"
        onChange={(e)=>setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
}
