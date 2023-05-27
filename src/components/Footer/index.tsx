import {FooterS} from "./styles";
import {useState} from "react";
export default function Footer() {
  const [date] = useState(new Date());
  return (
    <FooterS>
      Copyright © {date.getFullYear()} by Duwan Fortunato | All Rights Reverved
    </FooterS>
  );
}
