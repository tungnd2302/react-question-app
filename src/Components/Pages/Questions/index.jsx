import React from 'react';
import PropTypes from 'prop-types';

Questions.propTypes = {

};

function Questions(props) {
    let { data,onValueQuestion } = props;
    let answer_render = null;

    answer_render = data.answers.map((value, key) => {
        if (data.multiple_choice) {
            let name = `${ data.id }[]`;
            return (
                <div key = {key} className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" name={name} value={ value.id } onChange={(e)=> onValueQuestion(e)}/>
                    <label className="form-check-label" >
                        {value.name}
                    </label>
                </div>
            )
        } else {
            return (
                <div key = {key} className="form-check mb-3">
                    <input className="form-check-input" type="radio" name={ data.id } value={ value.id } onChange={(e)=> onValueQuestion(e)} />
                    <label className="form-check-label" >
                    {value.name}
                    </label>
                </div>
            )
        }
    })

    // console.log(data);
    return (
        <div className="row mb-3">
            <div className="col-md-8 offset-md-2">
                <ul className="list-group">
                    <li className="list-group-item active">
                        Câu { props.index + 1}: {data.question}
                    </li>
                    <li className="list-group-item">
                            { answer_render }
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Questions;