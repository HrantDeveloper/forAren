import React from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Image from "next/image";
import Group6 from "./../../../public/images/Group6.png";
import Group7 from "./../../../public/images/Group7.png";

const Main = () => {
  const { t } = useTranslation("common");

  return (
    <div className="main">
      <p className="dls-effect">{t("main.effect")}</p>
      <p className="integrity">{t("main.integrity")}</p>
      <div className="dls-desc">
        <p>{t("main.dlsDesc.text1")}</p>
        <p style={{ marginTop: "20px" }}>{t("main.dlsDesc.text2")}</p>
        <p style={{ marginTop: "20px" }}>{t("main.dlsDesc.text3")}</p>
      </div>
      <div className="main-cards">
        <div className="cards">
          <p className="card-title">{t("main.cards.card1.title")}</p>
          <p className="card-desc desc1">{t("main.cards.card1.desc")}</p>
        </div>
        <div className="cards">
          <p className="card-title">{t("main.cards.card2.title")}</p>
          <p className="card-desc desc2">{t("main.cards.card2.desc")}</p>
        </div>
        <div className="cards">
          <p className="card-title">{t("main.cards.card3.title")}</p>
          <p className="card-desc desc3">{t("main.cards.card3.desc")}</p>
        </div>
        <div className="cards">
          <p className="card-title">{t("main.cards.card4.title")}</p>
          <p className="card-desc desc4">{t("main.cards.card4.desc")}</p>
        </div>
      </div>
      <div className="client-area">
        <p className="client-title">{t("main.clientArea.title")}</p>
        <div className="client-cards">
          <div className="client-card">
            <div className="title-data">
              <p className="client-name">{t("main.clientArea.client1.name")}</p>
              <p>13 March,2021</p>
            </div>
            <p className="client-desc">{t("main.clientArea.client1.desc")}</p>
          </div>
          <div className="client-card">
            <p className="client-name">{t("main.clientArea.client2.name")}</p>
            <p className="client-desc">{t("main.clientArea.client2.desc")}</p>
          </div>
          <div className="client-card">
            <p className="client-name">{t("main.clientArea.client3.name")}</p>
            <p className="client-desc">{t("main.clientArea.client3.desc")}</p>
          </div>
        </div>
        <div className="client-arrows">
          <div className="arrow-div">
            <Image src={Group6} alt="arrow" width="100%" height="100%" />
          </div>
          <div className="arrow-div">
            <Image src={Group7} alt="arrow" width="100%" height="100%" />
          </div>
        </div>
      </div>
      <div className="connect-area">
        <div className="connect-wrapper">
          <p className="connect-title">{t("main.connectArea.title")}</p>
          <p className="connect-name">{t("main.connectArea.name")}</p>
          <p className="connect-proffession">
            {t("main.connectArea.proffession")}
          </p>
          <div className="phone-email">
            <div className="phone-email-div">
              <p className="phone">{t("main.connectArea.phone")}</p>
              <p className="answer">514-824-0008</p>
            </div>
            <div className="phone-email-div">
              <p className="phone">{t("main.connectArea.email")}</p>
              <p className="answer">dany@danysaad.com</p>
            </div>
          </div>
          <div className="address-div">
            <p className="address-title">
              {t("main.connectArea.address.title")}
            </p>
            <p className="address1">{t("main.connectArea.address.address1")}</p>
            <p className="address1">{t("main.connectArea.address.address2")}</p>
          </div>
          <div className="address-div">
            <p className="address-title">
              {t("main.connectArea.openingHours.title")}
            </p>
            <p className="address1">
              {t("main.connectArea.openingHours.days")}
            </p>
            <p className="address1">
              {t("main.connectArea.openingHours.days2")}
            </p>
          </div>
        </div>
        <div className="final-text-div">
          <p className="large">{t("main.finalText.large")}</p>
          <p className="large" style={{ marginTop: "30px" }}>
            {t("main.finalText.short")}
          </p>
        </div>
        <div className="header-buttons">
          <button className="sell-home">{t("header.sellHome")}</button>
          <button className="find-home">{t("header.findHome")}</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
