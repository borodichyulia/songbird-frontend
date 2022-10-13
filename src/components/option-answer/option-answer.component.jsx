
import { useSelector } from 'react-redux';

import CheckboxAnswer from '../checkbox-answer/checkbox-answer.component';

import '../../components/option-answer/option-answer.styles.scss';

const OptionAnswer = () => {
    const birds = useSelector(state => state.bird.birds);

    return (
        <div className='option-answer-container'>
            {birds.map(bird =>
                <CheckboxAnswer key={bird.id} id={bird.id} bird={bird.name} />
            )}
        </div>
    )
};

export default OptionAnswer;