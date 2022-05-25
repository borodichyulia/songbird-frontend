import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UIfx from 'uifx';

import correctSound from '../../assets/audio/correct-answer.mp3';
import wrongSound from '../../assets/audio/wrong-answer.mp3';
import { setId } from '../../store/answerSlice';
import { changeCurrentScore } from '../../store/counterSlice';

import '../../components/checkbox-answer/checkbox-answer.styles.scss';

const correctAnswer = new UIfx(correctSound);
const wrongAnswer = new UIfx(wrongSound);

const CheckboxAnswer = ({ id, bird }) => {
    const stateAnswer = useSelector(state => state.answer.answer);
    const level = useSelector(state => state.bird.level);
    const questionBird = useSelector(state => state.bird.birdRandom);

    const dispatch = useDispatch();

    const [checked, setChecked] = useState(false);
    const [colorCheckbox, setColorCheckbox] = useState(null);

    useEffect(() => {
        setChecked(false);
    }, [level])

    const handleInputChange = () => {
        if (!checked && !stateAnswer) {
            setChecked(true);
            if (id === questionBird.id) {
                setColorCheckbox(true);
                correctAnswer.play();
            } else {
                setColorCheckbox(false);
                wrongAnswer.play();
                dispatch(changeCurrentScore());
            }
        }
        dispatch(setId(id));
    }

    return (
        <label className='container'>
            {bird}
            <input
                name="checked"
                type="checkbox"
                checked={checked}
                onChange={handleInputChange} />
            <span className={`${colorCheckbox ? 'green' : 'red'} checkmark`}></span>
        </label>
    )

};

export default CheckboxAnswer;