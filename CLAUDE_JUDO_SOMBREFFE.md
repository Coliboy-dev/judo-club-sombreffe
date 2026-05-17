# CLAUDE.md — Judo Club Sombreffe
**Projet** : `judo-sombreffe`
**Rôle de Claude Code** : Développeur senior full-stack, seul responsable de l'implémentation. Tu travailles pour Start'OnLab, agence digitale spécialisée dans les sites sportifs locaux. Ce site est une démonstration commerciale de haute qualité : il doit impressionner un président de club en 30 secondes.
**Dernière mise à jour** : 14 mai 2026

---

## 1. Contexte projet

Site vitrine pour le **Judo Club Sombreffe** (Belgique, province de Namur).

- Club familial, ~60 membres, fondé et dirigé par Jean-Louis Allard
- Lieu d'entraînement : Complexe sportif, Allée de Château-Chinon 6, 5140 Sombreffe
- Actuellement : aucun site web dédié, présence uniquement via une page Facebook (569 abonnés) et une fiche annuaire sur sombreffe.be
- Ce site est produit par Start'OnLab à titre de démonstration gratuite, avec vocation à devenir un site de référence portfolio

**Objectif business** : convaincre Jean-Louis Allard de la valeur d'un site professionnel, puis ouvrir une conversation sur le site du complexe sportif communal.

**Objectif technique** : produire un site Next.js propre, rapide, accessible et réutilisable comme template Start'OnLab Sport.

---

## 2. Stack technique

```
Next.js 15 (App Router)
TypeScript strict
Tailwind CSS 3.x
Lucide React (icônes)
react-hook-form + zod (formulaire de contact)
date-fns (formatage dates si nécessaire)
clsx (classes conditionnelles)
```

**Hébergement** : Vercel (prototype/démo)
**Repo** : repo Git séparé du projet Start'OnLab Sport principal
**Pas de base de données en V1** : toutes les données sont en fichiers TypeScript typés dans `/src/data/`

---

## 3. Règles absolues

