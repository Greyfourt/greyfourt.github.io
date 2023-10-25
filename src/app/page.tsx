import Icon from '@/components/Icons'
import '../styles/App.scss'
import Projects from '@/components/Projects'


export default function Home() {

  return (
    <>
      <div className="bodyContainer" id="wrapper">

        <div className="headerContainer">
          <div>
            <span className="image headerImage"><img src="/illustration.png" alt="" /></span>
          </div>
          <div className="headerDescription">
            <h1>Hello, C'est Nazlı</h1>
            <p>UX/UI Designer avec un background en informatique.</p>
            <div className="highlight">
              <p>Portfolio WORK IN PROGRESS</p>
              <p>a version in english is on its way too ;)</p>
              </div>
          </div>
        </div>

        <div className="CTAContainer">
          <h3>Mon objectif est de créer des expériences utilisateurs incroyables en alliant ma passion pour
            le design et ma connaissance technique.</h3>
          <p>J’aime faire des petites illustrations aussi temps en temps :)</p>
          <button className="button Primary"> <a href="https://greyfourt.github.io/CV_English_Nazli.pdf" download="CV_Alternance_Nazli" target="_blank" rel="nofollow">
            Download my CV</a>
          </button>
        </div>

        <div className='projects CTAContainer'>
        
            <Projects />

          <button className="button Secondary">
            <a href="/projects">Voir plus</a>
            <Icon type="arrowRight" />
          </button>
        </div>

        <div className="CTAContainer" id="Contact">
          <h3>Nouveau idée, nouvelle projet ?</h3>
          <h4>Même autour d'un café, sur Lyon</h4>
          <button className="button Primary">
            <a href="mailto:nazliozcubukcuoglu@gmail.com">Discutons !</a>
          </button>
        </div>
      </div>
    </>
  )
}
