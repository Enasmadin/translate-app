import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const t = useTranslations("Index");
  return <div>{t("pageFooter")}</div>;
};

export default Footer;
