import { Locale } from "@/types"
import { useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import CVDownloadButton from "./CVDownloadButton"

type ExperienceItem = {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

type ProjectItem = {
  name: string
  year: string
  description: string
}

type EducationItem = {
  school: string
  degree: string
  location: string
  period: string
}

type OtherItem = {
  title: string
  detail: string
}

type SkillGroup = {
  name: string
  items: string[]
}

type Language = {
  name: string
  level: string
}

type Contacts = {
  phone: string
  email: string
  website: string
  linkedin: string
  github: string
}

const CV = ({ locale }: { locale: Locale }) => {
  setRequestLocale(locale)
  const t = useTranslations('cv')

  const contacts = t.raw('header.contacts') as Contacts
  const experiences = t.raw('experience.items') as ExperienceItem[]
  const projects = t.raw('projects.items') as ProjectItem[]
  const education = t.raw('education.items') as EducationItem[]
  const others = t.raw('other.items') as OtherItem[]
  const skillGroups = t.raw('skills.groups') as SkillGroup[]
  const languages = t.raw('languages.items') as Language[]
  const softSkills = t.raw('softSkills.items') as string[]
  const interests = t.raw('interests.items') as string[]

  const phoneHref = `tel:${contacts.phone.replace(/[\s.]/g, '')}`
  const printTitle = locale === 'fr' ? 'CV-Nazli-Ozcubukcuoglu' : 'Resume-Nazli-Ozcubukcuoglu'

  return (
    <div className="cvPage" id="main-content">
      <div className="cvActions">
        <CVDownloadButton label={t('meta.downloadLabel')} printTitle={printTitle} />
      </div>

      <article className="cvSheet">
        <header className="cvHeader">
          <div className="cvPhoto">
            <img src="/photo_nazli.jpg" alt="" loading="lazy" />
          </div>
          <div className="cvHeaderText">
            <h1 className="cvName">{t('header.name')}</h1>
            <div className="cvTitle">{t('header.title')}</div>
            <p className="cvTagline">{t('header.tagline')}</p>
            <p className="cvAvailability">{t('header.availability')}</p>
            <ul className="cvContacts">
              <li><a href={phoneHref}>{contacts.phone}</a></li>
              <li><a href={`mailto:${contacts.email}`}>{contacts.email}</a></li>
              <li><a href={`https://${contacts.website}`}>{contacts.website}</a></li>
              <li><a href={`https://${contacts.linkedin}`}>{contacts.linkedin}</a></li>
              <li><a href={`https://${contacts.github}`}>{contacts.github}</a></li>
            </ul>
          </div>
        </header>

        <main className="cvMain">
          <section className="cvSection">
            <h2>{t('experience.title')}</h2>
            {experiences.map((job, i) => (
              <div className="cvJob" key={i}>
                <div className="cvJobHeader">
                  <span className="cvJobRole">{job.role}</span>
                  <span className="cvJobMeta">{job.location} · {job.period}</span>
                </div>
                <div className="cvJobCompany">{job.company}</div>
                <ul className="cvBullets">
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </section>

          <section className="cvSection">
            <h2>{t('projects.title')}</h2>
            {projects.map((p, i) => (
              <div className="cvProject" key={i}>
                <div className="cvProjectHeader">
                  <span className="cvProjectName">{p.name}</span>
                  <span className="cvProjectYear">{p.year}</span>
                </div>
                <div className="cvProjectDesc">{p.description}</div>
              </div>
            ))}
            <a className="cvProjectsMore" href="https://greyfourt.github.io">{t('projects.moreLink')}</a>
          </section>

          <section className="cvSection">
            <h2>{t('education.title')}</h2>
            {education.map((e, i) => (
              <div className="cvEdu" key={i}>
                <div className="cvEduHeader">
                  <span className="cvEduSchool">{e.school}</span>
                  <span className="cvEduMeta">{e.location} · {e.period}</span>
                </div>
                <div className="cvEduDegree">{e.degree}</div>
              </div>
            ))}
          </section>

          <section className="cvSection">
            <h2>{t('other.title')}</h2>
            {others.map((o, i) => (
              <div className="cvOther" key={i}>
                <span className="cvOtherTitle">{o.title}</span>
                <span className="cvOtherDetail"> · {o.detail}</span>
              </div>
            ))}
          </section>
        </main>

        <aside className="cvSidebar">
          <section className="cvSide">
            <h3>{t('skills.title')}</h3>
            {skillGroups.map((g, i) => (
              <div className="cvSkillGroup" key={i}>
                <div className="cvSkillGroupName">{g.name}</div>
                <ul className="cvSkillTags">
                  {g.items.map((s, j) => <li key={j}>{s}</li>)}
                </ul>
              </div>
            ))}
          </section>

          <section className="cvSide">
            <h3>{t('languages.title')}</h3>
            {languages.map((l, i) => (
              <div className="cvLang" key={i}>
                <span className="cvLangName">{l.name}</span>
                <span className="cvLangLevel">{l.level}</span>
              </div>
            ))}
          </section>

          <section className="cvSide">
            <h3>{t('softSkills.title')}</h3>
            <ul className="cvSoftList">
              {softSkills.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </section>

          <section className="cvSide">
            <h3>{t('interests.title')}</h3>
            <ul className="cvSoftList">
              {interests.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </section>
        </aside>
      </article>
    </div>
  )
}

export default CV
