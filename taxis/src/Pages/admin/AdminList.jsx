import React, { useEffect, useState } from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {AiFillDelete} from "react-icons/ai"
const AdminList = () => {

  const notifySuccess = (msg) =>
    toast.success(msg);
  const notifError = (msg) =>
    toast.error(msg);
    const [allVoit, setAllVoit] = useState([]);
    
    const getAll = async () =>{
         try {
        const response = await axios.get(
          `https://api.vendezvotretaxi.fr/api/getAll-voitures`
        );
   
             setAllVoit(response.data);
    
        } catch (error) {
        console.error(error);
        }
    }

    const handleDelete = (e,id) => {
         axios
           .delete(
             `https://api.vendezvotretaxi.fr/api/delete-voiture/${id}`
           )
           .then((resp) => {
             notifySuccess(resp.data.message);

             getAll();
           })
           .catch((err) => {
             notifError("une erreur survenue lors de la supression de voiture");
           });
    }
    useEffect(() => {
        getAll();
    })

  return (
    <div className='m-10'>
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
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <td>Marque</td>
              <td>Modele</td>
              <td>Annee</td>
              <td>Kilometrage</td>
              <td>Telephone</td>
              <td>Email</td>
              <td>Immatriculation</td>
              <td>Image</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {allVoit.map((item) => {
              return (
                <tr>
                  <td>{item.marque}</td>
                  <td>{item.modele}</td>
                  <td>{item.annee}</td>
                  <td>{item.kilometrage}</td>
                  <td>{item.telephone}</td>
                  <td>{item.email}</td>
                  <td>{item.immatriculation}</td>
                  <td>
                    <img
                      src={`https://api.vendezvotretaxi.fr/pictures/${item.image_path}`}
                      className="w-10 h-10 rounded-full border-2"
                      alt=""
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-primary p-2 rounded-full"
                      onClick={(e) => handleDelete(e, item.id)}
                    >
                      <AiFillDelete className="text-xl text-white" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminList