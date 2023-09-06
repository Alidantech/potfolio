
function Home() {
  const WelcomeHeading: string = "Welcome to My potfolio, Feel free to EXPLORE!";
  const Bio: string = '"I am a versatile professional with a passion for technology.boundaries of what is possible in the world of technology and design."';
  const ButtonText:String = "Lets Get in Touch"
  const Projects: { Title: string; Description: string; ImageLink: string }[] = [
    { Title: 'Data Science', Description: 'Farm ai an ai tool.', ImageLink: 'https://picsum.photos/300/200?random=ai' },
    { Title: 'UI/UX', Description: 'A very nice user interface', ImageLink: "https://picsum.photos/300/200?random=ui" },
    { Title: 'Web Development', Description: 'my own website.', ImageLink: "https://picsum.photos/300/200?random=website" },
    { Title: 'Software Engineering', Description: 'An engineering project.', ImageLink: "https://picsum.photos/300/200?random=home" },
  ];

  return( 
     <div>
        <div className="welcome d-flex align-items-center justify-content-center">
            <div className="container">
               <div className="row">
                  <div className="col-md-6 p-3">
                        <h1 className="text-success">{WelcomeHeading}</h1>
                        <p className="mt-5 mb-5 bio">{Bio}</p>
                  </div>
                  <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <button className="btn btn-success p-3">
                              {ButtonText}
                        </button>
                  </div>
               </div>
            </div>
        </div>
        <div className="container row p-2 align-items-center justify-content-space-between">
            {Projects.map((project, index) => (
                  <div key={index} className="card m-2 col">
                        <img src={project.ImageLink} alt={project.Title} />
                        <h2>{project.Title}</h2>
                        <span>{project.Description}</span>
                  </div>
          ))}
        </div>
    </div>
  );
}

export default Home;
