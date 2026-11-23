# Miloscoffee

# MILO'S COFFEE — CRÉATION DU SITE ONE PAGE

Tu es un développeur frontend senior spécialisé dans les sites web premium, les animations fluides et la reproduction fidèle de maquettes.

**MISSION :** transformer la maquette jointe de Milo's Coffee en un véritable site One Page responsive, fonctionnel et visuellement aussi proche que possible de la référence.

Je joins 8 fichiers :
- 1 image de la maquette complète : référence visuelle ABSOLUE.
- `logo.png` : logo officiel.
- `hero.png` : image publicitaire principale.
- `coffee-beans.png` : photographie des grains de café.
- `americano.png` : produit Americano sur fond transparent.
- `caramel-latte.png` : produit Caramel Latte sur fond transparent.
- `mocha-cream.png` : produit Mocha Cream sur fond transparent.
- `contact-banner.png` : image publicitaire du formulaire.

**IMPORTANT : toutes les images sont déjà créées. Ne génère aucune nouvelle image et n'utilise aucune image provenant d'Unsplash ou d'une bibliothèque externe.**

## 1. Fidélité visuelle

Reproduis la maquette fournie aussi précisément que possible :

- Fond général crème très clair.
- Couleurs marron espresso, chocolat, caramel et crème.
- Même structure, mêmes proportions et même ordre des sections.
- Même disposition des textes, produits et boutons.
- Coins très arrondis sur les grandes sections.
- Typographie sans-serif moderne, épaisse et élégante.
- Espacements généreux et composition premium.
- Aucun ajout de section non présente dans la maquette.

Ne transforme pas cette identité en un template générique de coffee shop.

La maquette est la référence pour le design. Les images séparées sont les ressources à intégrer.

## 2. Header

Reproduis le header de la maquette :

Accueil — Notre univers — LOGO CENTRÉ — Nos cafés — Contact.

Utilise `logo.png`, sans le redessiner.

Les liens doivent faire défiler la page vers leurs sections respectives.

Sur mobile, utiliser une navigation compacte avec un menu accessible.

## 3. Hero

Reproduis le grand bandeau marron foncé aux coins arrondis.

Utilise `hero.png` comme image de fond de cette section.

**Ne rajoute pas une deuxième canette : elle est déjà présente dans l'image.**

Par-dessus, ajoute de vrais éléments HTML :

- Petit indicateur « 01 — Notre signature ».
- Grand titre « Milo's Coffee ».
- Texte « Le café glacé qui réveille vos sens. »
- Bouton « Découvrir la carte ».
- Bouton « Commander ».

Respecte les positions de la maquette, avec la canette au centre et les textes répartis autour.

Le titre doit être en arrière-plan visuel de la canette autant que possible, sans masquer le produit. Utilise les calques CSS si nécessaire.

Les boutons renvoient respectivement aux sections assortiment et contact.

## 4. À propos

Disposition en deux colonnes.

À gauche :

Titre : « À propos ».

Texte principal :
« Milo's Coffee, c'est une pause café moderne, gourmande et rafraîchissante, pensée pour tous les amateurs de café. »

Texte secondaire :
« Des recettes originales, des ingrédients de qualité et une expérience unique à chaque gorgée. »

À droite, reproduis exactement l'organisation des cartes arrondies de la maquette :

- Quatre petites pastilles : Café, Glacé, Gourmand, Original.
- Carte marron : « Recettes rafraîchissantes ».
- Carte photographique utilisant `coffee-beans.png`, avec le texte « Café sélectionné avec soin ».
- Carte crème : « Ingrédients naturels ».
- Carte marron : « 100 % plaisir ».

Utilise des icônes SVG ou Lucide pour les petites illustrations.

## 5. Notre assortiment

Titre centré : « Notre assortiment ».

Trois produits alignés horizontalement sur ordinateur :

**Americano**
Image : `americano.png`
Bouton marron espresso.

