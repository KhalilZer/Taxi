<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Voiture;
use App\Mail\SendMail;
use Illuminate\Support\Facades\Mail;

class VoitureController extends Controller
{
    //
    public function test(){
        return "hello";
    }
    public function create(Request $req){



        $filename="";
        if($req->picture!="null"){

            $file = $req->file('picture');

            // Générez un nom de fichier unique
            $filename = uniqid() . '.' . $file->getClientOriginalExtension();

            // Déplacez le fichier vers le dossier de stockage public
            $file->move(public_path('pictures'), $filename);
        }

        $newVoiture=new Voiture();
        $newVoiture->marque=$req->marque;
        $newVoiture->modele=$req->modele;
        $newVoiture->annee=$req->annee;
        $newVoiture->kilometrage=$req->kilometrage;
        $newVoiture->telephone=$req->telephone;
        $newVoiture->email=$req->email;
        $newVoiture->immatriculation=$req->immat;
        $newVoiture->image_path=$filename;
        $newVoiture->save();


         $data = [
            'mail' => $req->email,
            'tel'=>$req->telephone,
            'marque'=>$req->marque,
            'modele'=>$req->modele,
            'annee'=>$req->annee,
            'kilometrage'=>$req->kilometrage,
            'immatriculation'=>$req->immat,


        ];
        $mail = new SendMail($data);
        $mail->subject('Nouvelle Voiture est ajouté');

        Mail::to("khalilzerzour@gmail.com")->send($mail);
        return response()->json(['message' => 'Votre Voiture est bien envoyé a notre systéme']);


    }

    public function getAll(){
        return Voiture::all();
    }
    public function delete(Voiture $voit){
        $voit->delete();
        return response()->json(["message"=>"La voiture est supprimée avec succes"],200);
    }
}
