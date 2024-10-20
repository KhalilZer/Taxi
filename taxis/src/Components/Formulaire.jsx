import React, { useState } from 'react'

import car from "../assets/img/car.jpg"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiError } from "react-icons/bi"
import {ImSpinner9} from "react-icons/im"
const Formulaire = () => {
  const notifySuccess = () => toast.success("la Voiture est bien envoyé à notre système! ");
  const notifyError = () =>
    toast.error("Une erreur est survenue lors de votre demande ! Merci d'actualisez la page est reéssayer  ");

  const [err, setErr] = useState(false);
  const [loading,setLoading]=useState(false)
  const [form, setForm] = useState({
    marque: "",
    modele: "",
    annee: "",
    kilometrage: "",
    telephone: "",
    email: "",
    immat: "",
    picture:null,
  });

  const handleChange = (event) => {
     setErr(false);
    setForm({ ...form, [event.target.name]: event.target.value });


  }
  const handleFileChange = (event) => {
  
    setForm({ ...form, picture: event.target.files[0] });
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const {
      marque,
      modele,
      annee,
      kilometrage,
      telephone,
      email,
      immat,
      picture,
    } = form;

    
    if (marque == "" || modele == "" || annee == "" || kilometrage == "" || telephone == "" || email == "" || immat == "") {
     /*  for (const key in form) {
        if (form.hasOwnProperty(key) && !form[key]) { */
          setErr("Veuillez remplir tous les champs du formulaire");
         /*  return;
        } else {
          if (picture != null) {
            setLoading(true);
          }
        }
      } */
      return;
    }
    else {
      setLoading(true);
    }

    const formDataToSend = new FormData();
    formDataToSend.append("marque", marque);
    formDataToSend.append("modele", modele);
    formDataToSend.append("annee", annee);
    formDataToSend.append("kilometrage", kilometrage);
    formDataToSend.append("telephone", telephone);
    formDataToSend.append("email", email);
    formDataToSend.append("immat", immat);
    formDataToSend.append("picture", picture);

    try {
      const response = await axios.post(
        `https://api.vendezvotretaxi.fr/api/create-voiture`,
        formDataToSend
      );
      notifySuccess();
      setErr(false);
      
      setLoading(false)
      setForm({
         marque: "",
         modele: "",
         annee: "",
         kilometrage: "",
         telephone: "",
         email: "",
         immat: "",
         picture: null,
       });

    } catch (error) {
      notifyError();
    }
  };


  return (
    <div id="formulaire">
      {loading ? (
        <div className="fixed z-50  inset-0 flex items-center justify-center bg-gray-900 opacity-100">
          <ImSpinner9 className="animate-spin text-primary mr-3 text-8xl" />
        </div>
      ) : (
        ""
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="bg-white bg-center bg-no-repeat">
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold font-three">
                Remplissez votre formulaire!
              </h1>
              <p className="py-6 font-ubuntu">
                Nous comprenons l'importance de votre sécurité lors de
                l'utilisation de notre formulaire. Nous prenons des mesures
                strictes pour garantir que vos informations personnelles sont
                traitées en toute sécurité.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full md:max-w-lg shadow-2xl bg-base-100">
              <div className="card-body">
                {err && (
                  <div className="text-red-500">
                    <span className="flex gap-2 items-center">
                      <BiError /> Vueillez remplir tous les champs SVP !{" "}
                    </span>
                  </div>
                )}
                <div className="md:flex justify-between">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Marque</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Marque"
                      className="input input-bordered"
                      name="marque"
                      onChange={handleChange}
                      value={form.marque}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Modele</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Modele"
                      className="input input-bordered"
                      name="modele"
                      onChange={handleChange}
                      value={form.modele}
                    />
                  </div>
                </div>
                <div className="md:flex justify-between">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Année</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Année"
                      className="input input-bordered"
                      name="annee"
                      onChange={handleChange}
                      value={form.annee}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Kilométrage</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Kilométrage"
                      className="input input-bordered"
                      name="kilometrage"
                      onChange={handleChange}
                      value={form.kilometrage}
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Immatriculation</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Immatriculation"
                    className="input input-bordered"
                    name="immat"
                    onChange={handleChange}
                    value={form.immat}
                  />
                </div>
                <div className="md:flex justify-between">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Téléphone</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Téléphone"
                      className="input input-bordered"
                      name="telephone"
                      onChange={handleChange}
                      value={form.telephone}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Email"
                      className="input input-bordered"
                      name="email"
                      onChange={handleChange}
                      value={form.email}
                    />
                  </div>
                </div>

                <div className="form-control my-2 w-full">
                  <input
                    type="file"
                    className="file-input file-input-accent  w-full max-w-full"
                    name="picture"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulaire