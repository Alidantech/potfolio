import { useState, useEffect, lazy, Suspense } from "react";
import {
  Header,
  Footer,
  ScrollProgress,
  Loading,
} from "./components/Components";

// Lazy-loaded Page component
const LazyPage = lazy(() => import("./components/Page"));

const App = () => {
  const [currentPage, setCurrentPage] = useState<string>("");
  const [previousPage, setPreviousPage] = useState<string>("Loading");
  const [incomingPage, setIncomingPage] = useState<string>("Loaded");
  const [loading, setLoading] = useState(true);

  const handleSetCurrentPage = (page: string) => {
    setPreviousPage(currentPage);
    setCurrentPage(page);
  };

  useEffect(() => {
    document.title = `Alidante's Portfolio | ${currentPage || "Welcome"}`;

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
      setIncomingPage(currentPage);
    };

    fetchData();
  }, [currentPage]);

  return (
      <Suspense fallback={<div>Loading...</div>}>
        {loading ? (
          <Loading previousPage={previousPage} incomingPage={incomingPage} />
        ) : (
          <>
            {/* Components for the loaded content */}
            <ScrollProgress />
            <Header currentPage={currentPage} />
            <LazyPage setCurrentPage={handleSetCurrentPage} />
            <Footer />
          </>
        )}
      </Suspense>
  );
};

export default App;
