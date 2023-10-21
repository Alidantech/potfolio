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
              <div>
                <h1>A Software Developer and a Data Scientist.</h1>
                <p>Discover the work of an experienced developer with a diverse skill set
                Explore the projects I've created across various domains and technologies, showcasing a commitment to excellence and a passion.</p>
              </div>
              <button className='btn-email'>Contact Me</button>
            </div>
            <div className='img-desc'>
                  <img src="sec1-pic.png" alt="bacground image" />
            </div>
            <div className='link-desc'>
                <a className='proj-link' href="">PROJECTS</a>
                <p>Driven BY</p>
                <b>Passion<br />Persistence</b>
                <a className='exp-link' href="">Explore</a>
            </div>
          </div>
          <div className='tech'>
              <a href="#">
                <iframe src="https://lottie.host/?file=c3773401-bd0e-463c-b40c-10fca3d8bb26/keuFXPbmXu.json" width="100px">
                </iframe>
              </a>
              <a href="#">
                <iframe src="https://lottie.host/?file=006a1cc3-969a-4544-8942-0c71aa4a2793/3Jz48sWM5y.json" width="100px"></iframe>
              </a>
              <a href="#">
                <iframe src="https://lottie.host/?file=5a1c7285-51c2-40a2-930d-493865e3954f/pnQ5sY6aKu.json" width="100px"></iframe>
              </a>
              <a href="#">
                <iframe src="https://lottie.host/?file=bb71dcd2-8f95-4ef8-b997-070589bc96e1/XMW1Ur76sG.json" width="100px"></iframe>
              </a>
              <a href="#">
                <iframe src="https://lottie.host/?file=b6d96d37-2763-4c49-b079-fe7d63e56e93/Wzfyp4LCXq.json"
                 width="100px"></iframe>
              </a>
      
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
