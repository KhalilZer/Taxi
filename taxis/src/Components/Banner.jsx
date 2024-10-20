import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <div className="flex items-center justify-center  h-screen" id="accueil">
      <div className="space-y-6">
        <div className="text-white text-center text-6xl font-three font-bold uppercase">
          Vendez Votre Taxi  <br />{" "}
          <span className="text-primary">
            <TypeAnimation
              className=""
              sequence={[
                "En un clique",
                2000,
                "Rapidement",
                2000,
                "En ligne",
                2000,
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
            />
          </span>
        </div>
        <div className="flex justify-center px-6 text-center text-white font-poppins font-light">
          Nous rachetons vos véhicules CA$H ! VENDRE SA VOITURE RAPIDEMENT EN
          QUELQUES CLICS !
        </div>
        <div className="flex justify-center gap-2">
          <button className="btn btn-primary text-white">
            Estimez votre Véhicule
          </button>
          <button className="btn bg-transparent btn-primary border-2 text-primary hover:text-white">
            Catalogue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner