import React from 'react';
import FormComponent from './FormComponent';

const OptionComponent = ({ questionIndex, options, onAddOption, onDeleteOption, onOptionChange, onCorrectOptionChange }) => {
    const handleAddOption = () => {
        onAddOption(questionIndex, '');
    };

    const handleDeleteOption = (optionIndex) => {
        onDeleteOption(questionIndex, optionIndex);
    };

    const handleOptionChange = (optionIndex, e) => {
        onOptionChange(questionIndex, optionIndex, e);
    };

    const handleCorrectOptionChange = (optionIndex) => {
        onCorrectOptionChange(questionIndex, optionIndex);
    };

    return (
        <div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={handleAddOption}>
                Add Option
            </button>
            {options.map((option, optionIndex) => (
                <FormComponent
                    key={optionIndex}
                    option={option.text}
                    optionIndex={optionIndex}
                    isCorrect={option.isCorrect}
                    onOptionChange={handleOptionChange}
                    onDeleteOption={() => handleDeleteOption(optionIndex)}
                    onCorrectOptionChange={handleCorrectOptionChange}
                />
            ))}
        </div>
    );
};

export default OptionComponent;
