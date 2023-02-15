import React from "react";
import Image from "next/image";
import vectorFooter from "./../../../public/images/VectorFooter.png";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import group4 from "./../../../public/images/group4.png";
const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <div className="footer">
      <div className="logo-menu-footer">
        <div className="logo-area-footer">
          <Image src={vectorFooter} alt="logo" width="100%" height="100%" />
        </div>
        <div className="menu-area-footer">
          <p>{t("header.menu.theDlsEffect")}</p>
          <p>{t("header.menu.testimonials")}</p>
          <p>{t("header.menu.connect")}</p>
          <div className="language-area-footer">
            <Link href="/" locale="fr">
              <h2>FR</h2>
            </Link>
            |
            <Link href="/" locale="en">
              <h2>ENG</h2>
            </Link>
          </div>
        </div>
      </div>
      <div className="rights-area">
        <div className="rights-area-first">
          <b>
            <p className="rights-area-first-name">Dany-Latif Saad</p>
          </b>
          <p className="rights-area-first-copyright">
            {t("footer.copyright")}2023
          </p>
        </div>
        <div className="charizma-logo">
          <Image src={group4} alt="charizma" width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
