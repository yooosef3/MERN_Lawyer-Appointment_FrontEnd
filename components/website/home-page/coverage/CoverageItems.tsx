import { CoverProps } from "@/app/types/types";
import CoverageCard from "./CoverageCard";

const CoverageItems = ({ items }: { items: CoverProps[] }) => {
  return (
    <div className="grid gap-5 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr]">
      {items.map((item) => (
        <CoverageCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CoverageItems;
