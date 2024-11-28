
export type Project = {
    title: string;
    date: string;
    tag: string;
    image: string;
    link?: string;
    projectURL?: string;
    isSelected: boolean;
    hasCaseStudy: boolean;
    projectCaseStudy?: CaseStudy;
}

export type TagType = 'logo' | 'website' | 'mobileApp' | 'webApp' | 'graphics';
export type FilterType = TagType | 'All';


export type CaseStudy = {
    caseStudyState: string;
    caseStudyDate: string;
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
}
