import { About, Experience, Hero, Skills, Work } from "@/components";
import Contact from "@/components/sections/Contact/Contact";

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
      <Skills
        skillsSection={{
          title: "Skills",
          description:
            "The skills, tools and technologies I am really good at:",
        }}
        skills={[
          {
            documentId: "12",
            iconLight: { url: "/icon.svg" },
            iconDark: { url: "/icon.svg" },
          },
        ]}
      />
      <Experience
        experience={[
          {
            title: "Sr. Frontend Developer",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            period: "Nov 2021 - Present",
          },
        ]}
        experienceSection={{
          title: "Experience",
          description:
            "Here is a quick summary of my most recent experiences:",
        }}
      />
      {/* <Work
        projects={[{}]}
        projectsSection={{
          title: "Work",
          description:
            "Some of the noteworthy projects I have built:",
        }}
      /> */}
      <Contact
        contactMeSection={{
          title: "Get in touch",
          description:
            "What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.",
        }}
        emailLink='ad'
        emailText='mail@mail.com'
        phoneLink='ad'
        phoneText='mail@mail.com'
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
    </main>
  );
}
