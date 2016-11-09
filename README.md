# SimpleAtlas #

Version : 2.0.0

NodeAtlas Version minimale : 0.23.x ou sans rien.

**For an international version of this README.md, [see below](#international-version).**



## Avant-propos ##

SinpleAtlas est :
- Un exemple de structure JavaScript permettant de délivrer ses fonctions par composant et de les exécuter au chargement ou en retour AJAX sans $(document).ready().
- un exemple de site tournant avec [NodeAtlas](http://haeresis.github.io/NodeAtlas/) en tant que simple serveur web.

**Il fait office d'exemple pour l'article : [Éviter les multiples $(document).ready() dans vos pages web](https://blog.lesieur.name/eviter-les-multiples-jquery-document-ready-dans-vos-pages-web/)**



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
\> node </path/to/>node-atlas/
```

Les deux pages seront à :

- *http://localhost/site-a.html*
- *http://localhost/site-b.html*

__*Note :*__

*Si vous avez déjà un serveur web sur le port 80, utilisez plutôt :*

```
\> node </path/to/>node-atlas/ --httpPort 7777
```

*Les deux pages seront à :*

- *http://localhost:7777/site-a.html*
- *http://localhost:7777/site-b.html*


-----


## International Version ##

### Overview ###

SinpleAtlas is :
- an example of a JavaScript framework for delivering fonctionnality by component and run them in loading of page or after an AJAX request without $(document).ready().
- an example of website running with [NodeAtlas](http://haeresis.github.io/NodeAtlas/) as a simple web server.

**It used as an example for the article : [Éviter les multiples $(document).ready() dans vos pages web](https://blog.lesieur.name/eviter-les-multiples-jquery-document-ready-dans-vos-pages-web/)** (Fr)



### Test the example ###

To test the example, download files via `Download Zip`. After having unzip it, you will see that by testing the `site-b.html` —in opening directly from the folder— you will not be able to actually have an AJAX response. It will just simulate because you read the file in mode  `file://` and not in `http://` mode.

This does not prevents understanding the example, but if you want to test it with a web server you can with [NodeAtlas](http://haeresis.github.io/NodeAtlas/).



### Test in Simple Web Server mode with NodeAtlas ###

To test the example in real environment, you need to install [NodeAtlas](http://haeresis.github.io/NodeAtlas/) on your development computer and go to the folder:

```
\> cd </path/to/simple-atlas-directory>/
```

and use the command:

```
\> node </path/to/>node-atlas/
```

The two pages will be to:

- *http://localhost/site-a.html*
- *http://localhost/site-b.html*

__*Note :*__

*If you already have a web server on port 80, consider using:*

```
\> node </path/to/>node-atlas/ --httpPort 7777
```

*The two pages will be to:*

- *http://localhost:7777/site-a.html*
- *http://localhost:7777/site-b.html*