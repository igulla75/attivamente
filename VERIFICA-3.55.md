# Giocogonia 3.55 – verifica (28 novembre 2026)

## Che cosa cambia rispetto alla 3.54
Unisci i puntini: **figura automatica da un'immagine**, in due modi.

- **Nuovo pulsante «Ricava il contorno dall'immagine».** Si attiva quando sotto il foglio c'è una foto, un disegno o un'opera libera da diritti. Si sceglie «Che cosa ricavare»: le linee del disegno (modo predefinito) o il contorno delle sagome.

### Modo «Le linee del disegno, punti sugli angoli» (nuovo)
- **Come lavora:**
  1. l'immagine viene ridotta a una griglia di 400 × 400 quadratini;
  2. si trovano le linee: per «Disegno o incisione» i quadratini più scuri dei dintorni (soglia adattiva su una finestra di 15 × 15); per «Foto o dipinto» i bordi, dove la luce cambia di colpo (filtro di Sobel, si tengono i bordi più forti: il 6%, 10% o 15% secondo il dettaglio);
  3. le linee si assottigliano fino a un quadratino di spessore (metodo di Zhang-Suen) e si seguono da un capo all'altro;
  4. si scartano i pezzetti troppo corti e si tengono al massimo 20, 50 o 120 linee (Essenziale, Medio, Ricco);
  5. le linee si mettono in un ordine per cui la successiva comincia vicino a dove finisce la precedente; se comincia proprio lì, diventa la stessa linea (niente matita alzata);
  6. i puntini vanno **sugli angoli**: ogni linea si semplifica (Ramer-Douglas-Peucker) quanto basta per avere il numero di puntini scelto; dove la linea è dritta restano due punti, nei particolari si infittiscono;
  7. due punti consecutivi stanno ad almeno 22 unità del foglio (su 1000);
  8. **pulizia:** se due numeri non consecutivi finiscono più vicini della distanza che «Controlla» segnala (28 unità, 40 con i numeri grandi), si toglie quello dei due che cambia meno la forma (il più vicino alla retta fra il punto prima e quello dopo). Ogni parte tiene almeno 2 punti, 3 se chiusa.
- Il numero proposto è quello che si ottiene davvero dopo la pulizia.
- Nel pannello dei puntini c'è la casella **«Punti sugli angoli»**: si può spegnere (puntini distribuiti a distanze uguali, come prima) e riaccendere, anche per figure disegnate a mano.

### Modo «Il contorno delle sagome»
- **Come lavora:**
  1. l'immagine viene ridotta a una griglia di 280 × 280 quadratini, disposta come sul foglio;
  2. viene resa in toni di grigio e sfocata appena;
  3. la soglia fra chiaro e scuro si calcola con il metodo di Otsu;
  4. si seguono i bordi delle zone scure, compresi i buchi interni;
  5. le linee vengono ammorbidite e semplificate (Ramer-Douglas-Peucker).
- **Comandi (valgono per tutti e due i modi; nel modo a linee il cursore rende più o meno sensibile la ricerca delle linee e la casella vale per i disegni chiari su fondo scuro):**
  - tre livelli di dettaglio: Essenziale (la zona più grande, senza buchi), Medio (fino a 6 zone con i buchi grandi), Ricco (fino a 24 zone con i buchi medi);
  - la casella «La figura è chiara su fondo scuro»;
  - un cursore per spostare la soglia.
- **Due accorgimenti:**
  - se un buco è grande più del 60% della sua zona, la figura è una linea sottile: si tiene un solo contorno invece di due;
  - dopo il contorno l'app propone quanti puntini usare, perché i numeri restino leggibili: un punto ogni 44 unità del foglio con i numeri grandi, ogni 32 con quelli piccoli, cioè la distanza usata da «Controlla» più un margine.
### Altre modifiche
- **«Controlla»** non segnala più come troppo vicini il primo e l'ultimo punto di una parte chiusa: sono uniti da una linea. Prima davano un avviso sbagliato.
- **Fino a 500 puntini** (prima 300). Oltre i 300 i numeri sono più piccoli e il controllo parla di «una grande sfida».
- **Limiti dei file e dei link ricevuti** portati a 500 punti; gli indici delle parti possono arrivare a 499.
- **Musei:** nello strumento compaiono i passi per prendere un'opera dai musei con raccolte libere, gli stessi di Colorare con i numeri, adattati ai disegni.
- **Testi aggiornati:** introduzione, passi, «Come si crea», scheda in Crea.
- **Privacy:** tutto avviene sul dispositivo; l'immagine non viene inviata a nessuno.

Le modifiche sono applicate alla 3.54 dallo script `patch355.py`, che si ferma se un testo non si trova esattamente il numero di volte previsto.

## Prove del modo a linee (Chrome, con immagini disegnate per la prova)
Immagini: un pesce disegnato a tratto (contorno, occhio, branchie, pinne, coda), lo stesso pesce con un tratteggio, un «dipinto» con sfumature e ombra, la sagoma di un gatto.

| Immagine | Tipo / dettaglio | Linee | Puntini proposti = ottenuti | «Controlla» |
|---|---|---|---|---|
| Pesce a tratto | Disegno / Medio | 7 | 45 | ben distanziati |
| Pesce a tratto | Disegno / Ricco | 7 | 50 | ben distanziati |
| Pesce con tratteggio | Disegno / Medio | 7 | 46 | ben distanziati |
| Dipinto con sfumature | Foto / Medio | 4 | 41 | ben distanziati |
| Gatto (sagoma) | Disegno / Medio | 3 | 39 | ben distanziati |

