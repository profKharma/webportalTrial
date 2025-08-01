/*!
* DevExtreme (dx.messages.zh.js)
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
        zh: {
            Yes: "\u662f",
            No: "\u5426",
            Cancel: "\u53d6\u6d88",
            Clear: "\u6e05\u9664",
            Done: "\u5b8c\u6210",
            Loading: "\u6b63\u5728\u52a0\u8f7d...",
            Select: "\u9009\u62e9...",
            Search: "\u641c\u7d22",
            Back: "\u8fd4\u56de",
            OK: "\u786e\u5b9a",
            "dxCollectionWidget-noDataText": "\u6ca1\u6709\u8981\u663e\u793a\u7684\u6570\u636e",
            "dxDropDownEditor-selectLabel": "\u9009\u62e9",
            "validation-required": "\u5fc5\u9700",
            "validation-required-formatted": "{0} \u662f\u5fc5\u9700\u7684",
            "validation-numeric": "\u503c\u5fc5\u987b\u662f\u4e00\u4e2a\u6570\u5b57",
            "validation-numeric-formatted": "{0} \u5fc5\u987b\u662f\u4e00\u4e2a\u6570\u5b57",
            "validation-range": "\u503c\u8d85\u51fa\u8303\u56f4",
            "validation-range-formatted": "{0} \u8d85\u51fa\u8303\u56f4",
            "validation-stringLength": "\u8be5\u503c\u7684\u957f\u5ea6\u4e0d\u6b63\u786e",
            "validation-stringLength-formatted": "{0} \u7684\u957f\u5ea6\u4e0d\u6b63\u786e",
            "validation-custom": "\u503c\u65e0\u6548",
            "validation-custom-formatted": "{0} \u503c\u65e0\u6548",
            "validation-async": "\u503c\u65e0\u6548",
            "validation-async-formatted": "{0} \u503c\u65e0\u6548",
            "validation-compare": "\u503c\u4e0d\u5339\u914d",
            "validation-compare-formatted": "{0} \u4e0d\u5339\u914d",
            "validation-pattern": "\u503c\u4e0d\u7b26\u5408\u8be5\u6a21\u5f0f",
            "validation-pattern-formatted": "{0} \u4e0d\u5339\u914d\u8be5\u6a21\u5f0f",
            "validation-email": "\u7535\u5b50\u90ae\u4ef6\u65e0\u6548",
            "validation-email-formatted": "{0} \u65e0\u6548",
            "validation-mask": "\u503c\u65e0\u6548",
            "dxLookup-searchPlaceholder": "\u6700\u5c0f\u5b57\u7b26\u6570: {0}",
            "dxList-pullingDownText": "\u4e0b\u62c9\u4ee5\u5237\u65b0...",
            "dxList-pulledDownText": "\u653e\u5f00\u4ee5\u5237\u65b0...",
            "dxList-refreshingText": "\u5237\u65b0\u4e2d...",
            "dxList-pageLoadingText": "\u6b63\u5728\u52a0\u8f7d...",
            "dxList-nextButtonText": "\u66f4\u591a",
            "dxList-selectAll": "\u5168\u9009",
            "dxListEditDecorator-delete": "\u5220\u9664",
            "dxListEditDecorator-more": "\u66f4\u591a",
            "dxScrollView-pullingDownText": "\u4e0b\u62c9\u4ee5\u5237\u65b0...",
            "dxScrollView-pulledDownText": "\u653e\u5f00\u4ee5\u5237\u65b0...",
            "dxScrollView-refreshingText": "\u5237\u65b0\u4e2d...",
            "dxScrollView-reachBottomText": "\u6b63\u5728\u52a0\u8f7d...",
            "dxDateBox-simulatedDataPickerTitleTime": "\u9009\u62e9\u65f6\u95f4",
            "dxDateBox-simulatedDataPickerTitleDate": "\u9009\u62e9\u65e5\u671f",
            "dxDateBox-simulatedDataPickerTitleDateTime": "\u9009\u62e9\u65e5\u671f\u548c\u65f6\u95f4",
            "dxDateBox-validation-datetime": "\u503c\u5fc5\u987b\u662f\u65e5\u671f\u6216\u65f6\u95f4",
            "dxFileUploader-selectFile": "\u9009\u62e9\u6587\u4ef6",
            "dxFileUploader-dropFile": "\u6216\u8005\u628a\u6587\u4ef6\u653e\u5728\u6b64\u5904",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "\u4e0a\u4f20",
            "dxFileUploader-uploaded": "\u5df2\u4e0a\u4f20",
            "dxFileUploader-readyToUpload": "\u51c6\u5907\u4e0a\u4f20",
            "dxFileUploader-uploadAbortedMessage": "\u4e0a\u4f20\u4e2d\u6b62",
            "dxFileUploader-uploadFailedMessage": "\u4e0a\u4f20\u5931\u8d25",
            "dxFileUploader-invalidFileExtension": "\u6587\u4ef6\u7c7b\u578b\u9519\u8bef",
            "dxFileUploader-invalidMaxFileSize": "\u6587\u4ef6\u8fc7\u5927",
            "dxFileUploader-invalidMinFileSize": "\u6587\u4ef6\u8fc7\u5c0f",
            "dxRangeSlider-ariaFrom": "\u4ece",
            "dxRangeSlider-ariaTill": "\u81f3",
            "dxSwitch-switchedOnText": "\u5f00",
            "dxSwitch-switchedOffText": "\u5173",
            "dxForm-optionalMark": "\u53ef\u9009",
            "dxForm-requiredMessage": "{0} \u662f\u5fc5\u987b\u7684",
            "dxNumberBox-invalidValueMessage": "\u503c\u5fc5\u987b\u662f\u4e00\u4e2a\u6570\u5b57",
            "dxNumberBox-noDataText": "\u65e0\u6570\u636e",
            "dxDataGrid-columnChooserTitle": "\u5217\u9009\u62e9\u5668",
            "dxDataGrid-columnChooserEmptyText": "\u5728\u8fd9\u91cc\u62d6\u52a8\u4e00\u5217\u9690\u85cf\u5b83",
            "dxDataGrid-groupContinuesMessage": "\u4e0b\u4e00\u9875",
            "dxDataGrid-groupContinuedMessage": "\u4e0a\u4e00\u9875",
            "dxDataGrid-groupHeaderText": "\u901a\u8fc7\u8be5\u5217\u5206\u7ec4",
            "dxDataGrid-ungroupHeaderText": "\u53d6\u6d88\u5206\u7ec4",
            "dxDataGrid-ungroupAllText": "\u53d6\u6d88\u6240\u6709\u5206\u7ec4",
            "dxDataGrid-editingEditRow": "\u7f16\u8f91",
            "dxDataGrid-editingSaveRowChanges": "\u4fdd\u5b58",
            "dxDataGrid-editingCancelRowChanges": "\u53d6\u6d88",
            "dxDataGrid-editingDeleteRow": "\u5220\u9664",
            "dxDataGrid-editingUndeleteRow": "\u53d6\u6d88\u5220\u9664",
            "dxDataGrid-editingConfirmDeleteMessage": "\u4f60\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u6761\u8bb0\u5f55\u5417\uff1f",
            "dxDataGrid-validationCancelChanges": "\u53d6\u6d88\u66f4\u6539",
            "dxDataGrid-groupPanelEmptyText": "\u62d6\u52a8\u5217\u6807\u9898\u81f3\u6b64\u4ee5\u8fdb\u884c\u5217\u5206\u7ec4",
            "dxDataGrid-noDataText": "\u65e0\u6570\u636e",
            "dxDataGrid-searchPanelPlaceholder": "\u641c\u7d22...",
            "dxDataGrid-filterRowShowAllText": "(\u5168\u90e8)",
            "dxDataGrid-filterRowResetOperationText": "\u91cd\u7f6e",
            "dxDataGrid-filterRowOperationEquals": "\u7b49\u4e8e",
            "dxDataGrid-filterRowOperationNotEquals": "\u4e0d\u7b49\u4e8e",
            "dxDataGrid-filterRowOperationLess": "\u5c0f\u4e8e",
            "dxDataGrid-filterRowOperationLessOrEquals": "\u5c0f\u4e8e\u6216\u7b49\u4e8e",
            "dxDataGrid-filterRowOperationGreater": "\u5927\u4e8e",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "\u5927\u4e8e\u6216\u7b49\u4e8e",
            "dxDataGrid-filterRowOperationStartsWith": "\u4ee5...\u5f00\u59cb",
            "dxDataGrid-filterRowOperationContains": "\u5305\u542b",
            "dxDataGrid-filterRowOperationNotContains": "\u4e0d\u5305\u542b",
            "dxDataGrid-filterRowOperationEndsWith": "\u7ed3\u675f\u4e8e",
            "dxDataGrid-filterRowOperationBetween": "\u4e4b\u95f4",
            "dxDataGrid-filterRowOperationBetweenStartText": "\u5f00\u59cb",
            "dxDataGrid-filterRowOperationBetweenEndText": "\u7ed3\u675f",
            "dxDataGrid-applyFilterText": "\u5e94\u7528\u8fc7\u6ee4\u5668",
            "dxDataGrid-trueText": "\u771f",
            "dxDataGrid-falseText": "\u5047",
            "dxDataGrid-sortingAscendingText": "\u5347\u5e8f\u6392\u5e8f",
            "dxDataGrid-sortingDescendingText": "\u964d\u5e8f\u6392\u5e8f",
            "dxDataGrid-sortingClearText": "\u6e05\u9664\u6392\u5e8f",
            "dxDataGrid-editingSaveAllChanges": "\u4fdd\u5b58\u4fee\u6539",
            "dxDataGrid-editingCancelAllChanges": "\u653e\u5f03\u4fee\u6539",
            "dxDataGrid-editingAddRow": "\u6dfb\u52a0\u4e00\u884c",
            "dxDataGrid-summaryMin": "\u6700\u5c0f\u503c: {0}",
            "dxDataGrid-summaryMinOtherColumn": "{1} \u7684\u6700\u5c0f\u503c\u4e3a {0}",
            "dxDataGrid-summaryMax": "\u6700\u5927\u503c: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "{1} \u7684\u6700\u5927\u503c\u4e3a {0}",
            "dxDataGrid-summaryAvg": "\u5e73\u5747\u503c: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "{1} \u7684\u5e73\u5747\u503c\u4e3a {0}",
            "dxDataGrid-summarySum": "\u603b\u548c: {0}",
            "dxDataGrid-summarySumOtherColumn": "{1} \u7684\u603b\u548c\u4e3a {0}",
            "dxDataGrid-summaryCount": "\u8ba1\u6570: {0}",
            "dxDataGrid-columnFixingFix": "\u56fa\u5b9a",
            "dxDataGrid-columnFixingUnfix": "\u4e0d\u56fa\u5b9a",
            "dxDataGrid-columnFixingLeftPosition": "\u5411\u5de6",
            "dxDataGrid-columnFixingRightPosition": "\u5411\u53f3",
            "dxDataGrid-exportTo": "\u5bfc\u51fa",
            "dxDataGrid-exportToExcel": "\u5bfc\u51faExcel\u6587\u4ef6",
            "dxDataGrid-exporting": "\u5bfc\u51fa...",
            "dxDataGrid-excelFormat": "Excel\u6587\u4ef6",
            "dxDataGrid-selectedRows": "\u5df2\u9009\u884c",
            "dxDataGrid-exportSelectedRows": "\u5bfc\u51fa\u5df2\u9009\u884c",
            "dxDataGrid-exportAll": "\u5bfc\u51fa\u6240\u6709\u6570\u636e",
            "dxDataGrid-headerFilterEmptyValue": "(\u7a7a\u767d)",
            "dxDataGrid-headerFilterOK": "\u786e\u5b9a",
            "dxDataGrid-headerFilterCancel": "\u53d6\u6d88",
            "dxDataGrid-ariaColumn": "\u5217",
            "dxDataGrid-ariaValue": "\u503c",
            "dxDataGrid-ariaFilterCell": "\u8fc7\u6ee4\u5355\u5143",
            "dxDataGrid-ariaCollapse": "\u6298\u53e0",
            "dxDataGrid-ariaExpand": "\u5c55\u5f00",
            "dxDataGrid-ariaDataGrid": "\u6570\u636e\u7f51\u683c",
            "dxDataGrid-ariaSearchInGrid": "\u5728\u6570\u636e\u7f51\u683c\u4e2d\u641c\u7d22",
            "dxDataGrid-ariaSelectAll": "\u5168\u9009",
            "dxDataGrid-ariaSelectRow": "\u9009\u62e9\u884c",
            "dxDataGrid-filterBuilderPopupTitle": "\u8fc7\u6ee4\u5668\u751f\u6210\u5668",
            "dxDataGrid-filterPanelCreateFilter": "\u521b\u5efa\u8fc7\u6ee4\u5668",
            "dxDataGrid-filterPanelClearFilter": "\u6e05\u7a7a",
            "dxDataGrid-filterPanelFilterEnabledHint": "\u542f\u7528\u8be5\u8fc7\u6ee4\u5668",
            "dxTreeList-ariaTreeList": "\u6811\u72b6\u5217\u8868",
            "dxTreeList-editingAddRowToNode": "\u6dfb\u52a0",
            "dxPager-infoText": "\u7b2c{0}\u9875,\u5171{1}\u9875 ({2} \u4e2a\u9879\u76ee)",
            "dxPager-pagesCountText": "\u5230",
            "dxPager-pageSizesAllText": "\u5168\u90e8",
            "dxPivotGrid-grandTotal": "\u5408\u8ba1",
            "dxPivotGrid-total": "{0} \u603b\u8ba1",
            "dxPivotGrid-fieldChooserTitle": "\u5b57\u6bb5\u9009\u62e9\u5668",
            "dxPivotGrid-showFieldChooser": "\u663e\u793a\u5b57\u6bb5\u9009\u62e9\u5668",
            "dxPivotGrid-expandAll": "\u5168\u90e8\u5c55\u5f00",
            "dxPivotGrid-collapseAll": "\u5168\u90e8\u6298\u53e0",
            "dxPivotGrid-sortColumnBySummary": '\u6309 "{0}" \u5217\u6392\u5e8f',
            "dxPivotGrid-sortRowBySummary": '\u6309 "{0}" \u884c\u6392\u5e8f',
            "dxPivotGrid-removeAllSorting": "\u6e05\u9664\u6240\u6709\u6392\u5e8f",
            "dxPivotGrid-dataNotAvailable": "\u4e0d\u9002\u7528",
            "dxPivotGrid-rowFields": "\u884c\u5b57\u6bb5",
            "dxPivotGrid-columnFields": "\u5217\u5b57\u6bb5",
            "dxPivotGrid-dataFields": "\u6570\u636e\u5b57\u6bb5",
            "dxPivotGrid-filterFields": "\u8fc7\u6ee4\u5b57\u6bb5",
            "dxPivotGrid-allFields": "\u6240\u6709\u5b57\u6bb5",
            "dxPivotGrid-columnFieldArea": "\u5c06\u5217\u62d6\u52a8\u5230\u6b64\u5904",
            "dxPivotGrid-dataFieldArea": "\u5c06\u6570\u636e\u62d6\u52a8\u5230\u6b64\u5904",
            "dxPivotGrid-rowFieldArea": "\u5c06\u884c\u5b57\u6bb5\u62d6\u5230\u5230\u6b64\u6b21",
            "dxPivotGrid-filterFieldArea": "\u62d6\u52a8\u7b5b\u9009\u5b57\u6bb5\u5230\u6b64\u5904",
            "dxScheduler-editorLabelTitle": "\u6807\u9898",
            "dxScheduler-editorLabelStartDate": "\u5f00\u59cb\u65e5\u671f",
            "dxScheduler-editorLabelEndDate": "\u7ed3\u675f\u65e5\u671f",
            "dxScheduler-editorLabelDescription": "\u63cf\u8ff0",
            "dxScheduler-editorLabelRecurrence": "\u91cd\u590d",
            "dxScheduler-openAppointment": "\u6253\u5f00\u65e5\u7a0b",
            "dxScheduler-recurrenceNever": "\u6c38\u4e0d",
            "dxScheduler-recurrenceMinutely": "\u6bcf\u5206\u949f",
            "dxScheduler-recurrenceHourly": "\u6bcf\u5c0f\u65f6",
            "dxScheduler-recurrenceDaily": "\u6bcf\u65e5",
            "dxScheduler-recurrenceWeekly": "\u6bcf\u5468",
            "dxScheduler-recurrenceMonthly": "\u6bcf\u6708",
            "dxScheduler-recurrenceYearly": "\u6bcf\u5e74",
            "dxScheduler-recurrenceRepeatEvery": "\u6240\u6709",
            "dxScheduler-recurrenceRepeatOn": "Repeat On",
            "dxScheduler-recurrenceEnd": "\u505c\u6b62\u91cd\u590d",
            "dxScheduler-recurrenceAfter": "\u4e4b\u540e",
            "dxScheduler-recurrenceOn": "\u5728",
            "dxScheduler-recurrenceRepeatMinutely": "\u5206\u949f",
            "dxScheduler-recurrenceRepeatHourly": "\u5c0f\u65f6",
            "dxScheduler-recurrenceRepeatDaily": "\u65e5",
            "dxScheduler-recurrenceRepeatWeekly": "\u5468",
            "dxScheduler-recurrenceRepeatMonthly": "\u6708",
            "dxScheduler-recurrenceRepeatYearly": "\u5e74",
            "dxScheduler-switcherDay": "\u65e5",
            "dxScheduler-switcherWeek": "\u5468",
            "dxScheduler-switcherWorkWeek": "\u5de5\u4f5c\u5468",
            "dxScheduler-switcherMonth": "\u6708",
            "dxScheduler-switcherAgenda": "\u8bae\u7a0b",
            "dxScheduler-switcherTimelineDay": "\u65f6\u95f4\u8f74\u65e5",
            "dxScheduler-switcherTimelineWeek": "\u65f6\u95f4\u8f74\u5468",
            "dxScheduler-switcherTimelineWorkWeek": "\u65f6\u95f4\u8f74\u5de5\u4f5c\u5468",
            "dxScheduler-switcherTimelineMonth": "\u65f6\u95f4\u8f74\u6708",
            "dxScheduler-recurrenceRepeatOnDate": "\u4e8e\u65e5\u671f",
            "dxScheduler-recurrenceRepeatCount": "\u4e8b\u4ef6",
            "dxScheduler-allDay": "\u5168\u5929",
            "dxScheduler-confirmRecurrenceEditMessage": "\u4f60\u60f3\u53ea\u4fee\u6539\u8be5\u65e5\u7a0b\u8fd8\u662f\u60f3\u4fee\u6539\u6574\u4e2a\u7cfb\u5217\u7684\u65e5\u7a0b?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "\u4f60\u60f3\u53ea\u5220\u9664\u8fd9\u4e2a\u65e5\u7a0b\u8fd8\u662f\u60f3\u5220\u9664\u6574\u4e2a\u7cfb\u5217\u7684\u65e5\u7a0b?",
            "dxScheduler-confirmRecurrenceEditSeries": "\u4fee\u6539\u8be5\u7cfb\u5217\u7684\u65e5\u7a0b",
            "dxScheduler-confirmRecurrenceDeleteSeries": "\u5220\u9664\u8be5\u7cfb\u5217\u7684\u65e5\u7a0b",
            "dxScheduler-confirmRecurrenceEditOccurrence": "\u4fee\u6539\u65e5\u7a0b",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "\u5220\u9664\u65e5\u7a0b",
            "dxScheduler-noTimezoneTitle": "\u6ca1\u6709\u65f6\u533a",
            "dxScheduler-moreAppointments": "{0} \u66f4\u591a",
            "dxCalendar-todayButtonText": "\u4eca\u5929",
            "dxCalendar-ariaWidgetName": "\u65e5\u5386",
            "dxColorView-ariaRed": "\u7ea2\u8272",
            "dxColorView-ariaGreen": "\u7eff\u8272",
            "dxColorView-ariaBlue": "\u84dd\u8272",
            "dxColorView-ariaAlpha": "\u900f\u660e\u5ea6",
            "dxColorView-ariaHex": "\u8272\u6807",
            "dxTagBox-selected": "{0} \u5df2\u9009\u62e9",
            "dxTagBox-allSelected": "\u5df2\u5168\u9009 ({0})",
            "dxTagBox-moreSelected": "{0} \u66f4\u591a",
            "vizExport-printingButtonText": "\u6253\u5370",
            "vizExport-titleMenuText": "\u5bfc\u51fa\u4e2d/\u6253\u5370\u4e2d",
            "vizExport-exportButtonText": "{0} \u6587\u4ef6",
            "dxFilterBuilder-and": "\u4e0e",
            "dxFilterBuilder-or": "\u6216",
            "dxFilterBuilder-notAnd": "\u4e0e\u975e",
            "dxFilterBuilder-notOr": "\u6216\u975e",
            "dxFilterBuilder-addCondition": "\u6dfb\u52a0\u6761\u4ef6",
            "dxFilterBuilder-addGroup": "\u6dfb\u52a0\u7ec4",
            "dxFilterBuilder-enterValueText": "<\u8f93\u5165\u503c>",
            "dxFilterBuilder-filterOperationEquals": "\u7b49\u4e8e",
            "dxFilterBuilder-filterOperationNotEquals": "\u4e0d\u7b49\u4e8e",
            "dxFilterBuilder-filterOperationLess": "\u5c0f\u4e8e",
            "dxFilterBuilder-filterOperationLessOrEquals": "\u5c0f\u4e8e\u6216\u7b49\u4e8e",
            "dxFilterBuilder-filterOperationGreater": "\u5927\u4e8e",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "\u5927\u4e8e\u6216\u7b49\u4e8e",
            "dxFilterBuilder-filterOperationStartsWith": "\u5f00\u59cb\u4e8e",
            "dxFilterBuilder-filterOperationContains": "\u5305\u542b",
            "dxFilterBuilder-filterOperationNotContains": "\u4e0d\u5305\u542b",
            "dxFilterBuilder-filterOperationEndsWith": "\u7ed3\u675f\u4e8e",
            "dxFilterBuilder-filterOperationIsBlank": "\u7a7a",
            "dxFilterBuilder-filterOperationIsNotBlank": "\u4e0d\u4e3a\u7a7a",
            "dxFilterBuilder-filterOperationBetween": "\u4e4b\u95f4",
            "dxFilterBuilder-filterOperationAnyOf": "\u4efb\u4f55\u4e00\u4e2a",
            "dxFilterBuilder-filterOperationNoneOf": "\u4efb\u4f55\u4e00\u4e2a\u90fd\u4e0d",
            "dxHtmlEditor-dialogColorCaption": "\u66f4\u6539\u5b57\u4f53\u989c\u8272",
            "dxHtmlEditor-dialogBackgroundCaption": "\u66f4\u6539\u80cc\u666f\u989c\u8272",
            "dxHtmlEditor-dialogLinkCaption": "\u6dfb\u52a0\u94fe\u63a5",
            "dxHtmlEditor-dialogLinkUrlField": "\u94fe\u63a5\u5730\u5740",
            "dxHtmlEditor-dialogLinkTextField": "\u94fe\u63a5\u6587\u5b57",
            "dxHtmlEditor-dialogLinkTargetField": "\u5728\u65b0\u7a97\u53e3\u4e2d\u6253\u5f00",
            "dxHtmlEditor-dialogImageCaption": "\u6dfb\u52a0\u56fe\u7247",
            "dxHtmlEditor-dialogImageUrlField": "\u56fe\u7247\u5730\u5740",
            "dxHtmlEditor-dialogImageAltField": "\u66ff\u4ee3\u6587\u5b57",
            "dxHtmlEditor-dialogImageWidthField": "\u5bbd (px)",
            "dxHtmlEditor-dialogImageHeightField": "\u957f (px)",
            "dxHtmlEditor-dialogInsertTableRowsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableColumnsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableCaption": "!TODO",
            "dxHtmlEditor-heading": "\u6807\u9898",
            "dxHtmlEditor-normalText": "\u6b63\u6587",
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
            "dxFileManager-newDirectoryName": "TODO",
            "dxFileManager-rootDirectoryName": "TODO",
            "dxFileManager-errorNoAccess": "TODO",
            "dxFileManager-errorDirectoryExistsFormat": "TODO",
            "dxFileManager-errorFileExistsFormat": "TODO",
            "dxFileManager-errorFileNotFoundFormat": "TODO",
            "dxFileManager-errorDirectoryNotFoundFormat": "TODO",
            "dxFileManager-errorWrongFileExtension": "TODO",
            "dxFileManager-errorMaxFileSizeExceeded": "TODO",
            "dxFileManager-errorInvalidSymbols": "TODO",
            "dxFileManager-errorDefault": "TODO",
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
            "dxDiagram-commandLineWidth": "TODO",
            "dxDiagram-commandLineStyle": "TODO",
            "dxDiagram-commandLineStyleSolid": "TODO",
            "dxDiagram-commandLineStyleDotted": "TODO",
            "dxDiagram-commandLineStyleDashed": "TODO",
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
            "dxGantt-sortingAscendingText": "\u5347\u5e8f\u6392\u5e8f",
            "dxGantt-sortingDescendingText": "\u964d\u5e8f\u6392\u5e8f",
            "dxGantt-sortingClearText": "\u6e05\u9664\u6392\u5e8f",
            "dxGantt-showResources": "TODO",
            "dxGantt-showDependencies": "TODO",
            "dxGantt-dialogStartDateValidation": "TODO",
            "dxGantt-dialogEndDateValidation": "TODO"
        }
    })
}));
