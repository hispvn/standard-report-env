const resources = {
  en: {
    translation: {
      menu: "MENU",
      event: "Event",
      orgUnit: "Org unit",
      programDataSet: "Data set / Program",
      period: "Period",
      selectOrgUnit: "Select org unit",
      selectPeriod: "Select period",
      selectProgram: "Select dataset/program",
      dataSetLinkingSucess: "",
      completenessDataSetCreation: "Completeness Data set Creation",
      dataSetLinkingDialogContent: "No Completeness Data set associated with",
      pleaseSelectPeriodType: "Please select period type",
      dataSetLinkingDialogError: "",
      cancel: "Cancel",
      submit: "Submit",
      programs: "Programs",
      dataSets: "Datasets",
      entryForm: "Entry Form",
      description: "Description",
      newEvent: "Register Event",
      eventEntryForm: "Event Entry Form",
      searchLocation: "Search location...",
      ok: "OK",
      eventSaved: "Event saved",
      correctErrors: "Please correct all errors before saving",
      save: "Save",
      discard: "Discard",
      saveAndAddNew: "Save and add new",
      saveAndClose: "Save and close",
      savingWarningMessage: "Unsaved data exists. Do you want to proceed?",
      thisFieldIsRequired: "This field is required",
      valueMustBeInteger: "Value must be integer",
      valueMustBeNumber: "Value must be number",
      valueMustBeBetween0And100: "Value must be between 0 and 100",
      valueMustBePositiveInteger: "Value must be positive integer",
      valueMustBeNegativeInteger: "Value must be negative integer",
      valueMustBeZeroOrPositiveInteger: "Value must be zero or positive integer",
      valueMustBePhoneNumber: "Value must be phone number",
      valueMustBeEmail: "Value must be email",
      value: "Value",
      unsupportedValueType: "Unsupported value type",
      eventList: "Registered Events",
      totalEvents: "Total events",
      edit: "Edit",
      delete: "Delete",
      programIndicator: "Name",
      incomplete: "Incomplete",
      complete: "Complete",
      indicatorsFor: "Indicators for ",
      indicators: "Indicators",
      indicatorName: "Indicator name",
      search: "Search...",
      deleteEventMessage: "Are you sure you want to delete this event? This process cannot be undone!!",
      eventDate: "Event date",
      dataElement: "Data element",
      dataValueSaved: "Data value saved!!",
      loading: "... Loading ...",
      loadingDataValues: "... Loading Data values ...",
      loadingEvents: "... Loading events ...",
      numberOfCasesRecoredInEventCapture: "Number of cases recorded in event capture",
      help: "Help",
      runValidationRule: "Run Validations",
      completedBy: "Dataset completed by",
      date: "Date",
      online: "ONLINE",
      offline: "OFFLINE",
      youAreOnline: "You are online",
      youAreOffline:
        "You are offline, data entered will be stored in memory and automatically upload to the server when you back online",
      dataElementHistory: "Data Element History",
      auditTrail: "Audit trail",
      modifiedBy: "Modified by",
      modification: "Modification",
      comment: "Comment",
      followUp: "Follow Up",
      saveComment: "Save Comment",
      minMaxLimits: "Min - Max Limits",
      minLimit: "Min Limit",
      maxLimit: "Max Limit",
      average: "Average",
      storedBy: "Stored by",
      lastUpdated: "Last updated",
      aggregateValue: "Aggregate Value",
      eventValue: "Event Value",
      max: "Max",
      min: "Min",
      close: "Cancel",
      validationRuleResults: "Validation Rule Results",
      validationRule: "Validation Rule",
      leftSide: "Left side",
      rightSide: "Right side",
      operator: "Operator",
      cases: "Cases",
      commentSaved: "Comment saved!!",
      minMaxSaved: "Min - Max Limits saved!!",
      followUpSaved: "Follow up saved!!",
      showPassedVr: "Show passed validation rules",
      allVrPassed: "All validation rules passed",
      calculatingData: "Calculating data",
      clickToSeeInformation: "Click to see information",
      reportDate: "Report Date",
      selectReportDate: "Select Report Date",
      coordinates: "Coordinates",
      latitude: "Latitude",
      longitude: "Longitude",
      select: "Select",
      correctForm: "Please correct all errors before saving!!",
      dataMismatchWarning: "Warning: Data Mismatch",
      dataMatched: "Data Matched",
      aggregatedDataLabel: "Aggregated {{periodType}} data",
      eventDataLabel: "Cases recorded in event capture",
      bothMinAndMaxMustBeDefined: "Both Min and Max Limit must be defined",
      result: "Result",
      dataSetHasBeenCompletedDataCannotBeChanged: "The DataSet has been completed, data cannot be changed",
      notAvailable: "Not available in offline mode",
      eventSavedLocally: "Event saved locally",
      dataValueSavedLocally: "Data Value saved locally",
      push: "Push",
      clear: "Clear",
      totalOfflineEvents: "Total number of offline events",
      totalOfflineDataValues: "Total number of offline data values",
      minAndMaxMustBePositiveNumber: "",
      dateOfBirth: "Date of Birth",
      years: "Age in year(s)",
      months: "Age in month(s)",
      days: "Age in day(s)",
      dataElementAccessMissing: "You don't have access to this data element",
      dataSetIsLocked: "Data set is locked by expiry days",
      clearCache: "Clear cache and reload app",
      yes: "Yes",
      no: "No",
      deleteEventDialogTitle: "Are you sure you want to delete this event?",
      deleteEventDialogContent: "This process cannot be undone!",
      warningDialogTitle: "Are you sure you want to Close",
      warningDialogContent: "All data will be lost",
      Q1: "Quarter 1",
      Q2: "Quarter 2",
      Q3: "Quarter 3",
      Q4: "Quarter 4",
      apr: "April",
      "apr-sep": "April - September",
      aug: "August",
      dec: "December",
      feb: "February",
      jan: "January",
      "jan-feb": "January - February",
      "jan-jun": "January - June",
      jul: "July",
      "jul-aug": "July - August",
      "jul-dec": "July - December",
      jun: "June",
      mar: "March",
      "mar-apr": "March - April",
      may: "May",
      "may-jun": "May - June",
      "may-oct": "May - October",
      nov: "November",
      "nov-apr": "November - April",
      "nov-dec": "November - December",
      oct: "October",
      "oct-mar": "October - March",
      quarter: "Quarter",
      sep: "September",
      "sep-oct": "September - October",
      "six-month": "Six Month",
      sixMonth: "Six Month",
      day: "Day",
      month: "Month",
      year: "Year",
      villageRequired: "Province / District / Village are required",
      initializing: "Initializing",
      week: "Week",
      female: "Female",
      male: "Male",
      chooseYear: "Choose Year",
      chooseHalf: "Choose Half",
      chooseHC: "Choose HC",
      chooseDistrict: "Choose District",
      chooseProvince: "Choose Province",
      half: "Half",
      downloadExcel: "Download as Excel",
      Yearly: "Yearly",
      Quarterly: "Quarterly",
      Monthly: "Monthly",
      Weekly: "Weekly",
      Daily: "Daily",
      SixMonthly: "Six-Monthly",
      Last12Months: "Last 12 months",
      S1: "First half-year",
      S2: "Half a year later",
      pleaseSelectReport: "Please Select Report"
    }
  },
  lo: {
    translation: {
      menu: "????????????",
      event: "??????????????????",
      orgUnit: "???????????????????????????????????????????????????",
      programDataSet: "???????????????????????????/??????????????????",
      period: "????????????????????????",
      selectOrgUnit: "??????????????????????????????????????????????????????????????????",
      selectPeriod: "???????????????????????????????????????",
      selectProgram: "??????????????????????????????????????????/??????????????????",
      dataSetLinkingSucess: "??????????????????????????????????????????????????????????????????????????????",
      completenessDataSetCreation: "??????????????????????????????????????????????????????????????????",
      dataSetLinkingDialogContent: "????????????????????????????????????????????????????????????????????????????????????????????????",
      pleaseSelectPeriodType: "????????????????????????????????????????????????????????????????????????",
      dataSetLinkingDialogError: "?????????????????????????????????????????????????????????????????????????????????",
      cancel: "?????????????????????",
      submit: "??????????????????????????????",
      programs: "??????????????????",
      dataSets: "???????????????????????????",
      entryForm: "???????????????????????????????????????",
      description: "???????????????????????????",
      newEvent: "??????????????????????????????????????????????????????",
      eventEntryForm: "??????????????????????????????????????????????????????????????????",
      searchLocation: "?????????????????????????????????????????????...",
      ok: "??????????????????",
      eventSaved: "?????????????????????????????????????????????????????????",
      correctErrors: "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
      save: "??????????????????",
      discard: "?????????????????????",
      saveAndAddNew: "?????????????????? ????????? ????????????????????????",
      saveAndClose: "?????????????????? ????????? ?????????",
      savingWarningMessage: "?????????????????????????????????????????????????????????????????????. ???????????????????????????????????????????????????????????????????????????????",
      thisFieldIsRequired: "???????????????????????????????????????????????????????????????",
      valueMustBeInteger: "???????????????????????????????????????????????????????????????????????????",
      valueMustBeNumber: "????????????????????????????????????????????????",
      valueMustBeBetween0And100: "????????????????????????????????????????????????????????????????????? 0 - 100",
      valueMustBePositiveInteger: "???????????????????????????????????????????????????????????????????????????????????? (+)",
      valueMustBeNegativeInteger: "???????????????????????????????????????????????????????????????????????????????????? (-)",
      valueMustBeZeroOrPositiveInteger: "????????????????????????????????????????????????????????? (0) ????????? ??????????????????????????????????????????????????? (+)",
      valueMustBePhoneNumber: "???????????????????????????????????????????????????????????????",
      valueMustBeEmail: "????????????????????????????????????????????????",
      value: "?????????",
      unsupportedValueType: "????????????????????????????????????????????????????????????",
      eventList: "??????????????????????????????????????????????????????",
      totalEvents: "????????????????????????????????????",
      edit: "???????????????",
      delete: "?????????",
      programIndicator: "?????????",
      incomplete: "???????????????????????????",
      complete: "?????????????????????",
      indicatorsFor: "???????????????????????????????????????",
      indicators: "????????????????????????",
      indicatorName: "????????????????????????????????????",
      search: "??????????????????...",
      deleteEventMessage: "??????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????!!",
      eventDate: "?????????????????????????????????",
      dataElement: "??????????????????????????????????????????",
      dataValueSaved: "????????????????????????????????????????????????",
      loading: "???????????????????????????....",
      loadingDataValues: "?????????????????????????????????????????????...",
      loadingEvents: "?????????????????????????????????????????????...",
      numberOfCasesRecoredInEventCapture: "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
      help: "???????????????????????????",
      runValidationRule: "????????????????????????????????????????????????",
      completedBy: "??????????????????????????????????????????????????????",
      date: "???????????????",
      online: "ONLINE",
      offline: "OFFLINE",
      youAreOnline: "??????????????????????????????",
      youAreOffline:
        "???????????????????????????????????????????????????????????????????????????, ??????????????????????????????????????????????????????????????????????????????????????? ????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
      dataElementHistory: "?????????????????????????????????????????????????????????????????????",
      auditTrail: "??????????????????????????????????????????????????????",
      modifiedBy: "????????????????????????",
      modification: "????????????????????????",
      comment: "??????????????????",
      followUp: "??????????????????",
      saveComment: "????????????????????????????????????",
      minMaxLimits: "????????????????????????????????????????????? - ??????????????????",
      minLimit: "?????????????????????????????????????????????",
      maxLimit: "?????????????????????????????????????????????",
      average: "??????????????????",
      storedBy: "???????????????????????????",
      lastUpdated: "????????????????????????????????????????????????",
      aggregateValue: "???????????????????????????",
      eventValue: "????????????????????????????????????",
      max: "??????????????????????????????",
      min: "???????????????????????????",
      close: "????????????????????????",
      validationRuleResults: "??????????????????????????????????????????????????????????????????????????????",
      validationRule: "????????????????????????????????????????????????",
      leftSide: "????????????????????????",
      rightSide: "?????????????????????",
      operator: "???????????????????????????",
      cases: "??????????????????",
      commentSaved: "????????????????????????????????????????????????????????????",
      minMaxSaved: "????????????????????????????????????????????? - ?????????????????????????????????????????????????????????",
      followUpSaved: "??????????????????????????????????????????????????????????????????",
      showPassedVr: "????????????????????????????????????????????????????????????????????????????????????????????????",
      allVrPassed: "??????????????????????????????????????????????????????????????????????????????????????????",
      calculatingData: "????????????????????????????????????",
      clickToSeeInformation: "?????????????????????????????????????????????????????????",
      reportDate: "?????????????????????????????????",
      selectReportDate: "????????????????????????????????????????????????",
      coordinates: "????????????????????????????????????????????????",
      latitude: "??????????????????????????????",
      longitude: "??????????????????????????????",
      select: "???????????????",
      correctForm: "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
      dataMismatchWarning: "???????????????: ?????????????????????????????????????????????",
      dataMatched: "???????????????????????????????????????????????????",
      aggregatedDataLabel: "???????????????????????????????????? {{periodType}}",
      eventDataLabel: "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
      bothMinAndMaxMustBeDefined: "?????????????????????????????????????????????????????????????????????????????????????????? ????????? ??????????????????",
      result: "????????????",
      dataSetHasBeenCompletedDataCannotBeChanged: "??????????????????????????????????????????????????????????????????, ??????????????????????????????????????????????????????.",
      notAvailable: "??????????????????????????????????????????????????????????????????????????????????????????",
      eventSavedLocally: "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
      dataValueSavedLocally: "???????????????????????????????????????????????????????????????????????????????????????????????????????????????",
      push: "????????????",
      clear: "????????????",
      totalOfflineEvents: "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
      totalOfflineDataValues: "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
      minAndMaxMustBePositiveNumber: "??????????????????????????? ????????? ??????????????????????????????????????????????????????????????????????????????????????????????????? (+)",
      dateOfBirth: "??????????????????????????????????????????",
      years: "??????????????????????????????",
      months: "???????????????????????????????????????",
      days: "?????????????????????????????????",
      dataElementAccessMissing: "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
      dataSetIsLocked: "??????????????????????????????????????????????????????????????????????????????????????????????????????",
      clearCache: "???????????????????????????????????????????????????????????? ????????? ???????????????????????????????????????",
      yes: "?????? / ????????????",
      no: "???????????? / ?????????????????????",
      deleteEventDialogTitle: "????????????????????????????????????????????????????????????????????????????????????????",
      deleteEventDialogContent: "????????????????????????????????????????????????????????????????????????????????????????????????!",
      warningDialogTitle: "?????????????????????????????????????????????????????????????",
      warningDialogContent: "??????????????????????????????????????????",
      Q1: "??????????????? 1",
      Q2: "??????????????? 2",
      Q3: "??????????????? 3",
      Q4: "??????????????? 4",
      apr: "????????????",
      "apr-sep": "???????????? - ???????????????",
      aug: "???????????????",
      dec: "???????????????",
      feb: "???????????????",
      jan: "??????????????????",
      "jan-feb": "?????????????????? - ???????????????",
      "jan-jun": "?????????????????? - ??????????????????",
      jul: "?????????????????????",
      "jul-aug": "????????????????????? - ???????????????",
      "jul-dec": "????????????????????? - ???????????????",
      jun: "??????????????????",
      mar: "????????????",
      "mar-apr": "???????????? - ????????????",
      may: "?????????????????????",
      "may-jun": "????????????????????? - ??????????????????",
      "may-oct": "????????????????????? - ????????????",
      nov: "???????????????",
      "nov-apr": "??????????????? - ????????????",
      "nov-dec": "??????????????? - ???????????????",
      oct: "????????????",
      "oct-mar": "???????????? - ????????????",
      quarter: "???????????????",
      sep: "???????????????",
      "sep-oct": "??????????????? - ????????????",
      "six-month": "????????????????????????",
      sixMonth: "????????????????????????",
      day: "?????????",
      month: "???????????????",
      year: "??????",
      villageRequired: "???????????? / ??????????????? / ???????????? ????????????????????????????????????",
      initializing: "Initializing",
      week: "?????????????????????",
      female: "?????????",
      male: "?????????",
      chooseYear: "?????????????????????",
      chooseHalf: "????????????????????????????????????",
      chooseHC: "?????????????????????????????????????????????????????????????????????????????????????????????",
      chooseDistrict: "??????????????????????????????",
      chooseProvince: "???????????????????????????",
      half: "?????????????????????",
      downloadExcel: "????????????????????????????????? Excel",
      Yearly: "???????????????",
      Quarterly: "???????????????",
      Monthly: "????????????????????????",
      Weekly: "????????????????????????",
      Daily: "??????????????????",
      SixMonthly: "Six-Monthly",
      Last12Months: "Last 12 months",
      S1: "First half-year",
      S2: "Half a year later",
      pleaseSelectReport: "Please Select Report"
    }
  }
};
export default resources;
