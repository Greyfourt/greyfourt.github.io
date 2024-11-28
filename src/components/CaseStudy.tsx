import ProjectsList from "@/components/ProjectsList";
import { useMessages, useTranslations } from "next-intl";

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
  outComeDescriptions: string[];
  outComeImages: string[];
};

const CaseStudy = ({
  projectName,
  caseStudy,
}: {
  projectName: string;
  caseStudy: CaseStudyType;
}) => {

  const messages = useMessages();
  const t = useTranslations();

  return (
    <>
      <div className="casestudyContentContainer">
        <h2>{t("projects.caseStudyStructure.sections.problemIdea")}</h2>
        <div className="casestudyContentRow problem">
          <div className="image">
            <img
              src={"/images/Problem-" + `${projectName.charAt(0).toUpperCase() + projectName.slice(1)}` + ".png"}
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
        <h2>{t("projects.caseStudyStructure.sections.steps")}</h2>
        <>
          <div className="casestudyContentColumn research">
            <h3>{t("projects.caseStudyStructure.sections.research.title")}</h3>
            <p>{caseStudy.researchDescription}</p>
          </div>
          <div className="casestudyContentColumn brandIdentity">
            <h3>{t("projects.caseStudyStructure.sections.brandIdentity.title")}</h3>
            <p>{caseStudy.brandDescription}</p>
            <div className="brandingWrapper">
              <div className="brandingContainer">
                <div className="title">
                  <p>{t("projects.caseStudyStructure.sections.brandIdentity.subsections.currentLogo")}</p>
                </div>
                <div className="brandingItem">
                  {...caseStudy.brandCurrentLogo.map((logo, index) => (
                    <img
                      src={logo}
                      key={index}
                      className="currentLogo"
                      alt={t("projects.caseStudyStructure.sections.brandIdentity.subsections.currentLogo")}
                    />
                  ))}
                </div>
              </div>
              <div className="brandingContainer">
                <div className="title">
                  <p>{t("projects.caseStudyStructure.sections.brandIdentity.subsections.proposals")}</p>
                </div>
                <div className="brandingItem proposalLogos">
                  {...caseStudy.brandPropositions.map((logo, index) => (
                    <img
                      src={logo}
                      key={index}
                      className="proposalLogo"
                      alt={t("projects.caseStudyStructure.sections.brandIdentity.subsections.proposals")}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="brandingWrapper">
              <div className="brandingContainer">
                <div className="title">
                  <p>{t("projects.caseStudyStructure.sections.brandIdentity.subsections.fonts")}</p>
                </div>
                <div className="brandingItem typography">
                  <h1>Aa</h1>
                  <h3>{caseStudy.brandTypography.fontName}</h3>
                  <p className="bold">
                  {t("projects.caseStudyStructure.sections.brandIdentity.subsections.pangram")}
                  </p>
                  <p>{t("projects.caseStudyStructure.sections.brandIdentity.subsections.pangram")}</p>
                </div>
              </div>
              <div className="brandingContainer">
                <div className="title">
                  <p>{t("projects.caseStudyStructure.sections.brandIdentity.subsections.colors")}</p>
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
            <h3>{t("projects.caseStudyStructure.sections.userJourneys.title")}</h3>
            <p>{caseStudy.userJourneyDescription}</p>
            <div className="image">
              <img src={caseStudy.userJourneyImage} alt="userjourneys" />
            </div>
          </div>
          <div className="casestudyContentColumn Outcome">
            <h3>{t("projects.caseStudyStructure.sections.outcome.title")}</h3>
            {caseStudy.outComeDescriptions.map((outComeDescription, index) => (
              <p key={index}>{outComeDescription}</p>
            ))}
            <div className="outcomeRow">
              {...caseStudy.outComeImages.map((image, index) => (
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
