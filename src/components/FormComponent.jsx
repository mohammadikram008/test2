import React from 'react';

const FormComponent = ({ option, optionIndex, isCorrect, onOptionChange, onDeleteOption, onCorrectOptionChange }) => {
    const handleOptionChange = (e) => {
        onOptionChange(optionIndex, e);
    };

    const handleCorrectOptionChange = () => {
        onCorrectOptionChange(optionIndex);
    };

    return (
        <div className="flex items-center mb-2">
            <input
                type="text"
                value={option}
                onChange={handleOptionChange}
                className="border border-gray-300 p-2 rounded mr-2"
            />
            <label className="flex items-center">
                <input
                    type="checkbox"
                    checked={isCorrect}
                    onChange={handleCorrectOptionChange}
                    className="mr-2"
                />
                Correct Option
            </label>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={onDeleteOption}
            >
                Delete Option
            </button>
        </div>
    );
};

export default FormComponent;
