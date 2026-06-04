import About from "../components/About"
import Inventions from "../components/Inventions"
import Timeline from "../components/Timeline"

export default function Home() {
  return (
    <>
      {/* HERO */}
      <main style={{
        height: "100vh",
        background: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <h1 style={{ color: "cyan", fontSize: "50px" }}>
          Nikola Tesla ⚡
        </h1>

        <p style={{ color: "gray" }}>
          Genius of Electricity
        </p>
      </main>

      {/* ABOUT */}
      <About />

      {/* INVENTIONS */}
      <Inventions />

      {/* TIMELINE */}
      <Timeline />
    </>
  )
}
