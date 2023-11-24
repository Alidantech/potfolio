import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Music, Projects } from "./pages/Pages";


function Page() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/music" element={<Music />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<About />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default Page;
