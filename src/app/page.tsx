import { About, Hero } from "@/components";

export const revalidate = 300;

export default function Home() {
  return (
    <main>
      <Hero
        heroSection={{
          title: "Hi, I’m Andrii 👋",
          description:
            "I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.",
          id: 0,
          documentId: "asd",
          secondaryDescription: null,
        }}
        avatar={{ url: "/1.jpg", id: 1, documentId: "asd" }}
        locationLink='#'
        locationText='Kyiv, Ukraine'
        isAvailable
        isAvailableText={"Available for new projects"}
        links={[
          {
            title: "github",
            link: "/",
            linkText: "",
            icon: null,
            iconDescription: null,
            id: 1,
            documentId: "as",
          },
        ]}
      />
      <About
        aboutMeSection={{
          title: "About me",
          secondaryDescription:
            "I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.",
        }}
        banner={{ url: "/1.jpg", id: 1, documentId: "asd" }}
      />
    </main>
  );
}
