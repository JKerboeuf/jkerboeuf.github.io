---
title: Site web Spööktube
ref: perso-spooktube
layout: post
category: project
lang: fr
source: https://github.com/JKerboeuf/SpookTube
description: Un petit site web privé entre amis imitant celui venant du jeu Content Warning
image: "https://raw.githubusercontent.com/JKerboeuf/jkerboeuf.github.io/refs/heads/master/assets/img/posts/spooktube-icon.webp"
tags:
- Web
- PHP
- MySQL
- HTML/CSS
- Javascript
---

## Fonctionnalités

- Accès privé – accessible uniquement aux utilisateurs dont je crée manuellement les comptes.
- Publication vidéo : les utilisateurs peuvent télécharger des clips, ajouter des titres, des descriptions et des lecteurs.
- Interactions : commentez, notez et marquez vos vidéos favorites.
- Recherche : recherchez des vidéos par titre ou par joueurs qui y apparaissent.
- Gestion vidéo : les auteurs peuvent modifier leurs vidéos téléchargées.
- Commentaires codés dans le temps : les commentaires peuvent inclure un horodatage, en cliquant dessus, la vidéo saute à ce moment.
- Détection des doublons : les vidéos envoyées sont vérifiées pour éviter les doublons (même provenant d'utilisateurs différents).

## Pile technologique

- PHP (backend)
- MySQL (database)
- Bootstrap + Bootstrap Icons (style/UI)

## Description

Un petit site privé pour moi et mes amis que j'ai créé pour pouvoir poster, interagir et revoir nos meilleures vidéos réalisées sur le jeu Content Warning.
Le site est sur internet mais n'est accessible que par moi et mes amis auxquels j'ai créé manuellement des identifiants, afin de n'avoir aucun problème de confidentialité.
Le site permet aux utilisateurs de publier des vidéos, de commenter, de donner une note, et de mettre leurs vidéos en favoris, il est également possible de rechercher des vidéos par nom ou par joueurs présents sur les vidéos.
Il est également possible pour l'auteur d'une vidéo de modifier les informations de la vidéo. Les commentaires peuvent également contenir un time code, cliquable qui fera exploser la vidéo sur le Time Code du Commentaire.

## Description technique

L'application web est écrite en PHP, et utilise une base de données MySQL.
Le style du site se fait grâce à Bootstrap ainsi qu'aux Bootstrap Icons.
Il contient également une vérification des vidéos en double, pour éviter de télécharger plusieurs fois la même vidéo, même depuis des utilisateurs différents.

## Captures d'écran

### Page d'accueil

![Capture d'écran de la page d'accueil de Spooktube](https://i.imgur.com/b9qVUq5.png)

### Page vidéo

![Capture d'écran de la page vidéo Spooktube](https://i.imgur.com/drUhLfg.png)

### Détection de doublons

![Capture d'écran de recherche de doublons Spooktube](https://i.imgur.com/tTpZOPt.png)
