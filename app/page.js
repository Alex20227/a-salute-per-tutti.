export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1 style={{fontSize:"40px"}}>A Salute Per Tutti</h1>
      <p>Plateforme Premium de Révision Médecine</p>
      <a href="/pricing" style={{
        marginTop:"20px",
        background:"#facc15",
        padding:"12px 20px",
        borderRadius:"8px",
        color:"black",
        textDecoration:"none"
      }}>
        S'abonner - 50€/mois
      </a>
    </main>
  )
}
