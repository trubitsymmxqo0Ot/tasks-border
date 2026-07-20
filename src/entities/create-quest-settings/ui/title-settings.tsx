import clsx from "clsx";
import { useSelectTitleStyles } from "../model/store";
import { text } from "@/shared/config/text";
import { colors, sizes, weights, position, border } from "../model/styles";
import { FilterCard } from "./filter-card";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { BorderType, ColorsType, PositionType, SizesType, WeightsType } from "../type/type";

export const TitleSettings = () => {
  const title = useSelectTitleStyles((state) => state.title);
  const setTitleStyles = useSelectTitleStyles((state) => state.setTitleStyles);

  const weight = useSelectTitleStyles((state) => state.weight);
  const setWeightStyles = useSelectTitleStyles(
    (state) => state.setWeightStyles,
  );

  const size = useSelectTitleStyles((state) => state.size);
  const setSizeStyles = useSelectTitleStyles((state) => state.setSizeStyles);

  const customPosition = useSelectTitleStyles(state => state.position);
  const setPositionStyles = useSelectTitleStyles(state => state.setPositionStyles);

  const customBorder = useSelectTitleStyles((state) => state.border);
  const setBorderStyles = useSelectTitleStyles(state => state.setBorderStyles);

  const titles = [title.name, weight.name, size.name, customPosition.name, customBorder.name];
  return (
    <div>
      <Breadcrumbs
        titles={titles}
        separator="/"
        className={clsx(text({ size: "tn" }), "text-color-tertiary mb-7")}
      />
      <div className="grid grid-cols-4 gap-5 items-stretch ">
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
        <FilterCard<PositionType>
            title={customPosition.name}
            data={position}
            setValue={setPositionStyles}
          />
        <FilterCard<BorderType>
          title={customBorder.name}
          data={border}
          setValue={setBorderStyles}
          />
      </div>
    </div>
  );
};
