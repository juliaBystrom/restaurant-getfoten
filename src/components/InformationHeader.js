import { getInformation } from "../utils/api_helpers";
import React from "react";

/*
The user can choose to display a information banner at the top of the website.

*/
export function InformationHeader() {
  const [information, setInformation] = React.useState({
    show_info: false,
      info_text: "",
    
  });

  React.useEffect(() => {
    getInformation(setInformation);
  }, []);

  return information.show_info ? (
    <div className="information-header">
      <p className="information-header-text">{information.info_text}</p>
    </div>
  ) : (
    <></>
  );
}
