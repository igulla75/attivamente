# Giocogonia 3.54 – verifica (28 novembre 2026)

## Che cosa cambia rispetto alla 3.53
| # | Dove | Prima | Dopo |
|---|---|---|---|
| 1 | Percorso dei numeri, «Come si gioca», regola 4 | Se il dado ti **porterebbe** oltre l'ultima casella, ti fermi sull'ultima. | Se il dado ti **portasse** oltre l'ultima casella, ti **fermeresti** sull'ultima. |
| 2 | Sudoku, passo «Togli simboli», nota sotto l'aiuto | …non toglie mai un simbolo se la soluzione **smetterebbe** di essere unica. | …toglie un simbolo solo se la soluzione resta unica. |
| 3 | Percorso dei numeri, regola 5 (finestra «Come si gioca» e istruzioni sotto il gioco) | …vince chi arriva prima, ma la partita **è finita** quando arrivi tu. | Vince chi arriva prima all'ultima casella, ma tu continui comunque fino in fondo: la partita finisce quando arrivi tu. |
| 4 | Pagina Crea, etichette sugli studi | Su una sola riga: con un testo lungo uscivano dalla scheda (a 1024 px in 8 schede, a 1440 px nel Percorso dei numeri) | Vanno a capo e restano dentro la scheda |
| 5 | Numero di versione e cache | 3.53, giocogonia-v73 | 3.54, giocogonia-v74 |

Il comportamento dei giochi non cambia: nel punto 3 il gioco funzionava già così (se il computer arriva prima, chi gioca continua fino all'ultima casella); è cambiata solo la spiegazione.

Le modifiche sono applicate alla 3.53 dallo script `patch354.py`, che si ferma se un testo non si trova esattamente il numero di volte previsto. Il confronto riga per riga tra 3.53 e 3.54 mostra solo le righe elencate sopra; dizionario, manifest e icona sono identici.

## Ricerca dello stesso errore nel resto dell'app
Cercate tutte le frasi con «se» seguito da un condizionale (-rebbe, -rebbero, -resti, -rei, -remmo, -reste). Oltre ai punti 1 e 2, gli altri casi sono corretti (congiuntivo + condizionale, oppure «se» + indicativo con il condizionale nella frase principale). Cercati anche: qual'è, un'altro, perchè/poichè, pò, parole ripetute per errore: nessun caso nei testi visibili (le ripetizioni trovate sono volute: «passo passo», «piano piano»).
Questo non è una revisione completa di tutti i testi dell'app.

## Prove
| Prova | Risultato |
|---|---|
| Schede di Crea a 1440, 1024 e 390 px: contenuto che esce dalla scheda | 0 (nella 3.53: 1, 8 e 0) |
| Regola 4 nella finestra «Come si gioca» | testo nuovo presente |
| Tutti i 51 strumenti di Crea aperti uno per uno | 0 errori |
| t2 – tutti i livelli di Gioca | 0 errori |
| t5 – immagini esterne | 0 richieste esterne |
| t6 – memoria del browser rovinata | l'app parte sempre |
| t7 – clic su tutti i comandi (solo Percorso dei numeri e Sudoku, gli strumenti cambiati) | 120 clic, 0 errori |
| t10 – telefono | nessuna pagina più larga dello schermo, 0 errori |
| t12 – finestra delle regole | si chiude cambiando pagina |
| t13 – Copia con la griglia | 300 link veri accettati |
| t21 – nessun residuo del vecchio nome | 0 |
| t22 – Pentamini | 40 prove, 0 rifiutati |
| t25 – fogli svuotati, esportati e reimportati | 0 rifiuti |
| Aggiornamento 3.53 → 3.54 nel browser | la pagina passa alla 3.54; cache v73 cancellata, v74 creata; cache del dizionario conservata |
| Senza connessione dopo l'aggiornamento | app 3.54, regola nuova e dizionario (comuni e rare) disponibili |
| t15 – andata e ritorno dei link | 150 prove, 0 non accettati |
| t3 – link costruiti per rompere l'app: 30 giochi × 8 tipi di contenuto | 0 codice eseguito, 0 richieste esterne, 0 errori |

## Che cosa resta da fare o incerto
- Nessuna prova su telefoni e tablet veri: le prove sono fatte con Chrome che simula le dimensioni dello schermo.
- Una revisione completa dell'italiano di tutti i testi dell'app non è stata fatta.
