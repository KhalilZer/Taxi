import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlinePhone,
  AiOutlineTwitter,
  AiTwotonePhone,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { BiCurrentLocation, BiLocationPlus } from "react-icons/bi";

function Contact() {
  return (
    <div id="contact" className="">
      <div className="bg-black p-4 py-16  items-center text-center justify-center bg-no-repeat ">
        <div variants={fadeIn("up", 0.3)} initial="hidden" whileInView={"show"}>
          <h1 className="uppercase text-white text-2xl my-4 font-primary ">
            Restez en contact avec Nous
          </h1>
          <p className=" md:text-5xl text-3xl font-bold text-primary font-secondary">
            RESTEZ CONNECTÉ AVEC UNE <br/> ÉQUIPE DE  PROFESSIONNELS
          </p>
        </div>

        <div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          className="grid md:grid-cols-3 mt-24"
        >
          <div>
            <div className="logoDiv">
              <h1 className="logo text-xl text-white pb-2 font-secondary">
                <strong>Vendez</strong>VotreTaxi.fr
              </h1>
            </div>
            <p className="text-white pb-2  opacity-70 leading-7">
              Spécialistes du rachat de taxi, VSL, ambulances, au meilleurs
              prix !! Estimation rapide, paiement immédiat
            </p>
          </div>
          <div className="grid">
            <span className="divTitle text-[18px] font-semibold pb-2 text-white">
              Menu
            </span>
            <div className="grid gap-3">
              <li className="text-white opacity-60 hover:opacity-90 hover:border-none">
                A Propos
              </li>
              <li className="text-white opacity-60 hover:opacity-90 hover:border-none">
                Services
              </li>
              <li className="text-white opacity-60 hover:opacity-90 hover:border-none">
                Nouveautés
              </li>
            </div>
          </div>
          <div className="">
            <span className="divTitle text-[18px] font-semibold pb-2 text-white">
              Contact info
            </span>
            <div className="">
              <small className="text-sm text-white opacity-50">
                +33 6 29 56 42 14
              </small>
              <br />
              <small className="text-sm text-white opacity-50">
                contact﻿@vendezvotretaxi.fr
              </small>
            </div>
            <div className="icons flex gap-4 py-2 justify-center">
              <a
                href="https://www.instagram.com/vendezvotretaxi/"
                target="_blank"
              >
                <AiOutlineInstagram className="bg-white text-blueColor h-10 w-10 rounded-full p-2 hover:bg-slate-100 cursor-pointer" />
              </a>
              <a
                href="https://www.facebook.com/people/Vendezvotretaxifr/100075781792844/"
                target="_blank"
              >
                <AiOutlineFacebook className="bg-white text-blueColor h-10 w-10 rounded-full p-2 hover:bg-slate-100 cursor-pointer" />
              </a>
              <a href="tel:0033629564214" target="_blank">
                <AiOutlinePhone className="bg-white text-blueColor h-10 w-10 rounded-full p-2 hover:bg-slate-100 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
