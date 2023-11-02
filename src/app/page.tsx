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
            <h1>Hello, It's Nazlı</h1>
            <p>I have a passion for web and working towards reducing the friction behind the cursor.</p>
            <div className="highlight">
              <p>Portfolio WORK IN PROGRESS</p>
              </div>
          </div>
        </div>

        <div className="CTAContainer">
          <h3>I use my background in development to create digital experiences that people love.</h3>
          <p>And I love sketching some illustrations too from time to time!</p>
          <button className="button Primary"> <a href="https://greyfourt.github.io/CV_English_Nazli.pdf" download="CV_English_Nazli" target="_blank" rel="nofollow">
            Download CV</a>
          </button>
        </div>

        <div className='projects CTAContainer'>
        
            <Projects />

          <button className="button Secondary">
            <a href="/projects">See all my projects</a>
          </button>
        </div>

        <div className="CTAContainer" id="Contact">
          <h2>Got an idea? Let's discuss!</h2>
          <h4>Even around a coffee, if you're in Lyon/Turin</h4>
          <button className="button Primary">
            <a href="mailto:nazliozcubukcuoglu@gmail.com">Send me a mail</a>
          </button>
        </div>
      </div>
    </>
  )
}
