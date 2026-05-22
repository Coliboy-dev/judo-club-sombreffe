# Template Club Sportif — Guide de personnalisation

Ce projet est un template réutilisable pour des sites de clubs sportifs.
Pour adapter ce site à un nouveau client, modifier **uniquement** les fichiers listés ci-dessous.

---

## Fichiers à modifier pour un nouveau client

### 1. `src/data/config.ts` — Configuration principale *(obligatoire)*

Le fichier central du template. Contient toutes les informations du club.

| Champ | Description | Exemple |
|---|---|---|
| `name` | Nom complet du club | `"Karate Club Lyon"` |
| `shortName` | Nom court | `"KC Lyon"` |
| `shortInitials` | Initiales (logo) | `"KC"` |
| `tagline` | Slogan | `"L'art martial au cœur de Lyon"` |
| `description` | Description courte (SEO + hero) | texte libre |
| `sport` | Discipline | `"Karaté"` |
| `region` | Région | `"Auvergne-Rhône-Alpes"` |
| `country` | Pays | `"France"` |
| `heroLines` | 3 mots du titre héro — la ligne 2 est en couleur accent | `["Karate", "Club", "Lyon"]` |
| `siteUrl` | URL du site sans slash final | `"https://karateclublyon.fr"` |
| `address` | Adresse complète | `"12 rue de la Paix, 69001 Lyon"` |
| `addressStreet` | Rue | `"12 rue de la Paix"` |
| `addressCity` | Ville | `"Lyon"` |
| `addressPostalCode` | Code postal | `"69001"` |
| `addressCountry` | Code pays ISO | `"FR"` |
| `phone` | Téléphone | `"+33 6 00 00 00 00"` |
| `email` | Email du club | `"contact@karateclublyon.fr"` |
| `dojoName` | Nom du lieu | `"Dojo municipal de Lyon"` |
| `dojoAccess` | Infos d'accès | texte libre |
| `mapsUrl` | Lien Google Maps | URL |
| `scheduleDisplay.compact` | Horaires résumés (page Le Club) | tableau de strings |
| `scheduleDisplay.detailed` | Horaires détaillés (page Contact) | tableau de strings |
| `facebook` | URL page Facebook | URL ou `null` |
| `facebookLabel` | Texte du lien Facebook | `"Karate Club Lyon sur Facebook"` |
| `facebookFollowers` | Nombre d'abonnés affiché | `"1 200 abonnés"` |
| `instagram` | URL Instagram | URL ou `null` |
| `founded` | Année de fondation | `"2005"` |
| `members` | Nombre approximatif de membres | `45` |
| `contactPersonName` | Prénom de la personne contact | `"Marie"` |
| `emailFrom` | Email expéditeur formulaire (votre domaine) | `"contact@votredomaine.com"` |
| `colors.primary` | Couleur principale | `"#1B3A6B"` |
| `colors.accent` | Couleur accent | `"#E63946"` |

### 2. `src/styles/theme.css` — Couleurs et typographie *(obligatoire)*

Mettre à jour les variables `--color-primary` et `--color-accent` (et leurs variantes) pour
correspondre aux valeurs `colors.*` dans `config.ts`.

```css
--color-primary: #1B3A6B;
--color-primary-light: #2D5499;
--color-primary-dark: #0F2347;
--color-accent: #E63946;
--color-accent-light: #FF6B6B;
--color-accent-dark: #C1121F;
```

### 3. `src/data/courses.ts` — Cours et FAQ *(obligatoire)*

Remplacer les cours, horaires et tarifs par ceux du nouveau club.
Mettre à jour `scheduleDisplay` dans `config.ts` pour rester synchronisé.

### 4. `src/data/club.ts` — Équipe, valeurs, histoire *(obligatoire)*

Remplacer :
- `coaches` : l'équipe d'encadrement
- `clubValues` : les valeurs du club (icônes disponibles : `HandshakeIcon`, `ShieldIcon`, `HeartIcon`, `TrendingUpIcon`)
- `clubHistory` : l'histoire du club (texte libre, paragraphes séparés par une ligne vide)

### 5. `src/data/news.ts` — Actualités *(obligatoire)*

Remplacer les actualités par celles du nouveau club.

### 6. `src/data/seo.ts` — Métadonnées SEO *(généré automatiquement)*

Ce fichier se génère à partir de `config.ts`. Pas besoin de le modifier si `config.ts` est bien rempli.

### 7. `src/data/testimonials.ts` — Témoignages *(optionnel)*

Ajouter des témoignages si nécessaire.

---

## Ordre recommandé des modifications

1. `src/styles/theme.css` — couleurs
2. `src/data/config.ts` — toutes les infos du club
3. `src/data/courses.ts` — cours, horaires, tarifs, FAQ
4. `src/data/club.ts` — équipe, valeurs, histoire
5. `src/data/news.ts` — actualités
6. `src/data/testimonials.ts` — témoignages (si activés)

---

## Variables obligatoires vs optionnelles

### Obligatoires (le site ne fonctionnera pas sans)
- `name`, `shortName`, `shortInitials`
- `sport`, `siteUrl`
- `address`, `addressStreet`, `addressCity`, `addressPostalCode`, `addressCountry`
- `phone`, `email`
- `heroLines` (exactement 3 éléments)
- `colors.primary`, `colors.accent`
- `emailFrom`

### Optionnelles (valeur `null` si non applicable)
- `instagram`
- `facebook`, `facebookLabel`, `facebookFollowers`
- `tagline`, `dojoName`, `dojoAccess`, `mapsUrl`

---

## Variables d'environnement requises

Créer un fichier `.env.local` à la racine :

```
RESEND_API_KEY=re_xxxxx          # Clé API Resend pour l'envoi d'emails
CONTACT_EMAIL=email@club.fr      # Surcharge l'email de réception (optionnel)
```
