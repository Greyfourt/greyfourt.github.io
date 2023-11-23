import { Tags } from "@/components/ProjectsList";
import Tag from "@/components/Tag";

const Floof = () => {
  return (
    <>
      <div className="casestudyContentContainer">
        <h2>Problem & Idea</h2>
        <div className="casestudyContentRow problem">
          <div className="image">
            <img src="/images/Problem-Floof.png" alt="users" />
          </div>
          <div className="casestudyContentColumn">
            <p>
              We have many pets and plants in the house that we like to take
              care of. But also life gets busy and things slip out of mind. We
              do not want to forget our little friends - or as we call them
              floofs.
            </p>
            <p>
              An app that remembers all details from veterinary for your kitten
              to repotting one of your plants and sends you reminders for you to
              keep track. All in one place.
            </p>
            <p>So the floof app is born!</p>
          </div>
        </div>
      </div>
      <div className="casestudyContentContainer">
        <h2>Steps</h2>

        <>
          <div className="casestudyContentColumn research">
            <h3>1 - Research</h3>
            <p>
              Swarmed the internet, tested and played around many applications.
            </p>
          </div>
          <div className="casestudyContentColumn brandIdentity">
            <h3>2 - Brand Identity</h3>
            <p>
              We wanted to create a platform that is joyful but while still
              keeping the sobriety.
            </p>
            <div className="brandingWrapper">
              <div className="brandingContainer">
                <div className="title">
                  <p>Current Logo</p>
                </div>
                <div className="brandingItem">
                  <img
                    className="currentLogo"
                    src="/images/Logo-Floof.png"
                    alt="current logo"
                  />
                  <img
                    className="currentLogo"
                    src="/images/Logo-Floof-2.png"
                    alt="current logo with text"
                  />
                </div>
              </div>
              <div className="brandingContainer">
                <div className="title">
                  <p>Propositions</p>
                </div>
                <div className="brandingItem proposalLogos">
                  <img
                    className="proposalLogo"
                    src="/images/Proposal-Floof.png"
                    alt="proposal logo with text"
                  />
                  <img
                    className="proposalLogo"
                    src="/images/Proposal-Floof-2.png"
                    alt="proposal logo with text"
                  />
                  <img
                    className="proposalLogo"
                    src="/images/Proposal-Floof-3.png"
                    alt="proposal logo with text"
                  />
                  <img
                    className="proposalLogo"
                    src="/images/Proposal-Floof-4.png"
                    alt="proposal logo with text"
                  />
                  <img
                    className="proposalLogo"
                    src="/images/Proposal-Floof-5.png"
                    alt="proposal logo with text"
                  />
                  <img
                    className="proposalLogo"
                    src="/images/Proposal-Floof-6.png"
                    alt="proposal logo with text"
                  />
                </div>
              </div>
            </div>
            <div className="brandingWrapper">
              <div className="brandingContainer">
                <div className="title">
                  <p>Fonts</p>
                </div>
                <div className="brandingItem typography">
                  <h1>Aa</h1>
                  <h3>Nunito</h3>
                  <p className="bold">
                    The quick brown fox jumped over the lazy dog.
                  </p>
                  <p>The quick brown fox jumped over the lazy dog.</p>
                </div>
              </div>
              <div className="brandingContainer">
                <div className="title">
                  <p>Colors</p>
                </div>
                <div className="brandingItem">
                  <div className="colors">
                    <div
                      className="colorBox"
                      style={{ backgroundColor: "#355644" }}
                    ></div>
                    <p>Green</p>
                    <p> #355644</p>
                  </div>
                  <div className="colors">
                    <div
                      className="colorBox"
                      style={{ backgroundColor: "#AFC97E" }}
                    ></div>
                    <p>Accent</p>
                    <p> #AFC97E</p>
                  </div>
                  <div className="colors">
                    <div
                      className="colorBox"
                      style={{ backgroundColor: "#3C3B3B" }}
                    ></div>
                    <p>Black</p>
                    <p> #3C3B3B</p>
                  </div>
                  <div className="colors">
                    <div
                      className="colorBox"
                      style={{ backgroundColor: "#FFFFFF" }}
                    ></div>
                    <p>White</p>
                    <p> #FFFFFF</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="casestudyContentColumn userJourneys">
            <h3>3 - User Journeys</h3>
            <p>
              We created detailed user journeys to guide us throughout design
              and development.
            </p>
            <div className="image">
              <img src="/images/UserJourney-Floof.png" alt="userjourneys" />
            </div>
          </div>
          <div className="casestudyContentColumn Outcome">
            <h3>4 - Outcome</h3>
            <p>
              Focused only on the mobile as our users would only need a
              on-the-go solution. Started with simplest wireframes. Created
              designs from the basic - minimally styled MVPs to more studied
              designs.
            </p>
            <div className="casestudyContentRow">
              <div className="image">
                <img src="/images/Outcome-Floof-1.png" alt="Outcome" />
              </div>
              <div className="image">
                <img src="/images/Outcome-Floof-2.png" alt="Outcome" />
              </div>
              <div className="image">
                <img src="/images/Outcome-Floof-3.png" alt="Outcome" />
              </div>
              <div className="image">
                <img src="/images/Outcome-Floof-4.png" alt="Outcome" />
              </div>
              <div className="image">
                <img src="/images/Outcome-Floof-5.png" alt="Outcome" />
              </div>
              <div className="image">
                <img src="/images/Outcome-Floof-6.png" alt="Outcome" />
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Floof;
