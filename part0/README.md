# Partie 0 — Introduction aux applications Web

Exercices 0.1 à 0.6. Les diagrammes sont en syntaxe Mermaid, rendue nativement par GitHub.

| Exercice | Contenu | Statut |
| --- | --- | --- |
| 0.1 | [Bases du HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics) — tutoriel Mozilla | lu (non soumis) |
| 0.2 | [Bases du CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics) — tutoriel Mozilla | lu (non soumis) |
| 0.3 | [Votre premier formulaire HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form) — tutoriel Mozilla | lu (non soumis) |
| 0.4 | Diagramme : création d'une nouvelle note sur `/notes` (soumission classique) | [0.4.md](0.4.md) |
| 0.5 | Diagramme : chargement de la version application monopage `/spa` | [0.5.md](0.5.md) |
| 0.6 | Diagramme : création d'une nouvelle note dans la version SPA | [0.6.md](0.6.md) |

## Les trois diagrams en un coup d'œil

**0.4 — application traditionnelle** : 5 requêtes HTTP pour une note.
`POST /new_note` → `302` + `Location: /notes` → rechargement complet → `GET /notes`, `GET /main.css`,
`GET /main.js`, `GET /data.json`. Toute la logique est côté serveur.

**0.5 — application monopage** : 4 requêtes HTTP au chargement.
Le HTML reçu est une coquille (formulaire sans `action` ni `method`) ; c'est `spa.js` qui récupère
`/data.json` et fabrique la liste via l'API DOM. Aucune navigation.

**0.6 — création d'une note en SPA** : 1 seule requête HTTP.
`form.onsubmit` appelle `e.preventDefault()`, pousse la note en mémoire locale, redessine le `<ul>`,
puis envoie `POST /new_note_spa` en `application/json`. Le serveur répond `201` sans redirection :
la note s'affiche à l'écran avant d'être confirmée par le serveur.