### Ne jamais faire
- Modifier l'architecture de dossiers sans validation
- Ajouter des dépendances non listées sans signaler pourquoi
- Créer de la logique d'authentification (hors scope V1)
- Créer un espace admin ou back-office (hors scope V1)
- Utiliser des photos ou logos réels sans mention explicite dans les données
- Écrire du contenu client en dur dans les composants (tout le contenu vient de `/src/data/`)
- Sur-commenter le code (commenter les décisions, pas l'évidence)

### Toujours faire
- Vérifier l'état du repo avant toute modification (`git status`)
- Travailler par étapes courtes avec un point de contrôle entre chaque
- Nommer les fichiers en kebab-case, les composants en PascalCase
- Typer toutes les données et props TypeScript (pas de `any`)
- Tester le responsive à chaque composant créé (mobile 375px, tablette 768px, desktop 1280px)
- Respecter WCAG AA : contraste ≥ 4.5:1, focus visible, aria-labels sur les icônes interactives
- Séparer strictement UI générique (`/src/components/ui/`) et composants métier (`/src/components/business/`)

---

## 4. Structure de dossiers

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Layout global (Header + Footer)
│   │   ├── page.tsx                # Accueil
│   │   ├── le-club/
│   │   │   └── page.tsx
│   │   ├── nos-cours/
│   │   │   └── page.tsx
│   │   ├── actualites/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/                     # Composants génériques (aucune logique métier)
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Section.tsx
│   │   │
│   │   ├── business/               # Composants métier judo/sport
│   │   │   ├── CourseCard.tsx
│   │   │   ├── ScheduleTable.tsx
│   │   │   ├── NewsCard.tsx
│   │   │   └── ContactForm.tsx
│   │   │
│   │   └── layout/
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       └── Nav.tsx
│   │
│   ├── data/                       # Toutes les données mockées, typées
│   │   ├── club.ts                 # Infos générales du club
│   │   ├── courses.ts              # Cours et horaires
│   │   ├── news.ts                 # Actualités et résultats
│   │   └── config.ts               # Config site (nom, couleurs, meta)
│   │
│   ├── types/                      # Types TypeScript partagés
│   │   ├── club.ts
│   │   ├── course.ts
│   │   └── news.ts
│   │
│   └── lib/
│       ├── utils.ts                # Helpers génériques (cn, formatDate...)
│       └── seo.ts                  # Helpers métadonnées SEO
│
├── public/
│   ├── images/
│   │   └── placeholders/           # Images placeholder propres (pas de Lorem Picsum)
│   └── favicon.ico
│
├── CLAUDE.md                       # Ce fichier
└── README.md
```

---

## 5. Design system — tokens judo

### Identité visuelle
Le judo est un art martial japonais avec une esthétique forte : rigueur, discipline, respect. Le design doit le refléter sans tomber dans le cliché "drapeau japonais".

**Direction artistique** : sobre, fort, lisible. Typographie display condensée et impactante. Palette contrastée bleu nuit + blanc + accent rouge/bordeaux discret. Pas de gradients fluo, pas d'illustrations cartoon, pas de fonds complexes.

### Couleurs
```css
:root {
  --color-primary: #1B2A4A;        /* Bleu nuit — dominante */
  --color-primary-light: #2D4270;  /* Bleu nuit clair — hover, variantes */
  --color-accent: #C0392B;         /* Rouge judogi — accent fort, utilisé avec parcimonie */
  --color-accent-light: #E74C3C;   /* Rouge clair — hover accent */
  --color-neutral-0: #FFFFFF;
  --color-neutral-50: #F8F9FA;
  --color-neutral-100: #F1F3F5;
  --color-neutral-600: #6C757D;
  --color-neutral-700: #495057;
  --color-neutral-900: #212529;
  --color-neutral-950: #0D1117;
}
```

### Typographie
```
Display : Bebas Neue (Google Fonts) — titres, hero, sections
Body : Inter (Google Fonts) — texte courant, descriptions
```

Échelle :
```
display-hero  : 4rem mobile / 6rem desktop
display-h1    : 2.5rem / 3.5rem
display-h2    : 2rem / 2.75rem
body-lg       : 1.125rem
body-base     : 1rem
body-sm       : 0.875rem
```

### Espacement
Multiples de 4px. Utiliser les classes Tailwind standard (p-4 = 16px, p-8 = 32px, etc.)

### Breakpoints
```
sm  : 640px
md  : 768px
lg  : 1024px
xl  : 1280px
```

---

## 6. Modèle de données

### `src/data/config.ts`
```typescript
export const siteConfig = {
  name: "Judo Club Sombreffe",
  shortName: "JC Sombreffe",
  tagline: "L'art martial au cœur de Sombreffe",
  description: "Club de judo familial pratiqué avec bienveillance dans le respect des valeurs des arts martiaux. Ouvert aux enfants dès 5 ans et aux adultes de tous niveaux.",
  address: "Allée de Château-Chinon 6, 5140 Sombreffe",
  phone: "À compléter",
  email: "À compléter",
  facebook: "https://www.facebook.com/p/Judo-Club-Sombreffe-100063579276894/",
  instagram: null,
  founded: "À compléter",
  members: 60,
  colors: {
    primary: "#1B2A4A",
    accent: "#C0392B",
  }
}
```

### `src/types/course.ts`
```typescript
export type AgeGroup = "U7" | "U9" | "U11" | "U13" | "U15" | "adultes" | "tous"
export type Level = "débutant" | "intermédiaire" | "avancé" | "tous niveaux"
export type DayOfWeek = "lundi" | "mardi" | "mercredi" | "jeudi" | "vendredi" | "samedi" | "dimanche"

export interface Schedule {
  day: DayOfWeek
  startTime: string   // "17:30"
  endTime: string     // "18:30"
  ageGroup: AgeGroup
  level: Level
  notes?: string
}

export interface Course {
  id: string
  name: string
  description: string
  ageMin: number
  ageMax: number | null   // null = pas de max
  schedules: Schedule[]
  price?: string          // "À confirmer"
  trialAvailable: boolean
}
```

### `src/types/news.ts`
```typescript
export type NewsCategory = "résultat" | "événement" | "annonce" | "stage"

export interface NewsItem {
  id: string
  title: string
  date: string            // ISO 8601
  category: NewsCategory
  excerpt: string
  content?: string
  imageUrl?: string
  competitionResults?: {
    judoka: string
    result: string
    competition: string
  }[]
}
```

### `src/data/courses.ts` — données initiales
```typescript
// Basé sur les informations publiques disponibles
// Vendredi : horaires à confirmer auprès du club
export const courses: Course[] = [
  {
    id: "enfants-mercredi",
    name: "Judo Enfants",
    description: "Cours adaptés aux enfants dans un environnement bienveillant. Apprentissage des valeurs du judo : respect, discipline, entraide.",
    ageMin: 5,
    ageMax: 12,
    schedules: [
      {
        day: "mercredi",
        startTime: "17:30",
        endTime: "18:30",
        ageGroup: "U13",
        level: "tous niveaux"
      }
    ],
    trialAvailable: true
  },
  {
    id: "tous-mercredi",
    name: "Judo Tous Niveaux",
    description: "Cours ouvert à tous les niveaux, enfants à partir de 13 ans et adultes.",
    ageMin: 13,
    ageMax: null,
    schedules: [
      {
        day: "mercredi",
        startTime: "18:30",
        endTime: "20:00",
        ageGroup: "tous",
        level: "tous niveaux"
      }
    ],
    trialAvailable: true
  },
  {
    id: "vendredi",
    name: "Cours du Vendredi",
    description: "À compléter après confirmation des horaires avec le club.",
    ageMin: 5,
    ageMax: null,
    schedules: [
      {
        day: "vendredi",
        startTime: "À confirmer",
        endTime: "À confirmer",
        ageGroup: "tous",
        level: "tous niveaux"
      }
    ],
    trialAvailable: true
  }
]
```

---

## 7. Pages — contenu et objectifs

### Page 1 : Accueil (`/`)
**Objectif** : comprendre le club en 10 secondes, trouver les horaires en 30 secondes, contacter en 60 secondes.

Sections dans l'ordre :
1. **Hero** — Titre fort (Bebas Neue), sous-titre valeurs, 2 CTA : "Voir les cours" + "Nous contacter", image de fond tatami (placeholder sombre avec overlay)
2. **Chiffres clés** — 3 blocs : nombre de membres, années d'existence (à compléter), disciplines pratiquées
3. **Nos cours en un coup d'œil** — tableau horaires simplifié, lien vers page Nos cours
4. **Actualités récentes** — 3 dernières news/résultats
5. **Rejoindre le club** — bloc CTA centré, texte rassurant sur le cours d'essai gratuit, bouton contact

### Page 2 : Le Club (`/le-club`)
**Objectif** : créer la confiance, raconter l'histoire, présenter l'équipe.

Sections :
1. **Notre histoire** — texte éditorial, valeurs du club
2. **Notre équipe** — Jean-Louis Allard (président/responsable), autres coachs si données disponibles. Utiliser des placeholders propres pour les photos.
3. **Nos valeurs** — 4 valeurs judo : Respect, Discipline, Bienveillance, Dépassement de soi
4. **Notre dojo** — adresse, carte statique ou iframe Google Maps, accès, parking

### Page 3 : Nos cours (`/nos-cours`)
**Objectif** : permettre à un parent ou un adulte de trouver son cours immédiatement.

Sections :
1. **Tableau des cours** — cards par cours avec horaires, âge, niveau, prix (si disponible)
2. **Essai gratuit** — bloc mis en avant, formulaire simple (nom, email, téléphone, message)
3. **FAQ** — 4-5 questions fréquentes : âge minimum, équipement nécessaire, tarifs, licences

### Page 4 : Actualités (`/actualites`)
**Objectif** : montrer que le club est actif, vivant, compétitif.

Sections :
1. **Liste des actualités** — cards triées par date, filtre par catégorie (résultats, événements, annonces)
2. Données mockées réalistes : 4-5 news avec résultats de compétitions récents (inspirés des posts Facebook publics)

### Page 5 : Contact (`/contact`)
**Objectif** : simplifier au maximum la prise de contact.

Sections :
1. **Formulaire de contact** — react-hook-form + zod, champs : nom, email, téléphone (optionnel), message, case "je suis intéressé par un cours d'essai"
2. **Informations pratiques** — adresse, horaires, lien Facebook
3. **Accès** — carte, transport, parking

---

## 8. SEO

Chaque page doit avoir ses métadonnées via `generateMetadata()` de Next.js :

```typescript
// Pattern à appliquer sur chaque page
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Judo Club Sombreffe | Arts martiaux à Sombreffe",
    description: "Club de judo familial à Sombreffe. Cours enfants et adultes, tous niveaux. Complexe sportif, Allée de Château-Chinon.",
    openGraph: {
      type: "website",
      locale: "fr_BE",
    }
  }
}
```

Mots-clés cibles : `judo sombreffe`, `club judo sombreffe`, `cours judo enfants sombreffe`, `arts martiaux sombreffe`, `judo province namur`

---

## 9. Accessibilité — critères minimaux

- Tous les liens et boutons ont un texte accessible (pas d'icône seule sans aria-label)
- Contraste texte/fond ≥ 4.5:1 pour le texte normal
- Focus visible sur tous les éléments interactifs (ne jamais supprimer outline sans alternative)
- Structure H1 → H2 → H3 logique sur chaque page (un seul H1 par page)
- Les images ont toutes un attribut `alt` (vide `alt=""` pour les images décoratives)
- Le formulaire de contact a des labels associés à chaque champ

---

## 10. Roadmap de développement

### Sprint 0 — Setup (1 jour)
- [ ] `create-next-app` avec TypeScript strict
- [ ] Configuration Tailwind + tokens couleurs + Google Fonts (Bebas Neue + Inter)
- [ ] Installation dépendances : lucide-react, react-hook-form, zod, clsx, date-fns
- [ ] Création de la structure de dossiers complète
- [ ] Écriture de tous les types TypeScript
- [ ] Écriture de toutes les données mockées
- [ ] Commit : `chore: project setup`

### Sprint 1 — Layout et composants UI (1 jour)
- [ ] Header (logo texte + nav mobile hamburger + nav desktop)
- [ ] Footer (infos contact, liens, mention Start'OnLab)
- [ ] Composants UI : Button, Badge, Card, Section
- [ ] Page showcase interne `/showcase` pour vérification visuelle
- [ ] Commit : `feat: layout and UI components`

### Sprint 2 — Page Accueil (1 jour)
- [ ] Hero section
- [ ] Chiffres clés
- [ ] Aperçu horaires
- [ ] Actualités récentes (3 cards)
- [ ] CTA Rejoindre
- [ ] Vérification responsive mobile/tablette/desktop
- [ ] Commit : `feat: homepage`

### Sprint 3 — Pages internes (2 jours)
- [ ] Page Le Club
- [ ] Page Nos Cours + formulaire essai
- [ ] Page Actualités
- [ ] Page Contact + formulaire complet
- [ ] Commit : `feat: inner pages`

### Sprint 4 — SEO, accessibilité, polish (1 jour)
- [ ] generateMetadata() sur toutes les pages
- [ ] Audit accessibilité basique
- [ ] Vérification contraste
- [ ] Optimisation images (next/image)
- [ ] Build de production sans erreur
- [ ] Commit : `feat: seo and accessibility`

### Sprint 5 — Déploiement démo (0,5 jour)
- [ ] Déploiement Vercel
- [ ] Test sur vrai mobile
- [ ] URL de démo propre
- [ ] Commit : `chore: production deployment`

---

## 11. Points de contrôle après chaque sprint

Avant de passer au sprint suivant, vérifier :
```bash
npm run build          # 0 erreur TypeScript, 0 erreur de build
npm run lint           # 0 warning non résolu
```

Et vérifier visuellement :
- Mobile 375px : aucun overflow horizontal, texte lisible, CTA accessibles
- Tablette 768px : mise en page correcte
- Desktop 1280px : aucun élément qui s'étire anormalement

---

## 12. Ce que ce projet doit démontrer (pour portfolio Start'OnLab)

1. Capacité à produire un site club sportif local professionnel, sobre et efficace
2. Architecture Next.js propre et réutilisable
3. Design system cohérent et identitaire
4. Attention aux détails : SEO, accessibilité, responsive, performance
5. Séparation claire données / présentation → facilité de mise à jour pour le client

**Note** : ce site sera présenté à Jean-Louis Allard (président JC Sombreffe) comme démonstration de ce que Start'OnLab peut produire. Il doit provoquer la réaction : *"C'est exactement ce qu'il nous faudrait."*

---

## 13. Données à compléter avant la démo

Les éléments suivants sont marqués "À compléter" dans les données mockées et devront être confirmés auprès du club :

- [ ] Email et téléphone du club
- [ ] Horaires précis du cours du vendredi
- [ ] Tarifs des cours et de la licence
- [ ] Année de fondation du club
- [ ] Noms des autres coachs si présents
- [ ] Photos du dojo (ou confirmation d'utilisation des photos Facebook)
- [ ] Logo officiel du club si existant

En attendant, utiliser des placeholders propres et cohérents. Ne jamais laisser un "Lorem ipsum" visible dans la démo.

---

*Document interne Start'OnLab Sport — version 1.0 — 14 mai 2026*
*À mettre à jour après chaque décision structurante.*
