import React from "react";
import { fetchRichText } from "../utils/api_helpers";

export function Calendar() {
    const [pageTitle, setPageTitle] = React.useState(null);

    React.useEffect(() => {
        fetchRichText((data) => {
            if (data?.title) {
                setPageTitle(data?.title)
            }
        }, "/api/calender");
    }, []);

    return (
        <main className="container">
            <section className="section text-section">
                {pageTitle && <h1 className="subheader-h1">{pageTitle}</h1>}
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%233F51B5&ctz=Europe%2FStockholm&src=c2pva3JvZ2dldGZvdGVuQGdtYWlsLmNvbQ&src=c3Yuc3dlZGlzaCNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%230B8043"
                    title="Kalender"
                    style={{ border: 0, width: "100%", maxWidth: "800px", height: "600px" }}
                    allowFullScreen="">
                </iframe>
            </section>
        </main>);

}