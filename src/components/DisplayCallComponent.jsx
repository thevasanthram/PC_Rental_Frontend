import React from "react";
import "./../css/DisplayCallComponent.css";

function DisplayCallComponent({ handleOkClick }) {
  return (
    <div id="display_call_popup_division">
      <div className="display_call_ModalContent">
        <div
          id="display_call_Holder"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div id="call_popup_title">Call us and book the laptop</div>
          <button onClick={handleOkClick} id="call_popup_ok_button">OK</button>
        </div>
      </div>
    </div>
  );
}

export default DisplayCallComponent;
