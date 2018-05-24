// @flow
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import QuestionFAQ from './QuestionFAQ'
import AnswerFAQ from './AnswerFAQ'
import { colorPalette } from '../styles/styleGuide'

type IAnswers = {
  id?: string;
  answer: string,
  value?: number
}

type IQuestions = {
  question: string,
  answers: Array<IAnswers>
}

type Props = {
  questions: Array<IQuestions>
}

type State = {
}

class QuestionForm extends Component<Props, State> {
  render () {
    const props = this.props

    return (
      <Container>
        {(props.questions || []).map((item, index) => {
          return (
            <Wrapper key={index}>
              <QuestionFAQ {...item} />
              {(item.answers || []).map((answer, index) => (
                <Fragment key={index}>
                  <FormElementContainer >
                    <FormInput
                      type="radio"
                      id={answer.id}
                      name={item.id}
                      value={answer.value}
                    />
                    <FormLabel>
                      <AnswerFAQ {...answer}/>
                    </FormLabel>
                  </FormElementContainer>

                </Fragment>
              ))}
            </Wrapper>
          )
        })}
      </Container>
    )
  }
}

export default QuestionForm

const Container = styled.div`
  background-color: ${colorPalette.lightBlue};
  padding: 10px 30px;
`

const Wrapper = styled.div`
`

const FormElementContainer = styled.div`
  display: block;
  position: relative;
  margin-bottom: 10px;
  &:first-of-type {
    margin-top: 25px;
  }
`

const FormLabel = styled.label`
  width: 100%;
  box-sizing: border-box;
  padding: 15px 25px 10px 25px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  cursor: pointer;
  font-weight: normal;
  overflow: hidden;
  border-radius: 5px;
  width: 100%;
  background-color: #FFFFFF;
  border: 1px solid #FFFFFF;
  transition: opacity .3s ease-in-out;
  &:hover {
    &:after {
      opacity: 1
    }
  }
  h2 {
    margin: 0;
  }
  &:after {
    border-radius: 5px;
    transition: opacity .3s ease-in-out;
    content: '';
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border: 1px solid ${colorPalette.orange};
    position: absolute;
    opacity: 0;
    top: 0;
    right: 0;
  }
`

const FormInput = styled.input`
  display: none;
  + ${FormLabel} {
    ${props => props.hasBeenAnswerd ? `
    opacity: .4;
    &:hover {
      opacity: 1;
    }
  ` : ``}
  }
  &:checked + ${FormLabel} {
    ${props => props.hasBeenAnswerd ? `
      opacity: 1;
      border: 1px solid ${colorPalette.orange};
    ` : ``}
    }
  }
`
