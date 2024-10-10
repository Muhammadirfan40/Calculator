import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput('');
    };

    const handleCalculate = () => {
        try {
            // Use eval to evaluate the expression (caution: avoid using eval in production)
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return (


        <>

            <div className="container flex flex-col items-center justify-center h-screen bg-gray-50">
                <h1 className='text-6xl font-bold text-gray-800 mb-8'>CALCULATOR</h1>
                <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                    <input
                        type="text"
                        value={input}
                        readOnly
                        className="w-full p-4 mb-6 text-right text-2xl text-gray-800 bg-transparent border-b-2 border-gray-300 focus:outline-none"
                    />
                    <div className="grid grid-cols-4 gap-4">
                        {['7', '8', '9', '/'].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleButtonClick(item)}
                                className="bg-gray-100 text-gray-800 text-3xl p-4 rounded-lg hover:bg-gray-200 transition duration-150 ease-in-out"
                            >
                                {item}
                            </button>
                        ))}
                        {['4', '5', '6', '*'].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleButtonClick(item)}
                                className="bg-gray-100 text-gray-800 text-3xl p-4 rounded-lg hover:bg-gray-200 transition duration-150 ease-in-out"
                            >
                                {item}
                            </button>
                        ))}
                        {['1', '2', '3', '-'].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleButtonClick(item)}
                                className="bg-gray-100 text-gray-800 text-3xl p-4 rounded-lg hover:bg-gray-200 transition duration-150 ease-in-out"
                            >
                                {item}
                            </button>
                        ))}
                        {['0', 'C', '=', '+'].map((item) => (
                            <button
                                key={item}
                                onClick={() =>
                                    item === 'C'
                                        ? handleClear()
                                        : item === '='
                                            ? handleCalculate()
                                            : handleButtonClick(item)
                                }
                                className="bg-gray-100 text-gray-800 text-3xl p-4 rounded-lg hover:bg-gray-200 transition duration-150 ease-in-out"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>



        </>



    );
};

export default Calculator;
