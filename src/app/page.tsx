import Image from 'next/image'
import '../styles/App.scss'


export default function Home() {
  return (
    <>
      <div className="bodyContainer" id="wrapper">

        <div id="main">
          <div className="inner">
            <div className="headerContainer">
              <div>
                <span className="image headerImage"><img src="/public/illustration.png" alt="" /></span>
              </div>
              <div className="headerDescription">
                <h1>Hello, C'est Nazlı</h1>
                <p>UX/UI Designer avec un background en informatique.</p>
                <p className="highlight">Portfolio WORK IN PROGRESS</p>
              </div>
            </div>

            <section className="CTAContainer">
              <h3>Mon objectif est de créer des expériences utilisateurs incroyables en alliant ma passion pour
                le design et ma connaissance technique. </h3>
              <p>J’aime faire des petites illustrations aussi temps en temps :)</p>
              <button className="button"> <a href="https://greyfourt.github.io/CV_Alternance_Nazli.pdf" download="CV_Alternance_Nazli" target="_blank" rel="nofollow"></a>
                Download my CV
              </button>

            </section>


            <section className="tiles" id="Projects">
              <article className="projectItem website" >
                <div className="tags website">
                  <p className="icon solid fa-circle"></p>
                  <p>Website</p>
                </div>

                <a className="image">
                  <img src="/public/articles/WebsiteLCDT.png" alt="" />
                </a>
                <div className="titleDate">
                  <p>La Commanderie des Templiers</p>
                  <p>2023</p>
                </div>
              </article>

              <article className="projectItem" id="mobileApp">
                <div className="tags">
                  <p className="icon solid fa-circle"></p>
                  <p>Mobile App</p>
                </div>
                <a href="generic.html" className="image">
                  <img src="/public/articles/AppPlants.png" alt="" />
                </a>
                <div className="titleDate">
                  <p>Plants App</p>
                  <p>2023</p>
                </div>
              </article>

              <article className="projectItem" id="mobileApp">
                <div className="tags">
                  <p className="icon solid fa-circle"></p>
                  <p>Mobile App</p>
                </div>
                <a href="generic.html" className="image">
                  <img src="/public/articles/AppCrochet.png" alt="" />
                </a>
                <div className="titleDate">
                  <p>Crochet by Nazli & Louis</p>
                  <p>2023</p>
                </div>
              </article>

              <article className="projectItem" id="website">
                <div className="tags">
                  <p className="icon solid fa-circle"></p>
                  <p>Website</p>
                </div>
                <a href="generic.html" className="image">
                  <img src="/public/articles/WebsiteLMAT.png" alt="" />
                </a>
                <div className="titleDate">
                  <p>La Mare à Toto</p>
                  <p>2022</p>
                </div>
              </article>

              <article className="projectItem" id="mobileApp">
                <div className="tags">
                  <p className="icon solid fa-circle"></p>
                  <p>Mobile App</p>
                </div>
                <a href="generic.html" className="image">
                  <img src="/public/articles/AppBookipe.png" alt="" />
                </a>

                <div className="titleDate">
                  <p>Bookipe</p>
                  <p>2022</p>
                </div>
              </article>

              <article className="projectItem" id="website">
                <div className="tags">
                  <p className="icon solid fa-circle"></p>
                  <p>Website</p>
                </div>
                <a href="generic.html" className="image">
                  <img src="/public/articles/WebsiteValensi.png" alt="" />
                </a>
                <div className="titleDate">
                  <p>Valensi Patrimoine</p>
                  <p>2021</p>
                </div>
              </article>

              <article className="projectItem" id="graphics">
                <div className="tags">
                  <p className="icon solid fa-circle"></p>
                  <p>Graphics</p>
                </div>
                <a href="generic.html" className="image">
                  <img src="/public/articles/GraphicValensi.png" alt="" />
                </a>
                <div className="titleDate">
                  <p>Valensi Patrimoine</p>
                  <p>2021</p>
                </div>
              </article>

              <article className="projectItem" id="logo">
                <div className="tags">
                  <p className="icon solid fa-circle"></p>
                  <p>Logo</p>
                </div>
                <a href="generic.html" className="image">
                  <img src="/public/articles/LogoValensi.png" alt="" />
                </a>
                <div className="titleDate">
                  <p>Valensi Patrimoine</p>
                  <p>2021</p>
                </div>
              </article>

              <article className="projectItem" id="webApp">
                <div className="tags">
                  <p className="icon solid fa-circle"></p>
                  <p>Web App</p>
                </div>
                <a href="generic.html" className="image">
                  <img src="/public/articles/AppContacts.png" alt="" />
                </a>
                <div className="titleDate">
                  <p>Contacts App</p>
                  <p>2021</p>
                </div>
              </article>

              <article className="projectItem" id="graphics">
                <div className="tags">
                  <p className="icon solid fa-circle"></p>
                  <p>Graphics</p>
                </div>
                <a href="generic.html" className="image">
                  <img src="/public/articles/GraphicODB.png" alt="" />
                </a>
                <div className="titleDate">
                  <p>ODB Rénovation</p>
                  <p>2020</p>
                </div>
              </article>
            </section>

            <section className="CTAContainer" id="Contact">
              <h3>Nouveau idée, nouvelle projet ?</h3>
              <p>Même autour d'un café, sur Lyon</p>
              <button className="button">
                <a href="mailto:nazliozcubukcuoglu@gmail.com">Discutons !</a>
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
