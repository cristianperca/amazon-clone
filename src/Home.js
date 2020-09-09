import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/NjczMzc2MmQt/NjczMzc2MmQt-ZWQ3ZWMwMzUt-w1500._CB431854135_.jpg"
        // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product */}
      <div className="home__row">
        <Product
          id="xvsdv757"
          title="Germ'Line Germes de Haricot Mungo Bio 200 g"
          image="https://images-na.ssl-images-amazon.com/images/I/8188y%2Bv2VoL._AC_SL1500_.jpg"
          price={11.99}
          rating={5}
        />

        <Product
          id="76576768jhg"
          title="Sigma Objectif 50 mm F1,4 DG HSM Art - Monture Canon"
          image="https://www.amazon.fr/images/I/81fBLjPEQgL._AC_SL1500_.jpg"
          price={725.89}
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id="B01C90JKDG"
          title="Canon EOS 1D X Mark II Boîtier d'appareil-Photo SLR 20,2"
          image="https://www.amazon.fr/images/I/8185STW4XlL._AC_SL1500_.jpg"
          price={3990}
          rating={5}
        />

        <Product
          id="sfdsfsdf"
          title="Kindle Paperwhite - Résistant à l'eau, Écran haute résolution 6"
          image="https://www.amazon.fr/images/I/619Y3MWQp6L._AC_SL1000_.jpg"
          price={130}
          rating={5}
        />

        <Product
          id="1599674459"
          title="Withings Scanwatch 42mm Montre Connectée Hybride avec ECG"
          image="https://www.amazon.fr/images/I/716aANxWq%2BL._AC_SL1500_.jpg"
          price={299.95}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
