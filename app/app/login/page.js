"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin },
    });

    if (error) {
      alert("Erreur: " + error.message);
      return;
    }
    alert("Email envoyé ! Vérifie ta boîte mail (spam/promotions).");
  };

  return (
    <main style={{ minHeight: "100vh", padding: 40 }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>Connexion</h1>

      <input
        type="email"
        placeholder="ton@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 12, width: "100%", maxWidth: 420, borderRadius: 8, border: "1px solid #ccc" }}
      />

      <div style={{ marginTop: 12 }}>
        <button
          onClick={handleLogin}
          style={{ padding: "12px 18px", borderRadius: 8, background: "#0f172a", color: "white" }}
        >
          Se connecter
        </button>
      </div>
    </main>
  );
}
