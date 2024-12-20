import PublicationCard from "./Card";

import { useLanguage } from "../../../lib/context/useLang";
import { translations } from "../../../lib/translations";
import { useEffect, useState } from "react";
import Skeleton from "../../ui/Skeleton";

const Publications = () => {
  const [loading, setLoading] = useState(true);
  const [estates, setEstates] = useState([]);
  const { language } = useLanguage();

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/real-estate/page?size=3&ascending=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setEstates(data.content);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col w-full py-12 gap-12">
      <div className="flex gap-8 items-center">
        <h3 className="text-[40px] font-semibold whitespace-nowrap">
          {translations[language].featured}
        </h3>
        <div className="h-0.5 w-full bg-black/10" />
      </div>

      <div className="grid grid-cols-3 gap-12">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <Skeleton className="w-full h-[400px]" key={i} />
            ))
          : estates &&
            estates.map((p, i) => {
              return <PublicationCard key={i} publication={p} />;
            })}
      </div>
    </div>
  );
};

export default Publications;
