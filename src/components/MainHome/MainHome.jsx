import Feature from "../Features/Feature.jsx";
import Hero from "../Hero/Hero.jsx";
// Donnés pour le chaque composant feature
import featuresJson from "../../data/feature.json";
const MainHome = () => {
  const features = featuresJson.features;
  console.log(features);
  return (
    <>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {features.map((feature, index) => (
          <Feature
          key={"feature"+index}
          paragraph={feature.paragraph}
          image={feature.image}
          title={feature.title}
          alt={feature.alt}
          />
        ))}
        </section>
    </>
  );
};

export default MainHome;
