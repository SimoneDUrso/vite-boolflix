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




