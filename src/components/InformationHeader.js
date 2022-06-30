import { getInformation } from "../api/api_helpers";
import React from "react"


export function InformationHeader() {

    const [information, setInformation] = React.useState({show_info: false, info_text: ""});

    React.useEffect(() => {
        getInformation(setInformation);
    }, []);


    return information.show_info ? (
        <div className="information-header">
            <p className="information-header-text">
                {information.info_text}
            </p>
        </div>) : <></>;
}


