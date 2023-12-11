// "use client";

import { useTranslation } from "@/app/i18n";
import MySwiper from "./compoents/carousel";
import carouselOne from "@/public/Image/carousel-one.jpg";
import carouselTwo from "@/public/Image/carousel-two.jpeg";
import carouselThree from "@/public/Image/carousel-three.png";
import carouselFour from "@/public/Image/carousel-four.jpeg";

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  // const { t } = await useTranslation(lng);
  const imageArray = [carouselFour, carouselTwo, carouselOne, carouselThree];
  const textArray = [
    {
      title: "One Million Data in the Air",
      context: `In 2019, a dedicated team of researchers initiated an extraordinary journey of
      discovery by outfitting mana, a Heuglin's Gull in Salalah, with DEBUT LEGO
      device. What followed in the subsequent years was an awe- inspiring saga, as
      Omana's flight records unveiled a remarkable tale of three migrations.`,
    },
    {
      title: "Ultra. Like. Hummingbird",
      context: `Druid proudly launches DEBUT ULTRA, the lightest ever series weighted from 1.9
      grams, with 5G version less than 2.5 grams. From LEGO around 20 grams to
      ULTRA less than 2 grams, the weight range is exactly correlated with the
      species of hummingbird. What has changed is the weight, what has not
      changed is the function package as DEBUT.`,
    },
    {
      title: "Tracking. Better. More",
      context: `
      Ecotopia: A Digital World of Wildlife
      Druid is devoted to developing affordable research tools with innovative
      features, durable lifespan, lighter weight, and flexible configurations, capable
      of delivering high quality tracking data, and more insights on environment
      and behaviors.`,
    },
    {
      title: "Connection. Life. Nature",
      context: `IntelinkGO: A Community of Citizen Science
      Druid, leveraging the wisdom of traditional banding, is passionate to establish
      a platform of crowd contributors to help on device deployment, data
      collection, species survey, etc, and to reduce travel emission cost driven by
      our ecosystem's responsibility of neutrality and balance.`,
    },
  ];
  return (
    <>
      <MySwiper ImageArr={imageArray} textArray={textArray} lng={lng} />
    </>
  );
}
