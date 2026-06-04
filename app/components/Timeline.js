export default function Timeline() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#111",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
      textAlign: "center"
    }}>

      <h2 style={{ color: "cyan", fontSize: "40px", marginBottom: "30px" }}>
        Timeline
      </h2>

      <div style={{ lineHeight: "2" }}>
        <p>1856 — Born in Smiljan</p>
        <p>1884 — Moved to USA</p>
        <p>1893 — AC System success</p>
        <p>1943 — Legacy recognized after death</p>
      </div>

    </div>
  )
          }
