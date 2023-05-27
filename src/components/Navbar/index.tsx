import React, {useState} from "react";
import {
  HeaderS,
  NavbarMobileContainerS,
  NavbarMobileS,
  NavbarS,
} from "./styles";
import {useRouter} from "next/router";
import MenuSvg from "@/assets/HeaderIcons/MenuSvg";
import CloseSvg from "@/assets/HeaderIcons/CloseSvg";
import {navOptions} from "./helper";

export default function Navbar() {
  const [active, setActive] = useState<boolean>(false);

  const renderOptions = (): any => {
    return navOptions.map(({href, label}, index) => (
      <a key={index} className={`navbar-item `} href={href}>
        {label}
      </a>
    ));
  };

  return (
    <HeaderS>
      <a className="logo" href="#">
        Duwan.
      </a>
      <NavbarS>{renderOptions()}</NavbarS>

      <NavbarMobileS>
        <button onClick={() => setActive(!active)}>
          {active ? <CloseSvg /> : <MenuSvg />}
        </button>

        {active && (
          <NavbarMobileContainerS>{renderOptions()}</NavbarMobileContainerS>
        )}
      </NavbarMobileS>
    </HeaderS>
  );
}
