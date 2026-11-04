# AttivaMente – Il laboratorio dei giochi da creare

App web gratuita che accompagna il corso. Funziona su telefono, tablet e computer, si può installare come un'icona e lavora anche senza connessione. Nessun account, nessun dato inviato: tutto resta sul dispositivo.

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
- **Come si usa**: guida completa dentro l'app (creare, salvare, stampare e fare un PDF, condividere, installare sul telefono, accessibilità, livelli di prova, giochi di squadra, privacy, domande frequenti)
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
