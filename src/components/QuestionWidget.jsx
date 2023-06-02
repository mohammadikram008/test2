import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import OptionComponent from './OptionsComponent';
import PreviewComponent from './PreviewComponent';
import Snackbar from "./Snackbar";
import {
    addTask,

} from "./TaskServices";
const QuestionWidget = () => {
    const [questions, setQuestions] = useState([]),
        [message, setMessage] = useState({}),
        [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleAddQuestion = () => {
        setQuestions([...questions, { question: '', options: [] }]);
    };

    const handleQuestionChange = (index, e) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].question = e.target.value;
        setQuestions(updatedQuestions);
    };

    const handleDeleteQuestion = (index) => {
        const updatedQuestions = [...questions];
        updatedQuestions.splice(index, 1);
        setQuestions(updatedQuestions);
    };

    const handleAddOption = (questionIndex, option) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options.push({ text: option, isCorrect: false });
        setQuestions(updatedQuestions);
    };

    const handleDeleteOption = (questionIndex, optionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options.splice(optionIndex, 1);
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (questionIndex, optionIndex, e) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options[optionIndex].text = e.target.value;
        setQuestions(updatedQuestions);
    };

    const handleCorrectOptionChange = (questionIndex, optionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options.forEach((option, index) => {
            option.isCorrect = index === optionIndex;
        });
        setQuestions(updatedQuestions);
    };

    const saveWorksheet = async () => {
        const worksheet = JSON.stringify(questions);
        console.log("worksheet", worksheet)
        const { data } = await addTask({
            questions: worksheet,

        });
        if (data) {
            setOpen(true);
            setMessage({ text: "Save Data successfully ", type: "success" });
            console.log("data", data)
        } else {
            setOpen(true);
            setMessage({ text: "Error", type: "danger" });
        }

    };
    const handleChangeWorkSheet = () => {
        navigate("/displayworksheet");
    }
    return (
        <div className=" bg-white">
            <h1 className="text-2xl font-bold mb-4">Questionnaire</h1>
            <div className='md:flex lg:flex'>
                <div className="  md:w-1/2 lg:w-1/2 md:p-4 lg:p-4 rounded overflow-hidden shadow-xl">
                    <div className='md:flex lg:flex justify-center items-center'>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal  py-1 px-2 rounded mb-2" onClick={handleAddQuestion}>
                            Add Question
                        </button>
                        <button className="bg-blue-500 mx-4  hover:bg-blue-700 text-white  py-1 px-2 rounded mb-2" onClick={saveWorksheet}>Save  worksheet</button>
                        <button className="bg-blue-500 mx-4  hover:bg-blue-700 text-white  py-1 px-2 rounded mb-2" onClick={handleChangeWorkSheet}>Display worksheet</button>
                    </div>
                    {questions.map((question, questionIndex) => (
                        <div key={questionIndex} className="mb-4">
                            <textarea
                                className="w-full border border-gray-300 p-2 rounded"
                                value={question.question}
                                onChange={(e) => handleQuestionChange(questionIndex, e)}
                            />
                            <OptionComponent
                                questionIndex={questionIndex}
                                options={question.options}
                                onAddOption={handleAddOption}
                                onDeleteOption={handleDeleteOption}
                                onOptionChange={handleOptionChange}
                                onCorrectOptionChange={handleCorrectOptionChange}
                            />
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => handleDeleteQuestion(questionIndex)}
                            >
                                Delete Question
                            </button>
                        </div>
                    ))}
                </div>
                <div className="md:w-1/2 lg:w-1/2 md:p-4 lg:p-4 rounded overflow-hidden shadow-xl">
                    <PreviewComponent questions={questions} />
                </div>
            </div>
            <Snackbar open={open} message={message} setOpen={setOpen} />
        </div>
    );
};

export default QuestionWidget;


