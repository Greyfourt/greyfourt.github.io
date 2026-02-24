import { useTranslations } from "next-intl";
import { CaseStudy as CaseStudyType, Locale } from "@/types";
import { setRequestLocale } from "next-intl/server";

interface CaseStudyProps {
  caseStudy: CaseStudyType;
  locale: Locale;
  projectName: string;
}

const CaseStudy = ({ caseStudy, locale, projectName }: CaseStudyProps) => {
  const t = useTranslations();

  setRequestLocale(locale);


  return (
    <>
      <div className="casestudyContentContainer">
        <h2>{t("projects.caseStudyStructure.sections.problemIdea")}</h2>
        <div className="casestudyContentRow problem">
          <div className="image">
            <img
              src={`/images/Problem-${projectName.charAt(0).toUpperCase()}${projectName.slice(1)}.webp`}
              alt="Problem illustration"
              loading="lazy"
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
                  {caseStudy.brandCurrentLogo.map((logo, index) => (
                    <img
                      src={logo}
                      key={index}
                      className="currentLogo"
                      alt={t("projects.caseStudyStructure.sections.brandIdentity.subsections.currentLogo")}
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
              <div className="brandingContainer">
                <div className="title">
                  <p>{t("projects.caseStudyStructure.sections.brandIdentity.subsections.proposals")}</p>
                </div>
                <div className="brandingItem proposalLogos">
                  {caseStudy.brandPropositions.map((logo, index) => (
                    <img
                      src={logo}
                      key={index}
                      className="proposalLogo"
                      alt={t("projects.caseStudyStructure.sections.brandIdentity.subsections.proposals")}
                      loading="lazy"
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
                  {caseStudy.brandColors.map((color, index) => (
                    <div className="colors" key={index}>
                      <div
                        className="colorBox"
                        style={{
                          backgroundColor: color.hex,
                        }}
                      />
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
              <img src={caseStudy.userJourneyImage} alt="User journey diagram" loading="lazy" />
            </div>
          </div>
          <div className="casestudyContentColumn Outcome">
            <h3>{t("projects.caseStudyStructure.sections.outcome.title")}</h3>
            {caseStudy.outComeDescriptions.map((outComeDescription, index) => (
              <p key={index}>{outComeDescription}</p>
            ))}
            <div className="outcomeRow">
              {caseStudy.outComeImages.map((image, index) => (
                <div className="image" key={index}>
                  <img src={image} alt="Project outcome screenshot" loading="lazy" />
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
