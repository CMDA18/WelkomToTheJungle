// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import styled from 'styled-components'
import Grid from '../../Grid'
import PageTitle from '../../PageTitle'
import Intro from '../../Intro'
import { theWallOfFame } from '../../../constants/content/index'
import Task from '../../Task'
import TextAndImage from '../../TextAndImage'

type Props = {
  test: string
}

class TheWallOfFame extends Component<Props> {
  render () {
    return (
      <div className='theWallOfFame' data-test={this.props.test}>
        <Helmet
          title='theWallOfFame'
        />
        <Grid page='ourTeam'>
          <header>
            <PageTitle {...theWallOfFame}/>
            <Intro {...theWallOfFame}/>
          </header>
          <TextAndImage {...theWallOfFame.textMedia}/>
          <Task {...theWallOfFame}/>
        </Grid>
      </div>
    )
  };
}

export default TheWallOfFame
