/*!
* DevExtreme (dx.messages.nl.js)
* Version: 21.1.12
* Build date: Fri Apr 07 2023
*
* Copyright (c) 2012 - 2023 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define((function(require) {
            factory(require("devextreme/localization"))
        }))
    } else if ("object" === typeof module && module.exports) {
        factory(require("devextreme/localization"))
    } else {
        factory(DevExpress.localization)
    }
}(0, (function(localization) {
    localization.loadMessages({
        nl: {
            Yes: "Ja",
            No: "Nee",
            Cancel: "Annuleren",
            Clear: "Wissen",
            Done: "Klaar",
            Loading: "Laden...",
            Select: "Kiezen...",
            Search: "Zoeken",
            Back: "Terug",
            OK: "OK",
            "dxCollectionWidget-noDataText": "Geen gegevens om te tonen",
            "dxDropDownEditor-selectLabel": "Kiezen",
            "validation-required": "Verplicht",
            "validation-required-formatted": "{0} is verplicht",
            "validation-numeric": "Waarde moet numeriek zijn",
            "validation-numeric-formatted": "{0} moet numeriek zijn",
            "validation-range": "Waarde is niet binnen het bereik",
            "validation-range-formatted": "{0} is niet binnen het bereik",
            "validation-stringLength": "De lengte van de waarde is niet correct",
            "validation-stringLength-formatted": "De lengte van {0}  is niet correct",
            "validation-custom": "Waarde is ongeldig",
            "validation-custom-formatted": "{0} is ongeldig",
            "validation-async": "Waarde is ongeldig",
            "validation-async-formatted": "{0} is ongeldig",
            "validation-compare": "Waardes komen niet overeen",
            "validation-compare-formatted": "{0} komen niet overeen",
            "validation-pattern": "Waarde komt niet overeen met het patroon",
            "validation-pattern-formatted": "{0} komt niet overeen met het patroon",
            "validation-email": "Email is niet geldig",
            "validation-email-formatted": "{0} is niet geldig",
            "validation-mask": "Waarde is niet geldig",
            "dxLookup-searchPlaceholder": "Minimum aantal karakters: {0}",
            "dxList-pullingDownText": "Trek naar beneden om te vernieuwen...",
            "dxList-pulledDownText": "Laat los om te vernieuwen...",
            "dxList-refreshingText": "Vernieuwen...",
            "dxList-pageLoadingText": "Laden...",
            "dxList-nextButtonText": "Meer",
            "dxList-selectAll": "Selecteer Alles",
            "dxListEditDecorator-delete": "Verwijderen",
            "dxListEditDecorator-more": "Meer",
            "dxScrollView-pullingDownText": "Trek naar beneden om te vernieuwen...",
            "dxScrollView-pulledDownText": "Laat los om te vernieuwen...",
            "dxScrollView-refreshingText": "Vernieuwen...",
            "dxScrollView-reachBottomText": "Laden...",
            "dxDateBox-simulatedDataPickerTitleTime": "Selecteer tijd",
            "dxDateBox-simulatedDataPickerTitleDate": "Selecteer datum",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Selecteer datum and tijd",
            "dxDateBox-validation-datetime": "Waarde moet een datum of tijd zijn",
            "dxFileUploader-selectFile": "Selecteer bestand",
            "dxFileUploader-dropFile": "of sleep bestand hier",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Uploaden",
            "dxFileUploader-uploaded": "Ge\xfcpload",
            "dxFileUploader-readyToUpload": "Klaar om te uploaden",
            "dxFileUploader-uploadAbortedMessage": "TODO",
            "dxFileUploader-uploadFailedMessage": "Uploaden is mislukt",
            "dxFileUploader-invalidFileExtension": "Dit bestandstype is niet toegestaan",
            "dxFileUploader-invalidMaxFileSize": "Het bestand is te groot",
            "dxFileUploader-invalidMinFileSize": "Het bestand is te klein",
            "dxRangeSlider-ariaFrom": "Van",
            "dxRangeSlider-ariaTill": "Tot",
            "dxSwitch-switchedOnText": "AAN",
            "dxSwitch-switchedOffText": "UIT",
            "dxForm-optionalMark": "optioneel",
            "dxForm-requiredMessage": "{0} is verplicht",
            "dxNumberBox-invalidValueMessage": "Waarde moet een nummer zijn",
            "dxNumberBox-noDataText": "Geen gegevens",
            "dxDataGrid-columnChooserTitle": "Kolom Kiezer",
            "dxDataGrid-columnChooserEmptyText": "Sleep hier een kolomkop om hem te verbergen",
            "dxDataGrid-groupContinuesMessage": "Gaat verder op de volgende pagina",
            "dxDataGrid-groupContinuedMessage": "Vervolg van de vorige pagina",
            "dxDataGrid-groupHeaderText": "Groepeer op deze kolom",
            "dxDataGrid-ungroupHeaderText": "Degroeperen",
            "dxDataGrid-ungroupAllText": "Alle Degroeperen",
            "dxDataGrid-editingEditRow": "Wijzigen",
            "dxDataGrid-editingSaveRowChanges": "Opslaan",
            "dxDataGrid-editingCancelRowChanges": "Annuleren",
            "dxDataGrid-editingDeleteRow": "Verwijderen",
            "dxDataGrid-editingUndeleteRow": "Ongedaan maken",
            "dxDataGrid-editingConfirmDeleteMessage": "Moet dit record verwijderd worden?",
            "dxDataGrid-validationCancelChanges": "Wijzigingen annuleren",
            "dxDataGrid-groupPanelEmptyText": "Sleep hier een kolomkop om er op te groeperen",
            "dxDataGrid-noDataText": "Geen gegevens",
            "dxDataGrid-searchPanelPlaceholder": "Zoeken...",
            "dxDataGrid-filterRowShowAllText": "(Alle)",
            "dxDataGrid-filterRowResetOperationText": "Reset",
            "dxDataGrid-filterRowOperationEquals": "Gelijk aan",
            "dxDataGrid-filterRowOperationNotEquals": "Niet gelijk aan",
            "dxDataGrid-filterRowOperationLess": "Kleiner dan",
            "dxDataGrid-filterRowOperationLessOrEquals": "Kleiner dan of gelijk aan",
            "dxDataGrid-filterRowOperationGreater": "Groter dan",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Groter dan of gelijk aan",
            "dxDataGrid-filterRowOperationStartsWith": "Begint met",
            "dxDataGrid-filterRowOperationContains": "Bevat",
            "dxDataGrid-filterRowOperationNotContains": "Bevat niet",
            "dxDataGrid-filterRowOperationEndsWith": "Eindigt met",
            "dxDataGrid-filterRowOperationBetween": "Tussen",
            "dxDataGrid-filterRowOperationBetweenStartText": "Begin",
            "dxDataGrid-filterRowOperationBetweenEndText": "Einde",
            "dxDataGrid-applyFilterText": "Filter toepassen",
            "dxDataGrid-trueText": "waar",
            "dxDataGrid-falseText": "niet waar",
            "dxDataGrid-sortingAscendingText": "Sorteer Oplopend",
            "dxDataGrid-sortingDescendingText": "Sorteer Aflopend",
            "dxDataGrid-sortingClearText": "Sortering wissen",
            "dxDataGrid-editingSaveAllChanges": "Wijzigingen opslaan",
            "dxDataGrid-editingCancelAllChanges": "Wijzigingen annuleren",
            "dxDataGrid-editingAddRow": "Rij toevoegen",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Min van {1} is {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Max van {1} is {0}",
            "dxDataGrid-summaryAvg": "Gem: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Gem van {1} is {0}",
            "dxDataGrid-summarySum": "Som: {0}",
            "dxDataGrid-summarySumOtherColumn": "Som van {1} is {0}",
            "dxDataGrid-summaryCount": "Aantal: {0}",
            "dxDataGrid-columnFixingFix": "Blokkeren",
            "dxDataGrid-columnFixingUnfix": "Blokkering opheffen",
            "dxDataGrid-columnFixingLeftPosition": "Naar links",
            "dxDataGrid-columnFixingRightPosition": "Naar rechts",
            "dxDataGrid-exportTo": "Exporteren",
            "dxDataGrid-exportToExcel": "Exporteer naar Excel bestand",
            "dxDataGrid-exporting": "Exporteren...",
            "dxDataGrid-excelFormat": "Excel bestand",
            "dxDataGrid-selectedRows": "Geselecteerde rijen",
            "dxDataGrid-exportSelectedRows": "Exporteer geselecteerde rijen",
            "dxDataGrid-exportAll": "Exporteer alle gegevens",
            "dxDataGrid-headerFilterEmptyValue": "(Leeg)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Annuleren",
            "dxDataGrid-ariaColumn": "Kolom",
            "dxDataGrid-ariaValue": "Waarde",
            "dxDataGrid-ariaFilterCell": "Filter cel",
            "dxDataGrid-ariaCollapse": "Inklappen",
            "dxDataGrid-ariaExpand": "Uitklappen",
            "dxDataGrid-ariaDataGrid": "Gegevenstabel",
            "dxDataGrid-ariaSearchInGrid": "Zoeken in gegevenstabel",
            "dxDataGrid-ariaSelectAll": "Selecteer alle",
            "dxDataGrid-ariaSelectRow": "Selecteer rij",
            "dxDataGrid-filterBuilderPopupTitle": "Filterbouwer",
            "dxDataGrid-filterPanelCreateFilter": "Maak Filter",
            "dxDataGrid-filterPanelClearFilter": "Wissen",
            "dxDataGrid-filterPanelFilterEnabledHint": "Filter activeren",
            "dxTreeList-ariaTreeList": "Boomstructuur",
            "dxTreeList-editingAddRowToNode": "Toevoegen",
            "dxPager-infoText": "Pagina {0} van {1} ({2} items)",
            "dxPager-pagesCountText": "van",
            "dxPager-pageSizesAllText": "Alle",
            "dxPivotGrid-grandTotal": "Eindtotaal",
            "dxPivotGrid-total": "{0} Totaal",
            "dxPivotGrid-fieldChooserTitle": "Veldenkiezer",
            "dxPivotGrid-showFieldChooser": "Toon Veldenkiezer",
            "dxPivotGrid-expandAll": "Alle Uitklappen",
            "dxPivotGrid-collapseAll": "Alle Inklappen",
            "dxPivotGrid-sortColumnBySummary": 'Sorteer "{0}" op Deze Kolom',
            "dxPivotGrid-sortRowBySummary": 'Sorteer "{0}" op Deze Rij',
            "dxPivotGrid-removeAllSorting": "Verwijderen Alle Sorteringen",
            "dxPivotGrid-dataNotAvailable": "N/B",
            "dxPivotGrid-rowFields": "Rijvelden",
            "dxPivotGrid-columnFields": "Kolomvelden",
            "dxPivotGrid-dataFields": "Gegevensvelden",
            "dxPivotGrid-filterFields": "Filtervelden",
            "dxPivotGrid-allFields": "Alle Velden",
            "dxPivotGrid-columnFieldArea": "Sleep Kolomvelden Hier",
            "dxPivotGrid-dataFieldArea": "Sleep Gegevensvelden Hier",
            "dxPivotGrid-rowFieldArea": "Sleep Rijvelden Hier",
            "dxPivotGrid-filterFieldArea": "Sleep Filtervelden Hier",
            "dxScheduler-editorLabelTitle": "Onderwerp",
            "dxScheduler-editorLabelStartDate": "Startdatum",
            "dxScheduler-editorLabelEndDate": "Einddatum",
            "dxScheduler-editorLabelDescription": "Omschrijving",
            "dxScheduler-editorLabelRecurrence": "Herhalen",
            "dxScheduler-openAppointment": "Afspraak openen",
            "dxScheduler-recurrenceNever": "Nooit",
            "dxScheduler-recurrenceMinutely": "Minutely",
            "dxScheduler-recurrenceHourly": "Hourly",
            "dxScheduler-recurrenceDaily": "Dagelijks",
            "dxScheduler-recurrenceWeekly": "Wekelijks",
            "dxScheduler-recurrenceMonthly": "Maandelijks",
            "dxScheduler-recurrenceYearly": "Jaarlijks",
            "dxScheduler-recurrenceRepeatEvery": "Elke",
            "dxScheduler-recurrenceRepeatOn": "Repeat On",
            "dxScheduler-recurrenceEnd": "Einde herhaling",
            "dxScheduler-recurrenceAfter": "Na",
            "dxScheduler-recurrenceOn": "Op",
            "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
            "dxScheduler-recurrenceRepeatHourly": "hour(s)",
            "dxScheduler-recurrenceRepeatDaily": "dag(en)",
            "dxScheduler-recurrenceRepeatWeekly": "week/weken",
            "dxScheduler-recurrenceRepeatMonthly": "maand(en)",
            "dxScheduler-recurrenceRepeatYearly": "jaar/jaren",
            "dxScheduler-switcherDay": "Dag",
            "dxScheduler-switcherWeek": "Week",
            "dxScheduler-switcherWorkWeek": "Werkweek",
            "dxScheduler-switcherMonth": "Maand",
            "dxScheduler-switcherAgenda": "Planningsweergave",
            "dxScheduler-switcherTimelineDay": "Tijdslijn Dag",
            "dxScheduler-switcherTimelineWeek": "Tijdslijn Week",
            "dxScheduler-switcherTimelineWorkWeek": "Tijdslijn Werkweek",
            "dxScheduler-switcherTimelineMonth": "Tijdslijn Maand",
            "dxScheduler-recurrenceRepeatOnDate": "op datum",
            "dxScheduler-recurrenceRepeatCount": "keer",
            "dxScheduler-allDay": "Duurt hele dag",
            "dxScheduler-confirmRecurrenceEditMessage": "Alleen deze afspraak of de hele serie wijzigen?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Alleen deze afspraak of de volledige serie verwijderen?",
            "dxScheduler-confirmRecurrenceEditSeries": "Serie wijzigen",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Serie verwijderen",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Afspraak wijzigen",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Afspraak verwijderen",
            "dxScheduler-noTimezoneTitle": "Geen tijdszone",
            "dxScheduler-moreAppointments": "Nog {0}",
            "dxCalendar-todayButtonText": "Vandaag",
            "dxCalendar-ariaWidgetName": "Kalender",
            "dxColorView-ariaRed": "Rood",
            "dxColorView-ariaGreen": "Groen",
            "dxColorView-ariaBlue": "Blauw",
            "dxColorView-ariaAlpha": "Doorzichtigheid",
            "dxColorView-ariaHex": "Kleurcode",
            "dxTagBox-selected": "{0} geselecteerd",
            "dxTagBox-allSelected": "Alles geselecteerd ({0})",
            "dxTagBox-moreSelected": "Nog {0}",
            "vizExport-printingButtonText": "Afdrukken",
            "vizExport-titleMenuText": "Exporteren/Afdrukken",
            "vizExport-exportButtonText": "{0} bestand",
            "dxFilterBuilder-and": "En",
            "dxFilterBuilder-or": "Of",
            "dxFilterBuilder-notAnd": "En niet",
            "dxFilterBuilder-notOr": "Of niet",
            "dxFilterBuilder-addCondition": "Regel toevoegen",
            "dxFilterBuilder-addGroup": "Groep toevoegen",
            "dxFilterBuilder-enterValueText": "<vul waarde in>",
            "dxFilterBuilder-filterOperationEquals": "Gelijk aan",
            "dxFilterBuilder-filterOperationNotEquals": "Niet gelijk aan",
            "dxFilterBuilder-filterOperationLess": "Is kleiner dan",
            "dxFilterBuilder-filterOperationLessOrEquals": "Is kleiner dan of gelijk aan",
            "dxFilterBuilder-filterOperationGreater": "Is groter dan",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Is groter dan of gelijk aan",
            "dxFilterBuilder-filterOperationStartsWith": "Begint met",
            "dxFilterBuilder-filterOperationContains": "Bevat",
            "dxFilterBuilder-filterOperationNotContains": "Bevat niet",
            "dxFilterBuilder-filterOperationEndsWith": "Eindigt met",
            "dxFilterBuilder-filterOperationIsBlank": "Is leeg",
            "dxFilterBuilder-filterOperationIsNotBlank": "Is niet leeg",
            "dxFilterBuilder-filterOperationBetween": "Is tussen",
            "dxFilterBuilder-filterOperationAnyOf": "Is een van",
            "dxFilterBuilder-filterOperationNoneOf": "Is geen van",
            "dxHtmlEditor-dialogColorCaption": "Tekstkleur",
            "dxHtmlEditor-dialogBackgroundCaption": "Achtergrondkleur",
            "dxHtmlEditor-dialogLinkCaption": "Link",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Tekst",
            "dxHtmlEditor-dialogLinkTargetField": "Open link in een nieuw venster",
            "dxHtmlEditor-dialogImageCaption": "Afbeelding",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Alternatieve tekst",
            "dxHtmlEditor-dialogImageWidthField": "Breedte (px)",
            "dxHtmlEditor-dialogImageHeightField": "Hoogte (px)",
            "dxHtmlEditor-dialogInsertTableRowsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableColumnsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableCaption": "!TODO",
            "dxHtmlEditor-heading": "Titel",
            "dxHtmlEditor-normalText": "Normale tekst",
            "dxHtmlEditor-background": "TODO",
            "dxHtmlEditor-bold": "TODO",
            "dxHtmlEditor-color": "TODO",
            "dxHtmlEditor-font": "TODO",
            "dxHtmlEditor-italic": "TODO",
            "dxHtmlEditor-link": "TODO",
            "dxHtmlEditor-image": "TODO",
            "dxHtmlEditor-size": "TODO",
            "dxHtmlEditor-strike": "TODO",
            "dxHtmlEditor-subscript": "TODO",
            "dxHtmlEditor-superscript": "TODO",
            "dxHtmlEditor-underline": "TODO",
            "dxHtmlEditor-blockquote": "TODO",
            "dxHtmlEditor-header": "TODO",
            "dxHtmlEditor-increaseIndent": "TODO",
            "dxHtmlEditor-decreaseIndent": "TODO",
            "dxHtmlEditor-orderedList": "TODO",
            "dxHtmlEditor-bulletList": "TODO",
            "dxHtmlEditor-alignLeft": "TODO",
            "dxHtmlEditor-alignCenter": "TODO",
            "dxHtmlEditor-alignRight": "TODO",
            "dxHtmlEditor-alignJustify": "TODO",
            "dxHtmlEditor-codeBlock": "TODO",
            "dxHtmlEditor-variable": "TODO",
            "dxHtmlEditor-undo": "TODO",
            "dxHtmlEditor-redo": "TODO",
            "dxHtmlEditor-clear": "TODO",
            "dxHtmlEditor-insertTable": "TODO",
            "dxHtmlEditor-insertRowAbove": "TODO",
            "dxHtmlEditor-insertRowBelow": "TODO",
            "dxHtmlEditor-insertColumnLeft": "TODO",
            "dxHtmlEditor-insertColumnRight": "TODO",
            "dxHtmlEditor-deleteColumn": "TODO",
            "dxHtmlEditor-deleteRow": "TODO",
            "dxHtmlEditor-deleteTable": "TODO",
            "dxHtmlEditor-list": "TODO",
            "dxHtmlEditor-ordered": "TODO",
            "dxHtmlEditor-bullet": "TODO",
            "dxHtmlEditor-align": "TODO",
            "dxHtmlEditor-center": "TODO",
            "dxHtmlEditor-left": "TODO",
            "dxHtmlEditor-right": "TODO",
            "dxHtmlEditor-indent": "TODO",
            "dxHtmlEditor-justify": "TODO",
            "dxFileManager-newDirectoryName": "Nieuwe folder",
            "dxFileManager-rootDirectoryName": "Bestanden",
            "dxFileManager-errorNoAccess": "Geen toegang. Operatie afgebroken.",
            "dxFileManager-errorDirectoryExistsFormat": "Folder '{0}' bestaat al.",
            "dxFileManager-errorFileExistsFormat": "Bestand '{0}' bestaat al.",
            "dxFileManager-errorFileNotFoundFormat": "Bestand '{0}' niet gevonden.",
            "dxFileManager-errorDirectoryNotFoundFormat": "Folder '{0}' bestaat al.",
            "dxFileManager-errorWrongFileExtension": "Deze bestandsextensie is niet toegestaan.",
            "dxFileManager-errorMaxFileSizeExceeded": "De bestandsgrootte overschrijdt de toegstane limiet",
            "dxFileManager-errorInvalidSymbols": "Deze naam bevat ongeldige tekens.",
            "dxFileManager-errorDefault": "Er is ongedefinieerde fout opgetreden",
            "dxFileManager-errorDirectoryOpenFailed": "De folder kan niet geopend worden",
            "dxDiagram-categoryGeneral": "Algemeen",
            "dxDiagram-categoryFlowchart": "Flowchart",
            "dxDiagram-categoryOrgChart": "OrgChart",
            "dxDiagram-categoryContainers": "Container",
            "dxDiagram-categoryCustom": "Aangepast",
            "dxDiagram-commandExportToSvg": "Exporteer naar SVG",
            "dxDiagram-commandExportToPng": "Exporteer naar PNG",
            "dxDiagram-commandExportToJpg": "Exporteer naar JPEG",
            "dxDiagram-commandUndo": "Ongedaan maken",
            "dxDiagram-commandRedo": "Opnieuw doen",
            "dxDiagram-commandFontName": "Lettertype",
            "dxDiagram-commandFontSize": "Lettergrootte",
            "dxDiagram-commandBold": "Vet",
            "dxDiagram-commandItalic": "Cursief",
            "dxDiagram-commandUnderline": "Onderstreept",
            "dxDiagram-commandTextColor": "Letterkleur",
            "dxDiagram-commandLineColor": "Lijnkleur",
            "dxDiagram-commandLineWidth": "Lijndikte",
            "dxDiagram-commandLineStyle": "Lijnstijl",
            "dxDiagram-commandLineStyleSolid": "Volle lijn",
            "dxDiagram-commandLineStyleDotted": "Gestippeld",
            "dxDiagram-commandLineStyleDashed": "Gestreept",
            "dxDiagram-commandFillColor": "Vulkleur",
            "dxDiagram-commandAlignLeft": "Links uitlijnen",
            "dxDiagram-commandAlignCenter": "Centreren",
            "dxDiagram-commandAlignRight": "Rechts uitlijnen",
            "dxDiagram-commandConnectorLineType": "Verbindingslijn type",
            "dxDiagram-commandConnectorLineStraight": "Recht",
            "dxDiagram-commandConnectorLineOrthogonal": "Orthogonaal",
            "dxDiagram-commandConnectorLineStart": "Verbindingslijn Start",
            "dxDiagram-commandConnectorLineEnd": "Verbindingslijn Eind",
            "dxDiagram-commandConnectorLineNone": "Geen",
            "dxDiagram-commandConnectorLineArrow": "Pijl",
            "dxDiagram-commandFullscreen": "Volledige schermweergave",
            "dxDiagram-commandUnits": "Eenheden",
            "dxDiagram-commandPageSize": "Pagina grootte",
            "dxDiagram-commandPageOrientation": "Orientatie",
            "dxDiagram-commandPageOrientationLandscape": "Landschap",
            "dxDiagram-commandPageOrientationPortrait": "Portrait",
            "dxDiagram-commandPageColor": "Pagina kleur",
            "dxDiagram-commandShowGrid": "Toon raster",
            "dxDiagram-commandSnapToGrid": "Plak aan raster",
            "dxDiagram-commandGridSize": "Raster grootte",
            "dxDiagram-commandZoomLevel": "Zoom niveau",
            "dxDiagram-commandAutoZoom": "Automatische zoom",
            "dxDiagram-commandFitToContent": "Aan inhoud aanpassen",
            "dxDiagram-commandFitToWidth": "Aan breedte aanpassen",
            "dxDiagram-commandAutoZoomByContent": "Automatisch aan inhoud aanpassen",
            "dxDiagram-commandAutoZoomByWidth": "Automatisch aan breedte aanpassen",
            "dxDiagram-commandSimpleView": "Eenvoudige weergave",
            "dxDiagram-commandCut": "Knippen",
            "dxDiagram-commandCopy": "Kopi\xebren",
            "dxDiagram-commandPaste": "Plakken",
            "dxDiagram-commandSelectAll": "Alles selecteren",
            "dxDiagram-commandDelete": "Verwijderen",
            "dxDiagram-commandBringToFront": "Naar voorgrond",
            "dxDiagram-commandSendToBack": "Naar achtergrond",
            "dxDiagram-commandLock": "Vergrendelen",
            "dxDiagram-commandUnlock": "Ontgrendelen",
            "dxDiagram-commandInsertShapeImage": "Afbeeldingsobject invoegen",
            "dxDiagram-commandEditShapeImage": "Afbeeldingsobject aanpassen",
            "dxDiagram-commandDeleteShapeImage": "Afbeeldingsobject verwijderen",
            "dxDiagram-commandLayoutLeftToRight": "Links-naar-rechts",
            "dxDiagram-commandLayoutRightToLeft": "Rechts-naar-links",
            "dxDiagram-commandLayoutTopToBottom": "Boven-naar-beneden",
            "dxDiagram-commandLayoutBottomToTop": "Benede-naar-boven",
            "dxDiagram-unitIn": "in",
            "dxDiagram-unitCm": "cm",
            "dxDiagram-unitPx": "px",
            "dxDiagram-dialogButtonOK": "OK",
            "dxDiagram-dialogButtonCancel": "Annuleren",
            "dxDiagram-dialogInsertShapeImageTitle": "Afbeelding Invoegen",
            "dxDiagram-dialogEditShapeImageTitle": "Afbeelding Aanpassen",
            "dxDiagram-dialogEditShapeImageSelectButton": "Selecteer afbeelding",
            "dxDiagram-dialogEditShapeImageLabelText": "of sleep de afbeelding hier",
            "dxDiagram-uiExport": "Exporteren",
            "dxDiagram-uiProperties": "Eigenschappen",
            "dxDiagram-uiSettings": "Instellingen",
            "dxDiagram-uiShowToolbox": "Gereedschapskist",
            "dxDiagram-uiSearch": "Zoeken",
            "dxDiagram-uiStyle": "Stijl",
            "dxDiagram-uiLayout": "Opmaak",
            "dxDiagram-uiLayoutTree": "Opmaakboom",
            "dxDiagram-uiLayoutLayered": "Gelaagde opmaak",
            "dxDiagram-uiDiagram": "Diagram",
            "dxDiagram-uiText": "Tekst",
            "dxDiagram-uiObject": "Object",
            "dxDiagram-uiConnector": "Verbinding",
            "dxDiagram-uiPage": "Pagina",
            "dxDiagram-shapeText": "Tekst",
            "dxDiagram-shapeRectangle": "Rechthoek",
            "dxDiagram-shapeEllipse": "Ovaal",
            "dxDiagram-shapeCross": "Kruis",
            "dxDiagram-shapeTriangle": "Driehoek",
            "dxDiagram-shapeDiamond": "Diamand",
            "dxDiagram-shapeHeart": "Hart",
            "dxDiagram-shapePentagon": "Vijfhoek",
            "dxDiagram-shapeHexagon": "Zeshoek",
            "dxDiagram-shapeOctagon": "Achthoek",
            "dxDiagram-shapeStar": "Ster",
            "dxDiagram-shapeArrowLeft": "Pijl naar links",
            "dxDiagram-shapeArrowUp": "Pijl naar boven",
            "dxDiagram-shapeArrowRight": "Pijl naar rechts",
            "dxDiagram-shapeArrowDown": "Pijl naar onderen",
            "dxDiagram-shapeArrowUpDown": "Pijl naar boven en beneden",
            "dxDiagram-shapeArrowLeftRight": "Paal naar links en rechts",
            "dxDiagram-shapeProcess": "Proces",
            "dxDiagram-shapeDecision": "Beslissing",
            "dxDiagram-shapeTerminator": "Aflsuiter",
            "dxDiagram-shapePredefinedProcess": "Gedefinieerd proces",
            "dxDiagram-shapeDocument": "Document",
            "dxDiagram-shapeMultipleDocuments": "Meerdere documenten",
            "dxDiagram-shapeManualInput": "Handmatige invoer",
            "dxDiagram-shapePreparation": "Voorbereiding",
            "dxDiagram-shapeData": "Data",
            "dxDiagram-shapeDatabase": "Database",
            "dxDiagram-shapeHardDisk": "Vaste schijf",
            "dxDiagram-shapeInternalStorage": "Interne opslag",
            "dxDiagram-shapePaperTape": "Papierband",
            "dxDiagram-shapeManualOperation": "Handmatige operatie",
            "dxDiagram-shapeDelay": "Vertraging",
            "dxDiagram-shapeStoredData": "Opgeslagen data",
            "dxDiagram-shapeDisplay": "Weergave",
            "dxDiagram-shapeMerge": "Samenvoegen",
            "dxDiagram-shapeConnector": "Verbinding",
            "dxDiagram-shapeOr": "Of",
            "dxDiagram-shapeSummingJunction": "Optelkruising",
            "dxDiagram-shapeContainerDefaultText": "Container",
            "dxDiagram-shapeVerticalContainer": "Vertikale Container",
            "dxDiagram-shapeHorizontalContainer": "Horizontale Container",
            "dxDiagram-shapeCardDefaultText": "Tekst",
            "dxDiagram-shapeCardWithImageOnLeft": "Kaart met Afbeelding Links",
            "dxDiagram-shapeCardWithImageOnTop": "Kaart met Afbeelding Boven",
            "dxDiagram-shapeCardWithImageOnRight": "Kaart me Afbeelding Rechts",
            "dxGantt-dialogTitle": "Titel",
            "dxGantt-dialogStartTitle": "Start",
            "dxGantt-dialogEndTitle": "Eind",
            "dxGantt-dialogProgressTitle": "Voortgang",
            "dxGantt-dialogResourcesTitle": "Bronnen",
            "dxGantt-dialogResourceManagerTitle": "Beheer Bronnen",
            "dxGantt-dialogTaskDetailsTitle": "Taak Details",
            "dxGantt-dialogEditResourceListHint": "Pas Bronnen aan",
            "dxGantt-dialogEditNoResources": "Geen bronnen",
            "dxGantt-dialogButtonAdd": "Toevoegen",
            "dxGantt-contextMenuNewTask": "Nieuwe taak",
            "dxGantt-contextMenuNewSubtask": "Nieuwe sub-taak",
            "dxGantt-contextMenuDeleteTask": "Verwijder taak",
            "dxGantt-contextMenuDeleteDependency": "Verwijder afhankelijkheid",
            "dxGantt-dialogTaskDeleteConfirmation": "Door het verwijderen van deze taak zullen ook alle subtaken en verbindingen verwijderd worden. Zeker weten?",
            "dxGantt-dialogDependencyDeleteConfirmation": "Moet deze afhankelijkheid van de taak verwijderd worden?",
            "dxGantt-dialogResourcesDeleteConfirmation": "Door deze bron te verwijderen, wordt deze ook uit alle taken verwijderd waaraan hij is toegewezen. Zeker weten om bron '{0}' te verwijderen?",
            "dxGantt-dialogConstraintCriticalViolationMessage": "De taak die verplaatst moet worden is gekoppeld aan een andere taak door een afhankelijkheidsrelatie. Deze wijziging is in strijd met de afhankelijkheidsregels. Hoe verder?",
            "dxGantt-dialogConstraintViolationMessage": "De taak die verplaatst moet worden is gekoppeld aan een andere taak door een afhankelijkheidsrelatie. Hoe verder?",
            "dxGantt-dialogCancelOperationMessage": "Annuleer de operatie",
            "dxGantt-dialogDeleteDependencyMessage": "Verwijder de afhankelijkheid",
            "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "Verplaats de taak en behoud de afhankelijkheid",
            "dxGantt-undo": "Ongedaan maken",
            "dxGantt-redo": "Opnieuw doen",
            "dxGantt-expandAll": "Alles uitklappen",
            "dxGantt-collapseAll": "Alles inklappen",
            "dxGantt-addNewTask": "Nieuwe taak",
            "dxGantt-deleteSelectedTask": "Verwijder geselecteerde taak",
            "dxGantt-zoomIn": "Inzoomen",
            "dxGantt-zoomOut": "Uitzoomen",
            "dxGantt-fullScreen": "Volledig scherm",
            "dxGantt-quarter": "TODO",
            "dxGantt-sortingAscendingText": "Sorteer Oplopend",
            "dxGantt-sortingDescendingText": "Sorteer Aflopend",
            "dxGantt-sortingClearText": "Sortering wissen",
            "dxGantt-showResources": "TODO",
            "dxGantt-showDependencies": "TODO",
            "dxGantt-dialogStartDateValidation": "TODO",
            "dxGantt-dialogEndDateValidation": "TODO"
        }
    })
}));
