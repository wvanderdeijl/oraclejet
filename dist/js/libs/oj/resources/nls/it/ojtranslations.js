define({"oj-message":{fatal:"Irreversibile",error:"Errore",warning:"Avvertenza",info:"Informazioni",confirmation:"Conferma","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Il valore non è nel formato previsto.",detail:"Immettere un valore nel formato previsto.","plural-separator":", ",hint:{summary:"Esempio: {exampleValue}",detail:"Immettere un valore nello stesso formato di questo esempio: '{exampleValue}'","detail-plural":"Immettere un valore nello stesso formato di questi esempi: '{exampleValue}'"},
optionHint:{detail:"Un valore accettato per l'opzione '{propertyName}' è '{propertyValueValid}'.","detail-plural":"Valori accettati per l'opzione '{propertyName}' sono '{propertyValueValid}'."},optionTypesMismatch:{summary:"Per l'opzione '{requiredPropertyName}' è necessario specificare un valore quando l'opzione '{propertyName}' è impostata su '{propertyValue}'."},optionTypeInvalid:{summary:"Per l'opzione '{propertyName}' non è stato specificato un valore del tipo previsto."},optionOutOfRange:{summary:"Il valore {propertyValue} non è compreso nell'intervallo per l'opzione '{propertyName}',"},
optionValueInvalid:{summary:"Per l'opzione '{propertyName}' è stato specificato un valore '{propertyValue}' non valido."},number:{decimalFormatMismatch:{summary:"Il valore '{value}' non è nel formato numero previsto."},decimalFormatUnsupportedParse:{summary:"decimalFormat: 'short' e 'long' non sono supportati per l'analisi del convertitore.",detail:"Modificare il componente in readOnly. I campi readOnly non richiamano la funzione di analisi del convertitore."},currencyFormatMismatch:{summary:"Il valore '{value}' non è nel formato valuta previsto."},
percentFormatMismatch:{summary:"Il valore '{value}' non è nel formato percentuale previsto."}},datetime:{datetimeOutOfRange:{summary:"Il valore '{value}' non è compreso nell'intervallo per la proprietà '{propertyName}'.",detail:"Immettere un valore compreso tra '{minValue}' e '{maxValue}'."},dateFormatMismatch:{summary:"Il valore '{value}' non è nel formato data previsto."},timeFormatMismatch:{summary:"Il valore '{value}' non è nel formato ora previsto."},datetimeFormatMismatch:{summary:"Il valore '{value}' non è nel formato data e ora previsto."},
dateToWeekdayMismatch:{summary:"Il giorno '{date}' non è un '{weekday}'.",detail:"Immettere un giorno della settimana che corrisponde alla data."}}},"oj-validator":{length:{hint:{min:"Immettere {min} caratteri o più.",max:"Immettere {max} caratteri o meno",inRange:"Immettere {min} caratteri o più, fino a un massimo di {max}.",exact:"Immettere {length} caratteri."},messageDetail:{tooShort:"Immettere {min} caratteri o più, non di meno.",tooLong:"Immettere {max} caratteri o meno, non di più."},messageSummary:{tooShort:"Caratteri insufficienti.",
tooLong:"Troppi caratteri."}},range:{number:{hint:{min:"Immettere un numero maggiore o uguale a {min}.",max:"Immettere un numero minore o uguale a {max}.",inRange:"Immettere un numero compreso tra {min} e {max}."},messageDetail:{rangeUnderflow:"Il numero {value} deve essere maggiore o uguale a {min}.",rangeOverflow:"Il numero {value} deve essere minore o uguale a {max}."},messageSummary:{rangeUnderflow:"Numero troppo basso.",rangeOverflow:"Numero troppo alto."}},datetime:{hint:{min:"Immettere un valore di data/ora uguale o successivo a {min}.",
max:"Immettere un valore data/ora uguale o precedente a {max}.",inRange:"Immettere un valore di data/ora compreso tra i valori {min} e {max}."},messageDetail:{rangeUnderflow:"Il valore di data/ora deve essere uguale o successivo a {min}.",rangeOverflow:"Il valore di data/ora deve essere uguale o precedente a {max}."},messageSummary:{rangeUnderflow:"Valore di data/ora precedente alla data minima.",rangeOverflow:"Valore di data/ora successivo alla data massima."}}},restriction:{date:{messageSummary:"Data {value} di una voce disabilitata.",
messageDetail:"La data {value} non deve essere di una voce disabilitata."}},regExp:{summary:"Formato errato.",detail:"Il valore '{value}' deve corrispondere a questo pattern: '{pattern}'"},required:{summary:"Valore obbligatorio.",detail:"È necessario immettere un valore."}},"oj-editableValue":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputDate":{prevText:"Precedente",nextText:"Successivo",currentText:"Oggi",weekHeader:"Sett.",tooltipCalendar:"Seleziona data",tooltipCalendarDisabled:"Seleziona data disabilitato",
weekText:"Settimana",datePicker:"Selettore data",inputHelp:"Premere il tasto freccia GIÙ o il tasto freccia SU per accedere al calendario",inputHelpBoth:"Premere il tasto freccia GIÙ o il tasto freccia SU per accedere al calendario e Maiusc + tasto freccia GIÙ o tasto freccia SU per accedere all'elenco a discesa dell'ora",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",
messageDetail:""}},"oj-ojInputTime":{tooltipTime:"Seleziona ora",tooltipTimeDisabled:"Seleziona ora disabilitato",inputHelp:"Premere il tasto freccia GIÙ o il tasto freccia SU per accedere all'elenco a discesa dell'ora",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"Il valore deve corrispondere a questo pattern: '{pattern}'"}},
"oj-ojFilmStrip":{labelAccArrowNextPage:"Pagina successiva",labelAccArrowPreviousPage:"Pagina precedente",tipArrowNextPage:"Successivo",tipArrowPreviousPage:"Precedente"},"oj-ojDataGrid":{accessibleSortAscending:"{id} ordinato in ordine crescente",accessibleSortDescending:"{id} ordinato in ordine decrescente",accessibleActionableMode:"Accedi a modalità con interazione",accessibleNavigationMode:"Accedi a modalità di navigazione",accessibleSummaryExact:"Questa è una griglia dati con {rownum} righe e {colnum} colonne",
accessibleSummaryEstimate:"Questa è una griglia dati con numero di righe e colonne sconosciuto",accessibleSummaryExpanded:"Attualmente sono presenti {num} righe espanse",accessibleRowExpanded:"Riga espansa",accessibleRowCollapsed:"Riga compressa",accessibleRowSelected:"Riga {row} selezionata",accessibleColumnSelected:"Colonna {column} selezionata",accessibleStateSelected:"selezionato",accessibleMultiCellSelected:"{num} celle selezionate",accessibleRowContext:"Riga {index}",accessibleColumnContext:"Colonna {index}",
accessibleRowHeaderContext:"Intestazione riga {index}",accessibleColumnHeaderContext:"Intestazione colonna {index}",accessibleLevelContext:"Livello {level}",accessibleRangeSelectModeOn:"Modalità attiva - Aggiungi intervallo di celle selezionate",accessibleRangeSelectModeOff:"Modalità non attiva - Aggiungi intervallo di celle selezionate",accessibleFirstRow:"È stata raggiunta la prima riga",accessibleLastRow:"È stata raggiunta l'ultima riga",accessibleFirstColumn:"È stata raggiunta la prima colonna",
accessibleLastColumn:"È stata raggiunta l'ultima colonna",accessibleSelectionAffordanceTop:"Gestione prime selezioni",accessibleSelectionAffordanceBottom:"Gestione ultime selezioni",msgFetchingData:"Recupero dati in corso...",msgNoData:"Nessun elemento da visualizzare.",labelResize:"Ridimensiona",labelResizeWidth:"Ridimensiona larghezza",labelResizeHeight:"Ridimensiona altezza",labelSortRow:"Ordina riga",labelSortRowAsc:"Ordina riga con ordinamento crescente",labelSortRowDsc:"Ordina riga con ordinamento decrescente",
labelSortCol:"Ordina colonna",labelSortColAsc:"Ordina colonna con ordinamento crescente",labelSortColDsc:"Ordina colonna con ordinamento decrescente",labelCut:"Taglia",labelPaste:"Incolla",labelEnableNonContiguous:"Abilita la selezione di righe non contigue",labelDisableNonContiguous:"Disabilita la selezione di righe non contigue",labelResizeDialogSubmit:"OK"},"oj-ojRowExpander":{accessibleLevelDescription:"Livello {level}",accessibleRowDescription:"Livello {level}, Riga {num} di {total}",accessibleRowExpanded:"Riga espansa",
accessibleRowCollapsed:"Riga compressa",accessibleStateExpanded:"espanso",accessibleStateCollapsed:"compresso"},"oj-ojListView":{msgFetchingData:"Recupero dati in corso...",msgNoData:"Nessun elemento da visualizzare.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z"},"oj-_ojLabel":{tooltipHelp:"Guida in linea",tooltipRequired:"Obbligatorio"},"oj-ojInputNumber":{numberRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",
rangeOverflow:""}},tooltipDecrement:"Diminuisce",tooltipIncrement:"Aumenta"},"oj-ojTable":{labelAccSelectionAffordanceTop:"Gestione prime selezioni",labelAccSelectionAffordanceBottom:"Gestione ultime selezioni",labelSelectRow:"Seleziona riga",labelSelectColumn:"Seleziona colonna",labelSort:"Ordina",labelSortAsc:"Ordinamento crescente",labelSortDsc:"Ordinamento decrescente",msgFetchingData:"Recupero dati in corso...",msgNoData:"Nessun dato da visualizzare."},"oj-ojTabs":{labelCut:"Taglia",labelPasteBefore:"Incolla prima",
labelPasteAfter:"Incolla dopo",labelRemove:"Rimuovi",labelReorder:"Riordina",removeCueText:"Rimovibile"},"oj-ojSelect":{seachField:"Campo di ricerca",noMatchesFound:"Nessuna corrispondenza trovata"},"oj-ojSwitch":{SwitchON:"Attivo",SwitchOFF:"Non attivo"},"oj-ojCombobox":{noMatchesFound:"Nessuna corrispondenza trovata"},"oj-ojInputSearch":{noMatchesFound:"Nessuna corrispondenza trovata"},"oj-ojTree":{stateLoading:"Caricamento in corso...",labelNewNode:"Nuovo nodo",labelMultiSelection:"Selezione multipla",
labelEdit:"Modifica",labelCreate:"Crea",labelCut:"Taglia",labelCopy:"Copia",labelPaste:"Incolla",labelRemove:"Rimuovi",labelRename:"Rinomina",labelNoData:"Nessun dato"},"oj-ojPagingControl":{labelAccPaging:"Impaginazione",labelAccNavFirstPage:"Prima pagina",labelAccNavLastPage:"Ultima pagina",labelAccNavNextPage:"Pagina successiva",labelAccNavPreviousPage:"Pagina precedente",labelAccNavPage:"Pagina",labelLoadMore:"Mostra altri...",labelLoadMoreMaxRows:"Raggiunto il limite massimo di {maxRows} righe",
labelNavInputPage:"Pagina",labelNavInputPageMax:"di {pageMax}",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"di",msgItemRangeOfAtLeast:"di almeno",msgItemRangeOfApprox:"di circa",msgItemRangeItems:"elementi",tipNavInputPage:"Vai a pagina",tipNavPageLink:"Vai a pagina {pageNum}",tipNavNextPage:"Successiva",tipNavPreviousPage:"Precedente",tipNavFirstPage:"Prima",tipNavLastPage:"Ultima",pageInvalid:{summary:"Il valore pagina immesso non è valido.",detail:"Immettere un valore maggiore di 0."},
maxPageLinksInvalid:{summary:"Il valore di maxPageLinks non è valido.",detail:"Immettere un valore maggiore di 4."}},"oj-ojMasonryLayout":{labelCut:"Taglia",labelPasteBefore:"Incolla prima",labelPasteAfter:"Incolla dopo"},"oj-panel":{labelAccButtonExpand:"Espandi",labelAccButtonCollapse:"Comprimi",labelAccButtonRemove:"Rimuovi"},"oj-ojChart":{labelDefaultGroupName:"Gruppo {0}",labelSeries:"Serie",labelGroup:"Gruppo",labelDate:"Data",labelValue:"Valore",labelTargetValue:"Destinazione",labelX:"X",labelY:"Y",
labelZ:"Z",labelPercentage:"Percentuale",labelLow:"Basso",labelHigh:"Alto",labelOpen:"Aperto",labelClose:"Chiuso",labelVolume:"Volume",labelMin:"Min",labelMax:"Max",labelOther:"Altri",tooltipPan:"Panoramica",tooltipSelect:"Selezione cornice",tooltipZoom:"Zoom cornice",componentName:"Grafico"},"oj-dvtBaseGauge":{componentName:"Indicatore"},"oj-ojDiagram":{componentName:"Diagramma"},"oj-ojLegend":{componentName:"Legenda "},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Altri",labelGroup:"Gruppo",
labelSize:"Dimensione",labelAdditionalData:"Dati aggiuntivi",componentName:"NBox"},"oj-ojPictoChart":{componentName:"Grafico a immagini"},"oj-ojSparkChart":{componentName:"Grafico"},"oj-ojSunburst":{labelColor:"Colore",labelSize:"Dimensione",componentName:"Sunburst"},"oj-ojTagCloud":{componentName:"Cloud di tag"},"oj-ojThematicMap":{componentName:"Mappa tematica"},"oj-ojTimeline":{componentName:"Controllo temporale",labelSeries:"Serie",tooltipZoomIn:"Ingrandisci",tooltipZoomOut:"Riduci"},"oj-ojTreemap":{labelColor:"Colore",
labelSize:"Dimensione",tooltipIsolate:"Isola",tooltipRestore:"Ripristina",componentName:"Mappa struttura"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",labelInvalidData:"Dati non validi",labelNoData:"Nessun dato da visualizzare",labelClearSelection:"Cancella selezione",labelDataVisualization:"Visualizzazione dati",stateSelected:"Selezionato",stateUnselected:"Non selezionato",
stateMaximized:"Ingrandito",stateMinimized:"Ridotto a icona",stateExpanded:"Espanso",stateCollapsed:"Compresso",stateIsolated:"Isolato",stateHidden:"Nascosto",stateVisible:"Visibile",stateDrillable:"Con drilling",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} di {1}"},"oj-ojNavigationList":{defaultRootLabel:"Lista di navigazione",hierMenuBtnLabel:"Pulsante Menu gerarchico",selectedLabel:"selezionato",previousIcon:"Precedente",msgFetchingData:"Recupero dati in corso...",msgNoData:"Nessun elemento da visualizzare."},
"oj-ojSlider":{noValue:"ojSlider non ha valore",maxMin:"Il valore massimo non deve essere inferiore al valore minimo",valueRange:"Il valore deve essere compreso nell'intervallo minimo-massimo",optionNum:"L'opzione {option} non è un numero",invalidStep:"Passo non valido; il passo deve essere > 0"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Accesso al popup. Premere F6 per spostarsi tra il popup e il controllo associato.",ariaLiveRegionInitialFocusNone:"Popup aperto. Premere F6 per spostarsi tra il popup e il controllo associato.",
ariaLiveRegionInitialFocusFirstFocusableTouch:"Accesso al popup. Il popup può essere chiuso spostandosi all'ultimo collegamento all'interno del popup.",ariaLiveRegionInitialFocusNoneTouch:"Popup aperto.  Spostarsi al collegamento successivo per stabilire l'elemento attivo all'interno del popup.",ariaFocusSkipLink:"Toccare due volte per spostarsi al popup aperto.",ariaCloseSkipLink:"Toccare due volte per chiudere il popup aperto."},"oj-ojMenu":{ariaLiveRegionInitialFocusMenuTouch:"Immissione menu. È possibile chiudere il menu senza selezionare una voce di menu, spostandosi sul collegamento che segue il menu.",
ariaLiveRegionInitialFocusNoneTouch:"Menu aperto. Spostarsi sul collegamento successivo per stabilire l'elemento attivo all'interno del menu.","ariaPreceding Link":"Spostarsi avanti per raggiungere il menu aperto.",ariaFocusSkipLink:"Toccare due volte per spostarsi sul menu aperto.",ariaCloseSkipLink:"Toccare due volte per chiudere il menu aperto."},"oj-pullToRefresh":{ariaRefreshLink:"Attiva il collegamento per aggiornare il contenuto",ariaRefreshingLink:"Aggiornamento del contenuto",ariaRefreshCompleteLink:"Aggiornamento completato"},
"oj-ojIndexer":{indexerOthers:"#",ariaDisabledLabel:"Intestazione Nessun gruppo corrispondente",ariaOthersLabel:"numero",ariaInBetweenText:"Tra {first} e {second}",ariaKeyboardInstructionText:"Premere Invio per selezionare un valore.",ariaTouchInstructionText:"Toccare 2 volte e tenere premuto per immettere la modalità movimento,quindi trascinare su o giù per regolare il valore."}});