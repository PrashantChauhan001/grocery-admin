import { Box } from "@chakra-ui/react/box";
import commonStyles from "@/styles/commonStyles.module.css";
import Routing from "./configs/routing";

const { scroll_container } = commonStyles;

const App = () => {
  return (
    <Box height={"calc(100vh)"} overflow={"auto"} className={scroll_container + " root-container"}>
      <Routing />
    </Box>
  );
};

export default App;
