import { useDispatch, useSelector } from 'react-redux';

import { setDisabled } from '../../store/changePage';
import { setStateLevel, changeBirdRandom, changeBirds } from '../../store/birdSlice';
import { changeAnswer, changeTrueImage, setId, changeTrueName } from '../../store/answerSlice';
import { setStateResultScore } from '../../store/counterSlice';

import '../../components/button-restart/button-restart.styles.scss';

const ButtonRestart = () => {
    const disabled = useSelector(state => state.bird.disabledNextLevel);

    const dispatch = useDispatch();

    const anonymousImage = 'https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg';
    const anonymousName = '******';

    const chooseNextGame = () => {
        dispatch(setStateLevel(0));
        dispatch(setDisabled());
        dispatch(changeBirds());
        dispatch(changeBirdRandom());
        dispatch(setId(0));
        dispatch(changeTrueImage(anonymousImage));
        dispatch(changeTrueName(anonymousName));
        dispatch(changeAnswer(false));
        dispatch(setStateResultScore(0));
    }

    return (
        <button className={'next-level-button'} onClick={chooseNextGame} disabled={disabled}>Next Level</button>
    )
};

export default ButtonRestart;

