import React from 'react';

const PreviewComponent = ({ questions }) => {
    console.log("question", questions)
    return (
        <div className='w-1/2 p-4 rounded overflow-hidden shadow-xl'>
            <h2 className="text-xl font-bold mb-4">Preview</h2>
            {questions.map((question, questionIndex) => (
                <div key={questionIndex} className="mb-4">
                    <h3 className="text-lg font-semibold">{question.question}</h3>
                    <ul className="list-disc list-inside">
                        {question.options.map((option, optionIndex) => (
                            <div className='flex' key={optionIndex}>

                                <li >{option.text}</li>
                                {option.isCorrect ?
                                    <input
                                        type="checkbox"
                                        checked={option.isCorrect}
                                        disabled
                                        className="ml-3"
                                    />
                                    : ""
                                }
                            </div>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PreviewComponent;
