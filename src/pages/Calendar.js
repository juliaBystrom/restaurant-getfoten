import ReactMarkdown from 'react-markdown';
import React from "react";
import { fetchCalendarRichText } from "../utils/api_helpers";

export function Calendar() {
    const [pageTitle, setPageTitle] = React.useState(null);
    const [calendarText, setCalendarText] = React.useState(null);

    React.useEffect(() => {
        fetchCalendarRichText((data) => {
            if (data?.text) {
                setCalendarText(data?.text)
            }

            if (data?.title) {
                setPageTitle(data?.title)
            }
        });
    }, []);

    return (
        <main className="container">
            <section className="section text-section">
                {pageTitle && <h1 className="subheader-h1">{pageTitle}</h1>}
                <ReactMarkdown>{calendarText}</ReactMarkdown>
            </section>
        </main>);

}