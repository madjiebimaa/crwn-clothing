import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import * as S from "./directory.styles";

const Directory = ({ sections }) => (
  <S.DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </S.DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(Directory);
