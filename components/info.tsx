import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { Table } from 'rsuite';

const { Column, HeaderCell, Cell, Pagination } = Table;

type props = {
  data: any
}

const Info: React.FC<props> = props => {
  return (
    <RootStyle>
      {Object.keys(props.data).map((key) => {
        return <p key={key}>{key}: {props.data[key]}</p>
      })}
    </RootStyle>
  )
}

const RootStyle = Styled.div`
  margin-top: 2rem;
`

export default Info;