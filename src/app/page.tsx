import { Wrapper } from "@/components";
import { NavigationIcon } from "@/components/icons";

export const revalidate = 300;

export default function Home() {
  return (
    <main>
      <Wrapper>
        <p className='subtitle'>HELLO</p>
        <NavigationIcon size={32} />
      </Wrapper>
    </main>
  );
}
