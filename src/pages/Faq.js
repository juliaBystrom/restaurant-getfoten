

import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { fetchFAQ } from "../utils/api_helpers";

export function FAQ() {

    const [questionAnswers, setQuestionAnswers] = useState([]);

    React.useEffect(() => {

        fetchFAQ((data) => {
            const qas = [];
            data.map((item) => {
                qas.push({ q: item?.attributes?.question, a: item?.attributes?.answer, id: item.id })
            })
            setQuestionAnswers(qas)
        });

    }, []);


    return (
        <main className="container">
            <section className="section text-section">
                <h1 className="subheader-h1">Svar på ofta förekommande frågor</h1>
                <div className="faq">
                    {questionAnswers.map((qa) => {
                        return (
                            <details key={qa.id} className="faq-details">
                                <summary>
                                    {qa.q}
                                </summary>
                                <div>
                                    <ReactMarkdown>{qa.a}</ReactMarkdown>
                                </div>
                            </details>
                        )
                    }
                    )}
                </div>
            </section>
        </main>);

}