import '../assets/home.css';

function Home() {

  

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
        <section className='section-1'>
          <div className='desc'>
            <div className='text-desc'>
              <h1>Welcome to My Portfolio</h1>
              <p>Discover the work of an experienced developer with a diverse skill set
              Explore the projects I've created across various domains and technologies, showcasing a commitment to excellence and a passion.</p>
              <button className='btn-email'>Contact Me</button>
            </div>
            <div className='img-desc'>
                  <img src="sec1-pic.png" alt="bacground image" />
            </div>
            <div className='link-desc'>
                <a href="">PROJECTS</a>
                <p>What drives me</p>
                <b>Passion<br />Persistence</b>
                <a href="">Explore</a>
            </div>
          </div>
          <div className='tech'>
              <a href="#"><i className="bi bi-code-slash"></i></a>
              <a href="#"><i className="bi bi-bar-chart-line"></i></a>
              <a href="#"><i className="bi bi-cup-straw"></i></a>
              <a href="#"><i className="bi bi-code"></i></a>
              <a href="#"><i className="bi bi-react">R</i></a>
              <a href="#"><i className="bi bi-python">dj</i></a>
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
