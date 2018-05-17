// @flow
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
// import { connect } from 'react-redux'
// import { createToggleTabAction } from '../redux/actions/tabs'
import TimelineTab from './TimelineTab'
// import {
//   colorPalette
// } from '../styles/styleGuide'

type Props = {
  tabs: Array<*>,
  toggleTab: (index: number) => void,
  activeTab: number

}

class TimelineTabs extends Component<Props> {
  handleTabClick = (index: number) => {
    this.props.toggleTab(index)
  }

  render () {
    const {tabs, activeTab} = this.props

    return (
      <Container id="tabs">
        <Fragment>
          <TabsWrapper>
            {
              tabs.map((tab, i) => (
                <TimelineTab
                  key={i}
                  index={i}
                  active={i === activeTab}
                  name={tab.name}
                  handleTabClick={this.handleTabClick}
                />
              ))
            }
          </TabsWrapper>
          <TabContent>
            {
              tabs.map((block, i) => (
                <TabCategory
                  key={i}
                >
                  <Title>{block.content.title}</Title>
                  <Text>{block.content.text}</Text>

                </TabCategory>
              ))
            }
          </TabContent>
        </Fragment>
      </Container>
    )
  }
}

// const mapStateToProps = (state: (*), ownProps: Props) => ({
//   activeTab: state.tabs.activeTab
// })

// const mapDispatchToProps = (dispatch: () => void, ownProps: Props) => ({
//   toggleTab: (activeTab) => dispatch(createToggleTabAction(activeTab))
// })

export { TimelineTabs }
// export default connect(mapStateToProps, mapDispatchToProps)(TimelineTabs)

const Container = styled.section`
  width: 100%;
  margin: 0 0 60px;
  padding-top: 50px;
`

const TabsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
const TabContent = styled.section`
  width: 100%;
  padding: 53px 0 80px 89px;
  box-sizing: border-box;
  border-top: 0;
  border-radius: 0 0 4px 4px;
`
// const Content = styled.div`
//   width: 100%;
//   max-width: 766px;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `
const TabCategory = styled.div`
  width: 100%;
  max-width: 766px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Title = styled.h3`
`
const Text = styled.p`
`