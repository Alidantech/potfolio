function Home() {
 
  return (
    <>
      <section className="section-1">
        <div className="desc">
          <div className="text-desc">
            <div>
              <h1>A Software Developer and a Data Scientist.</h1>
              <p>
                Discover the work of an experienced developer with a diverse
                skill set Explore the projects I've created across various
                domains and technologies, showcasing a commitment to excellence
                and a passion.
              </p>
            </div>
            <button className="btn-email">Contact Me</button>
          </div>
          <div className="img-desc">
            <img src="assets/profile.png" alt="bacground image" />
          </div>
          <div className="link-desc">
            <a className="proj-link" href="">
              PROJECTS
            </a>
            <p>Driven BY</p>
            <b>
              Passion
              <br />
              Persistence
            </b>
            <a className="exp-link" href="">
              Explore
            </a>
          </div>
        </div>
        <div className="tech">
          <a href="#">
            <iframe
              src="https://lottie.host/?file=c3773401-bd0e-463c-b40c-10fca3d8bb26/keuFXPbmXu.json"
              width="100px"
            ></iframe>
          </a>
          <a href="#">
            <iframe
              src="https://lottie.host/?file=006a1cc3-969a-4544-8942-0c71aa4a2793/3Jz48sWM5y.json"
              width="100px"
            ></iframe>
          </a>
          <a href="#">
            <iframe
              src="https://lottie.host/?file=5a1c7285-51c2-40a2-930d-493865e3954f/pnQ5sY6aKu.json"
              width="100px"
            ></iframe>
          </a>
          <a href="#">
            <iframe
              src="https://lottie.host/?file=bb71dcd2-8f95-4ef8-b997-070589bc96e1/XMW1Ur76sG.json"
              width="100px"
            ></iframe>
          </a>
          <a href="#">
            <iframe
              src="https://lottie.host/?file=b6d96d37-2763-4c49-b079-fe7d63e56e93/Wzfyp4LCXq.json"
              width="100px"
            ></iframe>
          </a>
        </div>
      </section>

      <section className="text-center p-5"></section>
      <section className="card-box  container-fluid"></section>
      <section></section>
      <section></section>
    </>
  );
}

export default Home;
