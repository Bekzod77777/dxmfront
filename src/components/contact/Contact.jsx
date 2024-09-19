import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./Contact.css";

const Contact = () => {
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
              <div className="process-number">4</div>
              <div className="process-step-name">Aloqa ma'lumotlari</div>
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
          <div data-v-2a46540a="" className="v-card v-sheet theme--light">
            <div className="v-card__text info-text relative">
              <div data-v-2a46540a="" tabIndex="0">
                <div className="info-text-strong">
                  Tanlangan xizmat va davlat xizmatlari markazi filiali:
                </div>
                <div data-v-2a46540a="">
                  <div>
                    <div>
                      UJKX. Quvvati 20kVt dan yuqori bo'lgan elektr energiyasi
                      iste'molchilarining elektr qurilmalarini ishga tushirish
                      uchun ruhsatnoma berish
                    </div>
                  </div>
                  <div>
                    Farg'ona viloyati, Qo'shtepa tumani, Қўштепа тумани, Шодлик
                    кўчаси , Фарғона вилояти
                  </div>
                  <div>10 сентябр 2024 17:20</div>
                </div>
              </div>
              <button
                type="button"
                className="full-wide-mobile reset-btn v-btn v-btn--icon theme--light error"
                aria-label="Ma'lumotlarni qayta tiklash."
              >
                <div>Uchrashuvni o'chirish</div>
              </button>
            </div>
            <form action="" noValidate className="v-form">
              <div tabIndex="0" className="info-text">
                Biz sizga tasdiqlovchi habar yuboramiz. Iltimos mobil aloqa
                raqamingizni (kiritilishi majburiy) va elektron manzilingizni
                (ixtiyoriy) kiriting
              </div>
              <div className="fields-wrapper">
                <div className="v-input input-field focused-border v-text-field v-text-field--enclosed v-text-field--outline v-input--has-state theme--light error--text">
                  <div className="v-input__control">
                    <div className="v-input__slot">
                      <div className="v-text-field__slot">
                        <label
                          htmlFor="LastName"
                          className="v-label theme--light error--text"
                        >
                          <div htmlFor="LastName">Familiya</div>
                        </label>
                        <input type="text" aria-required="true" id="LastName" />
                      </div>
                    </div>
                    <div className="v-text-field__details">
                      <div className="v-messages theme--light error--text">
                        <div className="v-messages__wrapper">
                          <div className="v-messages__message">
                            Talab qilinadi
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fields-wrapper">
                <div className="v-input input-field focused-border v-text-field v-text-field--enclosed v-text-field--outline v-input--has-state theme--light error--text">
                  <div className="v-input__control">
                    <div className="v-input__slot">
                      <div className="v-text-field__slot">
                        <label
                          htmlFor="FirstName"
                          className="v-label theme--light error--text"
                        >
                          <div htmlFor="FirstName">Ism</div>
                        </label>
                        <input
                          type="text"
                          aria-required="true"
                          id="FirstName"
                        />
                      </div>
                    </div>
                    <div className="v-text-field__details">
                      <div className="v-messages theme--light error--text">
                        <div className="v-messages__wrapper">
                          <div className="v-messages__message">
                            Talab qilinadi
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fields-wrapper">
                <div className="birth-picker-container">
                  <div className="layout birth-picker-layout align-start justify-start row">
                    <div className="v-input input-field focused-border v-text-field v-text-field--enclosed v-text-field--outline theme--light">
                      <div className="v-input__control">
                        <div className="v-input__slot">
                          <div className="v-text-field__slot">
                            <label
                              htmlFor="DOB"
                              className="v-label theme--light"
                            >
                              Tug'ilgan sanasi
                            </label>
                            <input
                              type="text"
                              id="DOB"
                              aria-label="Tug'ilgan sanasi, format:  YYYYMMDD"
                            />
                          </div>
                          <div className="v-input__append-inner">
                            <div className="v-input__icon v-input__icon">
                              <i
                                aria-hidden="true"
                                className="v-icon v-icon--link material-icons theme--light"
                              ></i>
                            </div>
                          </div>
                        </div>
                        <div className="v-text-field__details">
                          <div className="v-text-field__details">
                            <div className="v-messages__wrapper">
                              <div className="v-messages__message">
                                YYYYMMDD
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      tabIndex="-1"
                      id="dobPickerButton"
                      className="v-btn v-btn--icon theme--light"
                    >
                      <div className="v-btn__content">
                        <i
                          aria-hidden="true"
                          className="v-icon material-icons theme--light"
                        >
                          event
                        </i>
                      </div>
                    </button>
                    <div className="v-menu"></div>
                  </div>
                </div>
              </div>

              <div className="fields-wrapper">
                <div className="v-input input-field focused-border v-text-field v-text-field--enclosed v-text-field--outline v-input--has-state theme--light error--text">
                  <div className="v-input__control">
                    <div className="v-input__slot">
                      <div className="v-text-field__slot">
                        <label
                          htmlFor="Email"
                          className="v-label theme--light error--text"
                        >
                          <div htmlFor="Email">Elektron pochta</div>
                        </label>
                        <input type="text" aria-required="true" id="Email" />
                      </div>
                    </div>
                    <div className="v-text-field__details">
                      <div className="v-messages theme--light error--text">
                        <div className="v-messages__wrapper">
                          <div className="v-messages__message">
                            Talab qilinadi
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fields-wrapper">
                <div data-v-2a46540a>
                  <div className="flex">
                    <div className="v-input input-field countrycode-input focused-border v-text-field v-text-field--enclosed v-text-field--outline theme--light">
                      <div className="v-input__control">
                        <div className="v-input__slot">
                          <div className="v-text-field__slot">
                            <label
                              htmlFor="countryCode"
                              className="v-label theme--light"
                            >
                              <div htmlFor="countryCode">Davlat kodi</div>
                            </label>
                            <input
                              type="tel"
                              aria-label="Davlat kodi"
                              id="countryCode"
                            />
                          </div>
                        </div>
                        <div className="v-text-field__details">
                          <div className="v-messages theme--light">
                            <div className="v-messages__wrapper"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="v-input input-field phone-input focused-border v-text-field v-text-field--enclosed v-text-field--outline theme--light">
                      <div className="v-input__control">
                        <div className="v-input__slot">
                          <div className="v-text-field__slot">
                            <label
                              htmlFor="Phone"
                              className="v-label theme--light"
                            >
                              <div htmlFor="Phone">Mobil telefon raqami</div>
                            </label>
                            <input type="tel" id="Phone" />
                          </div>
                        </div>
                        <div className="v-text-field__details">
                          <div className="v-messages theme--light">
                            <div className="v-messages__wrapper"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="v-dialog__container" role="dialog"></div>
                </div>
              </div>

              <div className="notification-type">
                <small id="notification-group">
                  Meni quyidagicha xabardor qiling
                </small>
                <div className="v-input v-input--selection-controls v-input--radio-group v-input--radio-group--row v-input--has-state theme--light error--text">
                  <div className="v-input__control">
                    <div className="v-input__slot">
                      <div
                        role="radiogroup"
                        className="v-input--radio-group__input"
                      >
                        <div className="v-radio theme--light">
                          <div className="v-input--selection-controls__input">
                            <input
                              type="radio"
                              aria-checked="false"
                              role="radio"
                              name="v-radio-1953"
                              value="sms"
                              aria-labelledby="sms-notification"
                              mandatory=""
                            />
                            <i
                              aria-hidden="true"
                              className="v-icon material-icons theme--light error--text"
                            ></i>
                          </div>
                          <label
                            htmlFor=""
                            aria-hidden="true"
                            className="v-label theme--light error--text"
                          >
                            <div id="sms-notification">
                              Mobil telefon raqami
                            </div>
                          </label>
                        </div>
                        <div className="v-radio theme--light">
                          <div className="v-input--selection-controls__input">
                            <input
                              type="radio"
                              aria-checked="false"
                              role="radio"
                              name="v-radio-1953"
                              value="email"
                              aria-labelledby="email-notification"
                              mandatory=""
                            />
                            <i
                              aria-hidden="true"
                              className="v-icon material-icons theme--light error--text"
                            ></i>
                          </div>
                          <label
                            htmlFor=""
                            aria-hidden="true"
                            className="v-label theme--light error--text"
                          >
                            <div id="email-notification">Elektron pochta</div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="v-messages theme--light error--text">
                      <div className="v-messages__wrapper">
                        <div className="v-messages__message">
                          Siz variantlardan birini tanlashingiz shart
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="v-input info-text agreement v-input--selection-controls v-input--checkbox v-input--has-state theme--light error--text"
                aria-labelledby="agreement"
                required="required"
              >
                <div className="v-input__control">
                  <div className="v-input__slot">
                    <div className="v-input--selection-controls__input">
                      <input
                        aria-checked="false"
                        role="checkbox"
                        type="checkbox"
                        aria-labelledby="agreement"
                        required="required"
                      />
                      <i
                        aria-hidden="true"
                        className="v-icon material-icons theme--light error--text"
                      ></i>
                    </div>
                    <label
                      htmlFor=""
                      aria-hidden="true"
                      className="v-label theme--light error--text"
                    >
                      <div data-v-2a46540a>
                        <span data-v-2a46540a>
                          Men <a href="#"> Foydalanish shartlari</a> bilan
                          tanishdim
                        </span>
                        <span data-v-2a46540a></span>
                      </div>
                    </label>
                  </div>
                  <div className="v-messages theme--light error--text">
                    <div className="v-messages__wrapper">
                      <div className="v-messages__message">
                        Davom etishdan avval siz foydalanish shartlari va
                        xavfsizlik siyosati bilan tanishib chiqishingiz lozim.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="layout row justify-center">
                <div className="v-dialog__container modal-dialog"></div>
              </div>

              <button
                data-v-2a46540a
                type="button"
                className="submit v-btn v-btn--disabled v-btn--flat theme--light"
                id="contactStepCreateAppointmentButton"
                disabled="disabled"
              >
                <div className="v-btn__content">
                  <div data-v-2a46540a>Qabulga yozilish</div>
                </div>
              </button>

              <div data-v-2a46540a className="v-alert error" role="alert">
                <i
                  aria-hidden="true"
                  className="v-icon material-icons theme--light v-alert__icon"
                ></i>
                <div></div>
              </div>
            </form>
          </div>
        </div>
      </li>
    </>
  );
};

export default Contact;
