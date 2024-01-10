import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Navbar = () => {
  const t = useTranslations("Index");
  const locale = useLocale();
  console.log(locale, "locale");

  return (
    <div>
      <h1> {t("pageNav")}</h1>
      <Link href={locale == "en" ? "ar" : "en"}>
        {locale == "en" ? "AR" : "EN"}
      </Link>
    </div>
  );
};

export default Navbar;
