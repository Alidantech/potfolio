import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Projects, Contact, Music, About } from "./pages/Pages";
import { MainContent } from "./styled/widgets/Widgets";

interface PageProps {
  setCurrentPage: (page: string) => void;
}

// Higher-order component (HOC) to handle current page logic
const withCurrentPage = (
  Component: React.FC<PageProps>,
  currentPage: string
) => {
  return (props: PageProps) => {
    useEffect(() => {
      // Update the current page when the component mounts
      props.setCurrentPage(currentPage);
    }, [currentPage, props.setCurrentPage]);

    return <Component {...props} />;
  };
};

const HomeWithCurrentPage = withCurrentPage(Home, "HOME");
const ProjectsWithCurrentPage = withCurrentPage(Projects, "PROJECTS");
const ContactWithCurrentPage = withCurrentPage(Contact, "CONTACT");
const MusicWithCurrentPage = withCurrentPage(Music, " MUSIC");
const AboutWithCurrentPage = withCurrentPage(About, "ABOUT");

const Page: React.FC<PageProps> = ({ setCurrentPage }) => {
  return (
    <BrowserRouter>
      <MainContent>
        <Routes>
          <Route
            path="/"
            element={<HomeWithCurrentPage setCurrentPage={setCurrentPage} />}
          />
          <Route
            path="/projects"
            element={
              <ProjectsWithCurrentPage setCurrentPage={setCurrentPage} />
            }
          />
          <Route
            path="/contact"
            element={<ContactWithCurrentPage setCurrentPage={setCurrentPage} />}
          />
          <Route
            path="/music"
            element={<MusicWithCurrentPage setCurrentPage={setCurrentPage} />}
          />
          <Route
            path="/about"
            element={<AboutWithCurrentPage setCurrentPage={setCurrentPage} />}
          />
          <Route
            path="*"
            element={<AboutWithCurrentPage setCurrentPage={setCurrentPage} />}
          />
        </Routes>
      </MainContent>
    </BrowserRouter>
  );
};

export default Page;
