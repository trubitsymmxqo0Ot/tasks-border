interface SkeletonProps {
  items?: number;
  containerStyles?: string;
  contentStyles?: string;
}

export const Skeleton = ({
  containerStyles,
  contentStyles,
  items = 0,
}: SkeletonProps) => {
  if (!items) {
    return <div className={containerStyles}></div>;
  }
  return (
    <div className={containerStyles}>
      <div className={contentStyles}></div>
    </div>
  );
};
