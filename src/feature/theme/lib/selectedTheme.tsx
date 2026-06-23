import { ThemeList } from "@/shared/contexts/theme/types";
import { Typography } from "@/shared/ui/Typography";
import Image from "next/image";
import Light from "../assets/light.svg";
import Dark from "../assets/dark.svg";
import VeryDark from "../assets/very-dark.svg";
import { Wrapper } from "@/shared/ui/Wrapper";

export const selectedTheme = ({
  theme,
  className,
}: {
  theme: ThemeList;
  className?: string;
}) => {
  if (theme === "light") {
    return (
      <Wrapper className={className}>
        <Typography as="p">Светлая тема</Typography>
        <Image src={Light} unoptimized alt="Светлая тема" className="w-5 h-5" />
      </Wrapper>
    );
  } else if (theme === "dark") {
    return (
      <Wrapper className={className}>
        <Typography as="p">Темная тема</Typography>
        <Image src={Dark} alt="Темная тема" unoptimized className="w-5 h-5" />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Typography as="p">Очень темная тема</Typography>
        <Image
          src={VeryDark}
          alt="Очень темная тема"
          unoptimized
          className="w-5 h-5"
        />
      </Wrapper>
    );
  }
};
