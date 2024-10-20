<p>
    <center><h3><strong>Bonjour</strong> Vous avez reçu un nouveau formulaire</h3></center>

    <ul>
        <center><h2 style="color:#eb4d4b">Les informations du client</h2></center>
        <li> <strong>Email : </strong> {{ $data['mail'] }}</li>
        <li> <strong>Téléphone : </strong> {{ $data['tel'] }}</li>

    </ul>


    <ul>
        <center><h2 style="color:#eb4d4b">Les informations de la voiture</h2></center>
        <li> <strong>Marque : </strong> {{ $data['marque'] }}</li>
        <li> <strong>Modele : </strong> {{ $data['modele'] }}</li>
        <li> <strong>Annee : </strong> {{ $data['annee'] }}</li>
        <li> <strong>Kilometrage : </strong> {{ $data['kilometrage'] }}</li>
        <li> <strong>Immatriculation : </strong> {{ $data['immatriculation'] }}</li>
    </ul>



</p>
