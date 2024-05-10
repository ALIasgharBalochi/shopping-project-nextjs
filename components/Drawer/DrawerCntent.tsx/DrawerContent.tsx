import DrawerButton from "./DrawerButton";
import DrawerAccordion from "./DrawerAccordion/DrawerAccoridon";
const DrawerContent: React.FC = () => {
  return (
    <div>
      <DrawerAccordion />
      <DrawerButton />
    </div>
  );
};

export default DrawerContent;
