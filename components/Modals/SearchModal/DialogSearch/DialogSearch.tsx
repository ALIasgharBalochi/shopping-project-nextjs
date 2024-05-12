import { Dialog } from "@mui/material";
import DialogContentComponent from "./DialogContent";
import { Products } from "@/components/Types/Types";

type Props = {
  open: boolean;
  close: () => void;
  products: Products[] | [];
};
const DialogSearch: React.FC<Props> = ({ open, close, products }) => {
  return (
    <Dialog
      open={open}
      onClose={close}
      sx={{
        "& .MuiDialog-paper": {
          width: "50%",
          height: "50%",
          overflowX: "hidden",
        },
      }}
    >
      <DialogContentComponent products={products} close={close} />
    </Dialog>
  );
};

export default DialogSearch;
