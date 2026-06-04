export default function Inventions() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "black",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
      textAlign: "center"
    }}>

      <h2 style={{ color: "cyan", fontSize: "40px", marginBottom: "30px" }}>
        Key Inventions
      </h2>

      <div style={{ maxWidth: "700px" }}>

        <p>⚡ Alternating Current (AC) System</p>
        <p>⚡ Tesla Coil (High Voltage Experiment)</p>
        <p>⚡ Wireless Energy Transmission Concepts</p>
        <p>⚡ Radio and Remote Control Ideas</p>

      </div>

    </div>
  )
}
