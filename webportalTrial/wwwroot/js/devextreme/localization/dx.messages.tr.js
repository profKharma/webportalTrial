/*!
* DevExtreme (dx.messages.tr.js)
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
        tr: {
            Yes: "Evet",
            No: "Hay\u0131r",
            Cancel: "\u0130ptal",
            Clear: "Temizle",
            Done: "Tamam",
            Loading: "Y\xfckleniyor...",
            Select: "Se\xe7...",
            Search: "Ara",
            Back: "Geri",
            OK: "Tamam",
            "dxCollectionWidget-noDataText": "G\xf6sterilecek bilgi yok",
            "validation-required": "Zorunlu",
            "validation-required-formatted": "{0} gerekli",
            "validation-numeric": "De\u011fer bir say\u0131 olmal\u0131",
            "validation-numeric-formatted": "{0} bir say\u0131 olmal\u0131",
            "validation-range": "De\u011fer aral\u0131k d\u0131\u015f\u0131nda",
            "validation-range-formatted": "{0} aral\u0131k d\u0131\u015f\u0131nda",
            "validation-stringLength": "De\u011ferin uzunlu\u011fu do\u011fru de\u011fil",
            "validation-stringLength-formatted": "{0} uzunlu\u011fu do\u011fru de\u011fil",
            "validation-custom": "De\u011fer ge\xe7ersiz",
            "validation-custom-formatted": "{0} ge\xe7ersiz",
            "validation-compare": "De\u011ferler e\u015fle\u015fmiyor",
            "validation-compare-formatted": "{0} e\u015fle\u015fmiyor",
            "validation-pattern": "De\u011fer kal\u0131pla e\u015fle\u015fmiyor",
            "validation-pattern-formatted": "{0} kal\u0131pla e\u015fle\u015fmiyor",
            "validation-email": "E-posta ge\xe7ersiz",
            "validation-email-formatted": "{0} ge\xe7ersiz",
            "validation-mask": "De\u011fer ge\xe7ersiz",
            "dxLookup-searchPlaceholder": "Minimum karakter say\u0131s\u0131: {0}",
            "dxList-pullingDownText": "Yenilemek i\xe7in a\u015fa\u011f\u0131ya \xe7ekin...",
            "dxList-pulledDownText": "Yenilemek i\xe7in b\u0131rak\u0131n...",
            "dxList-refreshingText": "Yenileniyor...",
            "dxList-pageLoadingText": "Y\xfckleniyor...",
            "dxList-nextButtonText": "Daha",
            "dxList-selectAll": "T\xfcm\xfcn\xfc Se\xe7",
            "dxListEditDecorator-delete": "Sil",
            "dxListEditDecorator-more": "Daha",
            "dxScrollView-pullingDownText": "Yenilemek i\xe7in a\u015fa\u011f\u0131ya \xe7ekin...",
            "dxScrollView-pulledDownText": "Yenilemek i\xe7in b\u0131rak\u0131n...",
            "dxScrollView-refreshingText": "Yenileniyor...",
            "dxScrollView-reachBottomText": "Y\xfckleniyor...",
            "dxDateBox-simulatedDataPickerTitleTime": "Saat se\xe7",
            "dxDateBox-simulatedDataPickerTitleDate": "Tarih se\xe7",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Tarih ve saati se\xe7in",
            "dxDateBox-validation-datetime": "De\u011fer bir tarih veya saat olmal\u0131d\u0131r",
            "dxFileUploader-selectFile": "Dosya se\xe7",
            "dxFileUploader-dropFile": "veya Dosyay\u0131 buraya b\u0131rak\u0131n",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Y\xfckleme",
            "dxFileUploader-uploaded": "Y\xfcklenen",
            "dxFileUploader-readyToUpload": "Y\xfcklemeye haz\u0131r",
            "dxFileUploader-uploadAbortedMessage": "TODO",
            "dxFileUploader-uploadFailedMessage": "Y\xfckleme ba\u015far\u0131s\u0131z",
            "dxFileUploader-invalidFileExtension": "Dosya t\xfcr\xfcne izin verilmiyor",
            "dxFileUploader-invalidMaxFileSize": "Dosya \xe7ok b\xfcy\xfck",
            "dxFileUploader-invalidMinFileSize": "Dosya \xe7ok k\xfc\xe7\xfck",
            "dxRangeSlider-ariaFrom": "\u0130tibaren",
            "dxRangeSlider-ariaTill": "Kadar",
            "dxSwitch-switchedOnText": "A\xe7\u0131k",
            "dxSwitch-switchedOffText": "Kapal\u0131",
            "dxForm-optionalMark": "iste\u011fe ba\u011fl\u0131",
            "dxForm-requiredMessage": "{0} gerekli",
            "dxNumberBox-invalidValueMessage": "De\u011fer bir say\u0131 olmal\u0131",
            "dxNumberBox-noDataText": "Veri yok",
            "dxDataGrid-columnChooserTitle": "S\xfctun Se\xe7ici",
            "dxDataGrid-columnChooserEmptyText": "S\xfctunu gizlemek i\xe7in buraya s\xfcr\xfckleyin",
            "dxDataGrid-groupContinuesMessage": "Bir sonraki sayfada devam ediyor",
            "dxDataGrid-groupContinuedMessage": "\xd6nceki sayfadan devam",
            "dxDataGrid-groupHeaderText": "Bu S\xfctuna G\xf6re Grupla",
            "dxDataGrid-ungroupHeaderText": "Grubu Kald\u0131r",
            "dxDataGrid-ungroupAllText": "T\xfcm Gruplar\u0131 Kald\u0131r",
            "dxDataGrid-editingEditRow": "D\xfczenle",
            "dxDataGrid-editingSaveRowChanges": "Kaydet",
            "dxDataGrid-editingCancelRowChanges": "\u0130ptal",
            "dxDataGrid-editingDeleteRow": "Sil",
            "dxDataGrid-editingUndeleteRow": "Silme",
            "dxDataGrid-editingConfirmDeleteMessage": "Bu kayd\u0131 silmek istedi\u011finize emin misiniz?",
            "dxDataGrid-validationCancelChanges": "De\u011fi\u015fiklikleri iptal et",
            "dxDataGrid-groupPanelEmptyText": "Bu s\xfctuna g\xf6re gruplamak i\xe7in bir s\xfctun ba\u015fl\u0131\u011f\u0131n\u0131 buraya s\xfcr\xfckleyin",
            "dxDataGrid-noDataText": "Veri yok",
            "dxDataGrid-searchPanelPlaceholder": "Arama...",
            "dxDataGrid-filterRowShowAllText": "(T\xfcm\xfc)",
            "dxDataGrid-filterRowResetOperationText": "S\u0131f\u0131rla",
            "dxDataGrid-filterRowOperationEquals": "E\u015fittir",
            "dxDataGrid-filterRowOperationNotEquals": "E\u015fit de\u011fil",
            "dxDataGrid-filterRowOperationLess": "Daha k\xfc\xe7\xfck",
            "dxDataGrid-filterRowOperationLessOrEquals": "Daha k\xfc\xe7\xfck veya e\u015fit",
            "dxDataGrid-filterRowOperationGreater": "Daha b\xfcy\xfck",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Daha b\xfcy\xfck veya e\u015fit",
            "dxDataGrid-filterRowOperationStartsWith": "\u0130le ba\u015flar",
            "dxDataGrid-filterRowOperationContains": "\u0130\xe7eren",
            "dxDataGrid-filterRowOperationNotContains": "\u0130\xe7ermeyen",
            "dxDataGrid-filterRowOperationEndsWith": "\u0130le biten",
            "dxDataGrid-filterRowOperationBetween": "Aras\u0131nda",
            "dxDataGrid-filterRowOperationBetweenStartText": "Ba\u015fla",
            "dxDataGrid-filterRowOperationBetweenEndText": "Biti\u015f",
            "dxDataGrid-applyFilterText": "Filtre uygula",
            "dxDataGrid-trueText": "evet",
            "dxDataGrid-falseText": "hay\u0131r",
            "dxDataGrid-sortingAscendingText": "Artan S\u0131ralama",
            "dxDataGrid-sortingDescendingText": "Azalan S\u0131ralama",
            "dxDataGrid-sortingClearText": "S\u0131ralamay\u0131 Temizle",
            "dxDataGrid-editingSaveAllChanges": "De\u011fi\u015fiklikleri Kaydet",
            "dxDataGrid-editingCancelAllChanges": "De\u011fi\u015fiklikleri iptal et",
            "dxDataGrid-editingAddRow": "Sat\u0131r ekle",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "{1} min: {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "{1} max: {0}",
            "dxDataGrid-summaryAvg": "Ort: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "{1} ortalamas\u0131: {0}",
            "dxDataGrid-summarySum": "Top: {0}",
            "dxDataGrid-summarySumOtherColumn": "{1} toplam\u0131: {0}",
            "dxDataGrid-summaryCount": "Toplam: {0}",
            "dxDataGrid-columnFixingFix": "Sabitle",
            "dxDataGrid-columnFixingUnfix": "\xc7\xf6z",
            "dxDataGrid-columnFixingLeftPosition": "Sola",
            "dxDataGrid-columnFixingRightPosition": "Sa\u011fa",
            "dxDataGrid-exportTo": "D\u0131\u015fa aktar",
            "dxDataGrid-exportToExcel": "Excel dosyas\u0131na aktar",
            "dxDataGrid-exporting": "D\u0131\u015fa Aktar...",
            "dxDataGrid-excelFormat": "Excel dosyas\u0131",
            "dxDataGrid-selectedRows": "Se\xe7ili sat\u0131rlar",
            "dxDataGrid-exportSelectedRows": "Se\xe7ili sat\u0131rlar\u0131 aktar",
            "dxDataGrid-exportAll": "T\xfcm verileri d\u0131\u015fa aktar",
            "dxDataGrid-headerFilterEmptyValue": "(Blanks)",
            "dxDataGrid-headerFilterOK": "Tamam",
            "dxDataGrid-headerFilterCancel": "\u0130ptal",
            "dxDataGrid-ariaColumn": "S\xfctun",
            "dxDataGrid-ariaValue": "Veri",
            "dxDataGrid-ariaFilterCell": "Filtre h\xfccresi",
            "dxDataGrid-ariaCollapse": "Daralt",
            "dxDataGrid-ariaExpand": "Geni\u015flet",
            "dxDataGrid-ariaDataGrid": "Tablo",
            "dxDataGrid-ariaSearchInGrid": "Tabloda ara",
            "dxDataGrid-ariaSelectAll": "Hepsini se\xe7",
            "dxDataGrid-ariaSelectRow": "Sat\u0131r\u0131 se\xe7",
            "dxDataGrid-filterBuilderPopupTitle": "Filtre Olu\u015fturucu",
            "dxDataGrid-filterPanelCreateFilter": "Filtre Olu\u015ftur",
            "dxDataGrid-filterPanelClearFilter": "Temizle",
            "dxDataGrid-filterPanelFilterEnabledHint": "Filtreyi etkinle\u015ftir",
            "dxTreeList-ariaTreeList": "A\u011fa\xe7 listesi",
            "dxTreeList-editingAddRowToNode": "Ekle",
            "dxPager-infoText": "Sayfa {0} / {1} ({2} veri)",
            "dxPager-pagesCountText": "aras\u0131nda",
            "dxPager-pageSizesAllText": "T\xfcm\xfc",
            "dxPivotGrid-grandTotal": "Genel Toplam",
            "dxPivotGrid-total": "{0} Toplam",
            "dxPivotGrid-fieldChooserTitle": "Alan Se\xe7ici",
            "dxPivotGrid-showFieldChooser": "Alan Se\xe7iciyi G\xf6ster",
            "dxPivotGrid-expandAll": "T\xfcm\xfcn\xfc Geni\u015flet",
            "dxPivotGrid-collapseAll": "T\xfcm\xfcn\xfc Daralt",
            "dxPivotGrid-sortColumnBySummary": '"{0}" Bu S\xfctuna G\xf6re S\u0131rala',
            "dxPivotGrid-sortRowBySummary": '"{0}" Bu Sat\u0131ra G\xf6re S\u0131rala',
            "dxPivotGrid-removeAllSorting": "T\xfcm S\u0131ralamalar\u0131 Kald\u0131r",
            "dxPivotGrid-dataNotAvailable": "N/A",
            "dxPivotGrid-rowFields": "Sat\u0131r Alanlar\u0131",
            "dxPivotGrid-columnFields": "S\xfctun Alanlar\u0131",
            "dxPivotGrid-dataFields": "Veri Alanlar\u0131",
            "dxPivotGrid-filterFields": "Filtre Alanlar\u0131",
            "dxPivotGrid-allFields": "T\xfcm Alanlar",
            "dxPivotGrid-columnFieldArea": "S\xfctun Alanlar\u0131n\u0131 Buraya B\u0131rak",
            "dxPivotGrid-dataFieldArea": "Veri Alanlar\u0131n\u0131 Buraya B\u0131rak",
            "dxPivotGrid-rowFieldArea": "Sat\u0131r Alanlar\u0131n\u0131 Buraya B\u0131rak",
            "dxPivotGrid-filterFieldArea": "Filtre Alanlar\u0131n\u0131 Buraya B\u0131rak",
            "dxScheduler-editorLabelTitle": "Konu",
            "dxScheduler-editorLabelStartDate": "Ba\u015flang\u0131\xe7 Tarihi",
            "dxScheduler-editorLabelEndDate": "Biti\u015f Tarihi",
            "dxScheduler-editorLabelDescription": "A\xe7\u0131klama",
            "dxScheduler-editorLabelRecurrence": "Tekrar",
            "dxScheduler-openAppointment": "Randevu A\xe7",
            "dxScheduler-recurrenceNever": "Asla",
            "dxScheduler-recurrenceMinutely": "Minutely",
            "dxScheduler-recurrenceHourly": "Hourly",
            "dxScheduler-recurrenceDaily": "G\xfcnl\xfck",
            "dxScheduler-recurrenceWeekly": "Haftal\u0131k",
            "dxScheduler-recurrenceMonthly": "Ayl\u0131k",
            "dxScheduler-recurrenceYearly": "Y\u0131ll\u0131k",
            "dxScheduler-recurrenceRepeatEvery": "Her tekrarla",
            "dxScheduler-recurrenceRepeatOn": "Tekrarla",
            "dxScheduler-recurrenceEnd": "Tekrar\u0131 bitir",
            "dxScheduler-recurrenceAfter": "Sonra",
            "dxScheduler-recurrenceOn": "\u0130le",
            "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
            "dxScheduler-recurrenceRepeatHourly": "hour(s)",
            "dxScheduler-recurrenceRepeatDaily": "g\xfcnler",
            "dxScheduler-recurrenceRepeatWeekly": "haftalar",
            "dxScheduler-recurrenceRepeatMonthly": "aylar",
            "dxScheduler-recurrenceRepeatYearly": "y\u0131llar",
            "dxScheduler-switcherDay": "G\xfcn",
            "dxScheduler-switcherWeek": "Hafta",
            "dxScheduler-switcherWorkWeek": "\xc7al\u0131\u015fma Haftas\u0131",
            "dxScheduler-switcherMonth": "Ay",
            "dxScheduler-switcherAgenda": "Ajanda",
            "dxScheduler-switcherTimelineDay": "Zaman \xc7izelgesi G\xfcn\xfc",
            "dxScheduler-switcherTimelineWeek": "Zaman \xc7izelgesi Haftas\u0131",
            "dxScheduler-switcherTimelineWorkWeek": "Zaman \xc7izelgesi \xc7al\u0131\u015fma Haftas\u0131",
            "dxScheduler-switcherTimelineMonth": "TZaman \xc7izelgesi \xc7al\u0131\u015fma Ay\u0131",
            "dxScheduler-recurrenceRepeatOnDate": "tarihinde",
            "dxScheduler-recurrenceRepeatCount": "olaylar",
            "dxScheduler-allDay": "T\xfcm g\xfcn",
            "dxScheduler-confirmRecurrenceEditMessage": "Yaln\u0131zca bu randevuyu veya t\xfcm diziyi d\xfczenlemek ister misiniz?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Yaln\u0131zca bu randevuyu veya t\xfcm diziyi silmek istiyor musunuz?",
            "dxScheduler-confirmRecurrenceEditSeries": "Serileri d\xfczenle",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Serileri sil",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Randevuyu d\xfczenle",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Randevuyu sil",
            "dxScheduler-noTimezoneTitle": "Saat dilimi yok",
            "dxScheduler-moreAppointments": "{0} daha",
            "dxCalendar-todayButtonText": "Bug\xfcn",
            "dxCalendar-ariaWidgetName": "Takvim",
            "dxColorView-ariaRed": "K\u0131rm\u0131z\u0131",
            "dxColorView-ariaGreen": "Ye\u015fil",
            "dxColorView-ariaBlue": "Mavi",
            "dxColorView-ariaAlpha": "\u015eeffafl\u0131k",
            "dxColorView-ariaHex": "Renk kodu",
            "dxTagBox-selected": "{0} se\xe7ili",
            "dxTagBox-allSelected": "T\xfcm\xfc se\xe7ildi ({0})",
            "dxTagBox-moreSelected": "{0} daha",
            "vizExport-printingButtonText": "Yazd\u0131r",
            "vizExport-titleMenuText": "D\u0131\u015fa Aktar/Yazd\u0131r",
            "vizExport-exportButtonText": "{0} dosya",
            "dxFilterBuilder-and": "Ve",
            "dxFilterBuilder-or": "Veya",
            "dxFilterBuilder-notAnd": "De\u011fil Ve",
            "dxFilterBuilder-notOr": "De\u011fil Veya",
            "dxFilterBuilder-addCondition": "Ko\u015ful Ekle",
            "dxFilterBuilder-addGroup": "Grup Ekle",
            "dxFilterBuilder-enterValueText": "<de\u011fer gir>",
            "dxFilterBuilder-filterOperationEquals": "E\u015fit",
            "dxFilterBuilder-filterOperationNotEquals": "E\u015fit de\u011fil",
            "dxFilterBuilder-filterOperationLess": "Daha k\xfc\xe7\xfck",
            "dxFilterBuilder-filterOperationLessOrEquals": "Daha k\xfc\xe7\xfck veya e\u015fit",
            "dxFilterBuilder-filterOperationGreater": "Daha b\xfcy\xfck",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Daha b\xfcy\xfck veya e\u015fit",
            "dxFilterBuilder-filterOperationStartsWith": "\u0130le ba\u015flar",
            "dxFilterBuilder-filterOperationContains": "\u0130\xe7erir",
            "dxFilterBuilder-filterOperationNotContains": "\u0130\xe7ermez",
            "dxFilterBuilder-filterOperationEndsWith": "\u0130le biter",
            "dxFilterBuilder-filterOperationIsBlank": "Bo\u015f",
            "dxFilterBuilder-filterOperationIsNotBlank": "Bo\u015f de\u011fil",
            "dxFilterBuilder-filterOperationBetween": "Aras\u0131nda",
            "dxFilterBuilder-filterOperationAnyOf": "Herhangi biri",
            "dxFilterBuilder-filterOperationNoneOf": "Hi\xe7biri",
            "dxHtmlEditor-dialogColorCaption": "Yaz\u0131 Tipi Rengini De\u011fi\u015ftir",
            "dxHtmlEditor-dialogBackgroundCaption": "Arka Plan Rengini De\u011fi\u015ftir",
            "dxHtmlEditor-dialogLinkCaption": "Link Ekle",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Metin",
            "dxHtmlEditor-dialogLinkTargetField": "Linki yeni pencerede a\xe7",
            "dxHtmlEditor-dialogImageCaption": "Resim Ekle",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Alternatif metin",
            "dxHtmlEditor-dialogImageWidthField": "Geni\u015flik (px)",
            "dxHtmlEditor-dialogImageHeightField": "Y\xfckseklik (px)",
            "dxHtmlEditor-dialogInsertTableRowsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableColumnsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableCaption": "!TODO",
            "dxHtmlEditor-heading": "Ba\u015fl\u0131k",
            "dxHtmlEditor-normalText": "Normal metin",
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
            "dxFileManager-errorNoAccess": "Eri\u015fim reddedildi. \u0130\u015flem tamamlanam\u0131yor.",
            "dxFileManager-errorDirectoryExistsFormat": "Klas\xf6r '{0}' zaten var.",
            "dxFileManager-errorFileExistsFormat": "Dosya '{0}' zaten var.",
            "dxFileManager-errorFileNotFoundFormat": "Dosya '{0}' bulunamad\u0131",
            "dxFileManager-errorDefault": "Belirtilmemi\u015f hata.",
            "dxFileManager-newDirectoryName": "TODO",
            "dxFileManager-rootDirectoryName": "TODO",
            "dxFileManager-errorDirectoryNotFoundFormat": "TODO",
            "dxFileManager-errorWrongFileExtension": "TODO",
            "dxFileManager-errorMaxFileSizeExceeded": "TODO",
            "dxFileManager-errorInvalidSymbols": "TODO",
            "dxFileManager-errorDirectoryOpenFailed": "TODO",
            "dxDiagram-categoryGeneral": "TODO",
            "dxDiagram-categoryFlowchart": "TODO",
            "dxDiagram-categoryOrgChart": "TODO",
            "dxDiagram-categoryContainers": "TODO",
            "dxDiagram-categoryCustom": "TODO",
            "dxDiagram-commandExportToSvg": "TODO",
            "dxDiagram-commandExportToPng": "TODO",
            "dxDiagram-commandExportToJpg": "TODO",
            "dxDiagram-commandUndo": "TODO",
            "dxDiagram-commandRedo": "TODO",
            "dxDiagram-commandFontName": "TODO",
            "dxDiagram-commandFontSize": "TODO",
            "dxDiagram-commandBold": "TODO",
            "dxDiagram-commandItalic": "TODO",
            "dxDiagram-commandUnderline": "TODO",
            "dxDiagram-commandTextColor": "TODO",
            "dxDiagram-commandLineColor": "TODO",
            "dxDiagram-commandFillColor": "TODO",
            "dxDiagram-commandAlignLeft": "TODO",
            "dxDiagram-commandAlignCenter": "TODO",
            "dxDiagram-commandAlignRight": "TODO",
            "dxDiagram-commandConnectorLineType": "TODO",
            "dxDiagram-commandConnectorLineStraight": "TODO",
            "dxDiagram-commandConnectorLineOrthogonal": "TODO",
            "dxDiagram-commandConnectorLineStart": "TODO",
            "dxDiagram-commandConnectorLineEnd": "TODO",
            "dxDiagram-commandConnectorLineNone": "TODO",
            "dxDiagram-commandConnectorLineArrow": "TODO",
            "dxDiagram-commandFullscreen": "TODO",
            "dxDiagram-commandUnits": "TODO",
            "dxDiagram-commandPageSize": "TODO",
            "dxDiagram-commandPageOrientation": "TODO",
            "dxDiagram-commandPageOrientationLandscape": "TODO",
            "dxDiagram-commandPageOrientationPortrait": "TODO",
            "dxDiagram-commandPageColor": "TODO",
            "dxDiagram-commandShowGrid": "TODO",
            "dxDiagram-commandSnapToGrid": "TODO",
            "dxDiagram-commandGridSize": "TODO",
            "dxDiagram-commandZoomLevel": "TODO",
            "dxDiagram-commandAutoZoom": "TODO",
            "dxDiagram-commandFitToContent": "TODO",
            "dxDiagram-commandFitToWidth": "TODO",
            "dxDiagram-commandAutoZoomByContent": "TODO",
            "dxDiagram-commandAutoZoomByWidth": "TODO",
            "dxDiagram-commandSimpleView": "TODO",
            "dxDiagram-commandCut": "TODO",
            "dxDiagram-commandCopy": "TODO",
            "dxDiagram-commandPaste": "TODO",
            "dxDiagram-commandSelectAll": "TODO",
            "dxDiagram-commandDelete": "TODO",
            "dxDiagram-commandBringToFront": "TODO",
            "dxDiagram-commandSendToBack": "TODO",
            "dxDiagram-commandLock": "TODO",
            "dxDiagram-commandUnlock": "TODO",
            "dxDiagram-commandInsertShapeImage": "TODO",
            "dxDiagram-commandEditShapeImage": "TODO",
            "dxDiagram-commandDeleteShapeImage": "TODO",
            "dxDiagram-commandLayoutLeftToRight": "TODO",
            "dxDiagram-commandLayoutRightToLeft": "TODO",
            "dxDiagram-commandLayoutTopToBottom": "TODO",
            "dxDiagram-commandLayoutBottomToTop": "TODO",
            "dxDiagram-unitIn": "TODO",
            "dxDiagram-unitCm": "TODO",
            "dxDiagram-unitPx": "TODO",
            "dxDiagram-dialogButtonOK": "TODO",
            "dxDiagram-dialogButtonCancel": "TODO",
            "dxDiagram-dialogInsertShapeImageTitle": "TODO",
            "dxDiagram-dialogEditShapeImageTitle": "TODO",
            "dxDiagram-dialogEditShapeImageSelectButton": "TODO",
            "dxDiagram-dialogEditShapeImageLabelText": "TODO",
            "dxDiagram-uiExport": "TODO",
            "dxDiagram-uiProperties": "TODO",
            "dxDiagram-uiSettings": "TODO",
            "dxDiagram-uiShowToolbox": "TODO",
            "dxDiagram-uiSearch": "TODO",
            "dxDiagram-uiStyle": "TODO",
            "dxDiagram-uiLayout": "TODO",
            "dxDiagram-uiLayoutTree": "TODO",
            "dxDiagram-uiLayoutLayered": "TODO",
            "dxDiagram-uiDiagram": "TODO",
            "dxDiagram-uiText": "TODO",
            "dxDiagram-uiObject": "TODO",
            "dxDiagram-uiConnector": "TODO",
            "dxDiagram-uiPage": "TODO",
            "dxDiagram-shapeText": "TODO",
            "dxDiagram-shapeRectangle": "TODO",
            "dxDiagram-shapeEllipse": "TODO",
            "dxDiagram-shapeCross": "TODO",
            "dxDiagram-shapeTriangle": "TODO",
            "dxDiagram-shapeDiamond": "TODO",
            "dxDiagram-shapeHeart": "TODO",
            "dxDiagram-shapePentagon": "TODO",
            "dxDiagram-shapeHexagon": "TODO",
            "dxDiagram-shapeOctagon": "TODO",
            "dxDiagram-shapeStar": "TODO",
            "dxDiagram-shapeArrowLeft": "TODO",
            "dxDiagram-shapeArrowUp": "TODO",
            "dxDiagram-shapeArrowRight": "TODO",
            "dxDiagram-shapeArrowDown": "TODO",
            "dxDiagram-shapeArrowUpDown": "TODO",
            "dxDiagram-shapeArrowLeftRight": "TODO",
            "dxDiagram-shapeProcess": "TODO",
            "dxDiagram-shapeDecision": "TODO",
            "dxDiagram-shapeTerminator": "TODO",
            "dxDiagram-shapePredefinedProcess": "TODO",
            "dxDiagram-shapeDocument": "TODO",
            "dxDiagram-shapeMultipleDocuments": "TODO",
            "dxDiagram-shapeManualInput": "TODO",
            "dxDiagram-shapePreparation": "TODO",
            "dxDiagram-shapeData": "TODO",
            "dxDiagram-shapeDatabase": "TODO",
            "dxDiagram-shapeHardDisk": "TODO",
            "dxDiagram-shapeInternalStorage": "TODO",
            "dxDiagram-shapePaperTape": "TODO",
            "dxDiagram-shapeManualOperation": "TODO",
            "dxDiagram-shapeDelay": "TODO",
            "dxDiagram-shapeStoredData": "TODO",
            "dxDiagram-shapeDisplay": "TODO",
            "dxDiagram-shapeMerge": "TODO",
            "dxDiagram-shapeConnector": "TODO",
            "dxDiagram-shapeOr": "TODO",
            "dxDiagram-shapeSummingJunction": "TODO",
            "dxDiagram-shapeContainerDefaultText": "TODO",
            "dxDiagram-shapeVerticalContainer": "TODO",
            "dxDiagram-shapeHorizontalContainer": "TODO",
            "dxDiagram-shapeCardDefaultText": "TODO",
            "dxDiagram-shapeCardWithImageOnLeft": "TODO",
            "dxDiagram-shapeCardWithImageOnTop": "TODO",
            "dxDiagram-shapeCardWithImageOnRight": "TODO",
            "dxGantt-dialogTitle": "TODO",
            "dxGantt-dialogStartTitle": "TODO",
            "dxGantt-dialogEndTitle": "TODO",
            "dxGantt-dialogProgressTitle": "TODO",
            "dxGantt-dialogResourcesTitle": "TODO",
            "dxGantt-dialogResourceManagerTitle": "TODO",
            "dxGantt-dialogTaskDetailsTitle": "TODO",
            "dxGantt-dialogEditResourceListHint": "TODO",
            "dxGantt-dialogEditNoResources": "TODO",
            "dxGantt-dialogButtonAdd": "TODO",
            "dxGantt-contextMenuNewTask": "TODO",
            "dxGantt-contextMenuNewSubtask": "TODO",
            "dxGantt-contextMenuDeleteTask": "TODO",
            "dxGantt-contextMenuDeleteDependency": "TODO",
            "dxGantt-dialogTaskDeleteConfirmation": "TODO",
            "dxGantt-dialogDependencyDeleteConfirmation": "TODO",
            "dxGantt-dialogResourcesDeleteConfirmation": "TODO",
            "dxGantt-dialogConstraintCriticalViolationMessage": "TODO",
            "dxGantt-dialogConstraintViolationMessage": "TODO",
            "dxGantt-dialogCancelOperationMessage": "TODO",
            "dxGantt-dialogDeleteDependencyMessage": "TODO",
            "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "TODO",
            "dxGantt-undo": "TODO",
            "dxGantt-redo": "TODO",
            "dxGantt-expandAll": "TODO",
            "dxGantt-collapseAll": "TODO",
            "dxGantt-addNewTask": "TODO",
            "dxGantt-deleteSelectedTask": "TODO",
            "dxGantt-zoomIn": "TODO",
            "dxGantt-zoomOut": "TODO",
            "dxGantt-fullScreen": "TODO",
            "dxGantt-quarter": "TODO",
            "dxGantt-sortingAscendingText": "Artan S\u0131ralama",
            "dxGantt-sortingDescendingText": "Azalan S\u0131ralama",
            "dxGantt-sortingClearText": "S\u0131ralamay\u0131 Temizle",
            "dxGantt-showResources": "TODO",
            "dxGantt-showDependencies": "TODO",
            "dxGantt-dialogStartDateValidation": "TODO",
            "dxGantt-dialogEndDateValidation": "TODO"
        }
    })
}));
