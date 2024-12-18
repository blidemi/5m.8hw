import { incrementCount, decrementCount, incrementCountBy, decrementCountBy, setText, resetCount } from "./redux/slice";
import { useDispatch } from "react-redux";

const Button = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => {
                dispatch(incrementCount())
            }}>+1</button>

            <button onClick={() => {
                dispatch(decrementCount())
            }}>-1</button>

            <button onClick={() => {
                dispatch(resetCount())
            }}>reset</button>

            <button onClick={() => {
                dispatch(incrementCountBy(5))
            }}>+5</button>
            
            <button onClick={() => {
                dispatch(decrementCountBy(5))
            }}>-5</button>

<button onClick={() => {
                dispatch(setText('Hello Geeks!'))
            }}>Change</button>
        </div>
    );
}

export default Button;
