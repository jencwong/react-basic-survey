import React, { Component } from 'react';
import './App.css';
import SurveyQuestions from './data/SurveyQuestionsData';

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

        {!this.state.surveyStarted ? this.showWelcomeText(): this.displayQuestion(this.state.currentQuestionIndex)}
      </div>
    );
  }

  displayQuestion = (questionIdx) => {
    return (
        <div> SURVEY STARTED!!! </div>
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

}

export default App;
