import React from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MenuBtn } from "./MenuElements";
import { useDispatch, useSelector } from "react-redux";
import * as headerActions from "../../Redux/header/header-actions";

const Menu = () => {
  const show = useSelector((state) => state.header.show);
  const dispatch = useDispatch();
  return (
    <MenuBtn
      onClick={() => {
        dispatch(headerActions.toggleHeader());
      }}
    >
      {show && <FaBars />}
      {!show && <AiOutlineClose />}
    </MenuBtn>
  );
};

export default Menu;
