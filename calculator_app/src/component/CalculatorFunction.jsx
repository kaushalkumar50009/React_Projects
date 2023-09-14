import { useState } from "react";
import "./calculator.css"


const CalculatorFunction = () => {
    const [value, setValue] = useState("");
    const [opreator, setOpreator] = useState("");
    const [result, setResult] = useState("");
    const [history, setHistory] = useState([])

    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "="];
    const operators = ["+", "-", "x", "/", ".", "%"];
    const actions = ["back", "clear all"]

    const handleButtonClick = (e) => {
        if (opreator) {
            setValue(value + opreator + e.target.value);
            setOpreator("");

        } else {
            setValue(value + e.target.value);
        }
    };

    const operates = (e) => {
        if (!value) {
            return;
        } else {
            setOpreator(e.target.value);
        }
    };


    const showValue = () => {
        if (value.includes("+")) {
            let re = value.split("+");
            const sum = re.reduce((total, current) => {
                return +total + +current;
            }, 0);
            setValue(sum);
            setResult(sum);
            setHistory([
                ...history, value + "=>" + sum
            ])

        } else if (value.includes("-")) {
            let re = value.split("-");
            const diff = re.reduce((total, current) => {
                return +total - +current;
            });
            setValue(diff);
            setResult(diff);
            setHistory([
                ...history, value + "=>" + diff
            ])
        } else if (value.includes("x")) {
            let re = value.split("x");
            const mul = re.reduce((total, current) => {
                return +total * +current;
            });
            let stringMul = mul.toString()
            const limitDecimal = stringMul.includes(".") ? mul.toFixed(3) : mul;
            setValue(limitDecimal);
            setResult(limitDecimal);
            setHistory([
                ...history, value + "=>" + limitDecimal
            ])

        } else if (value.includes("/")) {
            let re = value.split("/");
            const div = re.reduce((total, current) => {
                return +total / +current;
            });

            let stringDiv = div.toString()
            const limitDecimal = stringDiv.includes(".") ? div.toFixed(3) : div;
            setValue(limitDecimal);
            setResult(limitDecimal);
            setHistory([
                ...history, value + "=>" + limitDecimal
            ])

        } else if (!value) {
            setValue(result);

        } else {
            console.log("something wrong");
        }
    };

    const clearInputsByOne = () => {
        // To check the length of a number, you need to convert it to a string first, and then you can use the .length
        if (opreator) {
            setOpreator("");
        } else if (value !== isNaN) {
            const numberToString = value.toString();
            setValue(numberToString.slice(0, -1));
        } else if (value.length > 0) {
            setValue(value.slice(0, -1));
        }
    };

    const clearAllInputs = () => {
        setValue("");
        setOpreator("");
        setResult("");
    };

    return (
        <div className="calculator-container">
            <div className="calculator_history">
                <div className="history" >
                    <div className="show_history_data" style={{ display: history.length > 0 ? "flex" : "none" }}>
                        <h3 className="title_text">
                            History
                        </h3>
                        <div className="history_text">
                            {
                                history.map((his, index) => (
                                    <p className="text" key={index}>
                                        {his}
                                    </p>
                                ))
                            }
                        </div>
                        <div className="clear_history" >
                            <button className="button clear_button" style={{ display: history.length > 0 ? "block" : "none" }} onClick={() => { setHistory([]) }}>clear history</button>
                        </div>

                    </div>
                </div>
                <div className="calculator">
                    <div className="calculator_inner_box">
                        <div className="result_and_input">
                            <div className="input">
                                <input type="text" className="display" value={value + opreator} readOnly />
                            </div>
                            <div className="result">
                                <h1 className="result_text">Result: {result}</h1>
                            </div>
                        </div>

                        <div className="all_buttons">
                            <div className="btns">
                                <div className="numbers">
                                    {numbers.map((num, index) => (
                                        <button
                                            key={index}
                                            className="button numbers_btns"
                                            onClick={num === "=" ? showValue : (e) => handleButtonClick(e)}
                                            value={num}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                </div>
                                <div className="operators">
                                    {operators.map((sign, index) => (
                                        <button
                                            key={index}
                                            className="button operator"
                                            onClick={(e) => operates(e)}
                                            value={sign}
                                        >
                                            {sign}
                                        </button>
                                    ))}
                                </div>

                                <div className="actions">
                                    {actions.map((action, index) => (
                                        <button
                                            key={index}
                                            className="button actions_button"
                                            onClick={
                                                action === "back" ? clearInputsByOne : clearAllInputs
                                            }
                                            value={action}
                                        >
                                            {action}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default CalculatorFunction;



// return (
//     <>
//         <input type="text" value={value + opreator} readOnly />
//         <h1>Result : {result}</h1>
//         {numbers.map((num, index) => (
//             <>
//                 <div className="button btns" key={index}>
//                     <button
//                         value={num}
//                         onClick={(e) => {
//                             handleButtonClick(e);
//                         }}
//                     >
//                         {num}
//                     </button>
//                 </div>
//             </>
//         ))}
//         {operators.map((sign) => (
//             <>
//                 <div className="operator" key={sign}>
//                     <button
//                         value={sign}
//                         onClick={(e) => {
//                             operates(e);
//                         }}
//                     >
//                         {sign}
//                     </button>
//                 </div>
//             </>
//         ))}

//         {
//             actions.map((action, index) => (
//                 < >
//                     <div className="actions" key={index}>
//                         {action === "back" ? (
//                             <button value={action} onClick={() => clearInputsByOne()}>
//                                 {action}
//                             </button>
//                         ) : action === "clear all" ? (
//                             <button value={action} onClick={() => clearAllInputs()}>
//                                 {action}
//                             </button>
//                         ) : (
//                             <button value={action} onClick={() => showValue()}>
//                                 {action}
//                             </button>
//                         )}
//                     </div>
//                 </>
//             ))
//         }
//     </>
// );