
function Home() {
  const WelcomeHeading: string = "Welcome to My potfolio, Feel free to EXPLORE!";
  const Bio: string = '"I am a versatile professional with a passion for technology and design. As a software developer and engineer, I create innovative solutions that solve complex problems. I am also a data scientist, turning data into insights that drive informed decisions. With a keen eye for design, I craft user experiences that are both beautiful and functional. I thrive on challenges and enjoy pushing the boundaries of what is possible in the world of technology and design."';
  const ButtonText:String = "Lets Get in Touch"

  return( 
     <div>
        <div className="welcome d-flex align-items-center justify-content-center">
            <div className="container">
               <div className="row">
                  <div className="col-md-6 p-3">
                        <h1>{WelcomeHeading}</h1>
                        <p className="mt-5">{Bio}</p>
                  </div>
                  <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <button className="btn border p-3">
                              {ButtonText}
                        </button>
                  </div>
               </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
