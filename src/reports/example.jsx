import { React, useEffect, useState } from "react";
import withReportContainer from "@/hocs/withReportContainer";
// Selector
import PeriodTypeSelector from "@/common/PeriodTypeSelector/PeriodTypeSelector";
import PeriodSelector from "@/common/PeriodSelector/PeriodSelector";
import OrgUnitSelector from "@/common/OrgUnitSelector/OrgUnitSelector";
// Translation
import { useTranslation } from "react-i18next";
import useLocalization from "@/hooks/useLocalization";
// Hooks
import useAppState from "@/hooks/useAppState";
// Components
import HeaderBar from "@/common/HeaderBar";
import { Button } from "@mui/material";
import Loader from "@/common/Loader/Loader";
// Other tools
import { pull } from "@/utils/fetch";

const Example = () => {
  const { t, i18n } = useTranslation();
  const { state, action } = useAppState();
  const { orgUnit, period } = state.selection;
  const [loading, setLoading] = useState(true);

  useLocalization("lo", []);
  useLocalization("en", [{ key: "translationKey", value: "Translation content" }]);

  useEffect(() => {
    (async () => {
      const req = await pull("/api/me?fields=settings");
      const usrLanguage = Object.keys(req).length === 0 || req === undefined ? "en" : req["settings"]["keyUiLocale"];
      i18n.changeLanguage(usrLanguage);
      setLoading(false);
    })();
  }, []);

  return loading ? <Loader>Loading...</Loader> : <div>HELLO STANDARD REPORT ENV</div>;
};

export default withReportContainer(Example);
