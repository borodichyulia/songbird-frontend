import { useSelector } from "react-redux"


const CounterScore = () => {
    const score = useSelector(state => state.counter.resultScore);

    return (
        <>
            Score: {score}
        </>
    )
}

export default CounterScore;