import { useSelector } from "react-redux";

import AnswerBlock from "../../components/answer-block/answer-block.component";
import AnswerStartBlock from "../../components/answer-start/answer-start.component";
import OptionAnswer from "../../components/option-answer/option-answer.component";
import QuestionBlock from "../../components/question-block/question-block.component";
import Button from "../../components/button/button-component";

import './home.styles.scss';

const Home = () => {

    const selectorCurrentId = useSelector(state => state.answer.id);

    return (
        <>
            <div className="home-container">
                <QuestionBlock />
                <div className="answer">
                    <OptionAnswer />
                    {selectorCurrentId !== 0 ?
                        <AnswerBlock />
                        : <AnswerStartBlock />
                    }
                </div>
            </div>
            <Button />
        </>
    )
}

export default Home;