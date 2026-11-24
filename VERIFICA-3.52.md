# AttivaMente 3.52 – verifica (24 novembre 2026)

Collaudo fatto da Claude al posto della verifica indipendente di ChatGPT, che non è stata possibile. Ho usato la stessa impostazione avversaria: cercare quello che le prove precedenti non coprivano. Una verifica fatta da chi ha scritto le correzioni non è indipendente: va tenuto presente.

Browser: Google Chrome senza finestra (headless), pilotato da script. L'app era servita in HTTPS da un server locale, così il service worker funziona come online.

## Prove fatte sulla 3.51 (versione di partenza)
| Prova | Esito |
|---|---|
| Gioca: 31 giochi × tutti i livelli (156 partite), più Controlla, Aiuto, Mostra la soluzione e Stampa | 0 errori, nessun NaN/undefined. Più lento: Parole a incastro Esperto, 5–14 s |
| Crea: 50 strumenti, 2.650 clic a caso su pulsanti, scelte e caselle | 0 errori |
| Link ostili: 30 giochi × 8 tipi di testo (virgolette, tag HTML, entità, javascript:, data:svg, url(), indirizzi web, testi di 5.000 lettere) | nessun codice eseguito, nessuna richiesta esterna. **2 difetti** (B, C) |
| File ricevuti con immagini prese da internet | **difetto A** |
| Indirizzi strani (#p-__proto__-0, #gioca=… rovinati, link da 200.000 caratteri…) | **difetto D** |
| Memoria del browser rovinata (6 casi) | **difetto E** |
| Telefono 375×800, 30 schermate | **difetti F, G, H** |
| Tasto Indietro con «Come si gioca» aperto | **difetto I** |

## Difetti trovati e corretti nella 3.52
- **A – Privacy.** Un file ricevuto poteva contenere l'indirizzo internet di un'immagine (foto del Memory, sfondo di Trova le differenze). Aprendolo, l'app la scaricava: chi aveva preparato il file poteva sapere quando e da dove era stato aperto. Questo contraddiceva «nessun dato inviato». Ora un testo ricevuto che è un indirizzo (http, https, //, ftp, file, blob, javascript…) o un dato non immagine diventa vuoto. Restano ammesse solo le foto incluse nel file (PNG, JPEG, WebP, GIF). Prova: 0 richieste esterne. Le foto vere restano, i testi normali come «Data: 12 marzo» non cambiano.
- **B – Copia con la griglia.** Un link con i segmenti scritti male veniva accettato e disegnava linee «NaN» (104 errori per prova). Nuova regola: ogni segmento deve unire due punti vicini dentro la griglia. Le 300 partite vere provate (5 livelli × 60) sono tutte accettate, e così tutte le linee possibili da 4×4 a 8×8.
- **C – Testi lunghissimi.** Nell'Enigma logico una parola di 5.000 lettere allargava la pagina a 78.550 px. Ora va a capo.
- **D –** L'indirizzo `#impara-__proto__` dava un errore. Ora porta alla pagina iniziale.
- **E – Memoria del browser rovinata.** Con un archivio rovinato l'app non partiva più, a ogni apertura. Ora parte, e il testo rovinato viene conservato in `attivamente.v1.rovinato`. Tutti e 6 i casi provati partono.
- **F – Telefono, intestazione.** Occupava 248 px, quasi un terzo dello schermo. Ora 115 px: il menu sta su una riga che scorre di lato.
- **G – Telefono, comandi piccoli.** Le caselle di spunta erano di 22 px, ora 28 px. Il cursore dello spessore in Linee libere era alto 16 px, ora 36 px.
- **H – Telefono, livelli fitti.** Hexadoku, Tangram Difficile/Esperto ed Esperto di Crucipuzzle, Crittografato, Crucipixel, Mahjong, Labirinto e Ponti mostrano ora un avviso: usare «Ingrandisci o sposta», girare il telefono o scegliere un livello più basso. Sul computer l'avviso non compare.
- **I – Finestra «Come si gioca».** Con il tasto Indietro restava aperta sopra la pagina nuova, per esempio le regole del Memory sopra la pagina iniziale. Ora si chiude cambiando pagina.
- **L – Schermo intero.** Dove il browser non lo permette (per esempio sull'iPhone) il pulsante non faceva niente. Ora lo dice e suggerisce «Ingrandisci o sposta».

## Regressione sulla 3.52
- Gioca: 156 partite, 0 errori. Crea: 50 strumenti, 2.650 clic, 0 errori.
- Link ostili: 0 errori, 0 richieste esterne, nessun codice eseguito.
- Andata e ritorno: 150 lavori creati con clic a caso in tutti gli strumenti, esportati e reimportati. Tutti accettati.
- Senza connessione: service worker v72 attivo, pagina e dizionario disponibili offline. 63 pagine aperte senza errori.
- Telefono: 30 schermate, nessun comando sotto i 24 px, nessuno scorrimento laterale, intestazione di 115 px.

## Limiti e cose non verificate
- Nessuna prova su dispositivi veri: iPhone, Android, tablet, lettore di schermo, stampa su carta.
- Un testo che comincia con un indirizzo web, scritto dall'utente in un gioco e poi mandato ad altri, ora arriva vuoto. È un compromesso voluto.
- I sorgenti separati e le prove automatiche precedenti (src/, tools/, tests/) sono andati persi: le correzioni sono state fatte direttamente su index.html con `patch352.py`, che controlla che ogni modifica trovi il testo esatto. Gli script di prova usati qui sono nello zip delle prove.
- `sw.js` è quello riscritto il 24/11, con la cache v72.
