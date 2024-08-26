MILESTONE 0:
1 - Creare la struttura base con lo store;
2 - Inserisco gli endpoint all'interno dello store;

Milestone 1:

Creare un layout base con una searchbar (una input e un button) in cui possiamo
scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il
bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni
film trovato:
1. Titolo
2. Titolo Originale
3. Lingua
4. Voto

1 - Creo delle components "Header" e "Main";
2 - Creo un input e un button nella component Header;
3 - Creo due variabili nello store, un array vuoto e una stringa vuota;
4 - Uso la striga vuota come v-model;
5 - In App.vue faccio una chiamata axios dove concateno l'Url di partenza e il v-model;

Milestone 2:

Trasformiamo la stringa statica della lingua in una vera e propria bandiera della
nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della
nazione ritornata dall’API (le flag non ci sono in FontAwesome).
Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca
dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando
attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di
risposta diversi, simili ma non sempre identici)
Qui un esempio di chiamata per le serie tv:
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=s
crubs

1 - Creiamo una funzione per assegnare una classe nei casi in cui la lingua originaria corrisponda a qualcosa in particolare;
2 - Facciamo un'altra chiamata API per prendere le serie TV;
3 - Facciamo altre due sotto-componenti per visualizzare i film e le serie;
4 - Facciamo un nuovo array vuoto da riempire con le serie;
5 - Creiamo un'altra props per mandare dati da App.vue a Main.vue;




