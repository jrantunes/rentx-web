import HomeTemplate from "templates/Home";

import carIllustration from "assets/background-car2.png";

const Home = () => {
  // estados iniciais, fetchs, useEffects ...
  return (
    <HomeTemplate
      absoluteImageURL={carIllustration}
      absoluteImageAltText="Imagem de um carro branco centralizada verticalmente e acima de elementos retangulares"
    />
  );
};

export default Home;
