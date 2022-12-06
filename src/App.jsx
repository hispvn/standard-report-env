import { useEffect, useState } from "react";
import Loader from "@/common/Loader/Loader";
import { pull } from "@/utils/fetch";
import { useTranslation } from "react-i18next";
import useAppState from "@/hooks/useAppState";

import Report from "./reports/example";

const App = () => {
  const { action } = useAppState();
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  /**
   * Expand report width as much as possible
   * @param {String} domId - Root DOM Id
   */
  const expandReport = (domId) => {
    parent.document.getElementById(
      domId
    ).children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0].style.width =
      "100%";
  };

  useEffect(() => {
    setTimeout(() => {
      if (parent.document.getElementById("root")) {
        expandReport("root");
      }
      if (parent.document.getElementById("dhis2-app-root")) {
        expandReport("dhis2-app-root");
      }
    }, 500);
  }, []);

  useEffect(() => {
    (async () => {
      const metadata = {};
      const me = await pull("/api/me");
      const orgUnits = await pull(
        "/api/organisationUnits?fields=id,name,displayName,level,parent,ancestors,attributeValues&paging=false"
      );
      const orgUnitLevels = await pull("/api/organisationUnitLevels?fields=id,name,displayName");
      metadata.me = me;
      metadata.orgUnits = orgUnits.organisationUnits;
      metadata.orgUnitLevels = orgUnitLevels.organisationUnitLevels;
      action.setMetadata(metadata);
      i18n.changeLanguage(me.settings.keyUiLocale);
      setLoading(false);
    })();
  }, []);

  return loading ? (
    <Loader>{t("initializing")}</Loader>
  ) : (
    <div className="App">
      <Report />
    </div>
  );
};

export default App;
