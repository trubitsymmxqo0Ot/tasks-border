import clsx from "clsx";
import { useSelectTitleStyles } from "../model/store";
import { text } from "@/shared/config/text";
import { colors, sizes, weights } from "../model/styles";
import { FilterCard } from "./filter-card";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { ColorsType, SizesType, WeightsType } from "../type/type";

export const TitleSettings = () => {
  const title = useSelectTitleStyles((state) => state.title);
  const setTitleStyles = useSelectTitleStyles((state) => state.setTitleStyles);

  const weight = useSelectTitleStyles((state) => state.weight);
  const setWeightStyles = useSelectTitleStyles(
    (state) => state.setWeightStyles,
  );

  const size = useSelectTitleStyles((state) => state.size);
  const setSizeStyles = useSelectTitleStyles((state) => state.setSizeStyles);

  const titles = [title.name, weight.name, size.name];
  return (
    <div>
      <Breadcrumbs
        titles={titles}
        separator="/"
        className={clsx(text({ size: "tn" }), "text-color-tertiary mb-7")}
      />
      <div className="grid grid-cols-3 gap-5 items-stretch ">
        <FilterCard<ColorsType>
          title={title.name}
          data={colors}
          setValue={setTitleStyles}
        />
        <FilterCard<WeightsType>
          title={weight.name}
          data={weights}
          setValue={setWeightStyles}
        />
        <FilterCard<SizesType>
          title={size.name}
          data={sizes}
          setValue={setSizeStyles}
        />
      </div>
    </div>
  );
};
