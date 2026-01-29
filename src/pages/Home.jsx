

import Hero from "../components/Hero";
import GameCard from "../components/GameCard";

export default function Home() {
  const games = [
    {
      id: 1,
      title: "Mia-sitt-spill",
      image: "/bilde1.jpg",
      description: " ",
      path: "/PlayLoop/mia/MemoryGame",
    },
    {
      id: 2,
      title: "Therese-sitt-spill",
      image: "/bilde2.jpg",
      description: " ",
      path: "/PlayLoop/Therese/ReactionGame",
    },
  ];

  return (
    <div style={mainContentStyle}>
      <Hero />
      <h2 style={{ textAlign: "center", margin: "40px 0" }}>Våre Spill</h2>

      {/* Grid som viser spill-kortene */}
      <section style={gridStyle}>
        {games.map((game) => (
          <Gamecard
            key={game.id}
            title={game.title}
            description={game.description}
            image={game.image}
          />
        ))}
      </section>
    </div>
  );
}

const mainContentStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
};
