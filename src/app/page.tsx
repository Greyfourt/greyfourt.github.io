import Icon from "@/components/Icons";
import "../styles/App.scss";
import Projects from "@/components/Projects";
import Tag from "@/components/Tag";

export default function Home() {
  return (
    <>
      <div className="bodyContainer" id="wrapper">
        <div className="headerDescription">
          <h1 className="headerName">Nazlı Özçubukçuoğlu</h1>
          <h3>
            <mark>Web & Product Designer</mark>
          </h3>
          <p>Transforming ideas into intuitive and immersive experiences.</p>
          <p>And sketching some illustrations time to time!</p>
          <button className="button Primary">
            <a href="/projects/floof">Check the latest case study</a>
            <Icon type="arrowRight" />
          </button>
        </div>

        <div className="CTAContainerRow">
          <div className="CTAImage">
            <img src="/illustration.png" alt="" />
          </div>
          <div className="CTADescriptions">
            <h2 className="CTAtitle">
              I'm a web and product designer{" "}
              <mark>who is passionate about understanding user needs.</mark>
            </h2>
            <p>
              I create intuitive experiences that guide people seamlessly
              towards their goals.
            </p>
            <p>
              I have a knack for transforming ideas into engaging interfaces
              that users find enjoyable to use.
            </p>
            <p>
              And I'm <mark>well-versed in technical concepts</mark>, ensuring
              that my designs flow seamlessly into functional products.
            </p>
            <p>
              I'm currently working as a Web & Product Designer with{" "}
              <a href="https://dewwwe.com/">dewwwe</a>, based in Lyon.
            </p>
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
        </div>

        <Projects />

        <div className="CTAContainerColumn" id="Contact">
          <h2>
            <mark> Got an idea? </mark>
          </h2>
          <div className="locationRow">
            <h4>Even around a coffee in</h4>
            <div className="locationItem">
              <Icon type="location" />
              <h4>Lyon, France</h4>
            </div>
            <div className="locationItem">
              <Icon type="location" />
              <h4>Turin, Italy</h4>
            </div>
          </div>
          <div className="locationRow">
            <h4>Or remotely</h4>
            <div className="locationItem">
              <Icon type="world" />
              <h4>Anywhere</h4>
            </div>
          </div>
          <button className="button Primary">
            <a href="mailto:nazliozcubukcuoglu@gmail.com">Let's discuss!</a>
          </button>
        </div>
      </div>
    </>
  );
}
