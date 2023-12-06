import { useTranslation } from "@/app/i18n";
import Carousel from "./compoents/carousel";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <Carousel />
    </>
  );
}
