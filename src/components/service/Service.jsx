import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import api from "../../const/api";

const Service = () => {
  const [data, setData] = useState([]);
  const [openSections, setOpenSections] = useState({
    mainAccordion: false, // For the main accordion
    openedServiceId: null, // Track currently opened service
  });
  const [serviceList, setServiceList] = useState({});
  const branchPublicId =
    "7fef533c54ad79e68b2860a8d8f5eb9ebff7c05536f5afa52a7e70eb931900a0"; // Replace with dynamic value if needed

  // Toggle the main accordion
  const toggleMainAccordion = () => {
    setOpenSections((prev) => ({
      ...prev,
      mainAccordion: !prev.mainAccordion,
    }));
  };

  const handleToggleService = async (serviceId) => {
    const isServiceAlreadyOpen = openSections.openedServiceId === serviceId;

    setOpenSections((prev) => ({
      ...prev,
      openedServiceId: isServiceAlreadyOpen ? null : serviceId,
    }));

    if (!isServiceAlreadyOpen && !serviceList[serviceId]) {
      try {
        const res = await api.get(
          `application/ticket/calendar/branches/${branchPublicId}/services`
        );
        setServiceList((prevServiceList) => ({
          ...prevServiceList,
          [serviceId]: res.data.data,
        }));
      } catch (error) {
        console.error(
          "Error fetching service data",
          error.response ? error.response.data : error.message
        );
        // Optionally, display an error message to the user here
      }
    }
  };

  // Fetch the service categories on component mount
  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const res = await api.get("application/queue/services/categories");
        setData(res.data.data);
      } catch (error) {
        console.error(
          "Error fetching services",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchServiceData();
  }, []);

  return (
    <>
      <li
        tabIndex={0}
        className="v-expansion-panel__container process-step-header v-expansion-panel__container--active"
        id="step2"
      >
        <div
          className="v-expansion-panel__header"
          onClick={toggleMainAccordion}
        >
          <div>
            <div className="flex">
              <div className="process-number">2</div>
              <div className="process-step-name">Xizmatni tanlang</div>
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
          <div className="v-card v-sheet theme--light">
            <div tabIndex={0} className="v-card__text info-text">
              Kerakli xizmatni tanlang
            </div>

            <div data-v-b3611fc6="">
              <ul className="v-expansion-panel services-wrapper theme--light">
                {data.map((service) => (
                  <li
                    key={service.id}
                    className="v-expansion-panel__container service-expansion-panel"
                  >
                    <div
                      className="v-expansion-panel__header"
                      onClick={() => handleToggleService(service.id)}
                    >
                      <div className="flex">{service.name.en}</div>
                      <div className="v-expansion-panel__header__icon">
                        <i className="v-icon material-icons theme--light">
                          {openSections.openedServiceId === service.id ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </i>
                      </div>
                    </div>

                    <div
                      className="v-expansion-panel__body"
                      style={{
                        display:
                          openSections.openedServiceId === service.id
                            ? "block"
                            : "none",
                      }}
                    >
                      <div data-v-b3611fc6="">
                        <ul
                          className="v-expansion-panel services-wrapper theme--light"
                          data-v-4e67b2d8=""
                          data-v-b3611fc6=""
                        >
                          <div className="radio-container" data-v-4e67b2d8="">
                            {serviceList[service.id] ? (
                              <div className="v-input_service radio-container d-flex v-input--selection-controls v-input--radio-group v-input--radio-group--column theme--light">
                                <div className="v-input__control">
                                  <div className="v-input__slot">
                                    <div
                                      className="v-input--radio-group__input"
                                      role="radiogroup"
                                    >
                                      {serviceList[service.id].map(
                                        (serviceItem) => (
                                          <li
                                            key={serviceItem.id}
                                            className="v-expansion-panel__container service-expansion-panel"
                                            data-v-4e67b2d8=""
                                            tabIndex="0"
                                          >
                                            <div className="v-expansion-panel__header">
                                              <div
                                                className="flex"
                                                data-v-4e67b2d8=""
                                              >
                                                <div className="v-radio service-name theme--light">
                                                  <div className="v-input--selection-controls__input">
                                                    <input
                                                      type="radio"
                                                      aria-checked="false"
                                                      role="radio"
                                                      name={`service-radio-${service.id}`}
                                                      value={serviceItem.id}
                                                      id={serviceItem.id}
                                                    />
                                                    <i
                                                      aria-hidden="true"
                                                      className="v-icon material-icons theme--light"
                                                    ></i>
                                                  </div>
                                                  <label data-v-4e67b2d8="">
                                                    {serviceItem.name}
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              "Loading..."
                            )}
                          </div>
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Service;
