# Projet P6 - Fisheyes

I. Scénario du projet :<br>

Nouveau Développeur junior chez Teachasite une société de conseil spécialisée dans le développement de sites web et d'applications mobiles,<br>
on vous confie une mission, la création d'un prototype de site web dynamique pour un nouveau client, l'entreprise FISHEYES-photographes indépendants.<br>
Les meilleurs travaux des photographes doivent être présentés.<br>
L'accent devant être mis sur l'accessibilité du site.<br>

II. Éléments fournis :<br>

Notes de réunion, maquettes et repository Git Hub du développeur précédent.<br>

III. Livrables attendus :<br>

Repository forqué (le projet est dans un seul dossier).<br>
Les codes HTML, CSS et Javascript sont dans des fichiers separés.<br>
Page d'accueil : Liste de tous les photographes. Pour chacun doit apparaitre nom, slogan, localisation, prix/heure et une image miniature cliquable redirigeant vers ses travaux.<br>
Le contenu de la page des photographes est généré de manière dynamique en fonction du photographe et affiche une galerie des médias du photographe (photos et vidéos) via des miniatures.<br>
Chaque média comprend un titre et un nombre de likes cliquable et incrémentable.<br>
Le nombre de likes total d’un photographe doit correspondre à la somme des likes de chacun de ses médias.<br>
Les médias peuvent être triés par popularité, par date ou par titre.<br>
Lightbox : ouverture du média suite au clic sur sa miniature.<br>
La fenêtre est fermable par une croix et des boutons de navigation cliquables permettent de passer d'un élément média à l'autre.Les touches fléchées permettent également de naviguer entre les médias.<br>
Formulaire de contact est accessible via un bouton pour contacter le photographe.<br>
Il s'agit d'une modale comprenant des champs: nom,prénom,email et un message. Le contenu des champs doit apparaitre dans les logs de la console quand le formulaire est valide.<br>
Accéssibilité : Utilisation des éléments HTML "sémantiques", ajout des attributs ARIA pour les éléments , les images présentent des attributs “alt”.<br>
Toute la gestion des événements (par exemple, les clics et les pressions au clavier) doit être configurée (utilisez KeyboardEvent.key ou KeyboardEvent.code.).<br>
Contraintes techniques additionnelles :<br>
Editeur de code utilisé : Visual Studio Code.<br>
Utilisation de ESLint avec les paramètres par défaut.<br>
Utilisation d'une version ES6 ou supérieure de Javascript sans emploi de fonctionnalités obsolètes.<br>
Pas d'utilisation de framework/librairie JS autorisé.<br>
Le code doit être lisible (les noms des variables et fonctions sont parlants) et commenté.<br>
Le code doit passer les tests AChecker sans “known issue” (afin qu'il soit conforme aux WCAG).<br>
Autres Informations :<br>
Le site n'a pas besoin d'être responsive en mobile.