- Tempo di calcolo: circa 0,27 secondi per immagine sul computer di prova.
- **Controllo a vista** del foglio (dati delle coordinate ridisegnati, e fotografia del foglio dentro l'app): il pesce è riconoscibile, con pinne, coda, occhio e branchie; i numeri seguono la linea; le stelline segnano dove alzare la matita.
- **Durante la messa a punto ho corretto tre difetti visti sui fogli:** linee spezzate in due con numeri doppi nello stesso punto (ora si uniscono); punti troppo fitti (distanza minima portata a 22); la prima pulizia toglieva punti importanti (punte delle pinne, orecchie del gatto): ora toglie quello che cambia meno la forma.
- Casella «Punti sugli angoli»: spenta, i puntini si ridistribuiscono; riaccesa, tornano identici.
- Numero di puntini cambiato a 90 con gli angoli attivi: 90 puntini.
- Lavoro salvato, pagina ricaricata: bozza identica, casella ancora accesa. Lo stesso lavoro, come file o link ricevuto, viene accettato.

## Prove del modo a sagome (Chrome, con immagini disegnate per la prova)
| Immagine | Dettaglio | Risultato |
|---|---|---|
| Sagoma di gatto scura su bianco | Essenziale / Ricco | 1 parte (37 e 58 vertici) |
| Casa scura con 2 finestre e porta, su fondo crema | Medio | 3 parti: contorno esterno e le due finestre; la porta tocca il bordo e resta nel contorno esterno |
| La stessa casa | Essenziale | 1 parte |
| Stella chiara su fondo scuro, senza la casella | Medio | avviso «La parte scura copre quasi tutta l'immagine» |
| La stessa stella, con la casella | Medio | 1 parte, la stella |
| Stella disegnata con una linea scura | Essenziale e Medio | 1 parte: grazie alla regola della linea sottile non c'è più il contorno doppio |

## Altre prove
| Prova | Risultato |
|---|---|
| Gatto: puntini proposti | 56 proposti, 55 distribuiti; «Controlla» segnala solo 3 coppie vicine all'attaccatura della coda |
| Casa (Ricco): puntini proposti | 81 proposti, 78 distribuiti; 2 coppie vicine agli angoli della porta |
| 500 puntini richiesti sulla casa | 497 distribuiti (le parti chiuse non ripetono il primo punto), 497 numeri disegnati |
| Lavoro con 500 punti, salvato e riaperto, con e senza foto | accettato; con i vecchi limiti della 3.54 lo stesso lavoro viene rifiutato, quindi la prova è significativa |
| Riquadro «Prendere un'opera da un museo» | si apre; il pulsante «Scegli l'immagine» apre la scelta del file |
| Errori JavaScript durante tutte le prove | 0 |

## Prove di regressione (tutta l'app)
| Prova | Risultato |
|---|---|
| Aggiornamento da 3.54 a 3.55 (Chrome con l'app già installata) | la versione passa a 3.55, la cache v74 viene sostituita dalla v75; senza connessione l'app si apre in 3.55, Unisci i puntini mostra i due modi, il dizionario resta disponibile; 0 errori |
| t2: generazione e comandi di tutti i 31 giochi | 0 errori |
| t3: 8 tipi di testo malevolo in tutti i giochi (ripetuta in tre parti) | 0 XSS, 0 richieste esterne, 0 errori |
| t1, t4: forma dei dati dei lavori | eseguite: ogni gioco produce i suoi lavori di prova (5, Colorare 6) |
| t5: importazione e richieste esterne | nessuna richiesta esterna, 0 errori |
| t6: dati rovinati nel salvataggio locale | la pagina si apre, 0 errori |
| t10: testi troppo piccoli o troppo larghi | nessuno |
| t12: navigazione fra lezioni | eseguita, nessun errore segnalato |
| t13: strumento Copia | 0 errori |
| t21: nome dell'app | nessun residuo del vecchio nome |
| t22: pentamini | 40 prove, 0 rifiuti |
| t25: pulsanti di cancellazione e limiti | 0 rifiuti, 0 errori |

Nota: t2 e t3 sono state eseguite prima degli ultimi ritocchi al modo a linee. Quei ritocchi toccano solo le funzioni del modo a linee e il controllo di «Unisci i puntini», che t2 e t3 non usano; le prove che li usano (t13, t25 e quelle del modo a linee) sono state ripetute dopo.

## Che cosa resta da fare o incerto
- **Prove con opere vere dei musei:** non sono state fatte, perché dall'ambiente di lavoro non si possono scaricare immagini. Vanno fatte sul dispositivo.
- **Dipinti pieni di sfumature:** danno contorni confusi. L'app lo dice e consiglia di ritoccare a mano o di scegliere un'altra opera.
- **Disegni a linee con molti tratti interni**: nel modo a sagome le linee interne possono venire doppie; per questi c'è ora il modo a linee.
- **Particolari piccoli** (per esempio l'occhio del pesce): i numeri restano vicini fra loro anche se i punti non si toccano. Si sistemano spostando i punti a mano o aumentando la dimensione della figura.
- **Dove due linee si toccano** (per esempio la coda attaccata al corpo) la pulizia può accorciare un po' una delle due linee.
- **Dipinti con ombre e sfumature:** nel modo a linee anche le ombre diventano linee, e un contorno può risultare spezzato (nella prova, la sagoma del dipinto aveva due interruzioni).
- **Modo a sagome:** la differenza fra puntini proposti e distribuiti (per esempio 67 e 65) c'era già e resta: le parti chiuse non ripetono il primo punto.
- **Leggibilità:** 500 puntini sono leggibili solo su contorni molto lunghi e ricchi di particolari; su una figura semplice i numeri si sovrappongono. Per questo l'app propone un numero più basso.
- **Nessuna prova su telefoni e tablet veri.**
