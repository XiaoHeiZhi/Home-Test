import { useTranslation } from "@/app/i18n";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <div>商品详情</div>
    </>
  );
}
