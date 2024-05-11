import { useState } from "react";

import IconButtonComponent from "./IconButtonComponent";
import AccountModalMenu from "./AccountModalMenu/AccountModalMenu";

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButtonComponent handleClick={handleClick} open={open} />
      <div
        className={
          open
            ? "absolute visible mt-[59px] inset-1 bg-black bg-opacity-25"
            : "invisible"
        }
      >
        <AccountModalMenu
          open={open}
          handleClose={handleClose}
          anchorEl={anchorEl}
        />
      </div>
    </>
  );
};
export default AccountMenu;
