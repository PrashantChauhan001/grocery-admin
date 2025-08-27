import { Input } from "@chakra-ui/react/input";
import type { InputProps } from "node_modules/@chakra-ui/react/dist/types/components/input";

const TextBox = (props: InputProps) => {
  return <Input {...props} />;
};

export default TextBox;
