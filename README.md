# SimpleAtlas #

Version : 2.0.0

NodeAtlas Version minimale : 0.23.x ou  sans rien.



## Avant-propos ##

SinpleAtlas est :
- Un exemple de structure JavaScript permettant de délivrer ses fonctions par composant et de les exécuter au chargement ou en retour AJAX sans $(document).ready().
- un exemple de site tournant avec [NodeAtlas](http://haeresis.github.io/NodeAtlas/) en tant que simple serveur web.

**Il fait office d'exemple pour l'article : [Éviter les multiples $(document).ready() dans vos pages web](http://blog.lesieur.name/eviter-les-multiples-jquery-document-ready-dans-vos-pages-web/)**



## Tester l'exemple ##

Pour tester l'exemple, téléchargez les fichiers via `Download Zip`. Après les avoir dézzipés, vous verrez qu'en testant le fichier `site-b.html` —en l'ouvrant directement depuis le dossier— vous ne serez pas capable de réellement avoir un retour AJAX. Il ne sera que simuler car vous lirez le fichier en mode `file://` et non en mode `http://`.

Cela ne gène en rien la compréhension de l'exemple mais si vous voulez le tester avec un serveur web vous pouvez le faire avec [NodeAtlas](http://haeresis.github.io/NodeAtlas/).



## Tester en mode Simple Serveur Web avec NodeAtlas ##

Pour tester l'exemple dans de vrais conditions, il vous faudra installer [NodeAtlas](http://haeresis.github.io/NodeAtlas/) sur votre poste de développement et vous rendre dans le dossier :

```
\> cd </path/to/simple-atlas-directory>/
```

et utilisez la commande :

```
\> node </path/to/>node-atlas/node-atlas.js
```

Les deux pages seront à :

- *http://localhost/site-a.html*
- *http://localhost/site-b.html*

__*Note :*__

*Si vous avez déjà un serveur web sur le port 80, utilisez plutôt :*

```
\> node </path/to/>node-atlas/node-atlas.js --httpPort 7777
```

*Les deux pages seront à :*

- *http://localhost:7777/site-a.html*
- *http://localhost:7777/site-b.html*