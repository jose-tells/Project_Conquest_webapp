import React from "react";
import Sections from "./Sections";
import SectionItem from "./SectionItem";

const sections = ["Photography", "Illustration", "Filmmaking"];

const WithItems =
  (WrapperForItems) =>
  (WrappedItems) =>
  (sections) =>
  ({ location, sectionName }) =>
    (
      <WrapperForItems section={sectionName}>
        {sections.map((item) => (
          <WrappedItems
            key={item}
            section={item}
            isSelected={location.includes(item.toLowerCase())}
          />
        ))}
      </WrapperForItems>
    );

const SectionsWithItems = WithItems(Sections)(SectionItem)(sections);

export default SectionsWithItems;
