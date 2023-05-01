import { getInformation } from "../utils/api_helpers";
import React from "react";
import {COLOURS, CONTRAST_TEXT_COLOUR} from "../utils/const";

/*
The user can choose to display a information banner at the top of the website.

*/
export function InformationHeader() {
  const [information, setInformation] = React.useState({
    showInfo: false,
    infoText: "",
    colour: "GREEN",
  });

  React.useEffect(() => {
    getInformation((attributes) => {
      const res = {
        showInfo: attributes?.show_info,
        infoText: attributes?.info_text,
        colour: attributes?.colour || "BLUE",
      };
      setInformation(res);
    });
  }, []);
    
  return information.showInfo ? (
    <div
      id="info-header"
      className="information-header"
      style={{ "backgroundColor":  COLOURS[information.colour] }}
    >
      <p style={{ "color":  CONTRAST_TEXT_COLOUR[information.colour] }} className="information-header-text">{information.infoText}</p>
    </div>
  ) : (
    <></>
  );
}
