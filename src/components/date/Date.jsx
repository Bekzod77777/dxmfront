import React, { useState } from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import dayjs from "dayjs";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const DateComponent = () => {
  const [openSections, setOpenSections] = useState({
    mainAccordion: false, // For the main accordion
    openedRegionId: null, // Track currently opened region
  });

  // Toggle the main accordion
  const toggleMainAccordion = () => {
    setOpenSections((prev) => ({
      ...prev,
      mainAccordion: !prev.mainAccordion,
    }));
  };
  return (
    <>
      <li
        data-v-2c99ec5e=""
        className="v-expansion-panel__container process-step-header v-expansion-panel__container--active"
        start-page="booking"
        id="step3"
        webid="dateTimeSelectionStep"
        tabIndex="0"
        aria-expanded="true"
      >
        <div
          className="v-expansion-panel__header"
          onClick={toggleMainAccordion}
        >
          <div data-v-2c99ec5e="">
            <div data-v-2c99ec5e="" className="flex">
              <div className="process-number">3</div>
              <div className="process-step-name">Sana va vaqtni tanlang</div>
            </div>
          </div>
          <div className="v-expansion-panel__header__icon">
            <i className="v-icon material-icons theme--light">
              {openSections.mainAccordion ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </i>
          </div>
        </div>
        <div
          className="v-expansion-panel__body"
          style={{ display: openSections.mainAccordion ? "block" : "none" }}
        >
          <div data-v-2c99ec5e="" className="v-card v-sheet theme--light">
            <div
              data-v-2c99ec5e=""
              tabIndex="0"
              className="v-card__text info-text"
            >
              Iltimos sana va vaqtni tanlang
            </div>
          </div>

          <div data-v-2c99ec5e="" className="time-selection-wrapper">
            <div className="v-picker v-card v-picker--date date-picker time-selection-step v-picker--full-width theme--light">
              <div className="v-picker__body theme--light">
                <div>
                  <div className="v-date-picker-header theme--light">
                    {/* <button
                      type="button"
                      className="v-btn v-btn--icon theme--light"
                    >
                      <div class="v-btn__content">
                        <i
                          aria-hidden="true"
                          className="v-icon material-icons theme--light"
                        >
                          <ChevronLeftIcon />
                        </i>
                      </div>
                    </button>
                    <div className="v-date-picker-header__value">
                      <div>
                        <button type="button">сентябр 2024</button>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="v-btn v-btn--icon theme--light"
                    >
                      <div class="v-btn__content">
                        <i
                          aria-hidden="true"
                          className="v-icon material-icons theme--light"
                        >
                          <ChevronRightIcon />
                        </i>
                      </div>
                    </button> */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]}>
                        <DemoItem>
                          <DatePicker defaultValue={dayjs("2024-09-10")} />
                        </DemoItem>
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                  <div className="v-date-picker-table v-date-picker-table--date theme--light">
                    <table></table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default DateComponent;
