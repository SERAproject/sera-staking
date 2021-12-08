import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Form } from 'react-bootstrap'
import BigNumber from 'bignumber.js'
import { stakings } from 'assets/variables'
import { getFullDisplayBalance, formatNumber } from 'utils/formatBalance'

const StyledBalanceText = styled.div`
  margin-top: 5px;
  text-align: left;
`

const StyledValueText = styled.span`
  color: #f1b90c;
  font-weight: 700;
`

const StyledTitleArea = styled.div`
  display: flex !important;
  flex-direction: column;
  text-align: center;
  margin-bottom: 30px;
`

const StyledContractAddress = styled.a`
  text-decoration: underline;
  color: #0a58ca;
`

export default function UnstakeInitialize() {

  return (
    <section className="checkpoints">
      <StyledTitleArea>
        <h2>Confirm Unstaking Process</h2>
        <h6>In this step, you initiate the unstaking process. After a 7 day waiting period, you will be allowed to withdraw your SERA</h6>
      </StyledTitleArea>
    </section>
  );
}
