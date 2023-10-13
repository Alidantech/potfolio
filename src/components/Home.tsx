import '../assets/home.css';

function Home() {

  //section 1  
  const WelcomeHeading: string = "Welcome to My potfolio, Feel free to EXPLORE!";
  const Bio: string = '"I am a versatile professional with a passion for technology.boundaries of what is possible in the world of technology and design."';
  const ButtonText:String = "Lets Get in Touch"

  //section 2
  const officialName: String = "PETER IRUNGU"
  const careers:{Title: String} [] = [
      {Title:"Software Engineer"},
      {Title:"Web Developer"},
      {Title:"Data Science"},
  ] 

  //section 3
  const Projects: { Title: string; Description: string; ImageLink: string }[] = [
    { Title: 'Data Science', Description: 'Farm ai an ai tool.', ImageLink: 'https://picsum.photos/300/200?random=computer' },
    { Title: 'UI/UX', Description: 'A very nice user interface', ImageLink: "https://picsum.photos/300/200?random=statistics" },
    { Title: 'Web Development', Description: 'my own website.', ImageLink: "https://picsum.photos/300/200?random=technology" },
    { Title: 'Software Engineering', Description: 'An engineering project.', ImageLink: "https://picsum.photos/300/200?random=mathematics" },
  ];

  //section 4
  const testimonialData = [
  {
    name: 'Alex Smith',
    job: 'Designer | Developer',
    stars: [1, 1, 0, 0, 0],
    quote:
      'Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.',
  },
  {
    name: 'Steven Chris',
    job: 'YouTuber | Blogger',
    stars: [1, 1, 1, 0, 0],
    quote:
      'Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.',
  },
  {
    name: 'Kristina Bellis',
    job: 'Freelancer | Advertiser',
    stars: [1, 1, 1, 1, 0],
    quote:
      'Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.',
  },
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
          
        <section className='text-center p-5'>
                  
        </section>
        <section className="card-box  container-fluid">
            {Projects.map((project, index) => (
                  <div key={index} className="custom-card m-2">
                        <img src={project.ImageLink} alt={project.Title} />
                        <h4 className="p-2">{project.Title}</h4>
                        <span className="p-2">{project.Description}</span>
                  </div>
          ))}
        </section>
        <section>
                 
        </section>
        <section>
      <div className="wrapper">
        {testimonialData.map((testimonial, index) => (
          <div className="box" key={index}>
            <i className="fas fa-quote-left quote"></i>
            <p>{testimonial.quote}</p>
            <div className="content">
              <div className="info">
                <div className="name">{testimonial.name}</div>
                <div className="job">{testimonial.job}</div>
                <div className="stars">
                  {testimonial.stars.map((star, starIndex) => (
                    <i
                      className={`fas fa-star${star ? '' : '-empty'}`}
                      key={starIndex}
                    ></i>
                  ))}
                </div>
              </div>
              <div className="image">
                <img
                  src={`https://picsum.photos/300/200?random=human`}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Home;
