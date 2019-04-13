import React, { Component } from 'react';
import './App.css';

import SurveyQuestions from './data/SurveyQuestionsData';
import SurveyQuestionAnswerComponent from './SurveyQuestionAnswerComponent';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentQuestionIndex : 0,
      totalScore: 0,
      surveyStarted: false,
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to the Basic Survey!</h1>

        {!this.state.surveyStarted ? this.showWelcomeText(): this.displayQuestion()}

        {this.state.surveyStarted ? this.showNavigationButtons(): null}
      </div>
    );
  }

  displayQuestion = () => {
    let currentSurveyQuestion = SurveyQuestions.surveyQuestions[this.state.currentQuestionIndex];

    return (
      <SurveyQuestionAnswerComponent questionText={currentSurveyQuestion.text}
                                     answers={currentSurveyQuestion.answers}
                                     correctAnswer={currentSurveyQuestion.correctAnswer}/>
    );
  }

  startSurvey = () => {
    //update the state, render then called again to update the view
    this.setState({
      surveyStarted: true
    });

  }

  /**
   * Show the intro and welcome text only if the survey has not started
   * @returns {*}
   */
  showWelcomeText = () => {
    return (
        <div>

          There are {SurveyQuestions.surveyQuestions.length} questions in this survey.
          At least one answer must be given in each.

          <div>
            <button onClick={this.startSurvey}>Begin the survey!</button>
          </div>
        </div>
    );
  }

  showNavigationButtons = () => {
    const previousEnabled = this.state.currentQuestionIndex > 0;
    const nextEnabled = this.state.currentQuestionIndex < SurveyQuestions.surveyQuestions.length - 1;

    return (
        <div>
          <button disabled={!previousEnabled} onClick={this.navigatePrevious}>Previous</button>
          <button disabled={!nextEnabled} onClick={this.navigateNext}>Next</button>
        </div>
    );
  }

  navigateNext = () => {
    const newIndex = this.state.currentQuestionIndex + 1;

    this.setState({
      currentQuestionIndex: newIndex
    });
  }

  navigatePrevious = () => {
    const newIndex = this.state.currentQuestionIndex - 1;

    this.setState({
      currentQuestionIndex: newIndex
    });
  }
}

export default App;
