import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/NjczMzc2MmQt/NjczMzc2MmQt-ZWQ3ZWMwMzUt-w1500._CB431854135_.jpg"
        alt=""
      />

      {/* Product */}
      <div className="home__row">
        <Product
          id="id"
          title="Germ'Line Germes de Haricot Mungo Bio 200 g"
          image="https://images-na.ssl-images-amazon.com/images/I/8188y%2Bv2VoL._AC_SL1500_.jpg"
          price={11.99}
          rating={5}
        />

        <Product
          id="id"
          title="Germ'Line Germes de Haricot Mungo Bio 200 g"
          image="https://images-na.ssl-images-amazon.com/images/I/8188y%2Bv2VoL._AC_SL1500_.jpg"
          price={11.99}
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id="id"
          title="Germ'Line Germes de Haricot Mungo Bio 200 g"
          image="https://images-na.ssl-images-amazon.com/images/I/8188y%2Bv2VoL._AC_SL1500_.jpg"
          price={11.99}
          rating={5}
        />

        <Product
          id="id"
          title="Germ'Line Germes de Haricot Mungo Bio 200 g"
          image="https://images-na.ssl-images-amazon.com/images/I/8188y%2Bv2VoL._AC_SL1500_.jpg"
          price={11.99}
          rating={5}
        />

        <Product
          id="id"
          title="Germ'Line Germes de Haricot Mungo Bio 200 g"
          image="https://images-na.ssl-images-amazon.com/images/I/8188y%2Bv2VoL._AC_SL1500_.jpg"
          price={11.99}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
