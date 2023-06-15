import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <div className="App">
      <header className="p-4">
        <h1 className="display-4">PETER IRUNGU</h1>
      </header>
      <main className="container-fluid">
      <section className="mb-5">
          <p>Web Developer </p>
          <p>Data Scientist </p>
        </section>
        <section className="mb-5">
          <h2 className="text-primary">About Me</h2>
          <p>
            Hi, I'm PETER IRUNGU. I'm a web developer passionate about building websites
            and creating intuitive user experiences. With expertise in HTML, CSS, and
            JavaScript, I strive to craft beautiful and functional websites.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="text-primary">Projects</h2>
          <div className="row">
            {/* Add your project components here */}
            {/* Example: */}
            <div className="col-lg-4 mb-3 ">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">upcomming ai</h3>
                  <p className="card-text">This is an app that enables upcoming artists to record music and share it and still get the feedback about how the song is.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3 ">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">wechat app</h3>
                  <p className="card-text">This a chat app that uss php and web technologies to enabl users to chat with each other filtering bad words</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className=" border">
                <div className="card-body">
                  <h3 className="card-title">fotie dashboard</h3>
                  <p className="card-text">This a a java app that uses object oriented programmming concepts to create a football dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-5">
          <h2 className="text-primary">Skills</h2>
          <ul className="list-unstyled">
            {/* Add your skills as list items */}
            {/* Example: */}
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
          </ul>
        </section>
        <section>
          <h2 className="text-primary">Contact</h2>
          <p>
            Feel free to reach out to me via email at peteralidante254@gmail.com
            or through my social media profiles:
          </p>
          {/* Add your social media links or contact form */}
        </section>
      </main>
      <footer className="text-white text-center py-3 ">
        <p>&copy; 2023 Alidante_254</p>
      </footer>
    </div>
  );
}

export default App;
