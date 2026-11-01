# AttivaMente – Il laboratorio dei giochi da creare

App web gratuita che accompagna il corso. Funziona su telefono, tablet e computer, si può installare come un'icona e lavora anche senza connessione. Nessun account, nessun dato inviato: tutto resta sul dispositivo.

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
