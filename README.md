# Full Stack Open — Université d'Helsinki

Dépôt de soumission des exercices du cours.

## Comment c'est organisé

Chaque partie du cours = un dossier `part0`, `part1`, etc.
Chaque application = un dossier à l'intérieur (`courseinfo`, `unicafe`, `anecdotes`...).

```
part0          3 diagrammes (exercices 0.4, 0.5, 0.6)
part1          3 applications React
  courseinfo     Header / Part / Content / Total          → 1.1 à 1.5
  unicafe        useState, Button, StatisticLine, tableau   → 1.6 à 1.11
  anecdotes      useReducer, vote, anecdote la plus votée   → 1.12 à 1.14
part2          à faire
part3          à faire
part4          à faire
part5          à faire
```

## Le dossier `node_modules`

C'est **normal** qu'il soit immense (60 Mo par application). Il contient les bibliothèques
téléchargées par `npm install`. Il n'est **jamais** envoyé sur GitHub (c'est le rôle du
fichier `.gitignore`) et il peut être supprimé à tout moment sans perdre ton code.

Les 2 seuls fichiers qui comptent dans une application :

- `src/App.jsx` — tout ton code
- `package.json` — la liste des dépendances

Le reste (`index.html`, `vite.config.js`, `public/`, `dist/`) est de la configuration
générée automatiquement par Vite.

## Faire tourner une application

```bash
cd part1/unicafe
npm install     # une seule fois, crée node_modules
npm run dev     # puis ouvre l'adresse affichée dans le navigateur
```

## État d'avancement

| Partie | Exercices | État |
| --- | --- | --- |
| 0 | 0.1 – 0.6 | terminée |
| 1 | 1.1 – 1.14 | terminée |
| 2 | 2.1 – 2.20 | à faire |
| 3 | 3.1 – 3.22 | à faire |
| 4 | 4.1 – 4.8 | à faire |
| 5 | 5.1 – 5.13 | à faire |
