import { Skeleton } from "@/components/ui/skeleton";

const SkeletonMeal = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center gap-4">
        <Skeleton className="h-[52px] min-w-[52px] rounded-md" />
        <div className="space-y-2 w-full">
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[70%]" />
        </div>
        <Skeleton className="h-8 min-w-8 rounded-md" />
      </div>
      <div className="flex items-center gap-4">
        <Skeleton className="h-[52px] min-w-[52px] rounded-md" />
        <div className="space-y-2 w-full">
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[70%]" />
        </div>
        <Skeleton className="h-8 min-w-8 rounded-md" />
      </div>
      <div className="flex items-center gap-4">
        <Skeleton className="h-[52px] min-w-[52px] rounded-md" />
        <div className="space-y-2 w-full">
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[70%]" />
        </div>
        <Skeleton className="h-8 min-w-8 rounded-md" />
      </div>
      <div className="flex items-center gap-4">
        <Skeleton className="h-[52px] min-w-[52px] rounded-md" />
        <div className="space-y-2 w-full">
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[70%]" />
        </div>
        <Skeleton className="h-8 min-w-8 rounded-md" />
      </div>
    </div>
  );
};

export default SkeletonMeal;
