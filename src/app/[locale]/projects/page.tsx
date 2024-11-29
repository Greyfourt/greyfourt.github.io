
import Projects from "@/components/Projects";
import { routing } from "@/i18n/routing";
import { Locale } from "@/types";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));

  // return [{ locale: 'en' }, { locale: 'fr' }];
}

const ProjectsPage = ({params: {locale}}: { params: {
  locale: Locale
}}) => {
  let isProject = true;

  console.log("ProjectsPage [locale]")
  

  return (
    <div className="bodyContainer">
      <Projects 
      isProject
      locale={locale} />
    </div>
  );
};

export default ProjectsPage;
