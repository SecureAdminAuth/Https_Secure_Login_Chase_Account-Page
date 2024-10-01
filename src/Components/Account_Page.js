import React from "react";
// import "./css/styles.css";
import "./css/mds-chase-icons.css";
import "./css/blue-ui.css";
import "./css/dashboard.css";
import "./css/MdsFoundation-cpo.css";
import "./css/MdsComponents-cpo.css";
import "./css/convoDeck.css";
import "./css/siteHeader.css";
import "./css/siteNavigation.css";
import "./css/accpage_style_1.css";
import "./css/accpage_style_2.css";
import "./css/accpage_style_3.css";
import "./css/accpage_style_4.css";
import "./css/accpage_style_5.css";
import "./css/accpage_style_6.css";
import "./css/accpage_style_7.css";
import "./css/accpage_style_8.css";
import cardImage from "./Resources/41473467007.png";
import cardImage2 from "./Resources/41473467006.png";
import alertImage from "./Resources/Alert-light-dark-blue.png";
import unitedFavicon from "./Resources/united-favicon.png";
import creditScoreAppImage from "./Resources/credit-score-app.jpg";
import referFriendIcon from "./Resources/refer-a-friend-icon.png";
import walletOffersImage from "./Resources/mds_ill_wallet_offers_linear.svg";
import mds_ill_card_linear from "./Resources/mds_ill_card_linear.svg";

