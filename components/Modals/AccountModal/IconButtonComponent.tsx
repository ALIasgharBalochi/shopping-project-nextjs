import Image from "next/image";
import { Box, Tooltip, IconButton } from "@mui/material";

import userIcon from "@/public/iconsax/user.svg";
type Props = {
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  open: boolean;
};
const IconButtonComponent: React.FC<Props> = ({ handleClick, open }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Image src={userIcon} width={20} height={20} alt="img" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default IconButtonComponent;
