import { Wrapper } from "@/components";
import { LetterIcon } from "@/components/icons";
export const revalidate = 300;
export default function Home() {
  return (
    <main>
      <Wrapper>
        <p className='subtitle'>HELLO</p>
        <LetterIcon />
      </Wrapper>
    </main>
  );
}
