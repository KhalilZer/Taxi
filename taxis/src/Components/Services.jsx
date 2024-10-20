import React from "react";

import { GiBeard, GiHeadbandKnot, GiHairStrands, GiOilySpiral, GiStairs, GiStarsStack } from "react-icons/gi";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
function Services() {
  return (
    <div className="" id="services">
      <div className="service bg-fixed  bg-center bg-cover p-10 flex items-center text-center justify-center bg-no-repeat ">
        <div>
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="uppercase font-ubuntu text-2xl my-4 font-primary text-white "
          >
            Nos Services professionnels
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className=" text-5xl font-bold font-three text-white"
          >
            À VOTRE SERVICE POUR<br /> LE MEILLEUR
          </motion.p>
        </div>
      </div>

      <div
        variants={fadeIn("bottom", 0.3)}
        initial="hidden"
        whileInView={"show"}
        className="container mx-auto m-12"
      >
        <div className="grid md:grid-cols-3 md:space-x-6 space-y-6 md:space-y-0 text-center justify-center ">
          <div className="group p-12 space-y-8 bg-gray-100 rounded-lg">
            <div className=" flex items-center  justify-center">
              <div className="p-4 bg-primary  duration-700 group-hover:scale-75 rounded-2xl">
                <GiOilySpiral className="text-5xl  text-white" />
              </div>
            </div>
            <p className="font-three uppercase font-bold text-3xl group-hover:text-primary">
              Évaluation gratuite.
            </p>
            <p className="font-light">
              Profitez de notre estimation rapide et efficace faite par une
              équipe de professionnels.
            </p>
          </div>
          <div className="group p-12 space-y-8 bg-gray-100 rounded-lg">
            <div className=" flex items-center  justify-center">
              <div className="p-4 bg-primary rounded-2xl duration-700 group-hover:scale-75">
                <GiStairs className="text-5xl  text-white" />
              </div>
            </div>
            <p className="font-three uppercase font-bold text-3xl group-hover:text-primary">
              Mise en vente professionnel
            </p>
            <p className="font-light">
              Remettez votre véhicule à une équipe de professionnels réactifs
              sous 48h de partout sur le territoire français.
            </p>
          </div>
          <div className="group p-12 space-y-8 bg-gray-100 rounded-lg">
            <div className=" flex items-center  justify-center">
              <div className="p-4 bg-primary rounded-2xl duration-700 group-hover:scale-75">
                <GiStarsStack className="text-5xl  text-white" />
              </div>
            </div>
            <p className="font-three uppercase font-bold text-3xl group-hover:text-primary">
              Gestion administratif
            </p>
            <p className="font-light">
              Simplifiez vos démarches administratives liées à la vente de votre
              voiture en choisissant notre service de gestion administrative.
              Nous vous assisterons dans la préparation des documents
              nécessaires tels que le certificat de non-gage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
