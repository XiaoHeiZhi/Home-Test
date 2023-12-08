import { useTranslation } from "@/app/i18n";
import BackImage from "@/public/Image/page_end.png";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <div>Hello Products!</div>
    </>
  );
}
