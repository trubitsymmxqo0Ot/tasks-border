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
  return (
    <div className={clsx("flex items-center gap-1", className)}>
      {titles.map((item, idx) => (
        <div className="flex items-center gap-1" key={idx}>
          <p>{item}</p>
          <p>{titles[idx] !== titles[titles.length - 1] && separator}</p>
        </div>
      ))}
    </div>
  );
};
