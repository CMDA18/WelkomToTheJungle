// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PageTitle from '../PageTitle'
import Intro from '../Intro'
import OverviewCardCollection from '../OverviewCardCollection'
import OverviewMeta from '../OverviewMeta'

import { overviewOne } from '../../constants/content/overview'

type Props = {
  test: string
}

class Overview extends Component<Props> {
  render () {
    return (
      <div className='Overview' data-test={this.props.test}>
        <Helmet
          title='Overview'
        />
        <Wrapper>
          <header>
            <OverviewMeta {...overviewOne}/>
            <PageTitle {...overviewOne}/>
            <Intro {...overviewOne}/>
          </header>
          <OverviewCardCollection {...overviewOne}/>
        </Wrapper>
      </div>
    )
  };
}

export default Overview

const Wrapper = styled.div`
  margin-top: 20px;
`
