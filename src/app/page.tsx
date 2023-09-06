import '../styles/App.scss'


export default function Home() {

  const projects = [
    {
      title: "La Commanderie des Templiers",
      date: "2023",
      tag: "Website",
      image: "/articles/WebsiteLCDT.png",
    },
    {
      title: "Plants App",
      date: "2023",
      tag: "Mobile App",
      image: "/articles/AppPlants.png",
    },
    {
      title: "Crochet by Nazli & Louis",
      date: "2023",
      tag: "Mobile App",
      image: "/articles/AppCrochet.png",
    },
    {
      title: "La Mare à Toto",
      date: "2022",
      tag: "Website",
      image: "/articles/WebsiteLMAT.png",
    },
    {
      title: "Bookipe",
      date: "2022",
      tag: "Mobile App",
      image: "/articles/AppBookipe.png",
    },
    {
      title: "Valensi Patrimoine",
      date: "2021",
      tag: "Website",
      image: "/articles/WebsiteValensi.png",
    },
    {
      title: "Valensi Patrimoine",
      date: "2021",
      tag: "Graphics",
      image: "/articles/GraphicValensi.png",
    },
    {
      title: "Valensi Patrimoine",
      date: "2021",
      tag: "Logo",
      image: "/articles/LogoValensi.png",
    },
    {
      title: "Contacts App",
      date: "2021",
      tag: "Web App",
      image: "/articles/AppContacts.png",
    },
    {
      title: "ODB Rénovation",
      date: "2020",
      tag: "Graphics",
      image: "/articles/GraphicODB.png",
    }
  ]


  return (
    <>
      <div className="bodyContainer" id="wrapper">
        <div id="main">
          <div className="inner">
            <div className="headerContainer">
              <div>
                <span className="image headerImage"><img src="/illustration.png" alt="" /></span>
              </div>
              <div className="headerDescription">
                <h1>Hello, C'est Nazlı</h1>
                <p>UX/UI Designer avec un background en informatique.</p>
                <p className="highlight">Portfolio WORK IN PROGRESS</p>
              </div>
            </div>

            <div className="CTAContainer">
              <h3>Mon objectif est de créer des expériences utilisateurs incroyables en alliant ma passion pour
                le design et ma connaissance technique. </h3>
              <p>J’aime faire des petites illustrations aussi temps en temps :)</p>
              <button className="button"> <a href="https://greyfourt.github.io/CV_Alternance_Nazli.pdf" download="CV_Alternance_Nazli" target="_blank" rel="nofollow"></a>
                Download my CV
              </button>
            </div>

            <div className="tiles" id="Projects" >
              {
                projects.map((project, index) => {
                  return (

                    <article className={"projectItem " + project.tag.replaceAll(' ', '')} key={index}>
                      <div className="tags">
                        <p className="icon solid fa-circle"></p>
                        <p>{project.tag}</p>
                      </div>

                      <a className="image">
                        <img src={project.image} alt=""/>
                      </a>
                      <div className="titleDate">
                        <p>{project.title}</p>
                        <p>{project.date}</p>
                      </div>
                    </article>

                  )
                })
              }
            </div>


            <div className="CTAContainer" id="Contact">
              <h3>Nouveau idée, nouvelle projet ?</h3>
              <p>Même autour d'un café, sur Lyon</p>
              <button className="button">
                <a href="mailto:nazliozcubukcuoglu@gmail.com">Discutons !</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
