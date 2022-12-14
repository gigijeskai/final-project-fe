# Progetto finale per il corso Front End di Epicode

## Indice
1. [Breve Descrizione](#breve-descrizione)
2. [Tecnologie](#tecnologie)
3. [Installazione](#installazione)

## Breve Descrizione

Questo progetto si basa su una semplice applicazione pensata da me, da cui ho preso ispirazione per lo stile e l'organizzazione dalle applicazioni di Hertz e Subito.it.

Quest'applicazione è sviluppata in Angular ed ho utilizzato bootstrap per l'aggiunta dei componenti e dello stile, personalizzandolo con Sass.

L'applicazione permette ad un utente registrato, la possibilità di pubblicare un annuncio per condividere un veicolo.
L'annuncio pubblicato sarà visibile nella pagina degli annunci.
Per gli annunci e la registrazione degli utenti ho utilizzato un semplice database installato con NPM.

Un ulteriore pagina invece, mostra delle vetture in vendita,
Le vetture in vendita provengono da delle API che ho scritto e inserito in un database utilizzando MongoDB e Node Express.

## Tecnologie

Per questo progetto sono state utilizzate ed è necessaria l'installazione per il corretto utilizzo delle seguenti tecnologie:

* [Angular](https://angular.io/): Version 14.2 
* [Node](https://nodejs.org/it/docs/): Version 16.17
* [npm (Package Manager)](https://docs.npmjs.com/): Version 8.15
* [SASS](https://sass-lang.com/install): Version 1.49
* [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/): Version 5.2
* [MongoDB](https://www.mongodb.com/it-it): Version 6.0

## Installazione

1. Per avere il codice funzionante, bisogna avere installato Node.js, npm(Package Manager), Angular, Sass, e MongoDB

2. Per utilizzare l'applicazione clonare la repository  [final-project-fe](https://github.com/gigijeskai/final-project-fe) e installare i `node_modules` con il seguente comando dal terminale:
```
$ npm i
```

3. Da terminale, lanciare il `db.json` con il seguente comando:
```
$ json-server db.json -m ./node_modules/json-server-auth
```

4. Dalla directory  `node-express-mongodb` aggiungere il file `cars.json` nel MongoDB del proprio device, 
aprire un secondo terminale e lanciare il seguente comando:
```
$ npm start
```

5.Per visualizzare sul proprio browser l'applicazione, aprire un terzo terminale e lanciare il seguente comando:
```
$ ng serve 
```




