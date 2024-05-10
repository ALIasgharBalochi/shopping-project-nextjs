import { AccordionSummary } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
const DrawerAccordionSummary: React.FC = () => {
  return (
    <AccordionSummary
      expandIcon={<ExpandMore />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      Products
    </AccordionSummary>
  );
};
export default DrawerAccordionSummary;
