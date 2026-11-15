# AttivaMente – Il laboratorio dei giochi da creare

App web gratuita che accompagna il libro «AttivaMente – Dal gioco alla creazione» e il corso. Funziona su telefono, tablet e computer, si può installare come un'icona e lavora anche senza connessione. Nessun account, nessuna pubblicità, nessun conteggio delle visite: i lavori restano sul dispositivo e l'app non chiede niente a servizi esterni (anche i caratteri sono dentro l'app). Come per ogni sito, la pagina e il dizionario si scaricano dal sito dove l'app è pubblicata.

## Versione 3.37 (15 novembre 2026)
Risposta alla verifica indipendente della 3.36.
- **Inventa un gioco** accetta anche giochi senza vincitore: il campo si chiama «Come finisce» (chi vince, quando è risolto, o quando il gioco è concluso). La domanda di prova sulla soluzione unica vale solo per gli enigmi che la promettono.
- **Aree da toccare più grandi sul telefono:**
  - le etichette sugli studi rispondono al tocco su 44 px di altezza, anche se il disegno resta piccolo;
  - i pulsanti a scelta sono larghi almeno 44 px;
  - le caselle di spunta non si stringono più accanto alle frasi lunghe;
  - le caselle dei messaggi cifrati sono più larghe;
  - la ruota del cifrario di Cesare è più alta.
- Dove l'app non promette benefici (per esempio Inventa un gioco) non compare più un'etichetta vuota sugli studi.
- **Pubblicazione:** il dizionario sta in `docs/dizionario/`, insieme alla pagina. `tools/release.py` lo ricopia a ogni rilascio, e una prova controlla che la sola cartella `docs/` basti.
- Verifica in `VERIFICA-3.37.md` (nei sorgenti).

## Versione 3.36 (14 novembre 2026)
- **Regole in più da combinare anche in altri giochi**:
  - **Futoshiki**: le due diagonali (anche lì numeri tutti diversi) e pari e dispari (caselle grigie). L'app prepara la griglia, toglie gli indizi superflui e verifica che la soluzione resti una sola: con tutte e due le regole a volte basta qualche segno, senza nessun numero.
  - **Suguru**: pari e dispari. Spesso bastano due o tre numeri dati.
  - **Dama**: varianti conosciute da scegliere e combinare (le pedine mangiano anche all'indietro, la dama «volante», presa non obbligatoria, la dama «a perdere»). Finiscono sul foglio delle regole, stampato con le pedine; la 10×10 ha le regole della dama internazionale.
- La guida («Creare un gioco») elenca tutti i giochi con regole in più.
- Verifica in `VERIFICA-3.36.md` (nei sorgenti).

## Versione 3.35 (14 novembre 2026)
- **Inventa un gioco** (Crea, nuova famiglia «Inventa le regole»): un gioco tutto tuo, con regole nuove.
  - Si parte da un foglio bianco o dalle regole di un gioco dell'app, e si cambiano.
  - Una scheda guidata chiede nome, per chi è, durata, materiale, scopo, regole (una per riga), come si vince, un esempio e le varianti.
  - Otto domande aiutano a provare il gioco: si arriva sempre alla fine? Le regole bastano? Un'altra persona l'ha capito leggendo solo il foglio?
  - Si stampa il foglio del gioco, anche con una griglia, delle righe o uno spazio per disegnare, oppure lo si manda come link.
  - L'app controlla che il foglio sia completo e chiaro; se il gioco funziona lo dicono le partite di prova, e l'app lo dice.
- **«Cambia le regole → Inventa una variante»** compare in tutti i giochi di Crea: apre Inventa un gioco con le regole di quel gioco già scritte.
- **Sudoku: regole in più da combinare.** Le due diagonali, le quattro finestre (o la finestra centrale nel 4×4), le caselle al centro dei riquadri, e pari e dispari (caselle grigie).
  - L'app genera la griglia, toglie i simboli e verifica che la soluzione resti una sola.
  - Con i riquadri irregolari si può aggiungere solo pari e dispari.
- **Avventura a dadi: «Scrivi la tua storia».** Si inventano le scene, i tre modi di affrontare ogni prova (facile, normale o difficile), gli esiti e i finali, partendo da un foglio bianco o da una storia dell'app.
  - L'app controlla che non manchi nessun testo e stima quante volte si vince giocando bene, provandola molte volte. Se è troppo difficile lo dice.
- **Messaggi cifrati: «Il mio alfabeto».** Ogni lettera diventa un simbolo scelto da te, tra 40 simboli semplici da ridisegnare anche a mano. Con la chiave sul foglio o senza, da scoprire con le frequenze.
- Verifica in `VERIFICA-3.35.md` (nei sorgenti).

## Versione 3.34 (14 novembre 2026)
- **Caratteri dentro l'app.** Prima i caratteri (Atkinson Hyperlegible e Bricolage Grotesque) si scaricavano da Google Fonts a ogni apertura: una richiesta a un servizio esterno, che la frase «nessun dato inviato» non diceva. Ora sono dentro la pagina (licenza SIL OFL 1.1, in `vendor/fonts` nei sorgenti): l'app non chiede più niente ad altri servizi, e i caratteri giusti si vedono anche senza connessione.
- La pagina «Come si usa → Privacy e limiti» e questo LEGGIMI spiegano con precisione che cosa resta sul dispositivo e che cosa si scarica dal sito.
- Le descrizioni dicono che l'app accompagna il libro e il corso.
- Il pacchetto dei sorgenti contiene anche la cartella pubblicata (`docs/`: index.html, manifest, icona, service worker), così si può controllare che corrisponda ai sorgenti.
- Verifica in `VERIFICA-3.34.md` (nei sorgenti).

## Versione 3.33 (14 novembre 2026)
- **Nuova famiglia «Giochi di ruolo»**, con un gioco nuovo: **Avventura a dadi**. In tutto i giochi ora sono 28.
  - In Gioca è un'avventura da fare da soli: si sceglie un personaggio (ognuno con Forza, Astuzia e Cuore e un oggetto), si attraversano da 3 a 6 scene e un finale. In ogni scena si sceglie come affrontare la prova e si tira il dado: dado + abilità deve arrivare al numero indicato.
  - Chi non ci riesce perde un cuore di Energia, ma la storia va avanti: non ci si blocca mai. Si vince arrivando al finale con almeno un cuore.
  - Le storie sono cinque, scritte per l'app (il castello della regina, il faro, la montagna, la biblioteca incantata, la notte al museo); ogni partita sceglie la storia, le scene e i tre personaggi proposti.
  - In Crea si prepara il kit per giocare al tavolo, da 1 a 6 persone più chi conduce: si scelgono storia, scene, difficoltà e personaggi. Si stampano le schede dei personaggi da ritagliare, le regole e il copione per chi conduce. Nessuno viene eliminato: chi resta senza cuori aiuta gli altri. Lo stesso gioco si manda come link.
  - Nel percorso Impara: da dove vengono i giochi di ruolo e i libri-gioco, come si conduce, come si costruisce un'avventura, e che cosa (non) sappiamo dagli studi.
- **Corretto** il pulsante «Comincia una partita nuova» di Gioca: riapriva la partita lasciata a metà invece di prepararne una nuova.
- Verifica in `VERIFICA-3.33.md` (nei sorgenti).

## Versione 3.32 (14 novembre 2026)
- **Nuova famiglia «Codici segreti»**, con due giochi nuovi. In tutto i giochi ora sono 27.
  - **Messaggi cifrati**: un proverbio nascosto con un cifrario storico. Sotto ogni simbolo si scrive la lettera: nei cifrari a sostituzione, scrivendone una si riempiono tutte le uguali. I livelli vanno dalle lettere in numeri e da Cesare con la chiave fino alla sostituzione segreta, che si risolve con le frequenze. I cifrari sono otto: lettere in numeri (A=1), Cesare, Atbash, scacchiera di Polibio, cifrario dei Templari (massonico), Vigenère, cifrario a binari, sostituzione segreta.
  - **Codice Morse**: punti e linee da leggere, da ascoltare (🔊) e da vedere lampeggiare (💡). Si va da una parola breve con lettere facili fino a un proverbio solo da ascoltare.
  - In Crea si scrive un proprio messaggio, si sceglie il cifrario e la chiave, quante lettere dare come aiuto e se mettere la chiave sul foglio. Si stampano il foglio, la chiave per chi conduce e la soluzione, oppure si manda il link da decifrare.
  - Nel percorso Impara: Cesare e Atbash, Polibio e i simboli, Vigenère e l'analisi delle frequenze (al-Kindi), la storia del Morse.
- Verifica in `VERIFICA-3.32.md` (nei sorgenti).

## Versione 3.31 (14 novembre 2026)
- **⬇ Installa l'app**: un pulsante nell'intestazione, su ogni pagina.
  - Dove il browser lo permette (Chrome, Edge, Android) l'installazione parte subito.
  - Su iPhone, iPad, Safari per Mac e Firefox il pulsante mostra i passi giusti per quel dispositivo.
  - Il pulsante non compare quando l'app è già installata.
- **Esporta e importa un gioco.**
  - In ogni strumento di Crea, «Esporta questo gioco» salva un piccolo file da mandare per email o WhatsApp; sul telefono si apre direttamente la condivisione.
  - «Importa un gioco» (in Crea, in Gioca e in I miei lavori) lo apre e lo salva nei lavori.
  - In ogni partita di Gioca, «Esporta la partita» salva la partita in un file.
- **Gioca con altri.**
  - «Sfida qualcuno» manda la stessa partita ad altre persone, con il proprio tempo se l'hai già risolta: ognuno la risolve sul suo dispositivo.
  - Nel **Memory** si gioca anche **a turno sullo stesso dispositivo**, da 2 a 4 giocatori, ognuno con il suo nome e il suo punteggio. Chi trova una coppia la tiene e gioca ancora; chi sbaglia passa il turno.
  - Giocare nello stesso momento da telefoni diversi non è possibile, perché servirebbe un server e l'app non invia dati a nessuno. La guida lo spiega.
- Verifica in `VERIFICA-3.31.md` (nei sorgenti).

## Versione 3.30 (9 novembre 2026)
- Preparazione alla versione inglese, che starà nella cartella `/en` dello stesso sito: l'app italiana non cancella più le copie salvate della versione inglese e non gestisce le sue pagine. Nient'altro cambia. Verifica in fondo a `VERIFICA-3.29.md`.

## Versione 3.29 (9 novembre 2026)
- **Disegno con la griglia, come nel Rinascimento.** Il modello da copiare ora è l'opera vera, divisa in quadretti, e non più un disegno a contorni ricavato dall'immagine. Si può stampare in bianco e nero, con più contrasto. Accanto c'è la griglia vuota, anche più grande su un foglio a parte, per ingrandire il disegno. I quadretti in larghezza vanno da 3 a 12.
- **Il disegno d'esempio** è un orso di Leonardo da Vinci, del 1482–85 circa: The Metropolitan Museum of Art, n. 1975.1.369, pubblico dominio.
- **Consigli su quali immagini scegliere** (disegni e incisioni, un soggetto solo, fondo chiaro), con le parole da cercare nei musei.
- **Un piccolo corso** nel percorso di Copia con la griglia: il «velo» di Alberti, la quadrettatura, quali immagini scegliere, come si copia passo passo, perché funziona.
- In Gioca, la copia delle figure a punti ha un pulsante che porta al disegno con la griglia.
- Verifica in `VERIFICA-3.29.md` (nei sorgenti).

## Versione 3.28 (9 novembre 2026)
- **Aggiornamenti visibili subito.** Prima, dopo una pubblicazione, il telefono o il computer potevano continuare a mostrare la versione vecchia, salvata per funzionare senza connessione. Ora l'app chiede sempre prima la pagina alla rete e usa la copia salvata solo senza connessione. Chi aveva una versione precedente vede la nuova dopo averla aperta due o tre volte, oppure subito ricaricando la pagina senza cache (Ctrl+Maiusc+R sul computer).
- **I disegni creati dall'app non tornano più.** Le bozze e le partite lasciate a metà nelle versioni prima della 3.26, con i paesaggi, i mandala e gli altri disegni creati dall'app, non si riaprono più da sole in Colorare con i numeri e in Copia con la griglia: si parte dall'opera d'esempio o dalla scelta dell'immagine. I lavori salvati apposta in «I miei lavori» restano.
- Verifica in `VERIFICA-3.28.md` (nei sorgenti).

## Versione 3.27 (9 novembre 2026)
- **Nuovo gioco: La lista da ricordare.** Si leggono alcune parole, tutte insieme oppure una alla volta, e poi si ritrovano in mezzo ad altre. Ci sono cinque livelli, da 5 a 15 parole. Dal livello Facile c'è una piccola pausa prima di rispondere. Nei livelli alti le parole per confondere sono dello stesso tipo, per esempio «pera» se nella lista c'era «mela».
  - Il gioco suggerisce un trucco per ricordare: raggruppare le parole per tipo, oppure inventare una piccola storia che le colleghi.
  - In Crea si scrivono parole proprie, come i nomi dei nipoti o la lista della spesa. Si stampano il foglio da leggere, il foglio da cerchiare e la pagina per chi conduce, oppure si manda il gioco come link.
  - È il quinto gioco della famiglia Memoria e attenzione ed è l'unico sulla memoria delle parole: gli altri quattro usano figure, colori e posizioni.
- Verifica in `VERIFICA-3.27.md` (nei sorgenti).

## Versione 3.26 (8 novembre 2026)
- **Colorare con i numeri solo da opere d'arte e foto**, in sei livelli: da circa 100 zone a migliaia di zone, fino a 200 colori. Già al livello Principiante il dipinto si riconosce. C'è un'opera d'esempio (Albert Bierstadt, 1863, Metropolitan Museum, pubblico dominio) e l'originale si vede accanto al disegno. Anche «Disegno con la griglia» parte solo da un'opera o da una foto. Verifica in `VERIFICA-3.26.md`.

## Versione 3.25 (8 novembre 2026)
- **Livello Maestro** in Colorare con i numeri, fino a 200 colori. Verifica in `VERIFICA-3.25.md`.

## Versione 3.24 (8 novembre 2026)
- **Disegni da colorare molto più belli e ricchi.** Ogni disegno ora nasce come un piccolo dipinto, ogni volta nuovo, con sfumature, luci e ombre, poi viene diviso in zone. Ai livelli alti ci sono molti più particolari e colori: fino a 30 colori e, all’Esperto, di solito da 150 a 350 zone.
- **Le tue foto e le opere d’arte** si trasformano con lo stesso metodo, a una risoluzione più alta e con i colori ravvivati: si riconoscono molto meglio.
- **Mostra il disegno finito / Riprendi la partita:** nel gioco sullo schermo il disegno colorato compare al posto della partita, e un tocco riporta ai numeri senza perdere le zone già colorate.
- Verifica in `VERIFICA-3.24.md` (nei sorgenti).

## Versione 3.23 (8 novembre 2026)
- Frase sui diritti delle opere dei musei resa più precisa, come chiesto dalla verifica indipendente. Verifica in `VERIFICA-3.23.md` (nei sorgenti).

## Versione 3.22 (8 novembre 2026)
- **Colorare un’opera d’arte, passo passo**: al posto delle pagine sulle licenze ci sono i link diretti alle raccolte di opere libere di tre musei (Metropolitan di New York, Art Institute of Chicago, Cleveland Museum of Art) e i passi da seguire: scegli l’opera, scaricala, aprila con il nuovo pulsante «Scegli l’immagine», colorala. Lo trovi in Crea (Colorare con i numeri e Copia con la griglia), nella pagina Arte e benessere e nella guida; dalla pagina Inizia e dalla pagina Arte un pulsante porta subito lì.
- Quando l’immagine è pronta, l’app dice quante zone e quanti colori ha e che cosa fare dopo.
- Verifica in `VERIFICA-3.22.md` (nei sorgenti).

## Versione 3.21 (8 novembre 2026)
- Corretto il collegamento alla National Gallery of Art di Washington (nuovo indirizzo della pagina ufficiale) e resa più prudente la frase sui musei nella pagina Arte e benessere. Verifica in `VERIFICA-3.21.md` (nei sorgenti).

## Versione 3.20 (8 novembre 2026)
- **Immagini libere da colorare**: un elenco di musei e archivi che offrono immagini di opere antiche senza diritti (Metropolitan Museum, Art Institute of Chicago, Cleveland, National Gallery di Washington, Paris Musées, Biodiversity Heritage Library), con consigli su quali immagini vengono meglio. Lo trovi in Crea, nella guida e nella pagina Arte e benessere.
- In Colorare con i numeri: **«Colora sullo schermo»** apre subito il gioco con il tuo disegno (anche da una tua immagine), e la stampa può essere **senza numeri**, per colorare a scelta libera.
- Verifica in `VERIFICA-3.20.md` (nei sorgenti).

## Versione 3.19 (8 novembre 2026)
- Guida e corsi: ultime precisazioni sui diritti delle immagini (uso personale; libretti venduti o regalati). Verifica in `VERIFICA-3.19.md` (nei sorgenti).

## Versione 3.18 (8 novembre 2026)
- Guida: indicazioni più precise sui diritti delle immagini, per l'uso personale e per i libretti (venduti o anche regalati). Verifica in `VERIFICA-3.18.md` (nei sorgenti).

## Versione 3.17 (8 novembre 2026)
- **Nuovo gioco: Copia con la griglia.** Figure a punti da ricopiare (al livello Esperto allo specchio), che si giocano anche sullo schermo; e il disegno con la griglia, il metodo classico dei disegnatori, per copiare e ingrandire un disegno o una tua immagine quadretto per quadretto.
- **Immagini e opere d'arte**: nella guida, che cosa si può fare con le immagini scaricate e con i dipinti antichi, dove trovarne di libere anche per la vendita, e le regole particolari per le opere dei musei pubblici italiani.
- Verifica documentata in `VERIFICA-3.17.md` (nei sorgenti).

## Versione 3.16 (8 novembre 2026)
- **Nuovo gioco: Colorare con i numeri.** Disegni sempre nuovi (mandala, vetrate, paesaggi, fiori, geometrie) divisi in zone con il numero del colore, in cinque livelli. Tre modi di colorare: con i numeri, con i colori scelti da te, oppure libero. Si colora sullo schermo o sul foglio stampato, con la legenda che dà il nome di ogni colore.
- **Dalla tua foto**: nella parte Crea una tua fotografia diventa un disegno da colorare. Tutto avviene nel tuo dispositivo e la foto non viene inviata a nessuno.
- **Nuova pagina «Arte e benessere»**: che cosa dicono davvero gli studi sul colorare e sull'arteterapia, con i loro limiti; piccole lezioni sui colori (cerchio dei colori e armonie), esercizi, consigli per chi accompagna e sui materiali.
- In Crea c'è la nuova famiglia «Arte e benessere».
- Verifica documentata in `VERIFICA-3.16.md` (nei sorgenti).

## Versione 3.15 (7 novembre 2026)
- Ultimi ritocchi dopo la verifica di ChatGPT sulla 3.14: le eccezioni del filtro delle parole sono un elenco di parole esatte; nel libro anche una tabella lunghissima si divide sulle pagine dopo.
- Verifica documentata in `VERIFICA-3.15.md` (nei sorgenti).

## Versione 3.14 (7 novembre 2026)
- Correzioni dopo la verifica di ChatGPT sulla 3.13: il filtro delle parole non esclude più parole innocue (come SCEMPIO o CAZZUOLA) e una parola esclusa non può più formarsi per incrocio; nel libro anche un elenco lunghissimo si divide sulle pagine dopo.
- Le etichette sugli studi ora dicono che tipo di studi esiste: **Studi controllati**, **Studi preliminari**, **Per analogia**. Toccandole si legge che cosa vogliono dire (anche nella pagina Crea).
- Verifica documentata in `VERIFICA-3.14.md` (nei sorgenti).

## Versione 3.13 (7 novembre 2026)
- **Collaudo con sette persone simulate** (dal matematico alla signora di 78 anni) e con il rapporto di ChatGPT: corretti tutti i problemi gravi e quasi tutti i medi.
- **Telefono e tablet**: griglia e tasti dei numeri si vedono insieme, in verticale e in orizzontale; lo schermo intero comprende i comandi.
- **La partita lasciata a metà riprende** anche dopo aver ricaricato la pagina.
- **Dizionario ripulito** da pezzi di parole e da parole delicate; nessuna parola ripetuta nello stesso schema.
- **Libro**: nessuna pagina tagliata (i giochi lunghi continuano sulla pagina dopo), indice con i numeri di pagina.
- Livelli più distinti in Sudoku, Kakuro e Problemi di matto; esempi delle regole corretti; Tangram e Pentamini con la tastiera; "Con calma" senza conti alla rovescia.
- Verifica documentata in `VERIFICA-3.13.md` (nei sorgenti).

## Versione 3.12 (7 novembre 2026)
- **Gioca, impara, crea**: per ognuno dei giochi un percorso in quattro tappe (gioca, impara le regole, come si costruisce, crea il tuo). Si crea partendo da una struttura pronta: la partita appena giocata o una nuova. Pulsante **Crealo tu** in ogni partita.
- **22 piccoli corsi** su come si costruisce ogni gioco, con esempi e figure.
- **Esporta e condividi**: un riquadro in ogni strumento spiega tutti i modi di portare fuori un gioco.
- **Crea un libro** con i giochi che hai creato tu, con le pagine da ritagliare e la pagina del copyright; avvisi per Amazon KDP. Nella guida: come creare, regalare e vendere un libretto, con le regole di KDP verificate.
- **Enigmi celebri**: dieci enigmi famosi risolti e spiegati, e sette problemi ancora aperti, con piccoli laboratori.
- **Telefono**: menu compatto, pulsanti più grandi, ingrandimento in un solo pulsante, pulsanti inattivi più leggibili.
- Verifica documentata in `VERIFICA-3.12.md` (nei sorgenti).

## Versione 3.11 (4 novembre 2026)
- **Crittografato**: corretta la causa dei rari casi in cui la partita non si creava (schemi troppo difficili da riempire, pochi tentativi, troppo poche lettere date). Ora ogni livello si crea in meno di 4 secondi, con la soluzione unica verificata.
- **Parole a incastro** molto più veloci ai livelli alti (al massimo circa 4 secondi). **Hexadoku**: niente più partite mancanti con alcuni semi; Esperto più rapido.
- **Web Worker** finalmente attivo (un controllo sbagliato lo escludeva sempre): durante i calcoli lunghi la pagina resta utilizzabile. Se il browser non permette il Worker, si calcola nella pagina, che può fermarsi per qualche secondo.
- **Stampa** da Gioca corretta per "Che cosa manca?", Labirinto, Tangram e Problemi di matto; "Mostra la soluzione" funziona anche in questi giochi.
- Verifica completa documentata in `VERIFICA-3.11.md` (nei sorgenti), con nuove prove indipendenti dell'unicità anche per crittografato e parole a incastro.

## Versione 3.10 (4 novembre 2026)
- **Tutte le partite sono nuove**: eliminate le raccolte pronte. Suguru (nuovo generatore che costruisce insieme regioni e numeri: un 10×10 in meno di un secondo), parole a incastro 11×11 e 13×13, problemi di matto in 1, 2 e 3 (nuovo generatore con ricerca del matto più veloce) ed Hexadoku si creano ogni volta da zero, con la soluzione unica verificata.
- **Web Worker**: le partite di Gioca, le griglie di Crea (Futoshiki, Suguru, Numbrix, Hexadoku) e i giochi di "Crea un libro" si preparano in un processo separato e mostrano l'attesa. Se il browser non lo permette, si calcola come prima. (Correzione: per un errore il Worker entrava in funzione solo dalla 3.11.)
- **Demenza e difficoltà cognitive**: nuova sezione nella guida (che cosa dicono gli studi, con le fonti Cochrane; consigli pratici) e nuovo profilo di accessibilità **Con calma** (tutto grande, contrasto alto, niente animazioni, niente tempo, solo i livelli Principiante e Facile). Nuove impostazioni: "Non mostrare il tempo" e "Solo i livelli facili".

## Versione 3.9 (4 novembre 2026)
- **Accessibilità da tastiera e con il lettore di schermo** in tutti i giochi con caselle, tessere o carte: frecce per spostarsi, annuncio della posizione e del contenuto, Invio per scegliere, numeri e lettere da tastiera; labirinto con le frecce.
- **Finestre accessibili** (istruzioni, vittoria, promozione negli scacchi): il Tab resta dentro, Esc chiude, il cursore torna dove era.
- Hexadoku più veloce (in seguito, nella 3.10, generato sempre da zero).
- Gli script di costruzione funzionano in qualsiasi cartella; istruzioni per eseguire i test in `tests/LEGGIMI-test.md`.

## Versione 3.8 (4 novembre 2026)
- **Quattro nuovi rompicapi, in Crea e in Gioca**: Futoshiki (con i segni maggiore/minore), Suguru (le regioni si possono disegnare a mano), Numbrix (il percorso si può disegnare a mano), Hexadoku 16×16. Soluzione unica sempre verificata; pulsante "Indizi minimi".
- **Scacchi**: partita contro il computer in 5 livelli (motore verificato con i conteggi di riferimento "perft"), problemi di matto in 1, 2 e 3 con prima mossa unica verificata, mini-corso di 11 lezioni con esercizi, strumento per comporre e stampare problemi di matto.
- **Linee libere**: disegno meditativo in cinque fasi ispirato alla neurografica (nome descrittivo: "neurografica" è un marchio registrato), con riempimento delle zone a un tocco. Nessuno studio controllato: lo diciamo apertamente.
- **Crea un libro**: scegli giochi, quantità e livelli; l'app li crea, li verifica e li impagina (frontespizio, introduzione, indice, un gioco per pagina, numeri di pagina, soluzioni) nei formati A4, 8,5×11 e 6×9 pollici per Amazon KDP.
- **Memory a terne** (tre carte uguali), anche nel livello Esperto di Gioca.
- Gioca ora ha 22 giochi divisi in famiglie (Numeri, Parole, Logica e spazio, Memoria e attenzione).
- Corretto: la stampa di un sudoku condiviso con un link si bloccava.

## Versione 3.7 (4 novembre 2026)
- **Parole a incastro** (nuovo, Crea e Gioca): schema senza definizioni con l'elenco delle parole; l'app verifica che la soluzione sia una sola e sceglie le parole di partenza. In Gioca da 5×5 a 13×13 (i 13×13 da una raccolta di schemi verificati).
- **Labirinto in Gioca**: da 8×8 a 35×35, con corridoi lunghi ai livelli alti.
- **Tangram in Gioca**: sagome generate all'infinito, pezzi che si agganciano, tangram doppio da 14 pezzi. In Crea: tangram doppio e "Proponi una figura".
- **Pentamini** (nuovo, Crea e Gioca): disegni una forma e l'app trova i pezzi e conta le soluzioni; in Gioca rettangoli da 3 a 12 pezzi, fino al 3×20 (solo 2 soluzioni).
- **Nuova famiglia Memoria e attenzione** in Crea: Memory, Che cosa manca?, Sequenze e Blocchi di Corsi con materiali da stampare per chi conduce.
- Dizionario più pulito nei giochi generati: niente troncamenti (VIEN, SCAL) né sigle.

## Versione 3.6 (3 novembre 2026)
- **Mahjong a livelli**: nuove disposizioni (Croce 72, Fortezza 128, Grande muraglia 288), forme nuove generate all'infinito (da 36 a 288 tessere), doppio mazzo, quattro difficoltà di distribuzione (Rilassata, Normale, Con trappole, Diabolica) misurate simulando molte partite: con la Diabolica chi gioca a caso vince circa 1 volta su 10, con la Rilassata circa 2 su 3. Ai livelli alti suggerimenti e rimescolate sono limitati.
- **Tre nuovi giochi di memoria** in Gioca, 5 livelli ciascuno: Che cosa manca? (gioco di Kim), Sequenze (colori con forme, adatte anche al daltonismo), Blocchi di Corsi (memoria dello spazio, con livello all'indietro).

## Versione 3.5 (3 novembre 2026)
- **Enigma logico molto più ricco**: fino a 6 persone e 5 caratteristiche, livello Esperto con indizi nuovi ("A oppure B, ma non tutte e due", "non abita accanto", "tra X e Y c'è esattamente una casa", confronti numerici come "ha 20 anni più di"); ogni tema ha una caratteristica numerica (età, orario). Unicità della soluzione verificata da un risolutore a vincoli. In Gioca il livello Esperto è un 6×4 con indizi sottili e numeri.
- **Profilo nascosto** (nuovo, famiglia Squadra): scenari sempre nuovi in 5 ambientazioni (responsabile, casa, fornitore, gita, progetto), da 3 a 6 partecipanti, 3 livelli. Ognuno ha informazioni che gli altri non hanno; l'app verifica che ogni scheda da sola porti alla scelta sbagliata e che con tutte le informazioni vinca un'altra opzione. Copione con soluzione, punteggi e debriefing (Stasser e Titus, 1985).
- **Decisione per consenso**: 8 situazioni pronte; ogni volta 8 elementi scelti su 12, per varianti sempre diverse.

## Versione 3.4 (3 novembre 2026)
- Nuova sezione **Gioca**: partite sempre nuove e verificate in 5 livelli (Principiante, Facile, Medio, Difficile, Esperto) per sudoku, Kakuro, Ponti, enigma logico, Mahjong, crucipixel, memory, crucipuzzle e crittografato; giochi del giorno uguali per tutti; statistiche (partite vinte, tempo migliore, giorni di fila) solo sul dispositivo.

## Versione 3.3 (3 novembre 2026)
- "Come si gioca" in tutti i 25 giochi: regole in parole semplici, esempio risolto passo passo con immagini (sudoku, binario, Kakuro, Ponti, enigma logico, crucipixel, crittografato, quadrati magici, Mahjong, crucipuzzle, rebus), "Come si crea"; lettura ad alta voce. Nei giochi ricevuti con un link si apre da sola la prima volta.

## Versione 3.2 (2 novembre 2026)
- Raccolta di 28 disegni a colori originali (senza diritti), usata da memory e trova le differenze
- Memory rifatto: disegni, parole, numeri o foto proprie; coppie uguali, disegno e nome, cifra e quantità, operazione e risultato, coppie libere; riempimento automatico; link a siti di foto gratuite; si gioca anche sullo schermo
- Trova le differenze rifatto: scena composta con la raccolta di disegni o con una propria foto; nella copia si tolgono, aggiungono, spostano, ingrandiscono, specchiano o ricolorano gli elementi, e sulle foto si può coprire una zona
- Unisci i puntini rifatto: prima la figura (a mano libera, a linee dritte o ricalcando una foto), poi l'app distribuisce da 8 a 300 puntini lungo il contorno, tenendo gli spigoli; numeri posizionati fuori dalla figura; stellina dove si alza la matita
- Disegno a motivi: galleria di 22 motivi in tre passaggi, ricalco a matita leggera nei riquadri (anche in stampa), strumenti linea dritta, cerchio e punto

## Versione 3.1 (2 novembre 2026)
- Ingrandimento del foglio in tutti i giochi (fino al 400%), con il tasto Sposta per scorrere con il dito e lo Schermo intero
- Labirinti: nuova casella "Evidenzia le celle ancora chiuse", aggiornata mentre lavori

## Versione 3.0 (1° novembre 2026) – versione completa
Venticinque strumenti. Novità rispetto alla 2.1:
- **Come si usa**: guida completa dentro l'app (creare, salvare, stampare e fare un PDF, condividere, installare sul telefono, accessibilità, che cosa dicono gli studi, giochi di squadra, privacy, domande frequenti)
- **Ponti (Hashi)**: disegni isole e ponti, l'app scrive i numeri e verifica la soluzione unica; schemi proposti fino a 13×13; si gioca anche sullo schermo
- **Cruciverba crittografato**: numeri al posto delle lettere, dal proprio cruciverba a schema o da uno nuovo creato con il dizionario; lettere date scelte al minimo con soluzione unica verificata; si gioca anche sullo schermo

## Versione 2.1 (1° novembre 2026)
**Condividi da giocare**: in sudoku, Mahjong, cruciverba a schema e libero, crucipuzzle, enigma logico, Kakuro, crucipixel e anagrammi c'è il pulsante "Crea il link da giocare". Il gioco viaggia dentro il link (compresso): chi lo apre lo trova pronto, senza installare niente e senza account, e può risolverlo sullo schermo (con Controlla, Annulla, soluzione su richiesta, stampa). I progressi restano salvati sul suo dispositivo. Il link si può copiare, inviare o trasformare in QR code (generato dentro l'app, anche senza connessione; libreria qrcode-generator di Kazuhiko Arase, licenza MIT).

**Difficoltà più alta**: sudoku livello Esperto (schemi minimi, spesso oltre le tecniche di base), crucipixel fino a 30×30, crucipuzzle fino a 20×20.

## Versione 2.0 (1° novembre 2026)
Ventitré strumenti. Novità rispetto alla 1.0:

**Dizionario italiano integrato** (oltre 180.000 parole comuni più 520.000 forme flesse e rare, cartella `dizionario/`, caricato solo quando serve e poi disponibile anche senza connessione)
- Cruciverba a schema: schema classico con caselle nere simmetriche (5×5 fino a 15×15), parole proposte per ogni riga, completamento automatico delle caselle vuote, definizioni scritte da te, controllo delle parole
- Anagrammi: il dizionario scopre gli anagrammi doppi (ROSA/ORSA) e propone parole adatte
- Ruota di lettere: tutte le parole nascoste nelle lettere di una parola lunga

**Nuovi giochi**
- Mahjong solitario: 4 disposizioni (tra cui la Tartaruga da 144 tessere), costruzione della propria disposizione strato per strato, partite sempre risolvibili, suggerimenti, rimescolo, tessere facili (numeri e colori grandi), 144 tessere da stampare e ritagliare
- Enigma logico: indizi generati con soluzione unica e nessun indizio superfluo, tre temi modificabili, griglia di ragionamento
- Kakuro: forma disegnata da te, numeri e somme trovati dall'app con soluzione unica verificata

**Sudoku avanzato**: varianti diagonale e irregolare, livello stimato in base alle tecniche necessarie (candidato unico, posto unico, incroci, coppie, X-wing), aiuto simmetrico a togliere i simboli fino al livello scelto, gioco sullo schermo con note a matita

**Squadra e team building** (copione per chi conduce, tempi, debriefing strutturato in tre fasi)
- Indizi divisi: l'enigma logico diviso tra 2–6 persone; ogni indizio è indispensabile
- Quadrati spezzati: pezzi sempre nuovi, risolvibilità e trappole verificate, buste A–E da stampare in scala reale
- Decisione per consenso: schede individuali e di gruppo, calcolo dell'accordo e della sinergia

Il dizionario proviene dalle «Liste di parole italiane» di Francesco Napoletano (https://github.com/napolux/paroleitaliane, licenza MIT): vedi `dizionario/LICENZA.txt`.

## Versione 1.0 (1° novembre 2026)
Sedici strumenti, uno per ogni gioco del corso. In ognuno: Controlla, Annulla e Ripeti, istruzioni passo passo (anche lette ad alta voce), titolo e dedica, salvataggio, stampa con la soluzione su una pagina a parte.

**Disegno e spazio**
- Labirinti: griglie da 5×5 a 40×40, controllo di strada, vicoli ciechi, zone chiuse e anelli, suggerimenti
- Mandala: simmetria da 4 a 32 spicchi, specchio, linee ammorbidite
- Disegno meditativo a motivi: 1, 4 o 9 riquadri, linee guida a matita, raccolta di 6 motivi in tre passaggi
- Trova le differenze: disegni la scena, l'app la copia, tu cambi i particolari; soluzione cerchiata
- Unisci i puntini: numerazione automatica, controllo dei punti troppo vicini, numeri grandi
- Tangram: sette pezzi da spostare, ruotare e capovolgere; stampa della sagoma e dei pezzi da ritagliare
- Memory: carte con parole, disegni o foto proprie; stampa fronte e retro

**Parole**
- Cruciverba: le tue parole e definizioni, incastro automatico, numerazione, caselle nere facoltative
- Rebus: pezzi con lettere e 16 disegni semplici, controllo della lettura
- Crucipuzzle: griglie da 8×8 a 15×15, diagonali e parole al contrario facoltative, frase chiave
- Anagrammi e indovinelli: foglio pulito, risposte a parte

**Numeri e logica**
- Sudoku e binario: 4×4, 6×6, 9×9 (binario 4, 6, 8); numeri o forme colorate; controllo della soluzione unica e del livello
- Crucipixel: da 5×5 a 20×20, numeri a margine automatici, controllo che il disegno si ritrovi ragionando
- Quadrati magici: metodo passo passo (lati 3, 4, 5, 7), modo libero, varianti che restano magiche
- Percorso numerato: da 10 a 100 caselle, caselle speciali, controllo dei giri senza fine, dado e pedine da ritagliare
- Dama da stampare: 8×8 e 10×10, stile a contrasto forte o blu e giallo, pedine riconoscibili senza colori

**Sempre**
- I miei lavori: salvataggio, duplica, elimina, esporta e importa (anche come testo)
- Accessibilità: profili pronti, testo grande, contrasto alto, modalità mani tremanti, nessuna animazione, lettura ad alta voce
- Funziona senza connessione dopo la prima apertura; nessun dato lascia il dispositivo

## Come pubblicarla su GitHub Pages
1. Crea un nuovo repository pubblico su GitHub, per esempio `attivamente`.
2. Carica tutti i file di questa cartella, compresa la cartella `dizionario` (index.html, manifest.webmanifest, sw.js, icon.svg, dizionario/).
3. Vai in Settings → Pages, scegli "Deploy from a branch", ramo `main`, cartella `/ (root)`, e salva.
4. Dopo un paio di minuti l'app sarà online all'indirizzo `https://NOMEUTENTE.github.io/attivamente/`.
5. Da quell'indirizzo si crea il QR code per il corso.
