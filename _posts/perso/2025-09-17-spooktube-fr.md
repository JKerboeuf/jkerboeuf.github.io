---
title: Site web Spööktube
ref: perso-spooktube
layout: post
category: project
lang: fr
description: Un petit site web privé entre amis imitant celui venant du jeu Content Warning
image: "https://raw.githubusercontent.com/JKerboeuf/jkerboeuf.github.io/refs/heads/master/assets/img/posts/spooktube-icon.webp"
tags:
- Web
- PHP
- MySQL
- HTML/CSS
- Javascript
---

## Description

Un petit site privé pour moi et mes amis que j'ai fait pour pouvoir poster, interagir et revoir nos meilleurs vidéos faites sur le jeu Content Warning.  
Le site bien sur internet mais n'est accessible que par moi et mes amis auquel j'ai manuellement créé des identifiants, afin de n'avoir aucun soucis de confidentialités.  
Le site permet aux utilisateurs de publier des vidéos, commenter, donner une note, et enregistrer des vidéos favorites, il est aussi possible de rechercher des videos par leur nom ou les joueurs présent sur les videos.  
Il est possible aussi pour l'auteur d'une vidéo de modifier les informations de la vidéo. Les commentaires peuvent aussi contenir un time code, cliquable qui fera sauter la vidéo sur le time code du commentaire.

## Description technique

L'application web est écrite en **php**, et exploite une base de données **MySQL**.  
le style du site est fait grâce à **Bootstrap** ainsi que **Bootstrap Icons**.  
Il contient aussi une vérification de vidéos dupliquées, pour éviter à l'upload de laisser passer une même vidéo plusieurs fois, et ce, même venant d'utilisateurs différents.

## Captures d'écran

La page d’accueil :
![Spooktube homepage screenshot](https://i.imgur.com/b9qVUq5.png)

La page d'une vidéo :
![Spooktube video page screenshot](https://i.imgur.com/drUhLfg.png)

Une vidéo dupliquée détectée avant l'upload :
![Spooktube duplicate finding screenshot](https://i.imgur.com/tTpZOPt.png)
