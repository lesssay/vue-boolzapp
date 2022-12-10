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
            name: 'Giorgia',
            avatar: '_io',
        },

        contacts: [
            {
              name: 'Michele',
              avatar: '_1',
              visible: true,
              messages: [{
                date: '10/01/2020 15:30',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
              },
              {
                date: '10/01/2020 16:15',
                text: 'Tutto fatto!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Fabio',
              avatar: '_2',
              visible: true,
              messages: [{
                date: '20/03/2020 16:30',
                text: 'Ciao come stai?',
                status: 'sent'
              },
              {
                date: '20/03/2020 16:30',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
              },
              {
                date: '20/03/2020 16:35',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'received'
              }
              ],
            },
            {
              name: 'Samuele',
              avatar: '_3',
              visible: true,
              messages: [{
                date: '28/03/2020 10:10',
                text: 'La Marianna va in campagna',
                status: 'received'
              },
              {
                date: '28/03/2020 10:20',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
              },
              {
                date: '28/03/2020 16:15',
                text: 'Ah scusa!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Luisa',
              avatar: '_6',
              visible: true,
              messages: [{
                date: '10/01/2020 15:30',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
              }
              ],
            },
          ],

        currentIndex: 0, 

        newTextMessage: '',
        
        contactTextSearch: '',

    },

    computed: {
    currentContact(){
      return this.contacts[this.currentIndex]
    },

      visibleContacts(){
        const searchText = this.contactTextSearch.toLowerCase();
        const array = this.contacts.map((contact)=>{
          contact.visible = contact.name.toLowerCase().includes(searchText);
          return contact;
        });

        return array;
      }
  
    },

    methods:{
     getDate(){
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes() > 10 ? date.getMinutes(): `0${date.getMinutes()}`;
        // const seconds = date.getSeconds() > 10 ? date.getSeconds(): `0${date.getSeconds()}`;
        const currentHour = `${hours}:${minutes}`;
  
        currentDate = `${date.toLocaleDateString()} ${currentHour}`;
  
        return currentDate;
      },
      
      getHour() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`;
        const currentHour = `${hours}:${minutes}`;
        return currentHour;
      },

      setCurrentContact(index) {
         this.currentIndex = index;
       },

      newMessage(text, status){
        const date = this.getDate();
        const newMessage = {date, text, status};
        this.contacts[this.currentIndex].messages.push(newMessage);
       },

      sendNewMessage() {
        if(!this.newTextMessage) return;

        this.newMessage(this.newTextMessage, 'sent');

        this.newTextMessage = '';

      setTimeout (this.receiveNewMessage ,1000);
      },

      receiveNewMessage(){
        this.newMessage('ok', 'received');
       },

    }
})
