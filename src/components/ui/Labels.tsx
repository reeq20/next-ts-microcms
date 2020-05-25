import React from "react";
import styled from "styled-components";


const Labels = (props: { label: string }) => {
  return (
    <LabelsWrap>
      {props.label.split(",").map((props, index) => {
        return <li key={index}>{props.trim()}</li>;
      })}
    </LabelsWrap>
  );
};


const LabelsWrap = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  margin: 16px 0;
  padding: 0;

  > li {
    margin-right: 8px;
    padding: 4px 11px;
    background: #ddd;
    border-radius: 5px;
    list-style: none;
    font-size: 12px;
  }
`;

export default Labels;
