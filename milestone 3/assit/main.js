var app = new Vue({
    el: "#totalchat",
    data: {
        counter: 0,
        contacts: [
            {
                name: "Michele",
                avatar: "_1",
                visible: true,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Hai portato a spasso il cane?",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Ricordati di dargli da mangiare",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 16:15:22",
                        text: "Tutto fatto!",
                        status: "received",
                    },
                ],
            },
            {
                name: "Fabio",
                avatar: "_2",
                visible: true,
                messages: [
                    {
                        date: "20/03/2020 16:30:00",
                        text: "Ciao come stai?",
                        status: "sent",
                    },
                    {
                        date: "20/03/2020 16:30:55",
                        text: "Bene grazie! Stasera ci vediamo?",
                        status: "received",
                    },
                    {
                        date: "20/03/2020 16:35:00",
                        text: "Mi piacerebbe ma devo andare a fare la spesa.",
                        status: "sent",
                    },
                ],
            },

            {
                name: "Samuele",
                avatar: "_3",
                visible: true,
                messages: [
                    {
                        date: "28/03/2020 10:10:40",
                        text: "La Marianna va in campagna",
                        status: "received",
                    },
                    {
                        date: "28/03/2020 10:20:10",
                        text: "Sicuro di non aver sbagliato chat?",
                        status: "sent",
                    },
                    {
                        date: "28/03/2020 16:15:22",
                        text: "Ah scusa!",
                        status: "received",
                    },
                ],
            },
            {
                name: "Luisa",
                avatar: "_4",
                visible: true,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Si, ma preferirei andare al cinema",
                        status: "received",
                    },
                ],
            },
            {
                name: "Drew",
                avatar: "_5",
                visible: true,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Si, ma preferirei andare al cinema",
                        status: "received",
                    },
                ],
            },
            {
                name: "Irene",
                avatar: "_6",
                visible: true,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Si, ma preferirei andare al cinema",
                        status: "received",
                    },
                ],
            },
            {
                name: "Andrea",
                avatar: "_7",
                visible: true,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Si, ma preferirei andare al cinema",
                        status: "received",
                    },
                ],
            },
        ],
    },
    methods: {
        anotherUser(i) {
            this.counter = i;
        },
        newMessage() {
            let newMessage_1 = document.querySelector(".input-write").value
            console.log(newMessage_1);
            const now = new Date()
            let day = now.getDate()
            let month = now.getMonth()
            let year = now.getFullYear()
            let hours = now.getHours()
            let minute = now.getMinutes()
            let second = now.getSeconds()
            let totalDate = `${day}/${month}/${year}  ${hours}:${minute}:${second}`
            console.log(totalDate);

            let newObjects = {
                date: totalDate,
                text: newMessage_1,
                status: "sent"
            }

            this.contacts[this.counter].messages.push(newObjects)

            this.risposta()


        },
        risposta() {
            var questo = this;
            setTimeout(function () {
                const now = new Date()
                let day = now.getDate()
                let month = now.getMonth()
                let year = now.getFullYear()
                let hours = now.getHours()
                let minute = now.getMinutes()
                let second = now.getSeconds()
                let totalDate = `${day}/${month}/${year}  ${hours}:${minute}:${second}`
                let autoRisposta = {
                    date: totalDate,
                    text: 'Ok',
                    status: "received"
                }
                questo.contacts[questo.counter].messages.push(autoRisposta)

            }, 1000)
        }

    }
});
