import type { PropsWithChildren } from "react";
import { ChakraProvider as BaseChakraProvider } from "@chakra-ui/react";
import system from "../theme";

export default function ChakraProvider({ children }: PropsWithChildren) {
  return (
    <BaseChakraProvider value={system}>
      {/* <ColorModeScript initialColorMode={system.} /> */}
      {children}
    </BaseChakraProvider>
  );
}
