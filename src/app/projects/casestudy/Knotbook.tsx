const Knotbook = () => {
    return (
      <>
        <div className="casestudyContentContainer">
          <h2>Problem & Idea</h2>
          <div className="casestudyContentRow problem">
            <div className="image">
              <img src="/images/Problem-Knotbook.png" alt="users" />
            </div>
            <div className="casestudyContentColumn">
              <p>
                As crochet lovers, we are always in research of new and exciting
                patterns. But sometimes, we come upon some terms or acronyms
                that we do not recognise quickly.
              </p>
              <p>
                We want to have sneak peaks to all stitches while we are
                building our patterns.
              </p>
              <p>So the Knotbook app is born!</p>
            </div>
          </div>
        </div>
        <div className="casestudyContentContainer">
          <h2>Steps</h2>

          <>
            <div className="casestudyContentColumn research">
              <h3>1 - Research</h3>
              <p>
                Swarmed the internet, tested and played around many
                applications.
              </p>
            </div>
            <div className="casestudyContentColumn brandIdentity">
              <h3>2 - Brand Identity</h3>
              <p>
                We wanted to create an environment that users will not have a
                lot of distractions while keeping the cozy side.
              </p>
              <div className="brandingWrapper">
                <div className="brandingContainer">
                  <div className="title">
                    <p>Current Logo</p>
                  </div>
                  <div className="brandingItem">
                    <img
                      className="currentLogo"
                      src="/images/Logo-Knotbook.png"
                      alt="current logo"
                    />
                  </div>
                </div>
                <div className="brandingContainer">
                  <p className="title">Propositions</p>
                  <div className="brandingItem proposalLogos">
                    <img
                      className="proposalLogo"
                      src="/images/Proposal-Knotbook.png"
                      alt="proposal logo with text"
                    />
                    <img
                      className="proposalLogo"
                      src="/images/Proposal-Knotbook-2.png"
                      alt="proposal logo with text"
                    />
                    <img
                      className="proposalLogo"
                      src="/images/Proposal-Knotbook-3.png"
                      alt="proposal logo with text"
                    />
                    <img
                      className="proposalLogo"
                      src="/images/Proposal-Knotbook-4.png"
                      alt="proposal logo with text"
                    />
                    <img
                      className="proposalLogo"
                      src="/images/Proposal-Knotbook-5.png"
                      alt="proposal logo with text"
                    />
                  </div>
                </div>
              </div>
              <div className="brandingWrapper">
                <div className="brandingContainer">
                  <p className="title">Fonts</p>
                  <div className="brandingItem typography">
                    <h1>Aa</h1>
                    <h3>Baloo 2</h3>
                    <p className="bold">
                      The quick brown fox jumped over the lazy dog.
                    </p>
                    <p>The quick brown fox jumped over the lazy dog.</p>
                  </div>
                </div>
                <div className="brandingContainer">
                  <p className="title">Colors</p>
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
                and development. Due to the complicated flows in the
                application, created detailed diagrams for the development.
              </p>
              <div className="image">
                <img
                  src="/images/UserJourney-Knotbook.png"
                  alt="userjourneys"
                />
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
              <div className="outcomeRow">
                <div className="image">
                  <img src="/images/Outcome-Knotbook-1.png" alt="Outcome" />
                </div>
                <div className="image">
                  <img src="/images/Outcome-Knotbook-2.png" alt="Outcome" />
                </div>
                <div className="image">
                  <img src="/images/Outcome-Knotbook-3.png" alt="Outcome" />
                </div>
                <div className="image">
                  <img src="/images/Outcome-Knotbook-4.png" alt="Outcome" />
                </div>
                <div className="image">
                  <img src="/images/Outcome-Knotbook-5.png" alt="Outcome" />
                </div>
                <div className="image">
                  <img src="/images/Outcome-Knotbook-6.png" alt="Outcome" />
                </div>
              </div>
            </div>
          </>
        </div>
      </>
    );
}
 
export default Knotbook;
