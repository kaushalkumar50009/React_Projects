import { useState } from "react";

function Calculation() {
    const btnArray = [
        ["AC", "C", "%", "/"],
        ["7", "8", "9", "x"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["0", ".", "="],
    ];

    const [firstNum, setFirst] = useState("");
    const [secondNum, setSecond] = useState("");
    const [Operator, setOperator] = useState("");
    const [result, setResult] = useState("");
    const [times, setTimes] = useState("");
    let num1 = "",
        num2 = "";

    function clearInput(input) {
        if (input == "AC") {
            let clear = "";
            setFirst(clear);
            setSecond(clear);
            setOperator(clear);
            setResult(clear);
            setTimes(clear);
        } else {
            if (Operator == "%") {
                setOperator(Operator.slice(0, -1));
            } else if (secondNum !== "") {
                setSecond(secondNum.slice(0, -1));
            } else if (times == "x") {
                setTimes(times.slice(0, -1));
            } else if (Operator !== "") {
                setOperator(Operator.slice(0, -1));
            } else if (firstNum !== "") {
                setFirst(firstNum.slice(0, -1));
            }
        }
    }

    function calculate() {
        if (Operator) {

            let sum, sub, times, division, reslt, stringResult, converted
            switch (Operator) {
                case "+":
                    sum = +firstNum + +secondNum;
                    setResult(sum);
                    break;
                case "-":
                    sub = +firstNum - +secondNum;
                    sub = sub.toString();
                    setResult(sub);
                    break;
                case "x":
                    times = +firstNum * +secondNum;
                    setResult(times);
                    break;
                case "/":
                    division = +firstNum / +secondNum;
                    setResult(division);
                    break;
                case "%":

                    reslt = +firstNum * (+secondNum / 100);

                    stringResult = reslt.toString()
                    converted = stringResult.includes(".") ? Number(reslt).toFixed(3) : Number(reslt)
                    setResult(converted)

                    break;
                default:
                    break;
            }
        }
    }

    function takeInput(input) {
        if (
            input == "x" ||
            input == "%" ||
            input == "+" ||
            input == "-" ||
            input == "/"
        ) {
            if (input == "%") {
                setTimes("x");
            }
            setOperator(input);
        } else if (input == "=") {
            calculate();
        } else if (input == "AC" || input == "C") {
            clearInput(input);
        } else {
            if (Operator) {
                num2 += input;
                setSecond(secondNum + num2);
            } else {
                num1 += input;
                setFirst(firstNum + num1);
            }
        }
    }

    return (
        <>
            <div className="container">
                <div className="screen">
                    {result ? (
                        <div>{result}</div>
                    ) : (
                        <div>
                            {Operator == "%" || times == "x" ? (
                                <span>
                                    {firstNum} {times} {secondNum} {Operator}
                                </span>
                            ) : (
                                <span>
                                    {firstNum} {Operator} {secondNum}
                                </span>
                            )}
                        </div>
                    )}
                </div>
                <div className="button">
                    {btnArray.map((row, i) => (
                        <div key={row} id={"dv" + i}>
                            {row.map((item, j) => (
                                <button
                                    key={item}
                                    value={item}
                                    id={"bt" + j}
                                    onClick={(e) => takeInput(e.target.value)}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Calculation;
