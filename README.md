# 📚 LireMonde

Projet frontend développé pour la plateforme LireMonde.

## 🎯 Objectif

Créer une plateforme interactive de gestion de livres avec :

- Affichage dynamique des livres
- Recherche en temps réel
- Filtrage par genre
- Gestion de la liste “À lire”
- Modale de détails
- Dashboard Admin CRUD

---

# 🛠 Technologies utilisées

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- JSON Server
- Fetch API

---

# 📁 Structure du projet

```bash
LireMonde/
│
├── index.html
├── admin.html
│
├── style.css
├── script.js
│
├── db.json
│
└── images/
    ├── book1.jpg
    ├── book2.jpg
    ├── book3.jpg
    └── ...
```

---

# 🚀 Installation

## 1. Installer JSON Server

```bash
npm install -g json-server
```

## 2. Lancer le serveur

```bash
json-server --watch db.json
```

Serveur disponible sur :

```bash
http://localhost:3000
```

---

# 📦 API utilisée

## Récupérer tous les livres

```http
GET /livres
```

## Récupérer un livre

```http
GET /livres/:id
```

## Ajouter un livre

```http
POST /livres
```

## Modifier un livre

```http
PUT /livres/:id
```

ou

```http
PATCH /livres/:id
```

## Supprimer un livre

```http
DELETE /livres/:id
```

---

# 📚 Structure des données

```json
{
  "id": 1,
  "titre": "1984",
  "auteur": "George Orwell",
  "genre": "Science-fiction",
  "description": "Roman dystopique",
  "couverture": "image.jpg",
  "aLire": false
}
```

---

# ✅ Fonctionnalités

## Accueil

- Affichage dynamique des livres
- Recherche en temps réel
- Filtre par genre
- Modale détails
- Ajouter / retirer de “À lire”

## Liste “À lire”

- Affichage des favoris
- Suppression instantanée

## Admin

- Ajouter un livre
- Modifier un livre
- Supprimer un livre
- Mise à jour automatique

---

# ⚙️ Fonctionnalités JavaScript

- async / await
- try / catch
- fetch API
- DOM dynamique
- CRUD complet
- Gestion des erreurs réseau

---

# 👨‍💻 Auteur

Projet réalisé par Dounia El Ghazi.