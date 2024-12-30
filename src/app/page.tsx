import { Experience } from "@/components";

export const revalidate = 300;

const markdown = `
- Sed quis justo ac magna.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Sed quis justo ac magna.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
`;

export default function Home() {
  return (
    <main>
      <Experience
        icon={null}
        period='Jul 2017 - Oct 2021'
        title='Team Lead'
        description={markdown}
      />
    </main>
  );
}