const Account_Page = () => {
  return (
    <div>
      <div>
        <div />
      </div>
      <div id="logonDialog" />
      <div id="body" style={{ opacity: "1" }}>
        <div className="desktop-detected">
          <div id="dashboard-content" style={{ top: "0px" }}>
            <div className="util print-hide" id="mega-menu" />{" "}
            <div id="main" role="presentation">
              <div id="profile" /> <div id="collabhubMeetingPanel" />{" "}
              <div
                className="main-background siteheader__default-header"
                id="header-outer-container"
                role="presentation"
              >
                <div id="header-inner-fixed-container">
                  <header
                    className="util print-background-none"
                    id="header"
                    role="banner"
                  >
                    <div id="top-header-content" data-has-view="true">
                      <div
                        data-is-view="true"
                        data-component-name="ROOT/SITE/dashboard/siteHeader/globalHeader|globalHeader|CHASE_GLOBAL_HEADER|84fdd400-8c5d-4cfe-a3c5-f82cc32aea7f"
                      >
                        {" "}
                        <div id="messages-container">
                          <div
                            className="util print-hide"
                            id="site-message-container"
                            data-has-view="true"
                          >
                            <section
                              className="site-message"
                              aria-label="ada-site-alerts-heading"
                              data-is-view="true"
                              data-component-name="ROOT/SITE/dashboard/convoDeck/siteMessage|siteMsgComponent|CUSTOMER_SITE_MESSAGES|undefined"
                            />
                          </div>{" "}
                          <div id="emulationModeMsg" />
                        </div>{" "}
                        <div id="skiplink-container">
                          {" "}
                          <a
                            className="jpui skiplink"
                            id="skipToMainContent"
                            href="javascript:"
                            data-skipselector="#main-content"
                          >
                            <span className="label">Skip to main content</span>{" "}
                          </a>
                        </div>{" "}
                        <mds-brand-bar
                          className="mds-d-print-none mds-brand-bar--cpo"
                          id="globalBrandBar"
                          logo="https://static.chasecdn.com/content/dam/unified-assets/logo/chase/chase-octagon/additional-file-formats/logo_chase_octagon_wht.svg"
                          logo-mobile="https://static.chasecdn.com/content/dam/unified-assets/logo/chase/chase-octagon/additional-file-formats/logo_chase_octagon_wht.svg"
                          logo-destination="javascript:void(0);"
                          logo-accessible-text="Chase logo"
                          max-width="1440px"
                          variant="default"
                          profile-and-settings-button="true"
                          profile-and-settings-button-inactive="false"
                          profile-and-settings-button-accessible-text="Profile &amp; settings"
                          search-box-slot="true"
                          search-enabled="true"
                          search-button-inactive="false"
                          search-button-accessible-text="Search"
                          menu-button="true"
                          accessible-hamburger-menu-button-name="Main menu"
                          accessible-hamburger-menu-name="Main menu"
                          container-accessible-role-flag="false"
                          security-button="false"
                          conversation-deck-button="true"
                          conversation-deck-button-accessible-text="Messages"
                          conversation-deck-button-inactive="false"
                          sign-in-out-button-text="Sign out"
                          container-accessible-role="banner"
                          menu-button-inactive="false"
                          security-button-inactive="false"
                          open-account-button-inactive="false"
                          opaque="true"
                          expanded="false"
                          opacity="full"
                          open-account-button-text
                          profile-and-settings-data='{"customMenu":[{"id":"requestMyProfileAndSettings","value":"requestMyProfileAndSettings","label":"Profile & settings","collapsible":false,"inactive":false},{"id":"requestChangeInLanguagePreference","value":"es-us","label":"Español","collapsible":false,"inactive":false}]}'
                          conversation-deck-number={2}
                        >
                          <div slot="conversation-deck-slot">
                            <div
                              className="siteheader-slot-item"
                              data-slot-id="convo-deck"
                            >
                              <h2
                                className="mds-accessible-text"
                                tabIndex={-1}
                                id="convodeck-messages-list"
                              >
                                message list
                              </h2>{" "}
                              <div
                                className="conversation-deck-message-container"
                                id="convo-deck-messages-container"
                              >
                                <div
                                  className="conversation-deck-message-group"
                                  id="convo-deck-messages"
                                  data-has-view="true"
                                >
                                  <ul
                                    className="cdeck-msgs"
                                    data-is-view="true"
                                    data-component-name="ROOT/SITE/dashboard/convoDeck/conversationDeckMessages|messageListComponent|CUSTOMER_CONVERSATION_MESSAGES|undefined"
                                  >
                                    <li
                                      className="cdeck-msg"
                                      id="conversation-deck-message-ad-0"
                                      data-message-id="ad-0"
                                    >
                                      <div className="cdeck-msg--main">
                                        <button
                                          className="cdeck-msg--main-btn mds-body-medium"
                                          id="message-text-ad-0"
                                          aria-expanded="false"
                                        >
                                          {" "}
                                          <span className="cdeck-msg--main-text">
                                            <strong>Offer:</strong> A financial
                                            plan can help you reach new heights.
                                            Let J.P. Morgan Personal Advisors
                                            show you how, today.
                                          </span>{" "}
                                          <span className="cdeck-msg--main-icon">
                                            <svg
                                              className="cdeck-msg--main-icon-svg"
                                              aria-hidden="true"
                                              xmlns="http://www.w3.org/2000/svg"
                                              width={48}
                                              height={48}
                                              viewBox="0 0 48 48"
                                            >
                                              <path
                                                className="cdeck-msg--main-icon-path"
                                                d="M15.835 43.949a2.974 2.974 0 01-2.001-5.175l16.244-14.77L13.834 9.238a2.974 2.974 0 114-4.4L36.5 21.806a2.974 2.974 0 010 4.402L17.835 43.177a2.967 2.967 0 01-2 .772z"
                                              />
                                            </svg>
                                          </span>
                                        </button>{" "}
                                      </div>{" "}
                                      <div
                                        className="cdeck-msg--actions"
                                        aria-hidden="true"
                                      >
                                        <mds-button
                                          accessible-text
                                          id="primary-action-ad-0"
                                          inverse="true"
                                          small="true"
                                          text="Get started"
                                          variant="secondary"
                                          width-type="content"
                                          disable-live-region="false"
                                          inactive="false"
                                          tab-focusable="true"
                                          type="button"
                                          is-loading="false"
                                          className="mds-button--cpo"
                                        />{" "}
                                        <a
                                          className="cdeck-msg--close"
                                          href="javascript:"
                                          id="close-dropdown-options-ad-0"
                                          aria-label=": Dismiss this message"
                                        >
                                          <mds-icon
                                            className="cdeck-msg--close-icon mds-icon--cpo horizontal-margin"
                                            type="ico_close_circle"
                                            id="close-message-ad-0"
                                            color="inverse"
                                            size={24}
                                            aria-hidden="true"
                                            remove-horizontal-margin="false"
                                          />
                                        </a>
                                      </div>
                                    </li>
                                    <li
                                      className="cdeck-msg"
                                      id="conversation-deck-message-ad-2"
                                      data-message-id="ad-2"
                                    >
                                      <div className="cdeck-msg--main">
                                        <button
                                          className="cdeck-msg--main-btn mds-body-medium"
                                          id="message-text-ad-2"
                                          aria-expanded="false"
                                        >
                                          {" "}
                                          <span className="cdeck-msg--main-text">
                                            <strong>Offer:</strong> This is your
                                            invitation to get up to $700 when
                                            you open a J.P. Morgan Self-Directed
                                            Investing account — a trading
                                            experience that puts you in control.
                                          </span>{" "}
                                          <span className="cdeck-msg--main-icon">
                                            <svg
                                              className="cdeck-msg--main-icon-svg"
                                              aria-hidden="true"
                                              xmlns="http://www.w3.org/2000/svg"
                                              width={48}
                                              height={48}
                                              viewBox="0 0 48 48"
                                            >
                                              <path
                                                className="cdeck-msg--main-icon-path"
                                                d="M15.835 43.949a2.974 2.974 0 01-2.001-5.175l16.244-14.77L13.834 9.238a2.974 2.974 0 114-4.4L36.5 21.806a2.974 2.974 0 010 4.402L17.835 43.177a2.967 2.967 0 01-2 .772z"
                                              />
                                            </svg>
                                          </span>
                                        </button>{" "}
                                      </div>{" "}
                                      <div
                                        className="cdeck-msg--actions"
                                        aria-hidden="true"
                                      >
                                        <mds-button
                                          accessible-text
                                          id="primary-action-ad-2"
                                          inverse="true"
                                          small="true"
                                          text="Continue"
                                          variant="secondary"
                                          width-type="content"
                                          disable-live-region="false"
                                          inactive="false"
                                          tab-focusable="true"
                                          type="button"
                                          is-loading="false"
                                          className="mds-button--cpo"
                                        />{" "}
                                        <a
                                          className="cdeck-msg--close"
                                          href="javascript:"
                                          id="close-dropdown-options-ad-2"
                                          aria-label=": Dismiss this message"
                                        >
                                          <mds-icon
                                            className="cdeck-msg--close-icon mds-icon--cpo horizontal-margin"
                                            type="ico_close_circle"
                                            id="close-message-ad-2"
                                            color="inverse"
                                            size={24}
                                            aria-hidden="true"
                                            remove-horizontal-margin="false"
                                          />
                                        </a>
                                      </div>
                                    </li>
                                  </ul>
                                </div>{" "}
                                <div id="convo-deck-message-footer" />
                              </div>
                            </div>{" "}
                            <div
                              className="siteheader-slot-item mds-d-print-none"
                              id="open-account-menu"
                              data-slot-id="open-account"
                              data-has-view="true"
                            >
                              <nav
                                className="open-acct-menu mds-d-none mds-d-at-1200-block"
                                aria-label="Open an account"
                                data-is-view="true"
                                data-component-name="ROOT/SITE/dashboard/siteHeader/productMenu|productMenu|EXPLORE_CHASE_PRODUCTS|f3916399-bde5-4e64-9a42-90919fad1bd2"
                              >
                                <ul className="open-acct-menu__list">
                                  <li className="open-acct-menu__item">
                                    <a
                                      className="open-acct-menu__link"
                                      id="YourOffers"
                                      href="javascript:"
                                    >
                                      <img
                                        className="open-acct-menu__image"
                                        src={walletOffersImage}
                                        alt
                                      />{" "}
                                      <span className="open-acct-menu__item-text">
                                        Just for you{" "}
                                      </span>
                                    </a>
                                  </li>
                                  <li className="open-acct-menu__item">
                                    <a
                                      className="open-acct-menu__link"
                                      id="CreditCardProductInformation"
                                      href="javascript:"
                                    >
                                      <img
                                        className="open-acct-menu__image"
                                        src={mds_ill_card_linear}
                                        alt=""
                                      />{" "}
                                      <span className="open-acct-menu__item-text">
                                        Credit cards{" "}
                                      </span>
                                    </a>
                                  </li>
                                  <li className="open-acct-menu__item">
                                    <a
                                      className="open-acct-menu__link"
                                      id="CheckingProductInformation"
                                      href="javascript:"
                                    >
                                      <img
                                        className="open-acct-menu__image"
                                        src="./Resources/mds_ill_check_linear.svg"
                                        alt
                                      />{" "}
                                      <span className="open-acct-menu__item-text">
                                        Checking accounts{" "}
                                      </span>
                                    </a>
                                  </li>
                                  <li className="open-acct-menu__item">
                                    <a
                                      className="open-acct-menu__link"
                                      id="SavingsAndCertificateOfDepositProductInformation"
                                      href="javascript:"
                                    >
                                      <img
                                        className="open-acct-menu__image"
                                        src="./Resources/mds_ill_piggy_bank_linear.svg"
                                        alt
                                      />{" "}
                                      <span className="open-acct-menu__item-text">
                                        Savings accounts &amp; CDs{" "}
                                      </span>
                                    </a>
                                  </li>
                                  <li className="open-acct-menu__item">
                                    <a
                                      className="open-acct-menu__link"
                                      id="AutoFinancingProductInformation"
                                      href="javascript:"
                                    >
                                      <img
                                        className="open-acct-menu__image"
                                        src="./Resources/mds_ill_car_linear.svg"
                                        alt
                                      />{" "}
                                      <span className="open-acct-menu__item-text">
                                        Auto financing{" "}
                                      </span>
                                    </a>
                                  </li>
                                  <li className="open-acct-menu__item">
                                    <a
                                      className="open-acct-menu__link"
                                      id="MortgageProductInformation"
                                      href="javascript:"
                                    >
                                      <img
                                        className="open-acct-menu__image"
                                        src="./Resources/mds_ill_home_linear.svg"
                                        alt
                                      />{" "}
                                      <span className="open-acct-menu__item-text">
                                        Mortgage{" "}
                                      </span>
                                    </a>
                                  </li>
                                  <li className="open-acct-menu__item">
                                    <a
                                      className="open-acct-menu__link"
                                      id="InvestmentProductInformation"
                                      href="javascript:"
                                    >
                                      <img
                                        className="open-acct-menu__image"
                                        src="./Resources/mds_ill_chart_line_linear.svg"
                                        alt
                                      />{" "}
                                      <span className="open-acct-menu__item-text">
                                        Investing{" "}
                                      </span>
                                    </a>
                                  </li>
                                  <li className="open-acct-menu__item">
                                    <a
                                      className="open-acct-menu__link"
                                      id="BusinessBankingProductInformation"
                                      href="javascript:"
                                    >
                                      <img
                                        className="open-acct-menu__image"
                                        src="./Resources/mds_ill_briefcase_linear.svg"
                                        alt
                                      />{" "}
                                      <span className="open-acct-menu__item-text">
                                        Chase for Business{" "}
                                      </span>
                                    </a>
                                  </li>
                                  <li className="open-acct-menu__item">
                                    <a
                                      className="open-acct-menu__link"
                                      id="CommercialBankingProductInformation"
                                      href="javascript:"
                                    >
                                      <img
                                        className="open-acct-menu__image"
                                        src="./Resources/mds_ill_building_linear.svg"
                                        alt
                                      />{" "}
                                      <span className="open-acct-menu__item-text">
                                        Commercial banking{" "}
                                      </span>
                                    </a>
                                  </li>
                                  <li className="open-acct-menu__item">
                                    <a
                                      className="open-acct-menu__link"
                                      id="AllProducts"
                                      href="javascript:"
                                    >
                                      <img
                                        className="open-acct-menu__image"
                                        src="./Resources/mds_ill_more_linear.svg"
                                        alt
                                      />{" "}
                                      <span className="open-acct-menu__item-text">
                                        See all{" "}
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>{" "}
                            <div
                              className="siteheader-slot-item loading mds-d-print-none"
                              id="search-results-drawer"
                              data-slot-id="search-results"
                            >
                              <div
                                className="loading mds-d-print-none"
                                id="primary-search-result"
                              >
                                <div
                                  className="conversation-deck-search-results"
                                  id="conversation-deck-search-results"
                                />
                              </div>
                            </div>
                          </div>{" "}
                          <div slot="search-box-slot">
                            <div
                              className="search-info-area"
                              id="primary-search-container"
                            >
                              <span id="primary-search" data-has-view="true">
                                <span
                                  className="brand-bar-primary-search"
                                  id="conversation-deck-search"
                                  role="search"
                                  data-is-view="true"
                                  data-component-name="ROOT/SITE/dashboard/convoDeck/conversationDeckPrimarySearch|primarySearchComponent|PRIMARY_SEARCH_QUERY|undefined"
                                >
                                  {" "}
                                  <span
                                    className="menu-icon"
                                    id="search-icon"
                                    aria-hidden="false"
                                  >
                                    <span id="primary-search-icon-iconanchor-wrapper">
                                      <a
                                        className="jpui iconaction primary-search-icon hasMinitooltip"
                                        href="javascript:"
                                        id="primary-search-icon"
                                      >
                                        <span
                                          className="jpui minitooltip rightAlign"
                                          id="primary-search-icon-minitooltip"
                                        >
                                          {" "}
                                          <span aria-hidden="true">Search</span>
                                        </span>{" "}
                                        <span
                                          className="util accessible-text"
                                          id="accessible-primary-search-icon"
                                        >
                                          Search: Need anything? Just ask.
                                        </span>{" "}
                                        <i
                                          className="jpui search icon"
                                          id="icon-primary-search-icon"
                                          aria-hidden="true"
                                        />
                                      </a>
                                    </span>
                                  </span>{" "}
                                  <div
                                    className="conversation-deck-primary-search dis-none"
                                    aria-hidden="true"
                                    id="primary-search-input-container"
                                  >
                                    <label htmlFor="primary-search-input">
                                      <span className="util accessible-text">
                                        Search, updates suggestions below as you
                                        type{" "}
                                      </span>
                                    </label>{" "}
                                    <span
                                      className="util accessible-text"
                                      id="ada-placeholder-text"
                                    >
                                      Type your question, then press "enter" to
                                      search{" "}
                                    </span>{" "}
                                    <input
                                      type="text"
                                      className="conversation-deck-search-box"
                                      aria-describedby="ada-placeholder-text"
                                      aria-autocomplete="list"
                                      aria-controls="primary-search-suggestions-container"
                                      id="primary-search-input"
                                      placeholder="Need anything? Just ask."
                                      defaultValue
                                    />{" "}
                                    <i
                                      className="jpui search icon"
                                      aria-hidden="true"
                                    />{" "}
                                    <a
                                      className="primary-search-icon-wrapper dis-none"
                                      href="#"
                                      id="primary-search-clear-text"
                                      style={{
                                        "touch-action": "manipulation",
                                        "-webkit-user-select": "none",
                                        "-moz-user-select": "none",
                                        "-ms-user-select": "none",
                                        "user-select": "none",
                                        "-webkit-user-drag": "none",
                                        "-webkit-tap-highlight-color":
                                          "rgba(0, 0, 0, 0)",
                                      }}
                                    >
                                      <span
                                        className="jpui iconwrap primary-search-cd-icon"
                                        id="conversation-deck-search-x"
                                        tabIndex={-1}
                                      >
                                        {" "}
                                        <span
                                          className="util accessible-text"
                                          id="accessible-conversation-deck-search-x"
                                          data-attr="PRIMARY_SEARCH_QUERY.clearSearchForAda"
                                        >
                                          Clear Search
                                        </span>{" "}
                                        <i
                                          className="jpui searchx circle icon"
                                          id="icon-conversation-deck-search-x"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    </a>
                                  </div>{" "}
                                  <section
                                    role="region"
                                    aria-labelledby="ada-search-suggestions"
                                  >
                                    <div
                                      className="search-suggestions dis-none"
                                      aria-hidden="true"
                                      id="primary-search-suggestions-container"
                                    >
                                      <h3
                                        className="util accessible-text"
                                        id="ada-search-suggestions"
                                      >
                                        Press "Tab" or swipe to read the list of
                                        suggestions.
                                      </h3>{" "}
                                      <span className="separator results-separator" />{" "}
                                      <div
                                        className="search-suggestions-advisory dis-none"
                                        id="primary-search-advisory"
                                      />{" "}
                                      <div
                                        className="default-search-options"
                                        id="primary-search-default-options"
                                      />{" "}
                                      <div id="primary-search-options-list" />{" "}
                                      <span className="util accessible-text">
                                        End of search suggestions
                                      </span>
                                    </div>
                                  </section>
                                </span>
                              </span>
                            </div>
                          </div>
                        </mds-brand-bar>{" "}
                        <div className="siteheader--print">
                          <img
                            className="siteheader__logo--print"
                            src="./Resources/logo_chase_blk.svg"
                            alt="Chase logo"
                          />{" "}
                          <p className="siteheader__print-tagline mds-body-small">
                            Printed from Chase Personal Online
                          </p>
                        </div>{" "}
                        <mds-dialog
                          id="siteHeaderSearchDialog"
                          content-horizontal-padding={0}
                          header-text="Search"
                          primary-button-text="Close"
                          height-type="absolute"
                          button-orientation="vertical"
                          heading-level={2}
                          close-on-overlay-click="false"
                          hide-header="false"
                          open="false"
                          className="mds-dialog--cpo"
                        >
                          <div slot="dialogContent" id="mdsSearchDialog" />
                        </mds-dialog>
                      </div>
                    </div>{" "}
                    <div id="main-menu" data-has-view="true">
                      <section
                        className="global-navigation-uplift-container mds-d-print-none regular-menu white-background-model"
                        data-is-view="true"
                        data-component-name="ROOT/SITE/dashboard/siteNavigation/globalNavigation|globalNavigation|CHASE_ONLINE_MENU|c888e602-f3ed-4790-ad01-adb043bbbb41"
                      >
                        <div className="global-nav-position-container">
                          <div id="primary-navigation--skiplink-container">
                            {" "}
                            <a
                              className="jpui skiplink"
                              id="skipToSecondaryMenu"
                              href="javascript:"
                              data-skipselector="#bottom-navigation-wrapper"
                            >
                              <span className="label">
                                Skip to the bottom of the menu.
                              </span>{" "}
                            </a>
                          </div>{" "}
                          <mds-navigation-bar
                            className="mds-d-none mds-d-at-768-block mds-navigation-bar--cpo"
                            id="globalNavBar"
                            variant="primary"
                            accessible-text="Page menu"
                            active-index={0}
                            background-color="primary"
                            max-width={1440}
                          >
                            <mds-navigation-bar-item
                              id="requestAccounts"
                              label="Accounts"
                              active="true"
                              href="javascript:void(0)"
                              className="mds-navigation-bar-item--cpo"
                            />
                            <mds-navigation-bar-item
                              id="requestPaymentsAndTransfers"
                              label="Pay & transfer"
                              active="false"
                              href="javascript:void(0)"
                              className="mds-navigation-bar-item--cpo"
                            >
                              <mds-navigation-bar-menu
                                variant="mega"
                                active-index={-1}
                                className="mds-navigation-bar-menu--cpo"
                              >
                                <div slot="column-0">
                                  <mds-navigation-bar-menu-item
                                    type="heading"
                                    id="payLabel"
                                    label="PAY"
                                    href="javascript:void(0)"
                                    active="false"
                                    inactive="false"
                                    expanded="false"
                                    className="mds-navigation-bar-menu-item--cpo"
                                  />{" "}
                                  <div role="list" aria-label="PAY">
                                    <mds-navigation-bar-menu-item
                                      type="link"
                                      id="requestPaymentsAndRequests"
                                      active="false"
                                      inactive="false"
                                      label="Pay bills & send money with Zelle<sup>®</sup>"
                                      data-parentid="requestPaymentsAndTransfers"
                                      href="javascript:void(0)"
                                      expanded="false"
                                      className="mds-navigation-bar-menu-item--cpo"
                                    />
                                    <mds-navigation-bar-menu-item
                                      type="link"
                                      id="requestPaymentActivity"
                                      active="false"
                                      inactive="false"
                                      label="Payment activity"
                                      data-parentid="requestPaymentsAndTransfers"
                                      href="javascript:void(0)"
                                      expanded="false"
                                      className="mds-navigation-bar-menu-item--cpo"
                                    />
                                  </div>
                                </div>
                                <div slot="column-1">
                                  <mds-navigation-bar-menu-item
                                    type="heading"
                                    id="transferLabel"
                                    label="TRANSFER"
                                    href="javascript:void(0)"
                                    active="false"
                                    inactive="false"
                                    expanded="false"
                                    className="mds-navigation-bar-menu-item--cpo"
                                  />{" "}
                                  <div role="list" aria-label="TRANSFER">
                                    <mds-navigation-bar-menu-item
                                      type="link"
                                      id="investmentTransferMoney-default"
                                      active="false"
                                      inactive="false"
                                      label="Transfer money"
                                      data-parentid="requestPaymentsAndTransfers"
                                      href="javascript:void(0)"
                                      expanded="false"
                                      className="mds-navigation-bar-menu-item--cpo"
                                    />
                                    <mds-navigation-bar-menu-item
                                      type="link"
                                      id="requestWiresAndGlobalTransfers"
                                      active="false"
                                      inactive="false"
                                      label="Wires & global transfers"
                                      data-parentid="requestPaymentsAndTransfers"
                                      href="javascript:void(0)"
                                      expanded="false"
                                      className="mds-navigation-bar-menu-item--cpo"
                                    />
                                    <mds-navigation-bar-menu-item
                                      type="link"
                                      id="transferCardBalance"
                                      active="false"
                                      inactive="false"
                                      label="Card balance transfers"
                                      data-parentid="requestPaymentsAndTransfers"
                                      href="javascript:void(0)"
                                      expanded="false"
                                      className="mds-navigation-bar-menu-item--cpo"
                                    />
                                  </div>
                                </div>
                              </mds-navigation-bar-menu>
                            </mds-navigation-bar-item>
                            <mds-navigation-bar-item
                              id="requestPlanTrack"
                              label="Plan & track"
                              active="false"
                              href="javascript:void(0)"
                              className="mds-navigation-bar-item--cpo"
                            />
                            <mds-navigation-bar-item
                              id="requestChaseInvestmentsMenu"
                              label="Investments"
                              active="false"
                              href="javascript:void(0)"
                              className="mds-navigation-bar-item--cpo"
                            />{" "}
                            <mds-navigation-bar-item
                              type="link"
                              id="overflowDropdown"
                              accessible-text="More"
                              slot="overflow"
                              href="javascript:void(0)"
                              active="false"
                              className="mds-navigation-bar-item--cpo"
                            >
                              <mds-navigation-bar-menu
                                variant="overflow"
                                active-index={-1}
                                className="mds-navigation-bar-menu--cpo"
                              >
                                <mds-navigation-bar-menu-item
                                  type="link"
                                  id="requestSecurityCenter"
                                  active="false"
                                  inactive="false"
                                  label="Security & privacy"
                                  href="javascript:void(0)"
                                  expanded="false"
                                  className="mds-navigation-bar-menu-item--cpo"
                                />
                                <mds-navigation-bar-menu-item
                                  type="collapsible"
                                  id="requestExploreChaseProductsMenu"
                                  expanded="false"
                                  label="Explore products"
                                  href="javascript:void(0)"
                                  active="false"
                                  inactive="false"
                                  className="mds-navigation-bar-menu-item--cpo"
                                >
                                  <mds-navigation-bar-menu-item
                                    type="link"
                                    id="requestCreditCardProductNavMenu"
                                    active="false"
                                    inactive="false"
                                    label="Credit cards"
                                    data-parentid="requestExploreChaseProductsMenu"
                                    href="javascript:void(0)"
                                    expanded="false"
                                    className="mds-navigation-bar-menu-item--cpo"
                                  />
                                  <mds-navigation-bar-menu-item
                                    type="link"
                                    id="requestCheckingProductNavMenu"
                                    active="false"
                                    inactive="false"
                                    label="Checking accounts"
                                    data-parentid="requestExploreChaseProductsMenu"
                                    href="javascript:void(0)"
                                    expanded="false"
                                    className="mds-navigation-bar-menu-item--cpo"
                                  />
                                  <mds-navigation-bar-menu-item
                                    type="link"
                                    id="requestSavingsAndCertificateOfDepositProductNavMenu"
                                    active="false"
                                    inactive="false"
                                    label="Savings & CDs"
                                    data-parentid="requestExploreChaseProductsMenu"
                                    href="javascript:void(0)"
                                    expanded="false"
                                    className="mds-navigation-bar-menu-item--cpo"
                                  />
                                  <mds-navigation-bar-menu-item
                                    type="link"
                                    id="requestAutoFinancingProductNavMenu"
                                    active="false"
                                    inactive="false"
                                    label="Auto financing"
                                    data-parentid="requestExploreChaseProductsMenu"
                                    href="javascript:void(0)"
                                    expanded="false"
                                    className="mds-navigation-bar-menu-item--cpo"
                                  />
                                  <mds-navigation-bar-menu-item
                                    type="link"
                                    id="requestMortgageProductNavMenu"
                                    active="false"
                                    inactive="false"
                                    label="Mortgage"
                                    data-parentid="requestExploreChaseProductsMenu"
                                    href="javascript:void(0)"
                                    expanded="false"
                                    className="mds-navigation-bar-menu-item--cpo"
                                  />
                                  <mds-navigation-bar-menu-item
                                    type="link"
                                    id="requestInvestmentProductNavMenu"
                                    active="false"
                                    inactive="false"
                                    label="Investing"
                                    data-parentid="requestExploreChaseProductsMenu"
                                    href="javascript:void(0)"
                                    expanded="false"
                                    className="mds-navigation-bar-menu-item--cpo"
                                  />
                                  <mds-navigation-bar-menu-item
                                    type="link"
                                    id="requestBusinessBankingProductNavMenu"
                                    active="false"
                                    inactive="false"
                                    label="Chase for Business"
                                    data-parentid="requestExploreChaseProductsMenu"
                                    href="javascript:void(0)"
                                    expanded="false"
                                    className="mds-navigation-bar-menu-item--cpo"
                                  />
                                  <mds-navigation-bar-menu-item
                                    type="link"
                                    id="requestJustForYouNavMenu"
                                    active="false"
                                    inactive="false"
                                    label="Just for you"
                                    data-parentid="requestExploreChaseProductsMenu"
                                    href="javascript:void(0)"
                                    expanded="false"
                                    className="mds-navigation-bar-menu-item--cpo"
                                  />
                                </mds-navigation-bar-menu-item>
                              </mds-navigation-bar-menu>
                            </mds-navigation-bar-item>{" "}
                            <div slot="product-marker">
                              <div
                                className="main-menu-aux mds-menu-aux"
                                id="auxiliaryFirstLevelMenuContent"
                              />
                            </div>
                          </mds-navigation-bar>
                        </div>
                      </section>
                    </div>
                  </header>{" "}
                  <div id="secondary-menu">
                    <div
                      id="secondary-menu-items"
                      tabIndex={-1}
                      data-has-view="true"
                    >
                      <div
                        data-is-view="true"
                        data-component-name="ROOT/SITE/dashboard/menu|menuComponent|CHASE_ONLINE_MENU|undefined"
                      >
                        <section className="global-navigation-menu-container util print-hide regular-menu white-background-model">
                          <div id="coBrowseTerms" />{" "}
                          <div className="main-menu-container hide-xs show-sm no-l1-container">
                            <div
                              className="responsive-scroll-container"
                              tabIndex={-1}
                            >
                              <ul className="secondary-options" />
                            </div>
                            <div
                              className="responsive-scroll-container"
                              tabIndex={-1}
                            >
                              <ul className="secondary-options">
                                <li className="secondary-option">
                                  <a
                                    className="target"
                                    id="menu-paymentsDashboard"
                                    href="javascript:"
                                    aria-labelledby="Pay bills & send money with Zelle<sup>®</sup> In the Pay & transfer group "
                                  >
                                    <span className="move-money-active">
                                      Pay bills &amp; send money with Zelle
                                      <sup>®</sup>
                                    </span>
                                  </a>
                                </li>
                                <li className="secondary-option">
                                  <a
                                    className="target"
                                    id="menu-transferFunds"
                                    href="javascript:"
                                    aria-labelledby="Transfer money In the Pay & transfer group "
                                  >
                                    <span className="move-money-active">
                                      Transfer money
                                    </span>
                                  </a>
                                </li>
                                <li className="secondary-option">
                                  <a
                                    className="target"
                                    id="menu-cardBalanceTransfers"
                                    href="javascript:"
                                    aria-labelledby="Card balance transfers In the Pay & transfer group "
                                  >
                                    <span className="move-money-active">
                                      Card balance transfers
                                    </span>
                                  </a>
                                </li>
                                <li className="secondary-option">
                                  <a
                                    className="target"
                                    id="menu-paymentActivity"
                                    href="javascript:"
                                    aria-labelledby="Payment activity In the Pay & transfer group "
                                  >
                                    <span className="move-money-active">
                                      Payment activity
                                    </span>
                                  </a>
                                </li>
                                <li className="secondary-option">
                                  <a
                                    className="target"
                                    id="menu-wiresAndGlobalTransfers"
                                    href="javascript:"
                                    aria-labelledby="Wires & global transfers In the Pay & transfer group "
                                  >
                                    <span className="move-money-active">
                                      Wires &amp; global transfers
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="responsive-scroll-container"
                              tabIndex={-1}
                            >
                              <ul className="secondary-options" />
                            </div>
                            <div
                              className="responsive-scroll-container"
                              tabIndex={-1}
                            >
                              <ul className="secondary-options" />
                            </div>
                            <div
                              className="responsive-scroll-container"
                              tabIndex={-1}
                            >
                              <ul className="secondary-options" />
                            </div>
                            <div
                              className="responsive-scroll-container"
                              tabIndex={-1}
                            >
                              <ul className="secondary-options" />
                            </div>
                            <div
                              className="responsive-scroll-container"
                              tabIndex={-1}
                            >
                              <ul className="secondary-options" />
                            </div>
                          </div>{" "}
                          <div className="pseudo-bottom-menu-container hide-xs show-sm" />{" "}
                          <div className="bottom-menu-container">
                            <div id="bottom-navigation-wrapper" tabIndex={-1}>
                              <div className="container-fluid adjust-spacing">
                                <div className="util clearfix bottom-navigation-aligner">
                                  {" "}
                                  <div
                                    className="bottom-menu-aux"
                                    id="auxiliaryThirdLevelMenuContent"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="bottom-menu-fade-out-hider" />{" "}
                          <div
                            className="util accessible-text"
                            id="bottomOfMenu"
                            tabIndex={-1}
                            role="navigation"
                          >
                            <h1
                              className="util accessible-text"
                              id="navMenuHiddenH1"
                              tabIndex={-1}
                            >
                              <span> </span>
                            </h1>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>{" "}
                  <div id="tertiary-menu-items-mds" />{" "}
                  <div
                    id="spinner-container"
                    className="hide"
                    data-has-view="true"
                  >
                    <div
                      className="spinner-overlay spinner-fullscreen"
                      id="default-spinner_2"
                      data-is-view="true"
                      data-component-name="ROOT/SITE/dashboard/spinner|spinnerComponent_2|SPINNER|d7adc7c7-cc61-4a83-aed7-79181a78234f"
                    >
                      <div
                        className="jpui spinner"
                        id="default-spinner_2-spinner"
                        tabIndex={-1}
                        accessibletext="Loading"
                      >
                        <div className="spinner__block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 84 84"
                          >
                            <image
                              xlinkHref="f425646f8eca71da62a96feeb7dece41ef9ac9f2"
                              width={83}
                              height={84}
                            />
                          </svg>
                        </div>{" "}
                        <span
                          className="spinner-text"
                          id="accessible-default-spinner_2-spinner"
                        >
                          Loading
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>{" "}
              <main id="main-content" role="main" tabIndex={-1}>
                <div id="menu-content-overlay" />{" "}
                <div
                  className="hide"
                  id="content-spinner-overlay"
                  data-has-view="true"
                >
                  <div
                    className="spinner-overlay spinner-fullscreen"
                    id="default-spinner_1"
                    data-is-view="true"
                    data-component-name="ROOT/SITE/dashboard/spinner|spinnerComponent_1|SPINNER|d0f97b77-0263-4ef6-ac12-3ab474385693"
                  >
                    <div
                      className="jpui spinner"
                      id="default-spinner_1-spinner"
                      tabIndex={-1}
                      accessibletext
                    >
                      <div className="spinner__block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 84 84"
                        >
                          <image
                            xlinkHref="f425646f8eca71da62a96feeb7dece41ef9ac9f2"
                            width={83}
                            height={84}
                          />
                        </svg>
                      </div>{" "}
                      <span
                        className="spinner-text"
                        id="accessible-default-spinner_1-spinner"
                      />
                    </div>{" "}
                  </div>
                </div>{" "}
                <div className="main-background clearfix" id="content">
                  <div
                    className="ovd-microapp-container"
                    data-testid="ovd-microapp-container"
                  >
                    <div
                      className="mds-d-print-flex mds-d-none mds-fd-column mds-ai-center mds-jc-center"
                      data-testid="print-header"
                    >
                      <div>
                        <mds-image
                          alt
                          background-size="contain"
                          vertical-position="center"
                          horizontal-position="center"
                          id="undefined-print-header-logo"
                          image-sources='[{"minBreakpoint":0,"imageSource":"https://static2.chasecdn.com/content/dam/unified-assets/logo/chase/chase-logo/additional-file-formats/logo_chase_blk.svg","height":28}]'
                          data-testid="undefined-print-header-logo"
                          className="mds-image--cpo"
                        />
                      </div>
                      <p className="mds-body-small">
                        Printed from Chase Personal Online
                      </p>
                    </div>
                    <div>
                      <div>
                        <div
                          id="ovd-layout-container"
                          className="mds-container mds-px-at-768-4"
                        >
                          <div data-testid="ovd-layout">
                            <div
                              data-testid="cutomer-greeting-message"
                              className="mds-pt-5 mds-title-medium-heavier customer-greeting"
                            >
                              Good morning
                            </div>
                            <div className="ovd-container mds-d-flex mds-fd-row mds-row">
                              <div className="fit-content mds-col-12 mds-mt-6 mds-col-at-992-8 mds-d-print-inherit ovd-container-columns">
                                <div className="print-w-full">
                                  <div
                                    id="accounts-group-container"
                                    data-testid="accounts-group-container"
                                  >
                                    <div>
                                      <div className="accounts-group-accordion-container">
                                        //
                                      </div>
                                    </div>
                                    <div />
                                    <div>
                                      <div className="accounts-group-accordion-container">
                                        <div className="ovd-custom-accordion">
                                          <div
                                            id="CARD_ACCOUNTS"
                                            className="ovd-custom-accordion__tile"
                                            data-testid="customAccordion-tile"
                                          >
                                            <div
                                              className="custom-accordion-content-border"
                                              id="custom-accordion-heading-container-CARD_ACCOUNTS"
                                            >
                                              <div className="mds-d-flex mds-jc-space-between innerTile">
                                                <div
                                                  id="CARD_ACCOUNTS-topLeft"
                                                  className="mds-pl-4 custom-accordion-top-left "
                                                  data-expanded="true"
                                                >
                                                  <div className="mds-mx-0">
                                                    <div
                                                      className="mds-body-large-heavier mds-d-flex"
                                                      data-testid="customAccordion-title"
                                                    >
                                                      <div
                                                        role="heading"
                                                        aria-level={2}
                                                      >
                                                        Credit cards
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  id="CARD_ACCOUNTS-topRight"
                                                  className="mds-text-right mds-row mds-mx-0 mds-fw-nowrap mds-d-flex mds-ai-center"
                                                >
                                                  <div
                                                    className="mds-mr-3 mds-ml-2 mds-d-print-none"
                                                    data-testid="customAccordion-rightSideSlots"
                                                  />
                                                  <div
                                                    id="CARD_ACCOUNTS-accordion-button"
                                                    className="chevronButton"
                                                    data-testid="customAccordion-button"
                                                    role="button"
                                                    tabIndex={0}
                                                    data-expanded="true"
                                                    aria-label="Credit cards"
                                                    aria-expanded="true"
                                                  >
                                                    <div
                                                      className="chevronIcon expanded"
                                                      data-testid="customAccordion-icon"
                                                    >
                                                      <mds-icon
                                                        type="ico_chevron_down"
                                                        color="default"
                                                        size={16}
                                                        remove-horizontal-margin="false"
                                                        id="CARD_ACCOUNTS-chevron"
                                                        className="mds-icon--cpo horizontal-margin"
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mds-d-flex mds-fw-wrap mds-px-4 custom-accordion-second_row_slot innerTile" />
                                            </div>
                                            <div
                                              className="mds-mx-4 mds-mb-4"
                                              data-testid="customAccordion-content"
                                            >
                                              <div data-testid="accounts-group-blade-container">
                                                <div>
                                                  <div
                                                    className="mds-mt-3"
                                                    data-testid="accounts-blade-container"
                                                  >
                                                    <div
                                                      data-testid="accountTile"
                                                      className="account-tile"
                                                    >
                                                      <div className=" mds-row mds-jc-space-between mds-ai-center mds-fw-nowrap mds-mt-2  ">
                                                        <div className="mds-col-10 mds-col-at-576-auto mds-d-inline-flex mds-ai-center">
                                                          <div data-testid="accounts-name-link">
                                                            <mds-button
                                                              width-type="content"
                                                              text="CREDIT CARD (...4381)"
                                                              icon-position="trailing"
                                                              variant="tertiary"
                                                              small="false"
                                                              disable-live-region="false"
                                                              inverse="false"
                                                              tooltip-alignment="center"
                                                              tooltip-pointer-placement={
                                                                8
                                                              }
                                                              tooltip-placement="below"
                                                              icon-type="ico_chevron_right"
                                                              inactive="false"
                                                              icon-accessible-description
                                                              tab-focusable="true"
                                                              type="button"
                                                              is-loading="false"
                                                              id="accounts-name-link-button-CREDIT CARD (...4381)"
                                                              data-testid="accounts-name-link-button-CREDIT CARD (...4381)"
                                                              accessible-text
                                                              className="mds-button--cpo"
                                                            />
                                                          </div>
                                                        </div>
                                                        <div className="mds-col-2 mds-col-at-576-auto mds-d-flex mds-jc-flex-end mds-ai-center mds-mr-2">
                                                          <div
                                                            className="blade-navigation"
                                                            data-testid="account-tile-navigation-container"
                                                          >
                                                            <div className="mds-d-flex mds-fd-row mds-fw-nowrap mds-ml-4">
                                                              <div data-testid="navigation-buttons-container">
                                                                <div>
                                                                  <mds-button
                                                                    width-type="content"
                                                                    text="Pay card"
                                                                    icon-position="leading"
                                                                    variant="secondary"
                                                                    small="true"
                                                                    disable-live-region="false"
                                                                    inverse="false"
                                                                    tooltip-alignment="center"
                                                                    tooltip-pointer-placement={
                                                                      8
                                                                    }
                                                                    tooltip-placement="below"
                                                                    inactive="false"
                                                                    tab-focusable="true"
                                                                    type="button"
                                                                    is-loading="false"
                                                                    id="account-tile-navigation-button-requestCardPayment-482706446"
                                                                    data-testid="account-tile-navigation-button-requestCardPayment"
                                                                    accessible-text
                                                                    className="mds-button--cpo"
                                                                  />
                                                                </div>
                                                              </div>
                                                              <div data-testid="menu-options-container">
                                                                <span className="account-tile-navigation__menu-options">
                                                                  <mds-bottom-sheet
                                                                    supress-button="false"
                                                                    primary-button-text
                                                                    tier-two="false"
                                                                    header-text
                                                                    open="false"
                                                                    id="more-menu-bottom-sheet-482706446"
                                                                    data-testid="more-menu-bottom-sheet-482706446"
                                                                    primary-button-accessible-text="primary button"
                                                                    close-button-accessible-text="close"
                                                                    back-button-accessible-text="back"
                                                                    bottom-sheet-content="bottom-sheet-content"
                                                                    className="mds-bottom-sheet--cpo"
                                                                  >
                                                                    <div
                                                                      className="mds-pb-4 bottom-sheet-content "
                                                                      slot="bottom-sheet-content"
                                                                    />
                                                                  </mds-bottom-sheet>
                                                                  <mds-button
                                                                    width-type="content"
                                                                    text="More"
                                                                    icon-position="trailing"
                                                                    variant="secondary"
                                                                    small="true"
                                                                    disable-live-region="false"
                                                                    inverse="false"
                                                                    tooltip-alignment="center"
                                                                    tooltip-pointer-placement={
                                                                      8
                                                                    }
                                                                    tooltip-placement="below"
                                                                    icon-type="ico_chevron_down"
                                                                    inactive="false"
                                                                    tab-focusable="true"
                                                                    type="button"
                                                                    is-loading="false"
                                                                    id="menuOptions-482706446-btn"
                                                                    data-testid="menu-options-482706446-testId"
                                                                    accessible-text
                                                                    className="mds-button--cpo"
                                                                    style={{
                                                                      position:
                                                                        "relative",
                                                                    }}
                                                                  >
                                                                    <mds-menu-button
                                                                      visible="false"
                                                                      tooltip-placement="below"
                                                                      alignment="right"
                                                                      edge-detection="false"
                                                                      id="subMenuOptions-482706446-btn"
                                                                      data-testid="sub-menu-options-482706446-testId"
                                                                      className="mds-menu-button--cpo"
                                                                      custom-menu='[{"label":"Account details","value":"accountDetails","inactive":false},{"label":"Rewards dashboard","value":"rewardsDashboard","inactive":false},{"label":"Card benefits","value":"cardBenefits","inactive":false},{"label":"Spending summary","value":"spendingReport","inactive":false},{"label":"Document upload center","value":"edocsOverview","inactive":false},{"header":"Statements & documents","collapsible":true,"menuItems":[{"label":"Statements","value":"accountStatementsAndDocuments","inactive":false},{"label":"Year-end summaries","value":"yearEndSummary","inactive":false},{"label":"Notices & letters","value":"accountNotices","inactive":false},{"label":"Rewards history","value":"rewardsHistory","inactive":false}]},{"header":"Payment services","collapsible":true,"menuItems":[{"label":"Make a payment","value":"makePayment","inactive":false},{"label":"Automatic payments","value":"automaticPayments","inactive":false},{"label":"Payment activity","value":"paymentActivity","inactive":false}]},{"header":"Account services","collapsible":true,"menuItems":[{"label":"Verify cards","value":"cardActivation","inactive":false},{"label":"Replace a card","value":"replaceCard","inactive":false},{"label":"Refer a friend","value":"referAFriend","inactive":false},{"label":"Stored cards","value":"creditCardOnFile","inactive":false},{"label":"Manage digital wallets","value":"digitalWallets","inactive":false},{"label":"Track disputes","value":"disputeTracker","inactive":false}]},{"header":"Update settings & preferences","collapsible":true,"menuItems":[{"label":"Account alerts","value":"manageAccountAlertSettings","inactive":false},{"label":"Paperless","value":"manageAccountPaperlessSettings","inactive":false},{"label":"Account nickname","value":"accountNickname","inactive":false},{"label":"Hide account","value":"manageHiddenAccounts","inactive":false}]}]'
                                                                    />
                                                                  </mds-button>
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="mds-row"
                                                        data-testid="alert-section"
                                                      >
                                                        <div className="mds-row mds-col-12 mds-px-0 mds-mx-0 mds-pt-2">
                                                          <div
                                                            className="alert-container"
                                                            id="alert-container-482706446"
                                                            data-testid="alert-container-482706446"
                                                          >
                                                            <div>
                                                              <div className="mds-mb-1 mds-mx-4 accountClosed-CARD alert-background">
                                                                <mds-alert
                                                                  variant="soft"
                                                                  size="small"
                                                                  full-width="true"
                                                                  background="true"
                                                                  leading-padding={
                                                                    16
                                                                  }
                                                                  trailing-padding={
                                                                    16
                                                                  }
                                                                  alert-title="Your account is closed."
                                                                  message="If you have a balance on this account, please continue to make your payments by the due date each month."
                                                                  inverse="false"
                                                                  shows-close-button="false"
                                                                  accessible-text-icon="Please note: "
                                                                  heading-level={
                                                                    4
                                                                  }
                                                                  focusable="true"
                                                                  id="accountClosed-482706446-alertId"
                                                                  data-testid="accountClosed-482706446-alertId"
                                                                  read-accessible-text-on-focus="false"
                                                                  className="mds-alert--cpo"
                                                                />
                                                              </div>
                                                            </div>
                                                            <div>
                                                              <div className="mds-mb-1 mds-mx-4 cardNoPaymentDue-CARD alert-background">
                                                                <mds-alert
                                                                  variant="success"
                                                                  size="small"
                                                                  full-width="true"
                                                                  background="true"
                                                                  leading-padding={
                                                                    16
                                                                  }
                                                                  trailing-padding={
                                                                    16
                                                                  }
                                                                  alert-title="You don't have a payment due right now."
                                                                  message="Your next statement period ends on Mar 16, 2024."
                                                                  inverse="false"
                                                                  shows-close-button="false"
                                                                  accessible-text-icon="Checkmark: "
                                                                  heading-level={
                                                                    4
                                                                  }
                                                                  focusable="true"
                                                                  id="cardNoPaymentDue-482706446-alertId"
                                                                  data-testid="cardNoPaymentDue-482706446-alertId"
                                                                  read-accessible-text-on-focus="false"
                                                                  className="mds-alert--cpo"
                                                                />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div data-testid="details-section">
                                                        <div className="mds-my-2 mds-row mds-fw-wrap mds-ai-baseline">
                                                          <div className="mds-col-12 mds-px-4 account-tile__details-section">
                                                            <div
                                                              id="482706446-currentBalance-dataItem"
                                                              className="mds-d-inline-flex mds-fd-column item"
                                                              data-testid="dataItem"
                                                            >
                                                              <div
                                                                className="text-label mds-m-0 primary-item-label-area "
                                                                data-testid="dataItem-label"
                                                              >
                                                                <mds-definition-link
                                                                  definition-text="Current balance"
                                                                  edge-detection="false"
                                                                  edge-detection-container-id="below"
                                                                  tooltip-alignment="left"
                                                                  tooltip-pointer-placement={
                                                                    8
                                                                  }
                                                                  tooltip-placement="below"
                                                                  tooltip-message="This may not include all transactions such as your most recent transactions, pending authorizations or interest that's accumulated since your last statement date."
                                                                  id="482706446-currentBalance-defintionLink"
                                                                  data-testid="dataItem-label-defintionLink"
                                                                  is-button="false"
                                                                  href="javascript:void(0)"
                                                                  accessible-text
                                                                  alignment
                                                                  className="mds-definition-link--cpo"
                                                                />
                                                              </div>
                                                              <div
                                                                className="primary-value text-primary  flex-order-first"
                                                                data-testid="dataItem-value"
                                                              >
                                                                $0.00
                                                              </div>
                                                              <div className="primary-item-label-area mds-pt-1 ">
                                                                <div>
                                                                  <div
                                                                    className="details-flyout-link"
                                                                    data-testid="detailsLinkFlyoutContainer"
                                                                  >
                                                                    <div>
                                                                      <div
                                                                        className="details-flyout-link"
                                                                        data-testid="detailsFlyoutContainer"
                                                                      >
                                                                        <div>
                                                                          <mds-link
                                                                            underline="false"
                                                                            end-icon="ico_chevron_down"
                                                                            text="Details"
                                                                            inverse="false"
                                                                            leading-pipe="false"
                                                                            trailing-pipe="false"
                                                                            truncation="none"
                                                                            tab-focusable="true"
                                                                            inactive="false"
                                                                            is-button="false"
                                                                            id="link-details-currentBalance-482706446"
                                                                            data-testid="link-details-currentBalance-482706446"
                                                                            href="javascript:void(0)"
                                                                            label-aria-text
                                                                            accessible-text
                                                                            className="mds-link--cpo"
                                                                            style={{
                                                                              position:
                                                                                "relative",
                                                                            }}
                                                                          >
                                                                            <mds-flyout
                                                                              alignment="center"
                                                                              tooltip-placement="below"
                                                                              header
                                                                              width={
                                                                                380
                                                                              }
                                                                              height={
                                                                                150
                                                                              }
                                                                              accesible-text-flyout-content-start="popup content start"
                                                                              accessible-text-flyout-content-start="popup content start"
                                                                              accesible-text-flyout-content-end="popup content end"
                                                                              accessible-text-flyout-content-end="popup content end"
                                                                              accessible-close-button="click to close"
                                                                              edge-detection-container-id="accounts-group-container"
                                                                              heading-level={
                                                                                2
                                                                              }
                                                                              edge-detection="true"
                                                                              id="flyout-currentBalance-482706446"
                                                                              data-testid="flyout-currentBalance-482706446"
                                                                              manual-control="true"
                                                                              className="mds-flyout--cpo"
                                                                            >
                                                                              <div
                                                                                slot
                                                                              >
                                                                                <div
                                                                                  className
                                                                                >
                                                                                  <mds-skeleton-loader
                                                                                    accessible-is-loading-text
                                                                                    accessible-has-loaded-text
                                                                                    variant="content-block"
                                                                                    is-animated="true"
                                                                                    id="flyout-loader-currentBalance-482706446"
                                                                                    data-testid="flyout-loader-currentBalance-482706446"
                                                                                    className="mds-skeleton-loader--cpo"
                                                                                  />
                                                                                </div>
                                                                              </div>
                                                                            </mds-flyout>
                                                                            <mds-flyout-overlay
                                                                              slot="mds-flyout-overlay"
                                                                              className="mds-flyout--cpo"
                                                                            />
                                                                          </mds-link>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="card-art-section mds-pr-2">
                                                              <img
                                                                src={cardImage}
                                                                className="card-art-image"
                                                                alt="United Explorer"
                                                              />
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="mds-col-3 mds-mt-4 mds-pl-4 mds-as-flex-start "
                                                            data-testid="secondaryCell"
                                                          >
                                                            <div
                                                              id="482706446-lastStatementBalance-dataItem"
                                                              className="mds-d-inline-flex mds-fd-column item"
                                                              data-testid="dataItem"
                                                            >
                                                              <div
                                                                className="text-label mds-m-0 primary-item-label-area "
                                                                data-testid="dataItem-label"
                                                              >
                                                                Last statement
                                                                balance
                                                              </div>
                                                              <div
                                                                className="primary-value text-secondary  flex-order-first"
                                                                data-testid="dataItem-value"
                                                              >
                                                                $0.00
                                                              </div>
                                                              <div className="primary-item-label-area mds-pt-1 " />
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="mds-col-3 mds-mt-4 mds-pl-4 mds-as-flex-start "
                                                            data-testid="secondaryCell"
                                                          >
                                                            <div
                                                              id="482706446-availableCredit-dataItem"
                                                              className="mds-d-inline-flex mds-fd-column item"
                                                              data-testid="dataItem"
                                                            >
                                                              <div
                                                                className="text-label mds-m-0 primary-item-label-area "
                                                                data-testid="dataItem-label"
                                                              >
                                                                Available credit
                                                              </div>
                                                              <div
                                                                className="primary-value text-secondary  flex-order-first"
                                                                data-testid="dataItem-value"
                                                              >
                                                                $0.00
                                                              </div>
                                                              <div className="primary-item-label-area mds-pt-1 " />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="border mds-mt-4 mds-mb-3" />
                                                </div>
                                                <div>
                                                  <div
                                                    className="mds-mt-3"
                                                    data-testid="accounts-blade-container"
                                                  >
                                                    <div
                                                      data-testid="accountTile"
                                                      className="account-tile"
                                                    >
                                                      <div className=" mds-row mds-jc-space-between mds-ai-center mds-fw-nowrap mds-mt-2  ">
                                                        <div className="mds-col-10 mds-col-at-576-auto mds-d-inline-flex mds-ai-center">
                                                          <div data-testid="accounts-name-link">
                                                            <mds-button
                                                              width-type="content"
                                                              text="CREDIT CARD (...8234)"
                                                              icon-position="trailing"
                                                              variant="tertiary"
                                                              small="false"
                                                              disable-live-region="false"
                                                              inverse="false"
                                                              tooltip-alignment="center"
                                                              tooltip-pointer-placement={
                                                                8
                                                              }
                                                              tooltip-placement="below"
                                                              icon-type="ico_chevron_right"
                                                              inactive="false"
                                                              icon-accessible-description
                                                              tab-focusable="true"
                                                              type="button"
                                                              is-loading="false"
                                                              id="accounts-name-link-button-CREDIT CARD (...8234)"
                                                              data-testid="accounts-name-link-button-CREDIT CARD (...8234)"
                                                              accessible-text
                                                              className="mds-button--cpo"
                                                            />
                                                          </div>
                                                        </div>
                                                        <div className="mds-col-2 mds-col-at-576-auto mds-d-flex mds-jc-flex-end mds-ai-center mds-mr-2">
                                                          <div
                                                            className="blade-navigation"
                                                            data-testid="account-tile-navigation-container"
                                                          >
                                                            <div className="mds-d-flex mds-fd-row mds-fw-nowrap mds-ml-4">
                                                              <div data-testid="navigation-buttons-container">
                                                                <div>
                                                                  <mds-button
                                                                    width-type="content"
                                                                    text="Pay card"
                                                                    icon-position="leading"
                                                                    variant="secondary"
                                                                    small="true"
                                                                    disable-live-region="false"
                                                                    inverse="false"
                                                                    tooltip-alignment="center"
                                                                    tooltip-pointer-placement={
                                                                      8
                                                                    }
                                                                    tooltip-placement="below"
                                                                    inactive="false"
                                                                    tab-focusable="true"
                                                                    type="button"
                                                                    is-loading="false"
                                                                    id="account-tile-navigation-button-requestCardPayment-891685589"
                                                                    data-testid="account-tile-navigation-button-requestCardPayment"
                                                                    accessible-text
                                                                    className="mds-button--cpo"
                                                                  />
                                                                </div>
                                                              </div>
                                                              <div data-testid="menu-options-container">
                                                                <span className="account-tile-navigation__menu-options">
                                                                  <mds-bottom-sheet
                                                                    supress-button="false"
                                                                    primary-button-text
                                                                    tier-two="false"
                                                                    header-text
                                                                    open="false"
                                                                    id="more-menu-bottom-sheet-891685589"
                                                                    data-testid="more-menu-bottom-sheet-891685589"
                                                                    primary-button-accessible-text="primary button"
                                                                    close-button-accessible-text="close"
                                                                    back-button-accessible-text="back"
                                                                    bottom-sheet-content="bottom-sheet-content"
                                                                    className="mds-bottom-sheet--cpo"
                                                                  >
                                                                    <div
                                                                      className="mds-pb-4 bottom-sheet-content "
                                                                      slot="bottom-sheet-content"
                                                                    />
                                                                  </mds-bottom-sheet>
                                                                  <mds-button
                                                                    width-type="content"
                                                                    text="More"
                                                                    icon-position="trailing"
                                                                    variant="secondary"
                                                                    small="true"
                                                                    disable-live-region="false"
                                                                    inverse="false"
                                                                    tooltip-alignment="center"
                                                                    tooltip-pointer-placement={
                                                                      8
                                                                    }
                                                                    tooltip-placement="below"
                                                                    icon-type="ico_chevron_down"
                                                                    inactive="false"
                                                                    tab-focusable="true"
                                                                    type="button"
                                                                    is-loading="false"
                                                                    id="menuOptions-891685589-btn"
                                                                    data-testid="menu-options-891685589-testId"
                                                                    accessible-text
                                                                    className="mds-button--cpo"
                                                                    style={{
                                                                      position:
                                                                        "relative",
                                                                    }}
                                                                  >
                                                                    <mds-menu-button
                                                                      visible="false"
                                                                      tooltip-placement="below"
                                                                      alignment="right"
                                                                      edge-detection="false"
                                                                      id="subMenuOptions-891685589-btn"
                                                                      data-testid="sub-menu-options-891685589-testId"
                                                                      className="mds-menu-button--cpo"
                                                                      custom-menu='[{"label":"Account details","value":"accountDetails","inactive":false},{"label":"Rewards dashboard","value":"rewardsDashboard","inactive":false},{"label":"Card benefits","value":"cardBenefits","inactive":false},{"label":"Request a credit limit increase","value":"creditLineIncrease","inactive":false},{"label":"Spending summary","value":"spendingReport","inactive":false},{"label":"Document upload center","value":"edocsOverview","inactive":false},{"label":"Pay over time","value":"payOverTime","inactive":false},{"header":"Statements & documents","collapsible":true,"menuItems":[{"label":"Statements","value":"accountStatementsAndDocuments","inactive":false},{"label":"Year-end summaries","value":"yearEndSummary","inactive":false},{"label":"Notices & letters","value":"accountNotices","inactive":false},{"label":"Rewards history","value":"rewardsHistory","inactive":false}]},{"header":"Payment services","collapsible":true,"menuItems":[{"label":"Make a payment","value":"makePayment","inactive":false},{"label":"Automatic payments","value":"automaticPayments","inactive":false},{"label":"Payment activity","value":"paymentActivity","inactive":false}]},{"header":"Account services","collapsible":true,"menuItems":[{"label":"Verify cards","value":"cardActivation","inactive":false},{"label":"Replace a card","value":"replaceCard","inactive":false},{"label":"Lock and unlock your card","value":"creditCardControls","inactive":false},{"label":"Refer a friend","value":"referAFriend","inactive":false},{"label":"Travel notification","value":"travelNotifications","inactive":false},{"label":"Transfer a balance","value":"transferAccountBalance","inactive":false},{"label":"See balance transfer history","value":"accountBalanceTransferHistory","inactive":false},{"label":"Pay-from accounts","value":"manageFundingAccounts","inactive":false},{"label":"Authorized users","value":"manageAuthorizedUsers","inactive":false},{"label":"Request cardmember agreement","value":"cardmemberAgreement","inactive":false},{"label":"Stored cards","value":"creditCardOnFile","inactive":false},{"label":"Manage digital wallets","value":"digitalWallets","inactive":false},{"label":"Track disputes","value":"disputeTracker","inactive":false}]},{"header":"Update settings & preferences","collapsible":true,"menuItems":[{"label":"Payment due date","value":"updatePaymentDueDate","inactive":false},{"label":"Account alerts","value":"manageAccountAlertSettings","inactive":false},{"label":"Paperless","value":"manageAccountPaperlessSettings","inactive":false},{"label":"Account nickname","value":"accountNickname","inactive":false},{"label":"Hide account","value":"manageHiddenAccounts","inactive":false}]}]'
                                                                    />
                                                                  </mds-button>
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="mds-row"
                                                        data-testid="alert-section"
                                                      >
                                                        <div className="mds-row mds-col-12 mds-px-0 mds-mx-0 mds-pt-2">
                                                          <div
                                                            className="alert-container"
                                                            id="alert-container-891685589"
                                                            data-testid="alert-container-891685589"
                                                          >
                                                            <div>
                                                              <div className="mds-mb-1 mds-mx-4 cardNoPaymentDue-CARD alert-background">
                                                                <mds-alert
                                                                  variant="success"
                                                                  size="small"
                                                                  full-width="true"
                                                                  background="true"
                                                                  leading-padding={
                                                                    16
                                                                  }
                                                                  trailing-padding={
                                                                    16
                                                                  }
                                                                  alert-title="You don't have a payment due right now."
                                                                  message="Your next statement period ends on Mar 12, 2024."
                                                                  inverse="false"
                                                                  shows-close-button="false"
                                                                  accessible-text-icon="Checkmark: "
                                                                  heading-level={
                                                                    4
                                                                  }
                                                                  focusable="true"
                                                                  id="cardNoPaymentDue-891685589-alertId"
                                                                  data-testid="cardNoPaymentDue-891685589-alertId"
                                                                  read-accessible-text-on-focus="false"
                                                                  className="mds-alert--cpo"
                                                                />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div data-testid="details-section">
                                                        <div className="mds-my-2 mds-row mds-fw-wrap mds-ai-baseline">
                                                          <div className="mds-col-12 mds-px-4 account-tile__details-section">
                                                            <div
                                                              id="891685589-currentBalance-dataItem"
                                                              className="mds-d-inline-flex mds-fd-column item"
                                                              data-testid="dataItem"
                                                            >
                                                              <div
                                                                className="text-label mds-m-0 primary-item-label-area "
                                                                data-testid="dataItem-label"
                                                              >
                                                                <mds-definition-link
                                                                  definition-text="Current balance"
                                                                  edge-detection="false"
                                                                  edge-detection-container-id="below"
                                                                  tooltip-alignment="left"
                                                                  tooltip-pointer-placement={
                                                                    8
                                                                  }
                                                                  tooltip-placement="below"
                                                                  tooltip-message="This may not include all transactions such as your most recent transactions, pending authorizations or interest that's accumulated since your last statement date."
                                                                  id="891685589-currentBalance-defintionLink"
                                                                  data-testid="dataItem-label-defintionLink"
                                                                  is-button="false"
                                                                  href="javascript:void(0)"
                                                                  accessible-text
                                                                  alignment
                                                                  className="mds-definition-link--cpo"
                                                                />
                                                              </div>
                                                              <div
                                                                className="primary-value text-primary  flex-order-first"
                                                                data-testid="dataItem-value"
                                                              >
                                                                $769.27
                                                              </div>
                                                              <div className="primary-item-label-area mds-pt-1 ">
                                                                <div>
                                                                  <div
                                                                    className="details-flyout-link"
                                                                    data-testid="detailsLinkFlyoutContainer"
                                                                  >
                                                                    <div>
                                                                      <div
                                                                        className="details-flyout-link"
                                                                        data-testid="detailsFlyoutContainer"
                                                                      >
                                                                        <div>
                                                                          <mds-link
                                                                            underline="false"
                                                                            end-icon="ico_chevron_down"
                                                                            text="Details"
                                                                            inverse="false"
                                                                            leading-pipe="false"
                                                                            trailing-pipe="false"
                                                                            truncation="none"
                                                                            tab-focusable="true"
                                                                            inactive="false"
                                                                            is-button="false"
                                                                            id="link-details-currentBalance-891685589"
                                                                            data-testid="link-details-currentBalance-891685589"
                                                                            href="javascript:void(0)"
                                                                            label-aria-text
                                                                            accessible-text
                                                                            className="mds-link--cpo"
                                                                            style={{
                                                                              position:
                                                                                "relative",
                                                                            }}
                                                                          >
                                                                            <mds-flyout
                                                                              alignment="center"
                                                                              tooltip-placement="below"
                                                                              header
                                                                              width={
                                                                                380
                                                                              }
                                                                              height={
                                                                                150
                                                                              }
                                                                              accesible-text-flyout-content-start="popup content start"
                                                                              accessible-text-flyout-content-start="popup content start"
                                                                              accesible-text-flyout-content-end="popup content end"
                                                                              accessible-text-flyout-content-end="popup content end"
                                                                              accessible-close-button="click to close"
                                                                              edge-detection-container-id="accounts-group-container"
                                                                              heading-level={
                                                                                2
                                                                              }
                                                                              edge-detection="true"
                                                                              id="flyout-currentBalance-891685589"
                                                                              data-testid="flyout-currentBalance-891685589"
                                                                              manual-control="true"
                                                                              className="mds-flyout--cpo"
                                                                            >
                                                                              <div
                                                                                slot
                                                                              >
                                                                                <div
                                                                                  className
                                                                                >
                                                                                  <mds-skeleton-loader
                                                                                    accessible-is-loading-text
                                                                                    accessible-has-loaded-text
                                                                                    variant="content-block"
                                                                                    is-animated="true"
                                                                                    id="flyout-loader-currentBalance-891685589"
                                                                                    data-testid="flyout-loader-currentBalance-891685589"
                                                                                    className="mds-skeleton-loader--cpo"
                                                                                  />
                                                                                </div>
                                                                              </div>
                                                                            </mds-flyout>
                                                                            <mds-flyout-overlay
                                                                              slot="mds-flyout-overlay"
                                                                              className="mds-flyout--cpo"
                                                                            />
                                                                          </mds-link>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="card-art-section mds-pr-2">
                                                              <img
                                                                src={cardImage2}
                                                                className="card-art-image"
                                                                alt="United Quest"
                                                              />
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="mds-col-3 mds-mt-4 mds-pl-4 mds-as-flex-start "
                                                            data-testid="secondaryCell"
                                                          >
                                                            <div
                                                              id="891685589-remainingStatementBalance-dataItem"
                                                              className="mds-d-inline-flex mds-fd-column item"
                                                              data-testid="dataItem"
                                                            >
                                                              <div
                                                                className="text-label mds-m-0 primary-item-label-area "
                                                                data-testid="dataItem-label"
                                                              >
                                                                <mds-definition-link
                                                                  definition-text="Remaining statement balance"
                                                                  edge-detection="false"
                                                                  edge-detection-container-id="below"
                                                                  tooltip-alignment="left"
                                                                  tooltip-pointer-placement={
                                                                    8
                                                                  }
                                                                  tooltip-placement="below"
                                                                  tooltip-message="This amount is the new balance you'll see on your most recent billing statement, adjusted for payments, returned payments and applicable credits since your last statement closing date. We've deducted any amounts under dispute from this balance. Interest charges or fees you've incurred since your last statement also aren't reflected in the remaining statement balance."
                                                                  id="891685589-remainingStatementBalance-defintionLink"
                                                                  data-testid="dataItem-label-defintionLink"
                                                                  is-button="false"
                                                                  href="javascript:void(0)"
                                                                  accessible-text
                                                                  alignment
                                                                  className="mds-definition-link--cpo"
                                                                />
                                                              </div>
                                                              <div
                                                                className="primary-value text-secondary  flex-order-first"
                                                                data-testid="dataItem-value"
                                                              >
                                                                $0.00
                                                              </div>
                                                              <div className="primary-item-label-area mds-pt-1 " />
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="mds-col-3 mds-mt-4 mds-pl-4 mds-as-flex-start "
                                                            data-testid="secondaryCell"
                                                          >
                                                            <div
                                                              id="891685589-availableCredit-dataItem"
                                                              className="mds-d-inline-flex mds-fd-column item"
                                                              data-testid="dataItem"
                                                            >
                                                              <div
                                                                className="text-label mds-m-0 primary-item-label-area "
                                                                data-testid="dataItem-label"
                                                              >
                                                                Available credit
                                                              </div>
                                                              <div
                                                                className="primary-value text-secondary  flex-order-first"
                                                                data-testid="dataItem-value"
                                                              >
                                                                $15,760.42
                                                              </div>
                                                              <div className="primary-item-label-area mds-pt-1 " />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div />
                                    <div />
                                  </div>
                                  <div className="external-accounts-container">
                                    <div className="ovd-custom-accordion">
                                      <div
                                        id="external-accounts-custom-accordion"
                                        className="ovd-custom-accordion__tile"
                                        data-testid="customAccordion-tile"
                                      >
                                        <div
                                          className="custom-accordion-content-border"
                                          id="custom-accordion-heading-container-external-accounts-custom-accordion"
                                        >
                                          <div className="mds-d-flex mds-jc-space-between innerTile">
                                            <div
                                              id="external-accounts-custom-accordion-topLeft"
                                              className="mds-pl-4 custom-accordion-top-left "
                                              data-expanded="true"
                                            >
                                              <div className="mds-mx-0">
                                                <div
                                                  className="mds-body-large-heavier mds-d-flex"
                                                  data-testid="customAccordion-title"
                                                >
                                                  <div
                                                    role="heading"
                                                    aria-level={2}
                                                  >
                                                    External accounts
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              id="external-accounts-custom-accordion-topRight"
                                              className="mds-text-right mds-row mds-mx-0 mds-fw-nowrap mds-d-flex mds-ai-center"
                                            >
                                              <div
                                                className="mds-mr-3 mds-ml-2 mds-d-print-none"
                                                data-testid="customAccordion-rightSideSlots"
                                              >
                                                <div
                                                  className="mds-body-medium"
                                                  data-testid="customAccordion-slot1"
                                                />
                                              </div>
                                              <div
                                                id="external-accounts-custom-accordion-accordion-button"
                                                className="chevronButton"
                                                data-testid="customAccordion-button"
                                                role="button"
                                                tabIndex={0}
                                                data-expanded="true"
                                                aria-label="External accounts"
                                                aria-expanded="true"
                                              >
                                                <div
                                                  className="chevronIcon expanded"
                                                  data-testid="customAccordion-icon"
                                                >
                                                  <mds-icon
                                                    type="ico_chevron_down"
                                                    color="default"
                                                    size={16}
                                                    remove-horizontal-margin="false"
                                                    id="external-accounts-custom-accordion-chevron"
                                                    className="mds-icon--cpo horizontal-margin"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="mds-mx-4 mds-mb-4"
                                          data-testid="customAccordion-content"
                                        >
                                          <div
                                            data-testid="external-accounts-not-enrolled-container"
                                            className="external-accounts-not-enrolled-container mds-d-flex mds-fd-row mds-fw-wrap"
                                          >
                                            <div className="external-accounts-not-enrolled-row-item external-accounts-not-enrolled-message">
                                              <span>
                                                Link your external accounts to
                                                better organize your money,
                                                budget and plan for the future.
                                              </span>
                                            </div>
                                            <div className="external-accounts-not-enrolled-row-item">
                                              <div className="external-account-non-enrolled-link-an-account mds-d-flex mds-jc-center">
                                                <mds-link
                                                  underline="false"
                                                  text="Link an account"
                                                  inverse="false"
                                                  leading-pipe="false"
                                                  trailing-pipe="false"
                                                  truncation="none"
                                                  tab-focusable="true"
                                                  inactive="false"
                                                  is-button="false"
                                                  id="external-accounts-link-account"
                                                  data-testid="external-accounts-link-account"
                                                  href="javascript:void(0)"
                                                  label-aria-text
                                                  accessible-text
                                                  className="mds-link--cpo"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <span
                                      id="external-accounts-loader_loading_message_aria"
                                      data-testid="external-accounts-loader_loading_message_aria"
                                      aria-live="polite"
                                      aria-atomic="true"
                                      className="mds-accessible-text"
                                    />
                                    <span
                                      id="external-accounts-loader_loaded_message_aria"
                                      data-testid="external-accounts-loader_loaded_message_aria"
                                      aria-live="polite"
                                      aria-atomic="true"
                                      className="mds-accessible-text"
                                    />
                                  </div>
                                  <div
                                    id="bannerAd"
                                    className="bannerAd rhr-tile-widget mds-mb-5 mds-d-print-none  "
                                  >
                                    <mds-tile
                                      tile-style="next"
                                      variant="next"
                                      tile-title
                                      title-icon-color="regular"
                                      hide-title="true"
                                      more-button-enabled="false"
                                      interactive="true"
                                      horizontal-padding="regular"
                                      tile-cta-orientation="horizontal"
                                      help-button-enabled="false"
                                      bottom-padding="true"
                                      tile-title-heading-level={2}
                                      icon-accessible-description="More"
                                      stacked-tile="false"
                                      inverse="false"
                                      background-color="#FFFFFF"
                                      image-position-vertical="center"
                                      image-position-horizontal="center"
                                      more-button="false"
                                      id="ads-container-ovdBannerAd"
                                      buttons="[]"
                                      links="[]"
                                      title-href="javascript:void(0)"
                                      gradient-colors="[]"
                                      className="mds-tile--cpo"
                                    >
                                      <div slot="tile-content">
                                        <div placement-id="Banner">
                                          <div
                                            className="mktui-nativebanner"
                                            blue-param='{"navKey":"https://www.chase.com/digital/resources/privacy-security/security/how-to-spot-scams#knowncompany"}'
                                            blue-click="makeNavigation"
                                          >
                                            <div data-mkt-id="style">
                                              <style
                                                dangerouslySetInnerHTML={{
                                                  __html:
                                                    "@keyframes mktuiAnimationFadeIn{0%{opacity:0}100%{opacity:1}}@keyframes mktuiAnimationMoveUp10rem{0%{margin-top:-10rem}100%{margin-top:0}}.mktui-mathtableview{padding:1.5rem 0 .625rem .625rem;width:15rem;color:var(--color__neutral-gray__52)}.mktui-mathtableview header{padding:.25rem 0;letter-spacing:0;text-decoration:none}.mktui-mathtableview.start-animation .mktui-mathtableview__value{opacity:0;animation:mktuiAnimationFadeIn 1s forwards}.mktui-mathtableview__body>section{display:flex;justify-content:space-between;padding:.125rem .625rem .125rem 0;position:relative;white-space:nowrap;overflow:hidden}.mktui-mathtableview__body>section:first-of-type>.mktui-mathtableview__value{animation-delay:.2s}.mktui-mathtableview__body>section:nth-of-type(2)>.mktui-mathtableview__value{animation-delay:1.4s}.mktui-mathtableview__body>section:last-of-type{margin:.625rem 0 0 0;padding:.25rem .625rem 0 0;border-top:.0625rem solid var(--color__neutral-gray__57)}.mktui-mathtableview__body>section:last-of-type>.mktui-mathtableview__value{animation-delay:2.6s}.mktui-nativebanner{display:flex;flex-wrap:wrap;width:100%;cursor:pointer;background-color:#fff}.mktui-nativebanner sup{line-height:0}.mktui-nativebanner:focus{outline:.0625rem dashed #717171}.mktui-nativebanner__maincontainer{flex:1}.mktui-nativebanner .mktui-nativebanner-headingcontainer{display:flex;flex-wrap:wrap-reverse;color:var(--semanticColor__text__regular, #414042);margin:1rem 0 1rem 0;gap:1rem}.mktui-nativebanner .mktui-nativebanner-headingcontainer:empty{margin:1.5rem 0 0 0}.mktui-nativebanner .mktui-nativebanner-headingcontainer .mktui-nativebanner-eyebrow{flex:1 1 auto}.mktui-nativebanner .mktui-nativebanner-headingcontainer .mktui-nativebanner-badgecontainer{flex:1 1 auto;text-align:right;margin:.125rem 0 .125rem auto;height:1.25rem}.mktui-nativebanner .mktui-nativebanner-headingcontainer .mktui-nativebanner-badgecontainer img{height:1.25rem}.mktui-nativebanner .mktui-nativebanner-contentcontainer{display:flex;flex-direction:column;padding:0rem 0rem 1.5rem 1rem}.mktui-nativebanner .mktui-nativebanner-contentcontainer .mktui-nativebanner-bodycontainer{display:flex;padding-right:1rem}.mktui-nativebanner .mktui-nativebanner-contentcontainer .mktui-nativebanner-bodycontainer .mktui-nativebanner-primaryImage{margin-right:1rem}.mktui-nativebanner .mktui-nativebanner-contentcontainer .mktui-nativebanner-bodycontainer .mktui-nativebanner-primaryImage img{display:block;width:5.625rem}.mktui-nativebanner .mktui-nativebanner-contentcontainer .mktui-nativebanner-bodycontainer .mktui-nativebanner-primaryImage__small img{display:block;width:3rem}.mktui-nativebanner .mktui-nativebanner-contentcontainer .mktui-nativebanner-bodycontainer .mktui-nativebanner-link{display:inline-block}.mktui-nativebanner .mktui-nativebanner-title{color:var(--semanticColor__text__regular, #414042);letter-spacing:0;text-decoration:none}.mktui-nativebanner .mktui-nativebanner-body{color:var(--semanticColor__text__subdued, #717171);letter-spacing:0;text-decoration:none;margin:.5rem 0 .5rem;overflow:hidden}@media screen and (max-width: 576px){.mktui-nativebanner .mktui-nativebanner-headingcontainer{margin:.5rem 0 .5rem 0;gap:.5rem}}",
                                                }}
                                              />
                                            </div>
                                            <div className="mktui-nativebanner__maincontainer">
                                              <div
                                                className="mktui-nativebanner-contentcontainer"
                                                id="nativeBanner_mktui-nb-1"
                                              >
                                                <div className="mktui-nativebanner-headingcontainer" />
                                                <div className="mktui-nativebanner-bodycontainer">
                                                  <div className="mktui-nativebanner-primaryImage mktui-nativebanner-primaryImage__regular">
                                                    <img
                                                      src={alertImage}
                                                      alt="https: sites.chase.com"
                                                    />
                                                  </div>
                                                  <div className="mktui-nativebanner-bodycontent">
                                                    <div
                                                      role="heading"
                                                      aria-level={2}
                                                      className="mds-body-large-heavier mktui-nativebanner-title"
                                                    >
                                                      Deception alert: The
                                                      latest company
                                                      impersonation scams
                                                    </div>
                                                    <div className="mds-body-medium mktui-nativebanner-body">
                                                      Help stay one step ahead
                                                      of scammers mimicking the
                                                      brands you trust.
                                                    </div>
                                                    <div
                                                      className="mds-body-medium mktui-nativebanner-link"
                                                      blue-click="makeNavigation"
                                                      blue-param='{"navKey":"https://www.chase.com/digital/resources/privacy-security/security/how-to-spot-scams#knowncompany"}'
                                                    >
                                                      <mds-link
                                                        id="mktui-nb-1_mds-link"
                                                        end-icon="ico_chevron_right"
                                                        text="Know what's happening"
                                                        is-button="false"
                                                        href="javascript:void(0)"
                                                        underline="false"
                                                        label-aria-text
                                                        accessible-text
                                                        tab-focusable="true"
                                                        inverse="false"
                                                        leading-pipe="false"
                                                        trailing-pipe="false"
                                                        inactive="false"
                                                        truncation="none"
                                                        className="mds-link--cpo"
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </mds-tile>
                                  </div>
                                  <div
                                    className="mds-d-flex mds-my-3"
                                    data-testid="ovd-recent-activity"
                                  >
                                    <div className="ovd-recent-activity__tile">
                                      <mds-bottom-sheet
                                        supress-button="false"
                                        primary-button-text
                                        tier-two="false"
                                        header-text="transactionDetail.COMMON.title.text"
                                        open="false"
                                        id="ovd-recent-activity-bottom-sheet"
                                        data-testid="ovd-recent-activity-bottom-sheet"
                                        primary-button-accessible-text="primary button"
                                        close-button-accessible-text="close"
                                        back-button-accessible-text="back"
                                        bottom-sheet-content="bottom-sheet-content"
                                        className="mds-bottom-sheet--cpo"
                                      >
                                        <div
                                          className="mds-pb-4 bottom-sheet-content bottom-sheet-width"
                                          slot="bottom-sheet-content"
                                        >
                                          <div slot="bottom-sheet-data" />
                                        </div>
                                      </mds-bottom-sheet>
                                      <mds-tile
                                        tile-style="next"
                                        variant="next"
                                        tile-title="See all transactions"
                                        title-icon-color="regular"
                                        hide-title="false"
                                        buttons='[{"text":"See all transactions"}]'
                                        more-button-enabled="false"
                                        interactive="true"
                                        horizontal-padding="regular"
                                        tile-cta-orientation="horizontal"
                                        help-button-enabled="false"
                                        bottom-padding="true"
                                        tile-title-heading-level={2}
                                        icon-accessible-description="More"
                                        stacked-tile="false"
                                        inverse="false"
                                        background-color="#FFFFFF"
                                        image-position-vertical="center"
                                        image-position-horizontal="center"
                                        more-button="false"
                                        id="ovd-recent-activity-tile"
                                        data-testid="ovd-recent-activity-tile"
                                        links="[]"
                                        title-href="javascript:void(0)"
                                        gradient-colors="[]"
                                        className="mds-tile--cpo"
                                      >
                                        <div slot="tile-content">
                                          <div className="ovd-recent-activity__selector mds-d-flex mds-my-3">
                                            <div className="mds-row mds-px-4 mds-mx-at-0-3 mds-mx-at-576-0 selector-container ">
                                              <div className="mds-pr-4 mds-as-center">
                                                Accounts
                                              </div>
                                              <mds-select
                                                layout="vertical"
                                                variant="box"
                                                floating-label="false"
                                                read-only="false"
                                                placeholder
                                                name="recentActivityAccounts"
                                                error-message-prefix="Error"
                                                decoration="none"
                                                inactive="false"
                                                accessible-text="Accounts "
                                                accessible-text-cardinality-separator="of"
                                                label-key="label"
                                                value-key="value"
                                                selected-index={0}
                                                label-style="vertical"
                                                search-enabled="false"
                                                disable-edge-detection="false"
                                                id="account_options_id-selector-label"
                                                data-testid="account_options_id"
                                                input-columns
                                                label-columns
                                                value={0}
                                                error-messages="[]"
                                                search-input-value
                                                search-no-results-text="No results found"
                                                clear-search-button-acessible-text="Clear search input"
                                                className="mds-select--cpo"
                                              >
                                                <mds-select-option
                                                  label="PREMIER PLUS CKG (...9207)"
                                                  value={0}
                                                  selected="true"
                                                  inactive="false"
                                                  id="account_options_id-0"
                                                  data-testid="account_options_id-0"
                                                  className="mds-select-option--cpo"
                                                  data-index={0}
                                                />
                                                <mds-select-option
                                                  label="PREMIER SAVINGS (...0915)"
                                                  value={1}
                                                  selected="false"
                                                  inactive="false"
                                                  id="account_options_id-1"
                                                  data-testid="account_options_id-1"
                                                  className="mds-select-option--cpo"
                                                  data-index={1}
                                                />
                                                <mds-select-option
                                                  label="CREDIT CARD (...4381)"
                                                  value={2}
                                                  selected="false"
                                                  inactive="false"
                                                  id="account_options_id-2"
                                                  data-testid="account_options_id-2"
                                                  className="mds-select-option--cpo"
                                                  data-index={2}
                                                />
                                                <mds-select-option
                                                  label="CREDIT CARD (...8234)"
                                                  value={3}
                                                  selected="false"
                                                  inactive="false"
                                                  id="account_options_id-3"
                                                  data-testid="account_options_id-3"
                                                  className="mds-select-option--cpo"
                                                  data-index={3}
                                                />
                                                <input
                                                  type="hidden"
                                                  name="recentActivityAccounts"
                                                  defaultValue={0}
                                                  slot="form-associated-input"
                                                />
                                              </mds-select>
                                            </div>
                                            <div className="ovd-recent-activity__advisory mds-d-flex mds-px-4 mds-body-medium" />
                                          </div>
                                          <div className="mds-pt-3">
                                            <div className="mds-pt-1">
                                              <table
                                                id="ovd-recent-activity-table-dataTableId-mds-diy-data-table"
                                                data-testid="ovd-recent-activity-table-dataTableId-mds-diy-data-table"
                                                className="mds-activity-table"
                                                tabIndex={-1}
                                              >
                                                <thead>
                                                  <tr
                                                    id="ovd-recent-activity-table-dataTableIdmds-activity-table__column-headers"
                                                    className="mds-activity-table__header-row--relaxed"
                                                  >
                                                    <th
                                                      scope="col"
                                                      type="columnheader"
                                                      id="ovd-recent-activity-table-dataTableId-column-header-0"
                                                      tabIndex={-1}
                                                      className=" mds-activity-table__column-header--left mds-activity-table__column-header"
                                                      style={{ width: "125px" }}
                                                    >
                                                      <span
                                                        className="mds-activity-table__column-header-containermds-activity-table__column-header-container--left"
                                                        role="none"
                                                      >
                                                        <div
                                                          id="ovd-recent-activity-table-dataTableId-column-header-0_label"
                                                          className="mds-activity-table__column-header--value"
                                                        >
                                                          Date
                                                        </div>
                                                      </span>
                                                    </th>
                                                    <th
                                                      scope="col"
                                                      type="columnheader"
                                                      id="ovd-recent-activity-table-dataTableId-column-header-1"
                                                      tabIndex={-1}
                                                      className=" mds-activity-table__column-header--left mds-activity-table__column-header"
                                                    >
                                                      <span
                                                        className="mds-activity-table__column-header-containermds-activity-table__column-header-container--left"
                                                        role="none"
                                                      >
                                                        <div
                                                          id="ovd-recent-activity-table-dataTableId-column-header-1_label"
                                                          className="mds-activity-table__column-header--value"
                                                        >
                                                          Description
                                                        </div>
                                                      </span>
                                                    </th>
                                                    <th
                                                      scope="col"
                                                      type="columnheader"
                                                      id="ovd-recent-activity-table-dataTableId-column-header-2"
                                                      tabIndex={-1}
                                                      className=" mds-activity-table__column-header"
                                                      style={{ width: "130px" }}
                                                    >
                                                      <span
                                                        className="mds-activity-table__column-header-container"
                                                        role="none"
                                                      >
                                                        <div
                                                          id="ovd-recent-activity-table-dataTableId-column-header-2_label"
                                                          className="mds-activity-table__column-header--value"
                                                        >
                                                          Amount
                                                        </div>
                                                      </span>
                                                    </th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr
                                                    id="ovd-recent-activity-table-dataTableId-row-1"
                                                    className="mds-activity-table__row mds-activity-table__row--relaxed mds-activity-table__row--activated data-table-for-channel__subdued mds-activity-table__row--solid"
                                                    data-index={1}
                                                    tabIndex={-1}
                                                    data-values="Pending,ORIG CO NAME:PERSHING CO ENTRY DESCR:BROKERAGE SEC:PPD ORIG ID:1132741729,$7,071.66"
                                                  >
                                                    <th
                                                      id="ovd-recent-activity-table-dataTableId-row-header-row0-columnundefined"
                                                      scope="row"
                                                      className="mds-activity-table__row-header "
                                                    >
                                                      <div className="mds-activity-table__row-value--text">
                                                        <mds-definition-link
                                                          definition-text="Pending"
                                                          edge-detection="true"
                                                          edge-detection-container-id="below"
                                                          tooltip-alignment="left"
                                                          tooltip-pointer-placement={
                                                            8
                                                          }
                                                          tooltip-placement="below"
                                                          tooltip-message="These transactions and checks are not processed yet. They may not be reflected in your available balance and typically post within 1-3 business days.
Once the transaction or check is processed, you'll see the posted date and amount reflected in your balance. The posted dollar amount may vary from the pending transaction/check amount. This is common with merchants that put a temporary charge on your account before finalizing the amount (for example, hotels, restaurants, gas stations and car rental merchants).
"
                                                          id="Pending_0_id"
                                                          data-testid="Pending_0_id"
                                                          data-type="definition-link"
                                                          data-column={1}
                                                          data-row={1}
                                                          is-button="false"
                                                          href="javascript:void(0)"
                                                          accessible-text
                                                          alignment
                                                          className="mds-definition-link--cpo"
                                                        />
                                                      </div>
                                                    </th>
                                                    <td
                                                      id="ovd-recent-activity-table-dataTableId-value-row0-column1"
                                                      className="mds-activity-table__row-value  mds-activity-table__row-value--left"
                                                    >
                                                      <div className="mds-activity-table__row-value--text mds-activity-table__row-value--text ">
                                                        <span
                                                          className="accessible-text"
                                                          data-testid="rich-text-accessible-text"
                                                        >
                                                          ORIG CO NAME:PERSHING
                                                          CO ENTRY
                                                          DESCR:BROKERAGE
                                                          SEC:PPD ORIG
                                                          ID:1132741729
                                                        </span>
                                                        <div aria-hidden="true">
                                                          <span aria-hidden="true">
                                                            ORIG CO
                                                            NAME:PERSHING CO
                                                            ENTRY
                                                            DESCR:BROKERAGE
                                                            SEC:PPD ORIG
                                                            ID:1132741729
                                                          </span>
                                                        </div>
                                                        <span
                                                          aria-hidden="true"
                                                          role="none"
                                                        />
                                                      </div>
                                                    </td>
                                                    <td
                                                      id="ovd-recent-activity-table-dataTableId-value-row0-column2"
                                                      className="mds-activity-table__row-value  mds-activity-table__row-value--right"
                                                      style={{ width: "130px" }}
                                                    >
                                                      <div
                                                        className="mds-activity-table__row-value--text mds-activity-table__row-value--text "
                                                        style={{
                                                          width: "130px",
                                                        }}
                                                      >
                                                        $7,071.66
                                                      </div>
                                                    </td>
                                                  </tr>
                                                  <tr
                                                    id="ovd-recent-activity-table-dataTableId-row-2"
                                                    className="mds-activity-table__row mds-activity-table__row--relaxed mds-activity-table__row--activated mds-activity-table__row--solid"
                                                    data-index={2}
                                                    tabIndex={-1}
                                                    data-values="Feb 28, 2024,Online Payment 19930345559 To Capital One 02/28,-$500.00"
                                                  >
                                                    <th
                                                      id="ovd-recent-activity-table-dataTableId-row-header-row1-columnundefined"
                                                      scope="row"
                                                      className="mds-activity-table__row-header "
                                                    >
                                                      <div className="mds-activity-table__row-value--text">
                                                        Feb 28, 2024
                                                      </div>
                                                    </th>
                                                    <td
                                                      id="ovd-recent-activity-table-dataTableId-value-row1-column1"
                                                      className="mds-activity-table__row-value  mds-activity-table__row-value--left"
                                                    >
                                                      <div className="mds-activity-table__row-value--text mds-activity-table__row-value--text ">
                                                        <span
                                                          className="accessible-text"
                                                          data-testid="rich-text-accessible-text"
                                                        >
                                                          Online Payment
                                                          19930345559 To Capital
                                                          One 02/28
                                                        </span>
                                                        <div aria-hidden="true">
                                                          <span aria-hidden="true">
                                                            Online Payment
                                                            19930345559 To
                                                            Capital One 02/28
                                                          </span>
                                                        </div>
                                                        <span
                                                          aria-hidden="true"
                                                          role="none"
                                                        />
                                                      </div>
                                                    </td>
                                                    <td
                                                      id="ovd-recent-activity-table-dataTableId-value-row1-column2"
                                                      className="mds-activity-table__row-value  mds-activity-table__row-value--right"
                                                      style={{ width: "130px" }}
                                                    >
                                                      <div
                                                        className="mds-activity-table__row-value--text mds-activity-table__row-value--text "
                                                        style={{
                                                          width: "130px",
                                                        }}
                                                      >
                                                        <span
                                                          aria-hidden="true"
                                                          className="negative"
                                                          data-testid="negative"
                                                          style={{
                                                            "white-space":
                                                              "nowrap",
                                                          }}
                                                        >
                                                          −$500.00
                                                        </span>
                                                        <span className="accessible-text">
                                                          negative $500.00
                                                        </span>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                  <tr
                                                    id="ovd-recent-activity-table-dataTableId-row-3"
                                                    className="mds-activity-table__row mds-activity-table__row--relaxed mds-activity-table__row--activated mds-activity-table__row--solid"
                                                    data-index={3}
                                                    tabIndex={-1}
                                                    data-values="Feb 27, 2024,Payment to Chase card ending in 8234 02/27,-$1,600.00"
                                                  >
                                                    <th
                                                      id="ovd-recent-activity-table-dataTableId-row-header-row2-columnundefined"
                                                      scope="row"
                                                      className="mds-activity-table__row-header "
                                                    >
                                                      <div className="mds-activity-table__row-value--text">
                                                        Feb 27, 2024
                                                      </div>
                                                    </th>
                                                    <td
                                                      id="ovd-recent-activity-table-dataTableId-value-row2-column1"
                                                      className="mds-activity-table__row-value  mds-activity-table__row-value--left"
                                                    >
                                                      <div className="mds-activity-table__row-value--text mds-activity-table__row-value--text ">
                                                        <span
                                                          className="accessible-text"
                                                          data-testid="rich-text-accessible-text"
                                                        >
                                                          Payment to Chase card
                                                          ending in 8234 02/27
                                                        </span>
                                                        <div aria-hidden="true">
                                                          <span aria-hidden="true">
                                                            Payment to Chase
                                                            card ending in 8234
                                                            02/27
                                                          </span>
                                                        </div>
                                                        <span
                                                          aria-hidden="true"
                                                          role="none"
                                                        />
                                                      </div>
                                                    </td>
                                                    <td
                                                      id="ovd-recent-activity-table-dataTableId-value-row2-column2"
                                                      className="mds-activity-table__row-value  mds-activity-table__row-value--right"
                                                      style={{ width: "130px" }}
                                                    >
                                                      <div
                                                        className="mds-activity-table__row-value--text mds-activity-table__row-value--text "
                                                        style={{
                                                          width: "130px",
                                                        }}
                                                      >
                                                        <span
                                                          aria-hidden="true"
                                                          className="negative"
                                                          data-testid="negative"
                                                          style={{
                                                            "white-space":
                                                              "nowrap",
                                                          }}
                                                        >
                                                          −$1,600.00
                                                        </span>
                                                        <span className="accessible-text">
                                                          negative $1,600.00
                                                        </span>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                  <tr
                                                    id="ovd-recent-activity-table-dataTableId-row-4"
                                                    className="mds-activity-table__row mds-activity-table__row--relaxed mds-activity-table__row--activated mds-activity-table__row--solid"
                                                    data-index={4}
                                                    tabIndex={-1}
                                                    data-values="Feb 26, 2024,<a>CHECK # 290</a>,-$382.00"
                                                  >
                                                    <th
                                                      id="ovd-recent-activity-table-dataTableId-row-header-row3-columnundefined"
                                                      scope="row"
                                                      className="mds-activity-table__row-header "
                                                    >
                                                      <div className="mds-activity-table__row-value--text">
                                                        Feb 26, 2024
                                                      </div>
                                                    </th>
                                                    <td
                                                      id="ovd-recent-activity-table-dataTableId-value-row3-column1"
                                                      className="mds-activity-table__row-value  mds-activity-table__row-value--left"
                                                    >
                                                      <div className="mds-activity-table__row-value--text mds-activity-table__row-value--text ">
                                                        <div aria-hidden="false">
                                                          <span aria-hidden="false" />
                                                          <span aria-hidden="false">
                                                            <a
                                                              id="mds-rich-text-link-CHECK-#-290_id_0"
                                                              data-testid="mds-rich-text-link-CHECK-#-290_id_0"
                                                              className="mds-activity-table__rich-text-link"
                                                              data-type="rich-text-link"
                                                              data-column={2}
                                                              data-row={4}
                                                              data-href="#!"
                                                              href="#!"
                                                            >
                                                              CHECK # 290
                                                            </a>
                                                          </span>
                                                          <span aria-hidden="false" />
                                                        </div>
                                                        <span
                                                          aria-hidden="false"
                                                          role="none"
                                                        />
                                                      </div>
                                                    </td>
                                                    <td
                                                      id="ovd-recent-activity-table-dataTableId-value-row3-column2"
                                                      className="mds-activity-table__row-value  mds-activity-table__row-value--right"
                                                      style={{ width: "130px" }}
                                                    >
                                                      <div
                                                        className="mds-activity-table__row-value--text mds-activity-table__row-value--text "
                                                        style={{
                                                          width: "130px",
                                                        }}
                                                      >
                                                        <span
                                                          aria-hidden="true"
                                                          className="negative"
                                                          data-testid="negative"
                                                          style={{
                                                            "white-space":
                                                              "nowrap",
                                                          }}
                                                        >
                                                          −$382.00
                                                        </span>
                                                        <span className="accessible-text">
                                                          negative $382.00
                                                        </span>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                  <tr
                                                    id="ovd-recent-activity-table-dataTableId-row-5"
                                                    className="mds-activity-table__row mds-activity-table__row--relaxed mds-activity-table__row--activated mds-activity-table__row--solid"
                                                    data-index={5}
                                                    tabIndex={-1}
                                                    data-values="Feb 23, 2024,Online Payment 19930345560 To Synchrony/QVC 02/23,-$500.00"
                                                  >
                                                    <th
                                                      id="ovd-recent-activity-table-dataTableId-row-header-row4-columnundefined"
                                                      scope="row"
                                                      className="mds-activity-table__row-header "
                                                    >
                                                      <div className="mds-activity-table__row-value--text">
                                                        Feb 23, 2024
                                                      </div>
                                                    </th>
                                                    <td
                                                      id="ovd-recent-activity-table-dataTableId-value-row4-column1"
                                                      className="mds-activity-table__row-value  mds-activity-table__row-value--left"
                                                    >
                                                      <div className="mds-activity-table__row-value--text mds-activity-table__row-value--text ">
                                                        <span
                                                          className="accessible-text"
                                                          data-testid="rich-text-accessible-text"
                                                        >
                                                          Online Payment
                                                          19930345560 To
                                                          Synchrony/QVC 02/23
                                                        </span>
                                                        <div aria-hidden="true">
                                                          <span aria-hidden="true">
                                                            Online Payment
                                                            19930345560 To
                                                            Synchrony/QVC 02/23
                                                          </span>
                                                        </div>
                                                        <span
                                                          aria-hidden="true"
                                                          role="none"
                                                        />
                                                      </div>
                                                    </td>
                                                    <td
                                                      id="ovd-recent-activity-table-dataTableId-value-row4-column2"
                                                      className="mds-activity-table__row-value  mds-activity-table__row-value--right"
                                                      style={{ width: "130px" }}
                                                    >
                                                      <div
                                                        className="mds-activity-table__row-value--text mds-activity-table__row-value--text "
                                                        style={{
                                                          width: "130px",
                                                        }}
                                                      >
                                                        <span
                                                          aria-hidden="true"
                                                          className="negative"
                                                          data-testid="negative"
                                                          style={{
                                                            "white-space":
                                                              "nowrap",
                                                          }}
                                                        >
                                                          −$500.00
                                                        </span>
                                                        <span className="accessible-text">
                                                          negative $500.00
                                                        </span>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <div
                                                aria-live="polite"
                                                aria-atomic="true"
                                                className="accessible-text"
                                              />
                                              <div
                                                aria-live="polite"
                                                aria-atomic="true"
                                                className="accessible-text1"
                                              />
                                              <span
                                                id="ovd-recent-activity-table-dataTableId_loading_message_aria"
                                                data-testid="ovd-recent-activity-table-dataTableId_loading_message_aria"
                                                aria-live="polite"
                                                aria-atomic="true"
                                                className="mds-accessible-text"
                                              />
                                              <span
                                                id="ovd-recent-activity-table-dataTableId_loaded_message_aria"
                                                data-testid="ovd-recent-activity-table-dataTableId_loaded_message_aria"
                                                aria-live="polite"
                                                aria-atomic="true"
                                                className="mds-accessible-text"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </mds-tile>
                                    </div>
                                  </div>
                                  <mds-dialog
                                    height-type="contentFit"
                                    header-text=" isn't available right now."
                                    content-horizontal-padding={16}
                                    primary-button-text="OK"
                                    dialog-header-icon-name="ico_alert_filled"
                                    dialog-header-icon-accessible-name="Please note"
                                    close-on-overlay-click="true"
                                    button-orientation="horizontal"
                                    hide-header="false"
                                    open="false"
                                    dialog-width={600}
                                    heading-level={2}
                                    trigger-id
                                    id="maintenance-mode-dialog"
                                    data-testid="maintenance-mode-dialog"
                                    className="mds-dialog--cpo"
                                  >
                                    <div
                                      slot="dialogContent"
                                      className="modal-dialog__slot-content mds-d-flex mds-fd-column mds-jc-space-between"
                                    >
                                      <div>
                                        <div
                                          className="mds-container-fluid maintenance-dialog-content"
                                          data-testid="maintenance-dialog-content"
                                        >
                                          We're working quickly to fix it.
                                          Please try again later.
                                        </div>
                                      </div>
                                      <div />
                                    </div>
                                  </mds-dialog>
                                  <mds-dialog
                                    height-type="contentFit"
                                    header-text="Full Account and Routing Number"
                                    content-horizontal-padding={16}
                                    primary-button-text="Close"
                                    close-on-overlay-click="true"
                                    button-orientation="horizontal"
                                    hide-header="false"
                                    open="false"
                                    dialog-width={453}
                                    heading-level={2}
                                    trigger-id
                                    id="account-and-routing-number"
                                    data-testid="account-and-routing-number"
                                    className="mds-dialog--cpo"
                                  >
                                    <div
                                      slot="dialogContent"
                                      className="modal-dialog__slot-content mds-d-flex mds-fd-column mds-jc-space-between"
                                    >
                                      <div>
                                        <div
                                          id="account-and-routing-number-dialog-print-header"
                                          className="mds-d-print-flex mds-d-none mds-fd-column mds-ai-center mds-jc-center"
                                          data-testid="print-header"
                                        >
                                          <div>
                                            <mds-image
                                              alt
                                              background-size="contain"
                                              vertical-position="center"
                                              horizontal-position="center"
                                              id="account-and-routing-number-dialog-print-header-print-header-logo"
                                              image-sources='[{"minBreakpoint":0,"imageSource":"https://static2.chasecdn.com/content/dam/unified-assets/logo/chase/chase-logo/additional-file-formats/logo_chase_blk.svg","height":28}]'
                                              data-testid="account-and-routing-number-dialog-print-header-print-header-logo"
                                              className="mds-image--cpo"
                                            />
                                          </div>
                                          <p className="mds-body-small">
                                            Printed from Chase Personal Online
                                          </p>
                                        </div>
                                        <span
                                          className="modal-dialog__print-title mds-px-4 mds-pos-relative mds-body-large mds-d-print-flex mds-jc-flex-start mds-d-none"
                                          data-testid="dialogPrintTitle"
                                        >
                                          Full Account and Routing Number
                                        </span>
                                        <div className>
                                          <mds-skeleton-loader
                                            accessible-is-loading-text
                                            accessible-has-loaded-text
                                            variant="content-block"
                                            is-animated="true"
                                            id="account-and-routing-number-loader"
                                            data-testid="account-and-routing-number-loader"
                                            className="mds-skeleton-loader--cpo"
                                          />
                                        </div>
                                      </div>
                                      <div>
                                        <footer
                                          id="account-and-routing-number-dialog-print-footer"
                                          data-testid="print-footer"
                                          className="mds-d-print-block mds-d-none"
                                        >
                                          <div className="mds-d-flex mds-fd-row mds-jc-space-between mds-body-medium print-footer__content">
                                            <div
                                              className="mds-px-0 mds-col-4 print-footer__content-item"
                                              data-testid="print-footer-tag-0"
                                            >
                                              <span>
                                                JPMorgan Chase Bank, N.A. Member
                                                FDIC
                                              </span>
                                              <div className="mds-d-print-none" />
                                            </div>
                                            <div
                                              className="mds-px-0 mds-col-4 print-footer__content-item"
                                              data-testid="print-footer-tag-1"
                                            >
                                              <span>
                                                ©2024 JPMorgan Chase &amp; Co
                                              </span>
                                              <div className="mds-d-print-none" />
                                            </div>
                                            <div
                                              className="mds-px-0 mds-col-4 print-footer__content-item"
                                              data-testid="print-footer-tag-2"
                                            >
                                              <span>
                                                Equal Opportunity Lender
                                              </span>
                                              <div className="mds-d-print-none">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  xmlSpace="preserve"
                                                  width="1em"
                                                  height="1em"
                                                  viewBox="0 0 48 48"
                                                >
                                                  <g
                                                    fill="#666"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                  >
                                                    <path d="M2 19.859 24.248 7 46 19.986v5.036h-3.47V41H5.409V25.022H2v-5.163zm22.247-7.5-14.315 8.53V36.93h28.321V20.889l-14.006-8.53z" />
                                                    <path d="M16.594 26v-3.947h14.812V26H16.594zm0 2.053h14.812V32H16.594v-3.947z" />
                                                  </g>
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                        </footer>
                                      </div>
                                      <div
                                        id="mds-skeleton-loader-live-region-account-and-routing-number"
                                        aria-live="polite"
                                        aria-atomic="true"
                                        style={{
                                          clip: "rect(0.0625rem, 0.0625rem, 0.0625rem, 0.0625rem)",
                                          position: "absolute !important",
                                          padding: "0 !important",
                                          border: "0 !important",
                                          height: "0.0625rem !important",
                                          width: "0.0625rem !important",
                                          overflow: "hidden",
                                        }}
                                      />
                                    </div>
                                  </mds-dialog>
                                  <mds-dialog
                                    height-type="contentFit"
                                    header-text="The “More” button isn’t available right now."
                                    content-horizontal-padding={16}
                                    primary-button-text="OK"
                                    dialog-header-icon-name="ico_alert_filled"
                                    dialog-header-icon-accessible-name="Please note"
                                    close-on-overlay-click="true"
                                    button-orientation="horizontal"
                                    hide-header="false"
                                    open="false"
                                    dialog-width={600}
                                    heading-level={2}
                                    trigger-id
                                    id="more-menu-outage-dialog"
                                    data-testid="more-menu-outage-dialog"
                                    className="mds-dialog--cpo"
                                  >
                                    <div
                                      slot="dialogContent"
                                      className="modal-dialog__slot-content mds-d-flex mds-fd-column mds-jc-space-between"
                                    >
                                      <div>
                                        <div
                                          className="mds-container-fluid more-menu-outage-dialog-content"
                                          data-testid="more-menu-outage-dialog-content"
                                        >
                                          We're working quickly to fix it.
                                          Please try again later.
                                        </div>
                                      </div>
                                      <div />
                                    </div>
                                  </mds-dialog>
                                </div>
                              </div>
                              <div className="mds-col-12 mds-col-at-992-4 mds-mt-at-992-6 mds-mb-at-0-4 mds-mb-at-768-5 mds-mt-at-0-4 fit-content mds-d-print-none">
                                <div className="rhr-tile-widgets">
                                  <div id="right-rail-container" className>
                                    <div
                                      id="widget-rewards"
                                      className="rhr-tile-widget mds-mb-5"
                                    >
                                      <mds-tile
                                        tile-style="next"
                                        variant="next"
                                        tile-title="Rewards"
                                        title-icon-color="regular"
                                        hide-title="false"
                                        more-button-enabled="false"
                                        interactive="false"
                                        horizontal-padding="regular"
                                        tile-cta-orientation="horizontal"
                                        help-button-enabled="false"
                                        bottom-padding="true"
                                        tile-title-heading-level={2}
                                        icon-accessible-description="More"
                                        stacked-tile="false"
                                        inverse="false"
                                        background-color="#FFFFFF"
                                        image-position-vertical="center"
                                        image-position-horizontal="center"
                                        more-button="false"
                                        id="rewards-multi-navigation-tile-TileId"
                                        data-testid="tile-rewards-multi-navigation-tile-testId"
                                        buttons="[]"
                                        links="[]"
                                        title-href="javascript:void(0)"
                                        gradient-colors="[]"
                                        className="mds-tile--cpo"
                                      >
                                        <div slot="tile-content">
                                          <div
                                            data-testid="rewards-multi-navigation-tile-TileListId-remove-padding"
                                            style={{
                                              "margin-left": "-16px",
                                              "margin-right": "-8px",
                                              "margin-bottom": "-12px",
                                            }}
                                          >
                                            <mds-list
                                              collapsible="false"
                                              default-collapsed="false"
                                              selected-index={-1}
                                              selected-indices="[]"
                                              show-last-divider="false"
                                              multi-column-enabled="false"
                                              condensed="false"
                                              selected-radio
                                              list-type="navigational"
                                              id="rewards-multi-navigation-tile-TileListId"
                                              data-testid="rewards-multi-navigation-tile-TileListId"
                                              className="mds-list--cpo"
                                            >
                                              <mds-list-item
                                                label="23,277"
                                                image-url={unitedFavicon}
                                                is-animated="false"
                                                label-style="titleMediumHeavier"
                                                description="MileagePlus® Miles"
                                                description-color="subdued"
                                                secondary-label-color="regular"
                                                secondary-description-color="subdued"
                                                image-width={32}
                                                navigational-accessible-description="23,277 MileagePlus® Miles More details"
                                                tag-color="base"
                                                selected="false"
                                                id="0480-ItemId"
                                                data-testid="0480-ItemId"
                                                accessible-text-cardinality-separator="of"
                                                className="mds-list-item--cpo"
                                              />
                                            </mds-list>
                                          </div>
                                          <mds-button
                                            width-type="content"
                                            text="See disclosures"
                                            icon-position="leading"
                                            variant="tertiary"
                                            small="true"
                                            disable-live-region="false"
                                            inverse="false"
                                            tooltip-alignment="center"
                                            tooltip-pointer-placement={8}
                                            tooltip-placement="below"
                                            icon-type="ico_question_mark_circle"
                                            inactive="false"
                                            tab-focusable="true"
                                            type="button"
                                            is-loading="false"
                                            id="disclosures-overlay-cta"
                                            data-testid="disclosures-overlay-cta"
                                            accessible-text
                                            className="mds-button--cpo"
                                          />
                                        </div>
                                      </mds-tile>
                                      <mds-dialog
                                        height-type="contentFit"
                                        header-text="Rewards disclosures"
                                        content-horizontal-padding={16}
                                        primary-button-text="Close"
                                        close-on-overlay-click="true"
                                        button-orientation="horizontal"
                                        hide-header="false"
                                        open="false"
                                        dialog-width={600}
                                        heading-level={2}
                                        trigger-id="disclosures-overlay-cta"
                                        id="rewards-disclosures-overlay"
                                        data-testid="rewards-disclosures-overlay"
                                        className="mds-dialog--cpo"
                                      >
                                        <div
                                          slot="dialogContent"
                                          className="modal-dialog__slot-content mds-d-flex mds-fd-column mds-jc-space-between"
                                        >
                                          <div>
                                            <div slot="dialogContent">
                                              <ul
                                                role="list"
                                                className="List-cmb-light-module_list__2rnxz"
                                                data-testid="rewards-disclosures-overlay-list"
                                              >
                                                <li
                                                  role="listitem"
                                                  className="jyc0Q0VOX8dxwcRoEQsN"
                                                  id={480}
                                                  data-testid="rewards-disclosures-overlay-list-item__0480"
                                                >
                                                  <div className="zIjNKvwZ9tC4JZYG1bgR PFWsnKLPw2poW3wCq9SQ">
                                                    <div
                                                      className="AAF47lB3wHYT8_T9c2_L"
                                                      data-testid="rewards-disclosures-overlay-list-item__0480-media-asset"
                                                    >
                                                      <img
                                                        alt
                                                        src={unitedFavicon}
                                                        style={{
                                                          width: "32px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="rewards-disclosures-list-item-text List-cmb-light-module_list__item__text__DDLWj List-cmb-light-module_list__item__text--left-alignment__hSEMk">
                                                      <h3
                                                        className="mds-m-0 tACUDmGn2iZnwuYkKOQm"
                                                        aria-level={3}
                                                      >
                                                        MileagePlus® Miles
                                                      </h3>
                                                      <p className="mds-m-0 eZcOqEY4CJ3eT1JrpwWG KmSa3zzyR0O5M2xsL6Jn">
                                                        The total reflects your
                                                        available rewards,
                                                        including those earned
                                                        with your card through
                                                        the last statement
                                                        balance. Pending rewards
                                                        earned from this card
                                                        will be added to your
                                                        next statement. Refer to
                                                        the partner’s site for
                                                        additional details and
                                                        up-to-date rewards
                                                        information.
                                                      </p>
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div />
                                        </div>
                                      </mds-dialog>
                                    </div>
                                    <div
                                      id="widget-plan-track-manage"
                                      className="rhr-tile-widget mds-mb-5 "
                                    >
                                      <mds-tile
                                        tile-style="next"
                                        variant="next"
                                        tile-title="Plan, track & manage"
                                        title-icon-color="regular"
                                        hide-title="false"
                                        more-button-enabled="false"
                                        interactive="false"
                                        horizontal-padding="regular"
                                        tile-cta-orientation="horizontal"
                                        help-button-enabled="false"
                                        bottom-padding="true"
                                        tile-title-heading-level={2}
                                        icon-accessible-description="More"
                                        stacked-tile="false"
                                        inverse="false"
                                        background-color="#FFFFFF"
                                        image-position-vertical="center"
                                        image-position-horizontal="center"
                                        more-button="false"
                                        id="PTM-Tile-TileId"
                                        data-testid="tile-PTM-Tile-testId"
                                        data-elementname="planTrackManageTileId"
                                        buttons="[]"
                                        links="[]"
                                        title-href="javascript:void(0)"
                                        gradient-colors="[]"
                                        className="mds-tile--cpo"
                                      >
                                        <div slot="tile-content">
                                          <div
                                            data-testid="PTM-Tile-TileListId-remove-padding"
                                            style={{
                                              "margin-left": "-16px",
                                              "margin-right": "-8px",
                                              "margin-bottom": "-12px",
                                            }}
                                          >
                                            <mds-list
                                              collapsible="false"
                                              default-collapsed="false"
                                              selected-index={-1}
                                              selected-indices="[]"
                                              show-last-divider="false"
                                              multi-column-enabled="false"
                                              condensed="false"
                                              selected-radio
                                              list-type="navigational"
                                              id="PTM-Tile-TileListId"
                                              data-testid="PTM-Tile-TileListId"
                                              className="mds-list--cpo"
                                            >
                                              <mds-list-item
                                                label="Autosave"
                                                image-url="https://static.chasecdn.com/web/library/@mds/web-illustrations/13.1.0/dist/cmb/svgs/mds_ill_piggy_bank_supporting_circle.svg"
                                                is-animated="false"
                                                label-style="bodyMedium"
                                                description="Set a goal, save automatically and track your progress"
                                                description-color="subdued"
                                                secondary-label-color="regular"
                                                secondary-description-color="subdued"
                                                navigational-accessible-description="Autosave"
                                                tag-color="base"
                                                selected="false"
                                                id="autoSave-ItemId"
                                                data-testid="autoSave-ItemId"
                                                accessible-text-cardinality-separator="of"
                                                className="mds-list-item--cpo"
                                              />
                                              <mds-list-item
                                                label="Spending & Budgeting"
                                                image-url="https://static.chasecdn.com/web/library/@mds/web-illustrations/13.1.0/dist/cmb/svgs/mds_ill_wallet_supporting_circle.svg"
                                                is-animated="false"
                                                label-style="bodyMedium"
                                                description="Set a budget and track your spending"
                                                description-color="subdued"
                                                secondary-label-color="regular"
                                                secondary-description-color="subdued"
                                                navigational-accessible-description="Spending & Budgeting"
                                                tag-color="base"
                                                selected="false"
                                                id="spendingAndBudgeting-ItemId"
                                                data-testid="spendingAndBudgeting-ItemId"
                                                accessible-text-cardinality-separator="of"
                                                className="mds-list-item--cpo"
                                              />
                                              <mds-list-item
                                                label="Chase MyHome"
                                                image-url="https://static.chasecdn.com/web/library/@mds/web-illustrations/13.1.0/dist/cmb/svgs/mds_ill_home_supporting_circle.svg"
                                                is-animated="false"
                                                label-style="bodyMedium"
                                                description="See rates, properties and insights, and manage your mortgage"
                                                description-color="subdued"
                                                secondary-label-color="regular"
                                                secondary-description-color="subdued"
                                                navigational-accessible-description="Chase MyHome"
                                                tag-color="base"
                                                selected="false"
                                                id="chaseMyHome-ItemId"
                                                data-testid="chaseMyHome-ItemId"
                                                accessible-text-cardinality-separator="of"
                                                className="mds-list-item--cpo"
                                              />
                                              <mds-list-item
                                                label="All things auto"
                                                image-url="https://static.chasecdn.com/web/library/@mds/web-illustrations/13.1.0/dist/cmb/svgs/mds_ill_car_supporting_circle.svg"
                                                is-animated="false"
                                                label-style="bodyMedium"
                                                description="Get financing and insights to help you buy and own a car."
                                                description-color="subdued"
                                                secondary-label-color="regular"
                                                secondary-description-color="subdued"
                                                navigational-accessible-description="All things auto"
                                                tag-color="base"
                                                selected="false"
                                                id="chaseMyAutoControl-ItemId"
                                                data-testid="chaseMyAutoControl-ItemId"
                                                accessible-text-cardinality-separator="of"
                                                className="mds-list-item--cpo"
                                              />
                                            </mds-list>
                                          </div>
                                        </div>
                                      </mds-tile>
                                      <mds-dialog
                                        height-type="absolute"
                                        header-text="Spending & Budgeting"
                                        content-horizontal-padding={16}
                                        primary-button-text="Cancel"
                                        close-on-overlay-click="true"
                                        button-orientation="horizontal"
                                        hide-header="false"
                                        open="false"
                                        dialog-width={600}
                                        heading-level={2}
                                        id="spending-and-budget-overlay"
                                        data-testid="spending-and-budget-overlay"
                                        className="mds-dialog--cpo"
                                      >
                                        <div slot="dialogContent">
                                          <mds-list
                                            collapsible="false"
                                            default-collapsed="false"
                                            selected-index={-1}
                                            selected-indices="[]"
                                            show-last-divider="false"
                                            multi-column-enabled="false"
                                            condensed="false"
                                            selected-radio
                                            list-type="navigational"
                                            id="spending-and-budget-overlay-navigation-list"
                                            data-testid="spending-and-budget-overlay-list"
                                            className="mds-list--cpo"
                                          >
                                            <mds-list-item
                                              label="Budget"
                                              is-animated="false"
                                              label-style="bodyMedium"
                                              description="Track and manage your monthly spending"
                                              description-color="subdued"
                                              secondary-label-color="regular"
                                              secondary-description-color="subdued"
                                              navigational-accessible-description="Budget"
                                              tag-color="base"
                                              selected="false"
                                              id="overlayBudget"
                                              data-testid="spending-and-budget-overlay-list-item__overlayBudget"
                                              accessible-text-cardinality-separator="of"
                                              className="mds-list-item--cpo"
                                            />
                                            <mds-list-item
                                              label="Spending summary"
                                              is-animated="false"
                                              label-style="bodyMedium"
                                              description="Break down your spending by category"
                                              description-color="subdued"
                                              secondary-label-color="regular"
                                              secondary-description-color="subdued"
                                              navigational-accessible-description="Spending summary"
                                              tag-color="base"
                                              selected="false"
                                              id="overlaySpendingSummary"
                                              data-testid="spending-and-budget-overlay-list-item__overlaySpendingSummary"
                                              accessible-text-cardinality-separator="of"
                                              className="mds-list-item--cpo"
                                            />
                                          </mds-list>
                                        </div>
                                      </mds-dialog>
                                    </div>
                                    <div
                                      className="rhr-tile-widget mds-mb-5 "
                                      id="widget-credit-journey"
                                    >
                                      <mds-tile
                                        tile-style="next"
                                        variant="next"
                                        tile-title="Credit Journey"
                                        title-icon-color="regular"
                                        hide-title="false"
                                        buttons='[{"text":"Get free score","variant":"primary"}]'
                                        more-button-enabled="false"
                                        interactive="false"
                                        horizontal-padding="regular"
                                        tile-cta-orientation="horizontal"
                                        help-button-enabled="false"
                                        bottom-padding="true"
                                        tile-title-heading-level={2}
                                        icon-accessible-description="More"
                                        stacked-tile="false"
                                        inverse="false"
                                        background-color="#FFFFFF"
                                        image-position-vertical="center"
                                        image-position-horizontal="center"
                                        more-button="false"
                                        id="creditJourneyUnenrolledTile-TileId"
                                        data-testid="tile-creditJourneyUnenrolledTile-testId"
                                        data-elementname="CurrentCreditJourneyTileId"
                                        links="[]"
                                        title-href="javascript:void(0)"
                                        gradient-colors="[]"
                                        className="mds-tile--cpo"
                                      >
                                        <div slot="tile-content">
                                          <div
                                            className="single-navigation-tile mds-pt-2 mds-ai-center mds-d-flex false"
                                            data-testid="creditJourneyUnenrolledTile-testId"
                                          >
                                            <div className="mds-d-inline-block credit-journey__image">
                                              <mds-image
                                                alt
                                                background-size="contain"
                                                vertical-position="center"
                                                horizontal-position="center"
                                                id="creditJourneyUnenrolledTile-image"
                                                image-sources='[{"minBreakpoint":0,"imageSource":"https://static.chasecdn.com/web/library/@mds/web-illustrations/13.1.0/dist/cmb/svgs/mds_ill_credit_score_featured.svg","width":"48"}]'
                                                data-testid="creditJourneyUnenrolledTile-image"
                                                className="mds-image--cpo"
                                              />
                                            </div>
                                            <div className="width-adjustment">
                                              <div
                                                data-testid="creditJourneyUnenrolledTile-testId-color-override"
                                                className="mds-d-inline-block mds-va-top text-color-gray credit-journey__un-enrolled-label-size"
                                              >
                                                Sign up for your free credit
                                                score and more
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </mds-tile>
                                    </div>
                                    <div
                                      id="widget-moip-merchant-offers"
                                      className="rhr-tile-widget mds-mb-5 "
                                    >
                                      <div id="connected-ovd-homepage-entrypoint-container">
                                        <div
                                          className="_1vyuyaf0 whiteColorTheme"
                                          role="tabpanel"
                                          tabIndex={0}
                                          aria-roledescription="carousel"
                                          aria-label="Chase Offers"
                                        >
                                          <div className="_1vyuyaf6">
                                            <div
                                              data-testid="offer-carousel-header-container"
                                              role="button"
                                              tabIndex={0}
                                              className="_1vyuyaf3"
                                            >
                                              <div className="_1aavoq90">
                                                <div className="_1aavoq91">
                                                  <div
                                                    className="mds-body-large-heavier semanticColorTextRegular"
                                                    role="heading"
                                                    aria-level={2}
                                                  >
                                                    <span data-testid="offerCarouselHeaderTitle">
                                                      Chase Offers
                                                    </span>
                                                  </div>
                                                  <div className="_1aavoq92">
                                                    <div className="mds-body-small _1aavoq94 totalBadgeBackgroundColor">
                                                      <span
                                                        data-testid="offerCarouselHeaderTotalBadge"
                                                        data-cy="offerCarouselHeaderTotalBadge"
                                                      >
                                                        93
                                                      </span>
                                                    </div>
                                                    <mds-icon
                                                      type="ico_chevron_right"
                                                      color="default"
                                                      size={16}
                                                      accessible-text="See all offers"
                                                      remove-horizontal-margin="true"
                                                      data-testid="offers-hub-icon"
                                                      className="mds-icon--cpo"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="mds-body-medium _1aavoq93 semanticColorTextSubdued">
                                                  <span data-testid="offerCarouselHeaderDetails">
                                                    Add deals, shop and get cash
                                                    back
                                                  </span>
                                                  <span
                                                    data-testid="offerCarouselHeaderAccountDetails"
                                                    data-cy="offerCarouselHeaderAccountDetails"
                                                  >
                                                    CREDIT CARD (...8234)
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            id="offer-carousel-container"
                                            className="_1vyuyaf4"
                                          >
                                            <div className="_1h84jaf0">
                                              <div
                                                className="_1h84jaf1"
                                                role="list"
                                              >
                                                <div
                                                  className="_1h84jaf2"
                                                  role="listitem"
                                                >
                                                  <div
                                                    style={{ height: "100%" }}
                                                  >
                                                    <div
                                                      role="button"
                                                      tabIndex={0}
                                                      className="d1y89z0 whiteColorTheme colorNeutralGray24"
                                                      id="CDLX:1000049234:1000049234-c"
                                                      aria-labelledby="banner-CDLX:1000049234:1000049234-c CDLX:1000049234:1000049234-c"
                                                      aria-label="ezCater 10% cash back Add offer"
                                                      data-cy="commerce-tile"
                                                      data-testid="commerce-tile"
                                                    >
                                                      <div
                                                        role="button"
                                                        className="d1y89zb"
                                                      >
                                                        <div className="d1y89ze">
                                                          <div
                                                            role="img"
                                                            id="banner-CDLX:1000049234:1000049234-c"
                                                            aria-label="New"
                                                          >
                                                            <div aria-hidden="true">
                                                              <mds-tag
                                                                color="accent"
                                                                interactive="false"
                                                                text="New"
                                                                data-testid="tile-banner"
                                                                className="mds-tag--cpo"
                                                              />
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="d1y89z1 semanticColorBorderDecorative">
                                                          <img
                                                            className="d1y89z2"
                                                            alt
                                                          />
                                                        </div>
                                                        <div
                                                          className="d1y89z5"
                                                          data-testid="logo-container"
                                                        >
                                                          <img
                                                            className="d1y89z6 colorNeutralGray24"
                                                            alt
                                                          />
                                                        </div>
                                                        <div className="d1y89zc">
                                                          <span className="mds-body-small d1y89zg">
                                                            ezCater
                                                          </span>
                                                          <span className="mds-body-medium-heavier d1y89zf">
                                                            10% cash back
                                                          </span>
                                                        </div>
                                                      </div>
                                                      <div className="d1y89z7">
                                                        <div className="d1y89z8">
                                                          <div
                                                            className="d1y89z9"
                                                            role="button"
                                                            aria-label="Add offer"
                                                          >
                                                            <mds-icon
                                                              type="ico_add_circle"
                                                              color="interactive"
                                                              size={20}
                                                              accessible-text="Add offer"
                                                              remove-horizontal-margin="false"
                                                              data-cy="commerce-tile-button"
                                                              data-testid="commerce-tile-button"
                                                              className="mds-icon--cpo horizontal-margin"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="_1h84jaf2"
                                                  role="listitem"
                                                >
                                                  <div
                                                    style={{ height: "100%" }}
                                                  >
                                                    <div
                                                      role="button"
                                                      tabIndex={0}
                                                      className="d1y89z0 whiteColorTheme colorNeutralGray24"
                                                      id="FIGG:1547162"
                                                      aria-labelledby="banner-FIGG:1547162 FIGG:1547162"
                                                      aria-label="TurboTax $10 cash back Add offer"
                                                      data-cy="commerce-tile"
                                                      data-testid="commerce-tile"
                                                    >
                                                      <div
                                                        role="button"
                                                        className="d1y89zb"
                                                      >
                                                        <div className="d1y89ze">
                                                          <div
                                                            role="img"
                                                            id="banner-FIGG:1547162"
                                                            aria-label="New"
                                                          >
                                                            <div aria-hidden="true">
                                                              <mds-tag
                                                                color="accent"
                                                                interactive="false"
                                                                text="New"
                                                                data-testid="tile-banner"
                                                                className="mds-tag--cpo"
                                                              />
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="d1y89z1 semanticColorBorderDecorative">
                                                          <img
                                                            className="d1y89z2"
                                                            alt
                                                          />
                                                        </div>
                                                        <div
                                                          className="d1y89z5"
                                                          data-testid="logo-container"
                                                        >
                                                          <img
                                                            className="d1y89z6 colorNeutralGray24"
                                                            alt
                                                          />
                                                        </div>
                                                        <div className="d1y89zc">
                                                          <span className="mds-body-small d1y89zg">
                                                            TurboTax
                                                          </span>
                                                          <span className="mds-body-medium-heavier d1y89zf">
                                                            $10 cash back
                                                          </span>
                                                        </div>
                                                      </div>
                                                      <div className="d1y89z7">
                                                        <div className="d1y89z8">
                                                          <div
                                                            className="d1y89z9"
                                                            role="button"
                                                            aria-label="Add offer"
                                                          >
                                                            <mds-icon
                                                              type="ico_add_circle"
                                                              color="interactive"
                                                              size={20}
                                                              accessible-text="Add offer"
                                                              remove-horizontal-margin="false"
                                                              data-cy="commerce-tile-button"
                                                              data-testid="commerce-tile-button"
                                                              className="mds-icon--cpo horizontal-margin"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="_1h84jaf2"
                                                  role="listitem"
                                                >
                                                  <div
                                                    style={{ height: "100%" }}
                                                  >
                                                    <div
                                                      role="button"
                                                      tabIndex={0}
                                                      className="d1y89z0 whiteColorTheme colorNeutralGray24"
                                                      id="CDLX:1000049094:1000049094-c"
                                                      aria-labelledby="banner-CDLX:1000049094:1000049094-c CDLX:1000049094:1000049094-c"
                                                      aria-label="HelloFresh.com 15% cash back Add offer"
                                                      data-cy="commerce-tile"
                                                      data-testid="commerce-tile"
                                                    >
                                                      <div
                                                        role="button"
                                                        className="d1y89zb"
                                                      >
                                                        <div className="d1y89ze">
                                                          <div
                                                            role="img"
                                                            id="banner-CDLX:1000049094:1000049094-c"
                                                            aria-label="New"
                                                          >
                                                            <div aria-hidden="true">
                                                              <mds-tag
                                                                color="accent"
                                                                interactive="false"
                                                                text="New"
                                                                data-testid="tile-banner"
                                                                className="mds-tag--cpo"
                                                              />
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="d1y89z1 semanticColorBorderDecorative">
                                                          <img
                                                            className="d1y89z2"
                                                            alt
                                                          />
                                                        </div>
                                                        <div
                                                          className="d1y89z5"
                                                          data-testid="logo-container"
                                                        >
                                                          <img
                                                            className="d1y89z6 colorNeutralGray24"
                                                            alt
                                                          />
                                                        </div>
                                                        <div className="d1y89zc">
                                                          <span className="mds-body-small d1y89zg">
                                                            HelloFresh.com
                                                          </span>
                                                          <span className="mds-body-medium-heavier d1y89zf">
                                                            15% cash back
                                                          </span>
                                                        </div>
                                                      </div>
                                                      <div className="d1y89z7">
                                                        <div className="d1y89z8">
                                                          <div
                                                            className="d1y89z9"
                                                            role="button"
                                                            aria-label="Add offer"
                                                          >
                                                            <mds-icon
                                                              type="ico_add_circle"
                                                              color="interactive"
                                                              size={20}
                                                              accessible-text="Add offer"
                                                              remove-horizontal-margin="false"
                                                              data-cy="commerce-tile-button"
                                                              data-testid="commerce-tile-button"
                                                              className="mds-icon--cpo horizontal-margin"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="_1h84jaf3">
                                                <mds-button
                                                  width-type="layout"
                                                  icon-position="icon_only"
                                                  variant="tertiary"
                                                  small="false"
                                                  disable-live-region="false"
                                                  inverse="false"
                                                  tooltip-alignment="center"
                                                  tooltip-pointer-placement={8}
                                                  tooltip-placement="below"
                                                  icon-type="ico_chevron_left"
                                                  inactive="true"
                                                  accessible-text="Click to previous set of offers"
                                                  tab-focusable="false"
                                                  type="button"
                                                  is-loading="false"
                                                  data-testid="leftNav"
                                                  className="mds-button--cpo"
                                                />
                                                <div className="_1h84jaf4">
                                                  <span className="_1h84jaf5">
                                                    <mds-button
                                                      width-type="layout"
                                                      icon-position="icon_only"
                                                      variant="tertiary"
                                                      small="true"
                                                      disable-live-region="false"
                                                      inverse="false"
                                                      tooltip-alignment="center"
                                                      tooltip-pointer-placement={
                                                        8
                                                      }
                                                      tooltip-placement="below"
                                                      icon-type="ico_status_indicator_dot"
                                                      inactive="false"
                                                      accessible-text="Click to set 1, Chase offers"
                                                      tab-focusable="true"
                                                      type="button"
                                                      is-loading="false"
                                                      data-testid="bullet0"
                                                      className="mds-button--cpo"
                                                    />
                                                  </span>
                                                  <span className="_1h84jaf5">
                                                    <mds-button
                                                      width-type="layout"
                                                      icon-position="icon_only"
                                                      variant="tertiary"
                                                      small="true"
                                                      disable-live-region="false"
                                                      inverse="false"
                                                      tooltip-alignment="center"
                                                      tooltip-pointer-placement={
                                                        8
                                                      }
                                                      tooltip-placement="below"
                                                      icon-type="ico_alert_circle"
                                                      inactive="false"
                                                      accessible-text="Click to set 2, Chase offers"
                                                      tab-focusable="true"
                                                      type="button"
                                                      is-loading="false"
                                                      data-testid="bullet1"
                                                      className="mds-button--cpo"
                                                    />
                                                  </span>
                                                  <span className="_1h84jaf5">
                                                    <mds-button
                                                      width-type="layout"
                                                      icon-position="icon_only"
                                                      variant="tertiary"
                                                      small="true"
                                                      disable-live-region="false"
                                                      inverse="false"
                                                      tooltip-alignment="center"
                                                      tooltip-pointer-placement={
                                                        8
                                                      }
                                                      tooltip-placement="below"
                                                      icon-type="ico_alert_circle"
                                                      inactive="false"
                                                      accessible-text="Click to set 3, Chase offers"
                                                      tab-focusable="true"
                                                      type="button"
                                                      is-loading="false"
                                                      data-testid="bullet2"
                                                      className="mds-button--cpo"
                                                    />
                                                  </span>
                                                  <span className="_1h84jaf5">
                                                    <mds-button
                                                      width-type="layout"
                                                      icon-position="icon_only"
                                                      variant="tertiary"
                                                      small="true"
                                                      disable-live-region="false"
                                                      inverse="false"
                                                      tooltip-alignment="center"
                                                      tooltip-pointer-placement={
                                                        8
                                                      }
                                                      tooltip-placement="below"
                                                      icon-type="ico_alert_circle"
                                                      inactive="false"
                                                      accessible-text="Click to set 4, Chase offers"
                                                      tab-focusable="true"
                                                      type="button"
                                                      is-loading="false"
                                                      data-testid="bullet3"
                                                      className="mds-button--cpo"
                                                    />
                                                  </span>
                                                </div>
                                                <mds-button
                                                  width-type="layout"
                                                  icon-position="icon_only"
                                                  variant="tertiary"
                                                  small="false"
                                                  disable-live-region="false"
                                                  inverse="false"
                                                  tooltip-alignment="center"
                                                  tooltip-pointer-placement={8}
                                                  tooltip-placement="below"
                                                  icon-type="ico_chevron_right"
                                                  inactive="false"
                                                  accessible-text="Click to next set of offers"
                                                  tab-focusable="true"
                                                  type="button"
                                                  is-loading="false"
                                                  data-testid="rightNav"
                                                  data-cy="rightNav"
                                                  className="mds-button--cpo"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      id="widget-help-and-support"
                                      className="rhr-tile-widget mds-mb-5 "
                                    >
                                      <mds-tile
                                        tile-style="next"
                                        variant="next"
                                        tile-title="Help & support"
                                        title-icon-color="regular"
                                        hide-title="false"
                                        more-button-enabled="false"
                                        interactive="false"
                                        horizontal-padding="regular"
                                        tile-cta-orientation="horizontal"
                                        help-button-enabled="false"
                                        bottom-padding="true"
                                        tile-title-heading-level={2}
                                        icon-accessible-description="More"
                                        stacked-tile="false"
                                        inverse="false"
                                        background-color="#FFFFFF"
                                        image-position-vertical="center"
                                        image-position-horizontal="center"
                                        more-button="false"
                                        id="helpSupport-TileId"
                                        data-testid="tile-helpSupport-testId"
                                        data-elementname="helpAndSupportTileId"
                                        buttons="[]"
                                        links="[]"
                                        title-href="javascript:void(0)"
                                        gradient-colors="[]"
                                        className="mds-tile--cpo"
                                      >
                                        <div slot="tile-content">
                                          <div
                                            data-testid="helpSupport-TileListId-remove-padding"
                                            style={{
                                              "margin-left": "-16px",
                                              "margin-right": "-8px",
                                              "margin-bottom": "-12px",
                                            }}
                                          >
                                            <mds-list
                                              collapsible="false"
                                              default-collapsed="false"
                                              selected-index={-1}
                                              selected-indices="[]"
                                              show-last-divider="false"
                                              multi-column-enabled="false"
                                              condensed="false"
                                              selected-radio
                                              list-type="navigational"
                                              id="helpSupport-TileListId"
                                              data-testid="helpSupport-TileListId"
                                              className="mds-list--cpo"
                                            >
                                              <mds-list-item
                                                label="Get help replacing cards, reporting fraud, ordering checks, exploring payment assistance, contacting us and more."
                                                image-url="https://static.chasecdn.com/web/library/@mds/web-illustrations/13.1.0/dist/cmb/svgs/mds_ill_light_bulb_supporting_circle.svg"
                                                is-animated="false"
                                                label-style="bodyMedium"
                                                description
                                                description-color="subdued"
                                                secondary-label-color="regular"
                                                secondary-description-color="subdued"
                                                image-width={48}
                                                navigational-accessible-description="Help & support"
                                                tag-color="base"
                                                selected="false"
                                                id="helpSupport-ItemId"
                                                data-testid="helpSupport-ItemId"
                                                accessible-text-cardinality-separator="of"
                                                className="mds-list-item--cpo"
                                              />
                                            </mds-list>
                                          </div>
                                        </div>
                                      </mds-tile>
                                    </div>
                                    <div
                                      id="widget-ads-spotlight"
                                      className="widget-ads-spotlight rhr-tile-widget mds-mb-5  mds-d-print-none  "
                                    >
                                      <mds-tile
                                        tile-style="next"
                                        variant="next"
                                        tile-title
                                        title-icon-color="regular"
                                        hide-title="true"
                                        more-button-enabled="false"
                                        interactive="true"
                                        horizontal-padding="regular"
                                        tile-cta-orientation="horizontal"
                                        help-button-enabled="false"
                                        bottom-padding="true"
                                        tile-title-heading-level={2}
                                        icon-accessible-description="More"
                                        stacked-tile="false"
                                        inverse="false"
                                        background-color="#FFFFFF"
                                        image-position-vertical="center"
                                        image-position-horizontal="center"
                                        more-button="false"
                                        id="ads-container-widget-ads-spotlight"
                                        buttons="[]"
                                        links="[]"
                                        title-href="javascript:void(0)"
                                        gradient-colors="[]"
                                        className="mds-tile--cpo"
                                      >
                                        <div slot="tile-content">
                                          <div placement-id="SpotlightBan1">
                                            <div
                                              className="mktui-benefit-spotlight"
                                              blue-param='{"params":{"dynamicParams":{"cellCode":"X67"}},"navKey":"requestReferAFriendSecurePage"}'
                                              blue-click="makeNavigation"
                                            >
                                              <div data-mkt-id="style">
                                                <style
                                                  dangerouslySetInnerHTML={{
                                                    __html:
                                                      ".mktui-benefit-spotlight{position:relative;cursor:pointer}.mktui-benefit-spotlight .benefitspotlight__header-containter{padding:1.125rem .75rem 0}.mktui-benefit-spotlight .benefitspotlight__header-containter .benefitspotlight__header{font-size:var(--semanticTypography__subtitleMedium__size);font-weight:var(--semanticTypography__headlineLarge__weight);color:var(--color__neutral-gray__73);letter-spacing:0;text-decoration:none}.mktui-benefit-spotlight .benefitspotlight__body-container{display:flex;min-height:8rem;padding:1.25rem 2.25rem 1.5rem}.mktui-benefit-spotlight .benefitspotlight__body-container .benefitspotlight__body-image-container img{height:5.625rem;width:5.625rem}.mktui-benefit-spotlight .benefitspotlight__body-container .benefitspotlight__body{display:flex;flex-direction:column;width:100%;padding-left:1.125rem}.mktui-benefit-spotlight .benefitspotlight__body-container .benefitspotlight__body .benefitspotlight__body-headline{color:var(--color__neutral-gray__73);margin:0 0 .375rem}.mktui-benefit-spotlight .benefitspotlight__body-container .benefitspotlight__body .benefitspotlight__body-text{font-size:.8125rem;font-weight:var(--semanticTypography__subtitleMedium__weight);color:var(--semanticColor__text__subdued);letter-spacing:0;text-decoration:none}.mktui-benefit-spotlight .benefitspotlight__container-separator{margin:0 .75rem;border:0;border-top:.0625rem solid #ccc}.mktui-benefit-spotlight .benefitspotlight__footer{height:2.75rem;padding:0 .75rem;display:flex;justify-content:center;align-items:center}.mktui-benefit-spotlight .benefitspotlight__footer .benefitspotlight__cta{font-size:.8125rem;font-weight:var(--semanticTypography__titleMediumHeavier__weight);color:var(--color__bright-blue__50);letter-spacing:0;text-decoration:none;padding:.625rem 0 .75rem}@media screen and (min-width: 768px){.mktui-benefit-spotlight .benefitspotlight__body-container .benefitspotlight__body .benefitspotlight__body-text{font-size:var(--semanticTypography__bodyMedium__size)}}@media screen and (min-width: 1200px){.mktui-benefit-spotlight .benefitspotlight__footer .benefitspotlight__cta{font-size:var(--semanticTypography__bodyMedium__size)}}",
                                                  }}
                                                />
                                              </div>
                                              <div className="benefitspotlight__container">
                                                <div className="benefitspotlight__header-containter" />
                                                <div className="benefitspotlight__body-container">
                                                  <div className="benefitspotlight__body-image-container">
                                                    <div className="benefitspotlight__body-image">
                                                      <img
                                                        src={referFriendIcon}
                                                        alt="https:sites.chase.com"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="benefitspotlight__body">
                                                    <div
                                                      role="heading"
                                                      aria-level={2}
                                                      className="benefitspotlight__body-headline"
                                                    >
                                                      Refer friends now
                                                    </div>
                                                    <div className="benefitspotlight__body-text">
                                                      Earn rewards when friends
                                                      get approved for a credit
                                                      card.
                                                    </div>
                                                  </div>
                                                </div>
                                                <hr
                                                  className="benefitspotlight__container-separator"
                                                  aria-hidden="true"
                                                />
                                                <div className="benefitspotlight__footer">
                                                  <div
                                                    className="benefitspotlight__cta"
                                                    blue-click="makeNavigation"
                                                    blue-param='{"params":{"dynamicParams":{"cellCode":"X67"}},"navKey":"requestReferAFriendSecurePage"}'
                                                  >
                                                    <mds-link
                                                      id="mktui-benefit-spotlight-1_mds-link"
                                                      text="Start referring"
                                                      is-button="false"
                                                      href="javascript:void(0)"
                                                      underline="false"
                                                      label-aria-text
                                                      accessible-text
                                                      tab-focusable="true"
                                                      inverse="false"
                                                      leading-pipe="false"
                                                      trailing-pipe="false"
                                                      inactive="false"
                                                      truncation="none"
                                                      className="mds-link--cpo"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </mds-tile>
                                    </div>
                                    <div
                                      id="widget-ads-tile"
                                      className="widget-ads-tile rhr-tile-widget mds-mb-5  mds-d-print-none  "
                                    >
                                      <mds-tile
                                        tile-style="next"
                                        variant="next"
                                        tile-title
                                        title-icon-color="regular"
                                        hide-title="true"
                                        more-button-enabled="false"
                                        interactive="true"
                                        horizontal-padding="regular"
                                        tile-cta-orientation="horizontal"
                                        help-button-enabled="false"
                                        bottom-padding="true"
                                        tile-title-heading-level={2}
                                        icon-accessible-description="More"
                                        stacked-tile="false"
                                        inverse="false"
                                        background-color="#FFFFFF"
                                        image-position-vertical="center"
                                        image-position-horizontal="center"
                                        more-button="false"
                                        id="ads-container-widget-ads-tile"
                                        buttons="[]"
                                        links="[]"
                                        title-href="javascript:void(0)"
                                        gradient-colors="[]"
                                        className="mds-tile--cpo"
                                      >
                                        <div slot="tile-content">
                                          <div placement-id="Tile2">
                                            <div
                                              className="mktui-nativebanner"
                                              blue-param='{"navKey":"requestDynamicCreditJourneyScoreDetails"}'
                                              blue-click="makeNavigation"
                                            >
                                              <div data-mkt-id="style">
                                                <style
                                                  dangerouslySetInnerHTML={{
                                                    __html:
                                                      "@keyframes mktuiAnimationFadeIn{0%{opacity:0}100%{opacity:1}}@keyframes mktuiAnimationMoveUp10rem{0%{margin-top:-10rem}100%{margin-top:0}}.mktui-mathtableview{padding:1.5rem 0 .625rem .625rem;width:15rem;color:var(--color__neutral-gray__52)}.mktui-mathtableview header{padding:.25rem 0;letter-spacing:0;text-decoration:none}.mktui-mathtableview.start-animation .mktui-mathtableview__value{opacity:0;animation:mktuiAnimationFadeIn 1s forwards}.mktui-mathtableview__body>section{display:flex;justify-content:space-between;padding:.125rem .625rem .125rem 0;position:relative;white-space:nowrap;overflow:hidden}.mktui-mathtableview__body>section:first-of-type>.mktui-mathtableview__value{animation-delay:.2s}.mktui-mathtableview__body>section:nth-of-type(2)>.mktui-mathtableview__value{animation-delay:1.4s}.mktui-mathtableview__body>section:last-of-type{margin:.625rem 0 0 0;padding:.25rem .625rem 0 0;border-top:.0625rem solid var(--color__neutral-gray__57)}.mktui-mathtableview__body>section:last-of-type>.mktui-mathtableview__value{animation-delay:2.6s}.mktui-nativebanner{display:flex;flex-wrap:wrap;width:100%;cursor:pointer;background-color:#fff}.mktui-nativebanner sup{line-height:0}.mktui-nativebanner:focus{outline:.0625rem dashed #717171}.mktui-nativebanner__maincontainer{flex:1}.mktui-nativebanner .mktui-nativebanner-headingcontainer{display:flex;flex-wrap:wrap-reverse;color:var(--semanticColor__text__regular, #414042);margin:1rem 0 1rem 0;gap:1rem}.mktui-nativebanner .mktui-nativebanner-headingcontainer:empty{margin:1.5rem 0 0 0}.mktui-nativebanner .mktui-nativebanner-headingcontainer .mktui-nativebanner-eyebrow{flex:1 1 auto}.mktui-nativebanner .mktui-nativebanner-headingcontainer .mktui-nativebanner-badgecontainer{flex:1 1 auto;text-align:right;margin:.125rem 0 .125rem auto;height:1.25rem}.mktui-nativebanner .mktui-nativebanner-headingcontainer .mktui-nativebanner-badgecontainer img{height:1.25rem}.mktui-nativebanner .mktui-nativebanner-contentcontainer{display:flex;flex-direction:column;padding:0rem 0rem 1.5rem 1rem}.mktui-nativebanner .mktui-nativebanner-contentcontainer .mktui-nativebanner-bodycontainer{display:flex;padding-right:1rem}.mktui-nativebanner .mktui-nativebanner-contentcontainer .mktui-nativebanner-bodycontainer .mktui-nativebanner-primaryImage{margin-right:1rem}.mktui-nativebanner .mktui-nativebanner-contentcontainer .mktui-nativebanner-bodycontainer .mktui-nativebanner-primaryImage img{display:block;width:5.625rem}.mktui-nativebanner .mktui-nativebanner-contentcontainer .mktui-nativebanner-bodycontainer .mktui-nativebanner-primaryImage__small img{display:block;width:3rem}.mktui-nativebanner .mktui-nativebanner-contentcontainer .mktui-nativebanner-bodycontainer .mktui-nativebanner-link{display:inline-block}.mktui-nativebanner .mktui-nativebanner-title{color:var(--semanticColor__text__regular, #414042);letter-spacing:0;text-decoration:none}.mktui-nativebanner .mktui-nativebanner-body{color:var(--semanticColor__text__subdued, #717171);letter-spacing:0;text-decoration:none;margin:.5rem 0 .5rem;overflow:hidden}@media screen and (max-width: 576px){.mktui-nativebanner .mktui-nativebanner-headingcontainer{margin:.5rem 0 .5rem 0;gap:.5rem}}",
                                                  }}
                                                />
                                              </div>
                                              <div className="mktui-nativebanner__maincontainer">
                                                <div
                                                  className="mktui-nativebanner-contentcontainer"
                                                  id="nativeBanner_mktui-nb-2"
                                                >
                                                  <div className="mktui-nativebanner-headingcontainer" />
                                                  <div className="mktui-nativebanner-bodycontainer">
                                                    <div className="mktui-nativebanner-primaryImage mktui-nativebanner-primaryImage__regular">
                                                      <img
                                                        src={
                                                          creditScoreAppImage
                                                        }
                                                        alt="https:sites.chase.com"
                                                      />
                                                    </div>
                                                    <div className="mktui-nativebanner-bodycontent">
                                                      <div
                                                        role="heading"
                                                        aria-level={2}
                                                        className="mds-body-large-heavier mktui-nativebanner-title"
                                                      >
                                                        A new way to help
                                                        improve your credit
                                                        score
                                                      </div>
                                                      <div className="mds-body-medium mktui-nativebanner-body">
                                                        It’s free and easy to
                                                        get a score improvement
                                                        plan powered by
                                                        Experian™ with Credit
                                                        Journey<sup>®</sup>.
                                                        <br />
                                                      </div>
                                                      <div
                                                        className="mds-body-medium mktui-nativebanner-link"
                                                        blue-click="makeNavigation"
                                                        blue-param='{"navKey":"requestDynamicCreditJourneyScoreDetails"}'
                                                      >
                                                        <mds-link
                                                          id="mktui-nb-2_mds-link"
                                                          end-icon="ico_chevron_right"
                                                          text="Get free plan"
                                                          is-button="false"
                                                          href="javascript:void(0)"
                                                          underline="false"
                                                          label-aria-text
                                                          accessible-text
                                                          tab-focusable="true"
                                                          inverse="false"
                                                          leading-pipe="false"
                                                          trailing-pipe="false"
                                                          inactive="false"
                                                          truncation="none"
                                                          className="mds-link--cpo"
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </mds-tile>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mds-px-at-0-2 mds-px-at-768-3 mds-py-at-768-6 mds-py-at-0-4">
                              <div>
                                <div
                                  className="disclosure-container mds-py-4"
                                  data-testid="disclosure-container"
                                >
                                  <div className="mds-body-small-heavier">
                                    <h2 className="mds-body-small-heavier mds-pb-5">
                                      Disclosures
                                    </h2>
                                    <p className="mds-body-small">
                                      <span>
                                        <span>
                                          <strong>
                                            JPMorgan Chase Bank, N.A.
                                          </strong>{" "}
                                          and its affiliates (collectively
                                          “JPMCB”) offer investment products,
                                          which may include bank managed
                                          accounts and custody, as part of its
                                          trust and fiduciary services. Other
                                          investment products and services, such
                                          as brokerage and advisory accounts,
                                          are offered through{" "}
                                          <strong>
                                            J.P. Morgan Securities LLC
                                          </strong>{" "}
                                          (JPMS), a member of{" "}
                                          <span>
                                            <mds-link
                                              underline="true"
                                              text="FINRA"
                                              inverse="false"
                                              leading-pipe="false"
                                              trailing-pipe="false"
                                              truncation="none"
                                              href="javascript:void(0)"
                                              tab-focusable="true"
                                              inactive="false"
                                              label-aria-text
                                              is-button="false"
                                              id="finraLink"
                                              data-testid="finraLink"
                                              accessible-text
                                              className="mds-link--cpo"
                                            />
                                          </span>
                                        </span>
                                        <span>
                                          {" "}
                                          and{" "}
                                          <span>
                                            <mds-link
                                              underline="true"
                                              text="SIPC"
                                              inverse="false"
                                              leading-pipe="false"
                                              trailing-pipe="false"
                                              truncation="none"
                                              href="javascript:void(0)"
                                              tab-focusable="true"
                                              inactive="false"
                                              label-aria-text
                                              is-button="false"
                                              id="sipcLink"
                                              data-testid="sipcLink"
                                              accessible-text
                                              className="mds-link--cpo"
                                            />
                                          </span>
                                        </span>
                                        . Annuities are made available through
                                        Chase Insurance Agency, Inc. (CIA), a
                                        licensed insurance agency, doing
                                        business as Chase Insurance Agency
                                        Services, Inc. in Florida. JPMCB, JPMS
                                        and CIA are affiliated companies under
                                        the common control of JPMorgan Chase
                                        &amp; Co. Products not available in all
                                        states.
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    id="disclaimerTitle"
                                    className="disclaimer-border mds-body-medium mds-pl-4 mds-pt-5"
                                  >
                                    <p className="mds-body-medium">
                                      INVESTMENT AND INSURANCE PRODUCTS ARE:
                                    </p>
                                    <ul className="disclaimer-list mds-pb-3">
                                      <li className="mds-body-medium">
                                        NOT FDIC INSURED
                                      </li>
                                      <li className="mds-body-medium">
                                        NOT INSURED BY ANY FEDERAL GOVERNMENT
                                        AGENCY
                                      </li>
                                      <li className="mds-body-medium">
                                        NOT A DEPOSIT OR OTHER OBLIGATION OF, OR
                                        GUARANTEED BY, JPMORGAN CHASE BANK, N.A.
                                        OR ANY OF ITS AFFILIATES
                                      </li>
                                      <li className="mds-body-medium">
                                        SUBJECT TO INVESTMENT RISKS, INCLUDING
                                        POSSIBLE LOSS OF THE PRINCIPAL AMOUNT
                                        INVESTED
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <footer
                      data-testid="print-footer"
                      className="mds-d-print-block mds-d-none"
                    >
                      <div className="mds-d-flex mds-fd-row mds-jc-space-between mds-body-medium print-footer__content">
                        <div
                          className="mds-px-0 mds-col-4 print-footer__content-item"
                          data-testid="print-footer-tag-0"
                        >
                          <span>JPMorgan Chase Bank, N.A. Member FDIC</span>
                          <div className="mds-d-print-none" />
                        </div>
                        <div
                          className="mds-px-0 mds-col-4 print-footer__content-item"
                          data-testid="print-footer-tag-1"
                        >
                          <span>©2024 JPMorgan Chase &amp; Co</span>
                          <div className="mds-d-print-none" />
                        </div>
                        <div
                          className="mds-px-0 mds-col-4 print-footer__content-item"
                          data-testid="print-footer-tag-2"
                        >
                          <span>Equal Opportunity Lender</span>
                          <div className="mds-d-print-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlSpace="preserve"
                              width="1em"
                              height="1em"
                              viewBox="0 0 48 48"
                            >
                              <g
                                fill="#666"
                                fillRule="evenodd"
                                clipRule="evenodd"
                              >
                                <path d="M2 19.859 24.248 7 46 19.986v5.036h-3.47V41H5.409V25.022H2v-5.163zm22.247-7.5-14.315 8.53V36.93h28.321V20.889l-14.006-8.53z" />
                                <path d="M16.594 26v-3.947h14.812V26H16.594zm0 2.053h14.812V32H16.594v-3.947z" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </footer>
                  </div>
                </div>
              </main>{" "}
              <footer id="footer-content" />
            </div>{" "}
          </div>{" "}
          <div id="serviceErrorModal" />{" "}
          <div className="overlay" id="overlay" />{" "}
          <div id="shared-slideshow-container" />{" "}
          <div id="shared-siteExitWarning-container" />{" "}
          <div id="signoutModal" /> <div id="rotationModal" />{" "}
          <div id="sessionTimeoutModal" />{" "}
          <div id="solicitedSurveyInvitationModal" />{" "}
          <div id="speedBumpUIContainer" />{" "}
          <div id="pre-loader">
            <div className="spinner" />
          </div>{" "}
          <div id="modalVideoContainer" />{" "}
          <div
            className="util accessible-text"
            id="liveregion"
            role="region"
            aria-live="polite"
            aria-atomic="true"
          />{" "}
          <div className="overlay" id="applicationOverlay" />{" "}
          <div id="listener" /> <div id="languageOverlay" />{" "}
          <div className="menu-overlay" /> <div id="globalECDErrorContainer" />{" "}
          <div id="inital-load-exception" /> <div id="globalErrorContainer" />{" "}
          <div id="site-tour-wrapper" /> <div id="site-tour-overlay" />{" "}
          <div id="interstitial">
            <div id="contentWrapper" />
          </div>{" "}
          <div id="intercept-area" />{" "}
          <div id="flyoutWrapper" data-has-view="true">
            <div
              className="flyoutSize-standard"
              id="flyout"
              hidden
              data-is-view="true"
              data-component-name="ROOT/SITE/dashboard/flyout|flyout|APPLICATION_FLYOUT|f1baee35-3321-4fa3-87fc-7fbb5fa4ceb4"
            >
              <div className="flyout-overlay" id="flyoutOverlay" />{" "}
              <div className="flyout-content-wrapper" id="flyoutContentWrapper">
                {" "}
                <header
                  className="hide-flyout-header fixedHeight"
                  id="flyoutHeaderContent"
                >
                  <h1
                    className="flyout-header-text"
                    id="flyoutHeaderText"
                    tabIndex={-1}
                  />
                </header>{" "}
                <div className="flyout-content" id="flyoutContent" />{" "}
                <div id="flyoutSpinnerContainer" />{" "}
                <div id="flyoutCustomSpinnerContainer" />{" "}
                <footer
                  className="flyout-footer-content"
                  id="flyoutFooterContent"
                />
              </div>
            </div>
          </div>{" "}
          <div id="coBrowse" /> <div id="slideInWrapper" />
        </div>
      </div>
      <div
        id="mds-skeleton-loader-live-region"
        aria-live="polite"
        aria-atomic="true"
        style={{
          clip: "rect(0.0625rem, 0.0625rem, 0.0625rem, 0.0625rem)",
          position: "absolute !important",
          padding: "0 !important",
          border: "0 !important",
          height: "0.0625rem !important",
          width: "0.0625rem !important",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default Account_Page;
