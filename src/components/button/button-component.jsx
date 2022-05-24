import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeAnswer, changeTrueImage, setId, changeTrueName } from '../../store/answerSlice';
import { setStateCurrentScore, changeResultScore } from '../../store/counterSlice';
import { changeLevel, changeDisabledNextLavel, changeBirdRandom, changeBirds } from '../../store/birdSlice';
import { setDisabled } from '../../store/changePage';

import '../../components/button/button.styles.scss';

const Button = () => {
    const rightBirdId = useSelector(state => state.answer.id);
    const currentBirdId = useSelector(state => state.bird.birdRandom);
    const disabled = useSelector(state => state.bird.disabledNextLevel);
    const level = useSelector(state => state.bird.level);

    const dispatch = useDispatch();

    const anonymousImage = 'https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg';
    const anonymousName = '******';

    const handleLevelChange = () => {
        dispatch(changeLevel());
        dispatch(changeBirds());
        dispatch(changeBirdRandom());
        dispatch(setId(0));
        dispatch(changeResultScore());
        dispatch(setStateCurrentScore(5));
        dispatch(changeTrueImage(anonymousImage));
        dispatch(changeTrueName(anonymousName));
        dispatch(changeAnswer(false));
        dispatch(changeDisabledNextLavel(true));
    }

    const chooseNextLevel = () => {

        if (level === 5) {
            dispatch(setDisabled());
            dispatch(changeResultScore());
        } else {
            handleLevelChange();
        }
    }

    useEffect(() => {
        if (rightBirdId === currentBirdId.id)
            dispatch(changeDisabledNextLavel(false));
    })

    return (
        <button className={`${disabled ? 'error' : 'right'} next-level-button`} onClick={chooseNextLevel} disabled={disabled}>Next Level</button>
    )
}

export default Button;