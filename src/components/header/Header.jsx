import React, { useState } from "react";
import Image from "next/image";
import vector from "./../../../public/images/Vector.png";
import vector2 from "./../../../public/images/Vector2.png";
import vector3 from "./../../../public/images/Vector3.png";
import vector7 from "./../../../public/images/Vector7.png";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { t } = useTranslation("common");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clickedButton, setClickedButton] = useState({ active: "" });
  //   someFunct(name) {
  //     setState({ active: name })
  // }
  return (
    <>
      {!mobileMenuOpen ? (
        <div className="header">
          <div className="logo-menu">
            <div className="logo-area">
              <Image src={vector} alt="logo" width="100%" height="100%" />
            </div>
            <div className="menu-area">
              <h3>{t("header.menu.theDlsEffect")}</h3>
              <h3>{t("header.menu.testimonials")}</h3>
              <h3>{t("header.menu.connect")}</h3>
              <div className="language-area">
                <Link href="/" locale="fr">
                  <h2 onClick={console.log("hello")}>FR</h2>
                </Link>
                |
                <Link href="/" locale="en">
                  <h2>ENG</h2>
                </Link>
              </div>
            </div>
            <div
              className="mobile-menu-logo"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <Image src={vector7} alt="logo" width="100%" height="100%" />
              <Image
                src={vector7}
                alt="logo"
                width="100%"
                height="100%"
                style={{ marginTop: "10px" }}
              />
            </div>
          </div>
          <p className="luxury-real-estate">{t("header.hrant")}</p>
          <p className="quebec">{t("header.quebec")}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="header-buttons">
              <button
                className={
                  clickedButton.active === "sellHome"
                    ? "active-button"
                    : "sell-home"
                }
                onClick={() => setClickedButton({ active: "sellHome" })}
                value="sellHome"
              >
                {t("header.sellHome")}
              </button>
              <button
                className={
                  clickedButton.active === "findHome"
                    ? "active-button"
                    : "find-home"
                }
                onClick={() => setClickedButton({ active: "findHome" })}
                value="findHome"
              >
                {t("header.findHome")}
              </button>
            </div>
          </div>
          <div className="arrows">
            <Image src={vector2} alt="arrow1" width="100%" height="100%" />
            <Image src={vector3} alt="arrow2" width="100%" height="100%" />
          </div>
        </div>
      ) : (
        <MobileMenu
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}
    </>
  );
};

export default Header;
