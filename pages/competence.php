<?php
$id = $_GET['id'];
if ($id == "1") {
  $competence = "Github/Gitlab";
  $description = "J'ai acquis cette compétence grâce à mes projets de développement collaboratif où l'utilisation de Git et GitHub/GitLab était essentielle pour la gestion de versions.";
  $niveau = "Intermédiaire";
  $projets = "Tout les projets faits en cours et perso";
  $projets_details = [
    ['image' => '../img/backtopixel.png', 'titre' => 'BackToPixel'],
    ['image' => '../img/cineflix.png', 'titre' => 'Cinéflix'],
  ];
}elseif ($id == "2") {
  $competence = "Front-end";
  $description = "J'ai développé des interfaces utilisateurs réactives et modernes en utilisant HTML, CSS et JavaScript.";
  $niveau = "Avancé";
  $projets = "Js -> Portfolio, HTML/CSS -> tout les projets ";
  $projets_details = [
    ['image' => '../img/preview_site.png', 'titre' => 'Portfolio'],
    ['image' => '../img/cineflix2.png', 'titre' => 'Cinéflix']
  ];
}elseif ($id == "5") {
  $competence = "Bibliotheque JS/CSS";
  $description = "J'ai utilisé diverses bibliothèques comme Bootstrap, Tailwind CSS et GSAP pour accélérer le développement de projets web.";
  $niveau = "Intermédiaire";
  $projets = "Restyle, Portfolio";
  $projets_details = [
    ['image' => '../img/restyle.png', 'titre' => 'Restyle'],
    ['image' => '../img/preview_site.png', 'titre' => 'Portfolio']
  ];
}elseif ($id == "6") {
  $competence = "Admin System";
  $description = "J'ai acquis de l'expérience dans l'administration de systèmes en travaillant sur des serveurs Linux et des configurations de sécurité.";
  $niveau = "Débutant+";
  $projets = "Configuration Serveur, Automatisation de tâches";
 
}elseif ($id == "7") {
  $competence = "Cloud & Hébergement";
  $description = "J'ai travaillé avec o2switch pour héberger des sites web et gérer des ressources de manière efficace.";
  $niveau = "Intermédiaire";
  $projets = "Hébergement web, Gestion de serveur sur O2Switch";
  $projets_details = [
    ['image' => '../img/herosos.png', 'titre' => 'Site Hébergé sur O2Switch'],
    ['image' => '../img/preview_site.png', 'titre' => 'Site Hébergé sur O2Switch']
  ];
}
elseif ($id == "8")  {
  $competence = "Back-end";
  $description = "Je suis capable de développer des bases de données robustes en utilisant des langages comme PHP.";
  $niveau = "Débutant";
  $projets = "Héros Sos";
  $projets_details = [
    ['image' => '../img/herosos.png', 'titre' => 'Héros Sos']
  ];
}
?>

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../styles/competence.css" />
     <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="../img/logo_portfolio.jpg"
    />
    <link rel="icon" type="image/x-icon" href="../img/logo_portfolio.jpg" />
    <link
      rel="shortcut icon"
      href="../img/logo_portfolio.jpg"
      type="image/x-icon"
    />
    <title><?php echo $competence; ?></title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body, html {
        height: 100%;
        font-family: Arial, sans-serif;
        background-color:rgb(16, 45, 75);
      }
      .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
        padding: 20px;
      }
      h1 {
        font-size: 3rem;
        color:rgb(255, 255, 255);
      }
      h2 {
        font-size: 1.5rem;
        color:rgb(194, 193, 193);
        margin-top: 10px;
      }
      p {
        font-size: 1rem;
        color:rgb(204, 204, 204);
        margin: 10px 0;
      }
      .section {
        margin-bottom: 20px;
      }
      .description, .projets {
        background: rgb(49, 107, 169);
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
      .back-link {
        margin-top: 30px;
        padding: 1em 2em;
        width: 20%;
        margin-left: 50%;
        transform: translate(-50%);
        border: 1px #007bff solid ;
        text-decoration: none;
        color: #007bff;
        border-radius: 3px;
        font-weight: bold;
        transition: all 0.3s ease;
      }
      
      .back-link:hover {
        text-decoration: underline;
        background-color: #007bff;
        color: #fff;
      }
      .project {
        display: flex;
        align-items: center;
        margin-top: 15px;
      }
      .project img {
        width: 300px;
        height: 300px;
        object-fit: cover;
        margin-right: 15px;
        border-radius: 16px;
      }
      .project h3 {
        color: rgb(204, 204, 204);
        font-size: 1.2rem;
      }
      .container_project{
        display: flex;
        justify-content: space-around;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div>
        <h1><?php echo $competence; ?></h1>
        <h2>Comment j'ai acquis cette compétence</h2>
        <div class="section description">
          <p><?php echo $description; ?></p>
          <p><strong>Niveau :</strong> <?php echo $niveau; ?></p>
        </div>
      </div>

      <div>
        <h2>Projets utilisant cette compétence</h2>
        <div class="section projets">
          <p><strong>Projets : </strong><?php echo $projets; ?></p>
          <div class="container_project">
          <?php foreach ($projets_details as $projet): ?>
            <div class="project">
              <img src="<?php echo $projet['image']; ?>" alt="Image de projet">
              <h3><?php echo $projet['titre']; ?></h3>
            </div>
          <?php endforeach; ?>
          </div>
        </div>
      </div>


      <a href="../index.html#competence" class="back-link">RETOUR</a>
    </div>
  </body>
</html>
