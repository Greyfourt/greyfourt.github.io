
import Icon from "@/components/Icons";
import "../styles/App.scss";
import Projects from "@/components/Projects";


export default function Home() {
  return (

    <div className="bodyContainer">
      <div className="landingHeader">
        <h1>Nazlı Özçubukçuoğlu</h1>
        <h3>
          <mark>Web & Product Designer</mark>
        </h3>
        <p>Transforming ideas into intuitive and immersive experiences.</p>

        <button className="button Primary">
          <a href="/projects/floof">Check the latest case study</a>
          <Icon type="arrowRight" />
        </button>
      </div>

      <div className="about">
        <div className="aboutImage">
          <img src="/illustration.png" alt="" />
        </div>
        <div className="aboutTextCol">
          <h2>
            I'm passionate about <mark>understanding users needs.</mark>
          </h2>
          <div className="aboutText">
            <p>
              <mark>My journey to design wasn't linear,</mark> from Engineering to UI/UX Design, I've always pursued my creative instincts.
            </p>
            <p>My experience spans startups and agencies, where I craft <mark>user-centric solutions for mobile apps, SaaS products, websites, and branding.</mark></p>
            <p>
              I'm currently working with <a href="https://dewwwe.com/">dewwwe</a> as a <mark>Product & Web Designer</mark> based in Lyon.
            </p>
            <p>I love side projects and discussing over new ideas. And sketching some illustrations too time to time!</p>
          </div>

          <a
            href="https://greyfourt.github.io/CV_English_Nazli.pdf"
            download="CV_English_Nazli"
            target="_blank"
            rel="nofollow"
          >
            Download my CV
          </a>
        </div>
      </div>

      <Projects />

      <div className="contact">
        <h2>
          How can I be of help? <mark>Let's talk!</mark>
        </h2>

        <div className="contactRow">
          <h4>Around a coffee in</h4>
          <div className="locationRow">
            <div className="location">
              <Icon type="location" />
              <h4>Lyon, France</h4>
            </div>
            <h4> or </h4>
            <div className="location">
              <Icon type="location" />
              <h4>Turin, Italy</h4>
            </div>
          </div>
        </div>

        <div className="contactRow">
          <h4>Not so close?</h4>
          <div className="location">
            <Icon type="world" />
            <h4>Remotely</h4>
          </div>
        </div>

        <button className="button Primary">
          <a href="mailto:nazliozcubukcuoglu@gmail.com">Let's discuss!</a>
        </button>
      </div>
    </div>
  );
}
