# Utilisation de la Police Policy Brief

## Vue d'ensemble

La police **Policy Brief** (basée sur Poppins) a été ajoutée au projet CAPEC pour améliorer la lisibilité et l'aspect professionnel du site web.

## Configuration

La police a été configurée dans les fichiers suivants :

- `app/layout.tsx` : Import et configuration de la police Poppins depuis Google Fonts
- `tailwind.config.ts` : Configuration des classes Tailwind pour la police
- `app/globals.css` : Application de la police par défaut et classes utilitaires

## Classes CSS Disponibles

### Classes Tailwind
- `font-poppins` : Utilise la police Poppins
- `font-policy-brief` : Alias pour la police Policy Brief (même que Poppins)

### Classes CSS personnalisées
- `.font-policy-brief` : Classe utilitaire pour appliquer la police

## Utilisation

### 1. Police par défaut
La police Policy Brief est maintenant appliquée par défaut à tout le contenu du site.

### 2. Application spécifique
Pour appliquer la police à des éléments spécifiques, utilisez les classes suivantes :

```jsx
// Avec Tailwind
<h1 className="font-policy-brief text-2xl font-bold">
  Titre avec Policy Brief
</h1>

// Avec CSS personnalisé
<h1 className="font-policy-brief text-2xl font-bold">
  Titre avec Policy Brief
</h1>
```

### 3. Exemples d'utilisation

```jsx
// Titres principaux
<h1 className="font-policy-brief text-3xl font-bold">
  Titre Principal
</h1>

// Sous-titres
<h2 className="font-policy-brief text-xl font-semibold">
  Sous-titre
</h2>

// Navigation
<nav className="font-policy-brief">
  <a href="/" className="font-medium">Accueil</a>
</nav>

// Boutons
<button className="font-policy-brief font-semibold">
  Cliquez ici
</button>
```

## Poids de police disponibles

La police Poppins est configurée avec tous les poids disponibles :
- `font-thin` (100)
- `font-extralight` (200)
- `font-light` (300)
- `font-normal` (400)
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)
- `font-extrabold` (800)
- `font-black` (900)

## Exemple complet

```jsx
<div className="font-policy-brief">
  <h1 className="text-4xl font-bold mb-4">
    Bienvenue à la CAPEC
  </h1>
  <p className="text-lg font-medium mb-2">
    Cellule d'Analyse de Politiques Économiques
  </p>
  <p className="text-base font-normal">
    Centre de recherche et d'analyse dédié à l'étude des politiques économiques.
  </p>
</div>
```

## Maintenance

Pour modifier la police ou ajouter de nouvelles polices :

1. Modifiez l'import dans `app/layout.tsx`
2. Mettez à jour la configuration dans `tailwind.config.ts`
3. Ajustez les styles dans `app/globals.css`

## Notes importantes

- La police est chargée de manière optimisée via Google Fonts
- Le fallback utilise `system-ui` et `sans-serif` pour une meilleure compatibilité
- La police est appliquée de manière responsive et accessible 