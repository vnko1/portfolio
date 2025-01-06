import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Wrapper } from "@/components";

const Loader: React.FC = () => {
  return (
    <Wrapper containerClassNames='flex flex-col gap-4-xl items-center lg:flex-row-reverse lg:justify-between'>
      <div className='banner'>
        <Skeleton width={320} height={280} />
      </div>
      <div className='w-full self-start flex flex-col gap-4-xl'>
        <div>
          <Skeleton width={"30%"} height={50} className='mb-1-xs' />
          <Skeleton count={3} width={"60%"} />
        </div>
        <Skeleton count={2} width={"20%"} />
        <Skeleton count={1} width={"10%"} />
      </div>
    </Wrapper>
  );
};

export default Loader;
