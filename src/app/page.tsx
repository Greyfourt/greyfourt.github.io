import "../styles/App.scss";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div className="bodyContainer" id="wrapper">
        <div className="headerContainer">
          <div className="headerImage">
            <img src="/illustration.png" alt="" />
          </div>
          <div className="headerDescription">
            <h1>Hello, It's Nazlı Özçubukçuoğlu</h1>
            <h3>Web & Product Designer</h3>
            <p>Transforming ideas into intuitive and immersive experiences.</p>
            <p>And sketching some illustrations time to time!</p>
            <button className="button Primary">
              <a href="/projects/floof">Check out my latest case study</a>
            </button>
          </div>
        </div>

        <div className="CTAContainer">
          <h2>
            I'm a web and product designer who is passionate about understanding
            user needs.
          </h2>
          <div>
            <p>
              I create intuitive experiences that guide people seamlessly
              towards their goals.
            </p>
            <p>
              I have a knack for transforming ideas into engaging interfaces
              that users find enjoyable to use.
            </p>
            <p>
              And I'm well-versed in technical concepts, ensuring that my
              designs flow seamlessly into functional products.
            </p>
            <p>
              I'm currently working as a Web & Product Designer with{" "}
              <a href="https://dewwwe.com/">dewwwe</a>, based in Lyon.
            </p>
          </div>
          <button className="button Primary">
            <a
              href="https://greyfourt.github.io/CV_English_Nazli.pdf"
              download="CV_English_Nazli"
              target="_blank"
              rel="nofollow"
            >
              Download CV
            </a>
          </button>
        </div>

        <div className="projects CTAContainer">
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
  );
}
