import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import api from "../../const/api";

const Region = () => {
  const [openSections, setOpenSections] = useState({
    mainAccordion: false, // For the main accordion
    openedRegionId: null, // Track currently opened region
  });
  const [data, setData] = useState([]); // Store regions
  const [branchList, setBranchList] = useState({}); // Store branches per region

  // Toggle the main accordion
  const toggleMainAccordion = () => {
    setOpenSections((prev) => ({
      ...prev,
      mainAccordion: !prev.mainAccordion,
    }));
  };

  // Handle toggling of region accordion
  const handleToggleRegion = async (regionId) => {
    const isRegionAlreadyOpen = openSections.openedRegionId === regionId;

    setOpenSections((prev) => ({
      ...prev,
      openedRegionId: isRegionAlreadyOpen ? null : regionId, // Open/close region accordion
    }));

    // Fetch branches if region is being opened and data not already loaded
    if (!isRegionAlreadyOpen && !branchList[regionId]) {
      try {
        const res = await api.get(`application/queue/branches/${regionId}`);
        setBranchList((prevBranchList) => ({
          ...prevBranchList,
          [regionId]: res.data.data, // Store branches for this region
        }));
      } catch (error) {
        console.error("Error fetching branch data", error);
      }
    }
  };

  // Fetch region data on component mount
  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const res = await api.get("application/queue/branches/regions");
        setData(res.data.data);
      } catch (error) {
        console.error("Error fetching regions", error);
      }
    };

    fetchRegions();
  }, []);

  return (
    <>
      <li
        tabIndex={0}
        className="v-expansion-panel__container process-step-header v-expansion-panel__container--active"
        id="step1"
        aria-expanded={openSections.mainAccordion}
      >
        <div
          className="v-expansion-panel__header"
          onClick={toggleMainAccordion}
        >
          <div>
            <div className="flex">
              <div className="process-number">1</div>
              <div className="process-step-name">Filialni tanlang</div>
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
              Ro'yxatda ko'rsatilmagan filiallarda qabulga oldindan yozilib
              bo'lmaydi
            </div>
            <div>
              <ul className="v-expansion-panel services-wrapper theme--light">
                {data.map((region) => (
                  <li
                    key={region.id}
                    className="v-expansion-panel__container service-expansion-panel region-expansion-panel"
                  >
                    <div
                      className="v-expansion-panel__header"
                      onClick={() => handleToggleRegion(region.id)}
                    >
                      <div className="flex">{region.name}</div>
                      <div className="v-expansion-panel__header__icon">
                        <i className="v-icon material-icons theme--light">
                          {openSections.openedRegionId === region.id ? (
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
                          openSections.openedRegionId === region.id
                            ? "block"
                            : "none",
                      }}
                    >
                      <div className="v-card v-sheet theme--light">
                        <div className="v-card__text branch-list">
                          {branchList[region.id] ? (
                            <div className="radio-group v-input--selection-controls v-input--radio-group v-input--radio-group--column v-input--hide-details theme--light">
                              <div className="v-input__control">
                                <div className="v-input__slot">
                                  <div
                                    className="v-input--radio-group__input"
                                    role="radiogroup"
                                  >
                                    {branchList[region.id].map((branch) => {
                                      const twoWordsAddress = branch.address
                                        .split(" ")
                                        .slice(0, 2)
                                        .join(" ");
                                      return (
                                        <div
                                          className="v-input"
                                          key={branch.id}
                                        >
                                          <div className="v-radio service-name branch theme--light">
                                            <div className="v-input--selection-controls__input">
                                              <input
                                                aria-checked="false"
                                                role="radio"
                                                type="radio"
                                                name={`branch-radio-${branch.id}`}
                                                aria-labelledby={`branchLabel-${branch.id}`}
                                              />
                                              <i
                                                aria-hidden="true"
                                                className="v-icon material-icons theme--light"
                                              ></i>
                                            </div>
                                            <label
                                              aria-hidden="true"
                                              className="v-label theme--light"
                                              style={{
                                                left: "0px",
                                                right: "auto",
                                                position: "relative",
                                              }}
                                            >
                                              <div
                                                id={`branchLabel-${branch.id}`}
                                                webid={`branchId-${branch.id}`}
                                              >
                                                {`${twoWordsAddress} ${region.name}`}
                                              </div>
                                            </label>
                                          </div>
                                          <small className="branch-address">
                                            {branch.address}
                                          </small>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            "Loading..."
                          )}
                        </div>
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

export default Region;
