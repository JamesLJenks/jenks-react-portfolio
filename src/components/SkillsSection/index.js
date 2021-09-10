import React from "react";
import { Button } from "react-scroll";

import {
  SkillsSectionContainer,
  SkillsWrapper,
  SkillsRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./SkillsElements";

const SkillsSection = () => {
  return (
    <React.Fragment>
      <SkillsSectionContainer>
        <SkillsWrapper>
          <SkillsRow>
            <Column1>
              <TextWrapper>
                <TopLine>Topline</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                  <Button to="home" />
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </SkillsRow>
        </SkillsWrapper>
      </SkillsSectionContainer>
    </React.Fragment>
  );
};

export default SkillsSection;
