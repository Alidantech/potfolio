
function Home() {
  const WelcomeHeading: string = "Welcome to My potfolio, Feel free to EXPLORE!";
  const Bio: string = '"I am a versatile professional with a passion for technology.boundaries of what is possible in the world of technology and design."';
  const ButtonText:String = "Lets Get in Touch"
  const Projects: { Title: string; Description: string; ImageLink: string }[] = [
    { Title: 'Data Science', Description: 'Farm ai an ai tool.', ImageLink: 'https://picsum.photos/300/200?random=computer' },
    { Title: 'UI/UX', Description: 'A very nice user interface', ImageLink: "https://picsum.photos/300/200?random=statistics" },
    { Title: 'Web Development', Description: 'my own website.', ImageLink: "https://picsum.photos/300/200?random=technology" },
    { Title: 'Software Engineering', Description: 'An engineering project.', ImageLink: "https://picsum.photos/300/200?random=mathematics" },
  ];

  return( 
     <>
     <section className="welcome d-flex align-items-center justify-content-center">
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
        </section>
        <section className="row container-fluid">
            {Projects.map((project, index) => (
                  <div key={index} className="col mt-3 mb-3 proj">
                        <img src={project.ImageLink} alt={project.Title} />
                        <h4>{project.Title}</h4>
                        <span>{project.Description}</span>
                  </div>
          ))}
        </section>
    </>
  );
}

export default Home;
