import { Accordion } from "@mui/material";
import DrawerAccordionSummary from "./DrawerAccordionSummary";
import DrawerAccordionContent from "./DrawerAccorionContent";
const DrawerAccordion: React.FC = () => {
  return (
    <Accordion>
      <DrawerAccordionSummary />
      <DrawerAccordionContent />
    </Accordion>
  );
};
export default DrawerAccordion;
