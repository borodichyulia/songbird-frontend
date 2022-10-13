import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AudioPlayer from '../audio-player/audio-player.component';
import { changeAnswer, changeTrueImage, changeTrueName } from '../../store/answerSlice';

import '../../components/question-block/question-block.styles.scss';

const QuestionBlock = () => {
    const CurrentId = useSelector(state => state.answer.id);
    const QuestionBird = useSelector(state => state.bird.birdRandom);
    const TrueImage = useSelector(state => state.answer.trueImage);
    const TrueName = useSelector(state => state.answer.trueName);

    const dispatch = useDispatch();

    const { image, name, audio, id } = QuestionBird;

    useEffect(() => {
        if (id === CurrentId) {
            dispatch(changeTrueImage(image));
            dispatch(changeTrueName(name));
            dispatch(changeAnswer(true));
        }
    })

    return (
        <div className='question-block-container'>
            <div className='image-bird'>
                <img src={TrueImage} />
            </div>
            <div className='description-question'>
                <div className='name-bird'>
                    {TrueName}
                </div>
                <hr />
                <div className='song-bird'>
                    <AudioPlayer song={audio} />
                </div>
            </div>
        </div>
    )
};

export default QuestionBlock;