**Caramel Latte**
Image : `caramel-latte.png`
Bouton caramel.

**Mocha Cream**
Image : `mocha-cream.png`
Bouton brun clair.

Les PNG doivent être intégrés avec leur transparence conservée.

Respecte les proportions et l'alignement des canettes. Elles doivent avoir une hauteur visuelle cohérente, même si leurs dimensions de fichiers diffèrent.

Chaque bouton doit afficher le nom du produit et une flèche dans un cercle.

Les boutons peuvent ouvrir une petite fiche produit accessible contenant le nom, une description et un bouton vers la section contact. Ne crée pas de fausse boutique ni de paiement.

Ajoute quelques grains de café décoratifs autour du titre si possible avec des éléments graphiques légers.

## 6. Contact / Commander

Reproduis le grand bandeau publicitaire arrondi en bas de page.

Utilise `contact-banner.png` comme image de fond, avec un cadrage proche de la maquette.

**N'ajoute pas de deuxième canette : elle figure déjà dans l'image.**

À gauche :
- Titre « Commandez votre Milo's ».
- Texte « Découvrez nos recettes et trouvez votre café préféré. »

À droite :
- Champ Nom.
- Champ E-mail.
- Champ Message (optionnel).
- Bouton « Envoyer ».

Les champs doivent être de vrais éléments HTML, avec validation.

Comme il s'agit d'un projet conceptuel, ne prétends pas envoyer de véritables commandes. Sans service backend configuré, afficher clairement que le formulaire est une démonstration.

## 7. Footer

Reproduis le footer de la maquette :

- Logo Milo's Coffee.
- Accueil.
- Notre univers.
- Nos cafés.
- Contact.
- Icônes Instagram et TikTok.

Ne crée pas de faux liens vers des comptes réels.

## 8. Animations

Je veux des animations élégantes, discrètes et fluides :

- Apparition douce des textes et sections.
- Léger mouvement au survol des boutons.
- Animation subtile des produits au survol.
- Défilement fluide entre les sections.
- Transitions naturelles, sans effets excessifs.

Utilise CSS et Framer Motion si déjà disponible.

Respecte `prefers-reduced-motion`.

## 9. Responsive

Le site doit être parfaitement utilisable sur ordinateur, tablette et mobile.

Sur mobile :
- Le header devient un menu compact.
- Le hero conserve la canette visible sans couper les éléments importants.
- Les textes se repositionnent pour rester lisibles.
- Les cartes À propos se réorganisent.
- Les trois produits s'affichent verticalement.
- Le formulaire devient une colonne.
- Aucun débordement horizontal.

La version desktop doit rester aussi fidèle que possible à la maquette fournie.

## 10. Contraintes techniques

- React, TypeScript et Tailwind CSS.
- Composants propres et réutilisables.
- Utiliser exclusivement les images jointes pour les visuels photographiques.
- Ne jamais intégrer la capture de la maquette comme une image unique représentant tout le site.
- Les textes, boutons, formulaires et liens doivent être de vrais éléments HTML.
- Images optimisées sans perte de qualité excessive.
- Aucun service externe payant.
- Aucun backend ni base de données nécessaire.
- Aucun faux avis client ni fausses informations commerciales.

## 11. Priorité absolue

La fidélité à la maquette passe avant les fonctionnalités supplémentaires.

Si tu dois faire un compromis, privilégie :
1. La reproduction du design desktop.
2. L'utilisation exacte des images fournies.
3. La mise en page responsive.
4. Les interactions.
5. Les animations secondaires.

**Développe directement le site complet dès cette demande. Ne commence pas par une analyse ou un plan, et ne me demande pas de confirmer chaque étape.**

Résultat attendu : une landing page Milo's Coffee premium, visuellement fidèle à l'image, prête à être mis en ligne.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://miloscoffee.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/796e201b-2732-48be-86de-e61894c7bef8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
