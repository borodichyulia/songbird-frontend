import { useSelector } from 'react-redux';

import AudioPlayer from '../audio-player/audio-player.component';

import '../../components/answer-block/answer-block.styles.scss';

const AnswerBlock = () => {
    const currentId = useSelector(state => state.answer.id);
    const birds = useSelector(state => state.bird.birds);

    const currentBird = birds.filter(item => item.id === currentId);
    const { image, name, species, description, audio } = currentBird[0];

    return (
        <div className='answer-block-container'>
            <div className='information-bird'>
                <div className='image-bird'>
                    <img src={image} />
                </div>
                <div className='description-bird'>
                    <div className='name-bird'>
                        {name}
                    </div>
                    <hr />
                    <div className='kind-bird'>
                        {species}
                    </div>
                    <hr />
                    <div className='song-bird'>
                        <AudioPlayer song={audio} />
                    </div>
                </div>
            </div>
            <div className='text-description-bird'>
                {description}
            </div>
        </div>
    )
};

export default AnswerBlock;