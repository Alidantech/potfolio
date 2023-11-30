import  { useState, useEffect } from "react";
import { Header, Page, Footer, ScrollProgress } from "./components/Components";

const App = () => {
  const [currentPage, setCurrentPage] = useState<string>("");

  const handleSetCurrentPage = (page: string) => {
    setCurrentPage(page);
  };

  // Use useEffect to update the document title when currentPage changes
  useEffect(() => {
    // Set the document title based on the current page
    document.title = `Alidante's Potfolio | ${currentPage || "Welcome"}`;
  }, [currentPage]);

  return (
    <>
      <ScrollProgress />
      <Header currentPage={currentPage} />
      <Page setCurrentPage={handleSetCurrentPage} />
      <Footer />
    </>
  );
};

export default App;

