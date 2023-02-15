import React from "react";
import Image from "next/image";
import vectorMobile from "./../../../public/images/VectorMobile.png";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const { t } = useTranslation("common");
  return (
    <div className="opened-menu">
      <div className="menu-side">
        <Image
          src={vectorMobile}
          alt="logo"
          width="100%"
          height="100%"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          style={{ cursor: "pointer" }}
        />
        <div className="menu-bar">
          <p>{t("header.menu.theDlsEffect")}</p>
          <p>{t("header.menu.testimonials")}</p>
          <p>{t("header.menu.connect")}</p>
        </div>
        <div className="opened-menu-language">
          <Link href="/" locale="fr">
            <h2>FR</h2>
          </Link>
          <Link href="/" locale="en">
            <h2>|ENG</h2>
          </Link>
        </div>
      </div>

      <div className="image-side"></div>
    </div>
  );
};

export default MobileMenu;
