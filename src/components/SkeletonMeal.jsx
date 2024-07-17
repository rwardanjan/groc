import { Skeleton } from "@/components/ui/skeleton";

const SkeletonMeal = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[90px] w-full rounded-xl bg-gray-50" />
      <Skeleton className="h-[90px] w-full rounded-xl bg-gray-50" />
      <Skeleton className="h-[90px] w-full rounded-xl bg-gray-50" />
      <Skeleton className="h-[90px] w-full rounded-xl bg-gray-50" />
    </div>
  );
};

export default SkeletonMeal;
