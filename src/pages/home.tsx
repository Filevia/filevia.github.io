import ThemeToggle from "@/components/theme-toggle.tsx";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <div className={""}>
      <h1>{t("welcome")}</h1>
      <ThemeToggle />
    </div>
  );
}
