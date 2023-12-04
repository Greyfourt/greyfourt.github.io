import ProjectsList from "@/components/ProjectsList";

type CaseStudyType = {
  problemImage: string;
  problemDescriptions: string[];
  researchDescription: string;
  brandDescription: string;
  brandCurrentLogo: string[];
  brandPropositions: string[];
  brandTypography: {
    fontName: string;
  };
  brandColors: {
    name: string;
    hex: string;
  }[];
  userJourneyDescription: string;
  userJourneyImage: string;
  outComeDescription: string;
  outComeImages: string[];
};

const CaseStudy = ({
  projectName,
  caseStudy,
}: {
  projectName: string;
  caseStudy: CaseStudyType;
}) => {
  return (
    <>
      <div className="casestudyContentContainer">
        <h2>Problem & Idea</h2>
        <div className="casestudyContentRow problem">
          <div className="image">
            <img
              src={"/images/Problem-" + `${projectName}` + ".png"}
              alt="users"
            />
          </div>
          <div className="casestudyContentColumn">
            {caseStudy.problemDescriptions.map((problemDescription, index) => (
              <p key={index}>{problemDescription}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="casestudyContentContainer">
        <h2>Steps</h2>
        <>
          <div className="casestudyContentColumn research">
            <h3>1 - Research</h3>
            <p>{caseStudy.researchDescription}</p>
          </div>
          <div className="casestudyContentColumn brandIdentity">
            <h3>2 - Brand Identity</h3>
            <p>{caseStudy.brandDescription}</p>
            <div className="brandingWrapper">
              <div className="brandingContainer">
                <div className="title">
                  <p>Current Logo</p>
                </div>
                <div className="brandingItem">
                  {...caseStudy.brandCurrentLogo.map((logo, index) => (
                    <img
                      src={logo}
                      key={index}
                      className="currentLogo"
                      alt="current logo"
                    />
                  ))}
                </div>
              </div>
              <div className="brandingContainer">
                <div className="title">
                  <p>Propositions</p>
                </div>
                <div className="brandingItem proposalLogos">
                  {...caseStudy.brandPropositions.map((logo, index) => (
                    <img
                      src={logo}
                      key={index}
                      className="proposalLogo"
                      alt="proposal logo with text"
                    />
                  ))}
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
                  <h3>{caseStudy.brandTypography.fontName}</h3>
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
                  {...caseStudy.brandColors.map((color, index) => (
                    <div className="colors" key={index}>
                      <div
                        className="colorBox"
                        style={{
                          backgroundColor: `${color.hex}`,
                        }}
                      ></div>
                      <p>{color.name}</p>
                      <p>{color.hex}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="casestudyContentColumn userJourneys">
            <h3>3 - User Journeys</h3>
            <p>{caseStudy.userJourneyDescription}</p>
            <div className="image">
              <img src={caseStudy.userJourneyImage} alt="userjourneys" />
            </div>
          </div>
          <div className="casestudyContentColumn Outcome">
            <h3>4 - Outcome</h3>
            <p>{caseStudy.outComeDescription}</p>
            <div className="outcomeRow">
              {...caseStudy.outComeImages.map((image,index) => (
                <div className="image" key={index}>
                  <img src={image} alt="Outcome" />
                </div>
              ))}
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default CaseStudy;
