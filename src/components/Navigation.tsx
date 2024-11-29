'use client'

import { WebsiteCarbonBadge } from "react-websitecarbon-badge";
import Icon from "./Icons"
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";


const Footer = () => {
  return (
    <footer>
      <div className="contactIcons">
        <a
          href="https://greyfourt.github.io/CV_English_Nazli.pdf"
          download="CV_English_Nazli"
          target="_blank"
          rel="nofollow"
        >
          <Icon type="doc" />
        </a>
        <a href="tel:+330769201157">
          <Icon type="phone" />
        </a>
        <a href="mailto:nazliozcubukcuoglu@gmail.com">
          <Icon type="mail" />
        </a>
        <a href="https://linkedin.com/in/nazli-oz/">
          {" "}
          <Icon type="linkedin" />
        </a>
      </div>
      {/* <WebsiteCarbonBadge url="greyfourt.github.io" dark={true} /> */}
      <p>with ♥ by Nazli &copy; 2023</p>
    </footer>
  );
}

export const Menu = ({ locale }: { locale: string }) => {

  const currentRoute = usePathname()

  const navItem = () => {

  }

  return (
    <nav>
      <Link
        href={`/`}
        className={"navItem " + (currentRoute === "/" ? "active" : "")}
      >
        Home
      </Link>
      <Link
        href={`/projects`}
        className={
          "navItem " + (currentRoute === "/projects" ? "active" : "")
        }
      >
        Projects
      </Link>
      <a
        className="navItem "
        href="https://greyfourt.github.io/CV_English_Nazli.pdf"
        target="_blank"
        rel="nofollow"
      >
        <Icon type="doc" />
      </a>
      <a className="navItem" href="mailto:nazliozcubukcuoglu@gmail.com">
        <Icon type="mail" />
      </a>
    </nav>
  );
}

export default Footer
