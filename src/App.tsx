import { useState, useEffect } from "react";
import { Header, Footer, ScrollProgress, Loading, Page } from "./components/Components";

const App = () => {
  const [currentPage, setCurrentPage] = useState<string>("Home");
  const [loading, setLoading] = useState(true);
  const [myArray, setMyArray] = useState<string[]>([currentPage, currentPage]);

  const handleSetCurrentPage = (page: string) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    document.title = `Alidante's Portfolio | ${currentPage || "Welcome"}`;

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, [currentPage]);

  useEffect(() => {
    setMyArray([myArray[1], currentPage]);
  }, [currentPage]);

  return (
    <>
      {loading ? (
        <Loading previousPage={myArray[0]} incomingPage={myArray[1]} />
      ) : (
        <>
          {/* Components for the loaded content */}
          <ScrollProgress />
          <Header currentPage={currentPage} />
          <Page setCurrentPage={handleSetCurrentPage} />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
