import clsx from "clsx";

interface BreadcrumbsProps {
  titles: string[];
  separator?: string;
  className?: string;
}

export const Breadcrumbs = ({
  titles,
  className,
  separator = "-",
}: BreadcrumbsProps) => {
  const currentTitles = titles.filter((item) => typeof item !== "object");
  return (
    <div className={clsx("grid items-center gap-1", className)}>
      {currentTitles.map((item, idx) => (
        <div className="flex items-center gap-1" key={idx}>
          <p>{item}</p>
          <p>{currentTitles[idx] !== titles[titles.length - 2] && separator}</p>
        </div>
      ))}
    </div>
  );
};
