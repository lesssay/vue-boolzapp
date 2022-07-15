console.log('ok', Vue);

Vue.config.devtools = true;

// Milestone 1 (DAY 1)
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato

// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// Trovate in allegato gli screenshot dell'app e una base di partenza coi dati utili per la milestone di oggi.

// Consigli Utili:
// non dimentichiamo di fare analisi sia per la struttura dati che per la grafica
// procediamo a blocchettoni per evitare di avere poi problemi col CSS in fase avanzata
// Cerchiamo di rispettare tutti i principi e le best practices viste finora (nomi di variabili e classi, centralizzazione ecc)

const root = new Vue({
    el: '#root',
    data: {
        user: {
            name: 'Nome Utente',
            avatar: '_io',
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
            },
            {
                name: 'Fabio',
                avatar: '_2',
            },
            {
                name: 'Samuele',
                avatar: '_3',
            },
            {
                name: 'Luisa',
                avatar: '_6',
            },
        ],

        chatSearch: '',
    },

    computed: {

    },

    methods: {

    }
})