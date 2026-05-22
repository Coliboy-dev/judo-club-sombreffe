# Checklist avant livraison

## 1. Vérification des données

- [ ] `src/data/config.ts` — tous les champs obligatoires remplis
- [ ] `src/styles/theme.css` — couleurs mises à jour et cohérentes avec `config.ts`
- [ ] `src/data/courses.ts` — cours, horaires, tarifs, FAQ à jour
- [ ] `src/data/club.ts` — équipe, valeurs, histoire à jour
- [ ] `src/data/news.ts` — actualités réelles (pas les actualités de démonstration)
- [ ] `scheduleDisplay` dans `config.ts` synchronisé avec les horaires de `courses.ts`

## 2. Aucune trace de l'ancien client

```bash
grep -r "Sombreffe\|Judo Club\|judo\.sombreffe\|Allée de Château-Chinon\|judoclubsombreffe" src/ \
  --include="*.ts" --include="*.tsx" \
  | grep -v "src/data/" \
  | grep -v "src/types/"
```
→ Doit retourner **0 résultat**.

## 3. Build propre

```bash
npm run build
```
→ Doit se terminer avec **0 erreur**.

## 4. Vérification visuelle

- [ ] Page d'accueil — hero, stats, horaires, actualités, CTA
- [ ] Page /le-club — histoire, valeurs, équipe, dojo/carte
- [ ] Page /nos-cours — cards, section essai, FAQ
- [ ] Page /actualites — liste des actualités, filtre
- [ ] Page /contact — formulaire, infos pratiques, carte
- [ ] Header — logo et liens de navigation
- [ ] Footer — coordonnées, liens, réseaux sociaux

## 5. Vérification mobile

- [ ] Menu hamburger fonctionnel
- [ ] Hero lisible sur mobile
- [ ] Formulaire de contact utilisable sur mobile
- [ ] Cards cours en colonne sur mobile

## 6. Formulaire de contact

- [ ] Variable `RESEND_API_KEY` configurée
- [ ] Email de réception correct (`email` dans `config.ts` ou `CONTACT_EMAIL` dans `.env`)
- [ ] Test d'envoi réel effectué

## 7. SEO

- [ ] Métadonnées de la home page correctes (title, description)
- [ ] Open Graph image générée avec le bon nom du club
- [ ] Sitemap accessible à `/sitemap.xml`
- [ ] Robots accessible à `/robots.txt`
- [ ] `siteUrl` correspond au domaine de production

## 8. Accessibilité

- [ ] Contraste des couleurs vérifié (WCAG AA minimum)
- [ ] Navigation clavier fonctionnelle
- [ ] Balises `aria-label` correctes (nom du club à jour)
