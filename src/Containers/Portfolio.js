import React from "react";
// Components
import MenuNav from "../components/MenuNav";
import MenuSlideItem from "../components/MenuSlideItem";
import PresentationCard from "../components/PresentationCard";
import RedirectLink from "../components/RedirectLink";
import LinkCard from "../components/LinkCard";
import Footer from "../components/Footer";
// Styles
import "../assets/styles/HubImports.styl";

const Portfolio = () => (
  <>
    <MenuNav>
      {items.map((item) => (
        <MenuSlideItem key={item} name={item} link={item} />
      ))}
    </MenuNav>
    <PresentationCard />
    <section className="linkCards__wrapper">
      {sections.map((item) => (
        <LinkCard key={item} cardTitle={item}>
          <RedirectLink link={item} linkText="See More" />
        </LinkCard>
      ))}
    </section>
    <Footer />
  </>
);

const items = ["home", "about", "contact"];

const sections = ["photography", "illustration", "filmmaking"];

export default Portfolio;
