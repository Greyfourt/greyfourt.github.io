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

        <div className="ctaContainerRow">
          <div className="ctaImage">
            <img src="/illustration.png" alt="" />
          </div>
          <div className="ctaText">

            <h2 className="ctatitle">
              I'm passionate about <mark>understanding users needs.</mark>
            </h2>
            <div className="ctaDescriptions">
              <p>
                I create intuitive experiences that guide people seamlessly
                towards their goals.
              </p>
              <p>
                And I'm <mark>well-versed in technical concepts</mark>, ensuring
                that my designs flow seamlessly into functional products.
              </p>
              <p>
                I'm currently working as a Web & Product Designer with <a href="https://dewwwe.com/">dewwwe</a>, based in Lyon.
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
        </div>

        <Projects />

        <div className="ctaContainerColumn" id="Contact">
          <h2>
            <mark>How can I be of help?</mark>
          </h2>
          <div className="locationRow">
            <h4>Around a coffee in</h4>
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
            <h4>Or</h4>
            <div className="locationItem">
              <Icon type="world" />
              <h4>Remotely</h4>
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
