import React, {Component} from 'react';

class SurveyQuestionAnswerComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>{this.props.questionText}</div>

                {this.props.answers.map((answer, idx) => {
                    return <div key={idx}>Question: {answer}</div>
                })}
            </div>
        );
    }
}

export default SurveyQuestionAnswerComponent;