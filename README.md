# Projet GraphQL - Rick & Morty 🚀

_Ce projet a pour but d'apprendre et de pratiquer l'utilisation de **GraphQL** avec **React** et **Apollo Client** en se connectant à l'API publique de **Rick et Morty**._

## Description 📜

Le projet permet de récupérer la liste des personnages de la série **Rick & Morty** à l'aide de **GraphQL** et de l'API officielle disponible sur [rickandmortyapi.com](https://rickandmortyapi.com/). Une fois la liste récupérée, il est possible cliquer sur un personnage pour afficher ses détails (nom, statut, espèce, genre).

## Fonctionnalités ✨

- Récupération de la liste complète des personnages via une requête GraphQL.
- Affichage dynamique des informations de chaque personnage lorsque l'utilisateur clique sur un élément de la liste.
- Utilisation d'Apollo Client pour gérer les requêtes GraphQL dans l'application React.

## Technologies utilisées 🛠️

- **React** : Bibliothèque JavaScript pour la création d'interfaces utilisateur.
- **GraphQL** : Langage de requête pour interagir avec l'API.
- **Apollo Client** : Bibliothèque pour gérer les requêtes GraphQL côté client.
  
## Prérequis ⚙️

- **Node.js**
- **npm**

## Installation & lancement 🏗️

1. Clone le dépôt :

   ```bash
   git clone https://github.com/armanceau/rick-morty-graphql.git
   ```
2. installer les dépendances :

   ```bash
   npm install
   ```

2. Lancer le projet :

   ```bash
   cd my-app
   npx vite   
   ```
_L'application se trouve : http://localhost:5173/_

## Exemple de requête GraphQL 🔍

```graphql
query {
  characters() {
    results {
      id
      name
      image
    }
  }
}
```

## Aide et documentation 📚
- [Documentation officielle de GraphQL](https://graphql.org/)
- [Apollo Client Docs](https://www.apollographql.com/docs/)
- [API Rick and Morty](https://rickandmortyapi.com/)
    
