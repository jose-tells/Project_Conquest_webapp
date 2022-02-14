import React from "react";
// Components
import MenuNav from "../components/MenuNav";
import PresentationCard from "../components/PresentationCard";
import RedirectLink from "../components/RedirectLink";
import LinkCard from "../components/LinkCard";
import Footer from "../components/Footer";
// Styles
import "../assets/styles/HubImports.styl";

const Hub = () => (
  <>
    <MenuNav />
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

const sections = ["photography", "illustration", "filmmaking"];

export default Hub;
