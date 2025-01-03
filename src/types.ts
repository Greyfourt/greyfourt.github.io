
export type Project = {
    title: string;
    date: string;
    tag: TagType;
    image: string;
    link?: string;
    projectURL?: string;
    isSelected: boolean;
    hasCaseStudy: boolean;
    projectCaseStudy?: CaseStudy;
}

export type TagType = 'all' | 'logo' | 'website' | 'mobileApp' | 'webApp' | 'graphics';

export type CaseStudy = {
    caseStudyState: string;
    caseStudyDate: string;
    problemImage: string,
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

export type Locale = 'fr' | 'en';

export type Section = {
    title: string;
    main: string;
    secondary?: string;
    cta?: string;
}

export type AboutMe = {
    header: {
        title: string;
    };
    
    sections: {
        education: Section;
        style: Section;
        languages: Section;
        hobbies: Section;
        green: Section;
    };
}

export type AboutWork = {
    header: {
        title: string;
    };
    
    sections: {
        work: Section;
        experiences: Section;
        favTools: Section;
    };
}
