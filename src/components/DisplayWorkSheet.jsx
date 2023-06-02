import React, { useEffect, useState } from 'react';
import {
    getTasks,

} from "./TaskServices";
const TestPage = () => {
    const [worksheet, setWorksheet] = useState(null);
    async function getdata() {
        const data = await getTasks();
        const alldata = data.data.map(i => JSON.parse(i.questions))
        setWorksheet(alldata);

    }

    useEffect(() => {
        try {
            getdata();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className='p-4'>
            <h1>Display Questions</h1>
            {worksheet ? (
                worksheet.map((item, index) => (
                    <div key={index}>

                        <ul>
                            {item.map((option, optionIndex) => (
                                <div>

                                    <h1 key={optionIndex}>Question:{option.question}</h1>
                                    <ul>
                                        {option.options.map((options, optionIndex1) => (
                                            <li key={optionIndex1}>{options.text}   {options.isCorrect ?
                                                <input
                                                    type="checkbox"
                                                    checked={options.isCorrect}
                                                    disabled
                                                    className="ml-3"
                                                />
                                                : ""
                                            }</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </ul>
                    </div>
                ))



            ) : (
                <p>Loading worksheet...</p>
            )}
        </div>
    );
};

export default TestPage;
