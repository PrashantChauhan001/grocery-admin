import { APP_ROUTES } from "@/constants/routes.constant";
import { Box } from "@chakra-ui/react/box";
import { Flex } from "@chakra-ui/react/flex";
import { Input } from "@chakra-ui/react/input";
import { VStack } from "@chakra-ui/react/stack";
import { Link } from "react-router";

const Login = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"} width={"100vw"}>
      <Box width={"500px"}>
        <VStack gap={"12px"}>
          <Input placeholder="Username/Email" />
          <Input placeholder="Password" />
        </VStack>
        <Link to={APP_ROUTES.ROOT}>Home</Link>
        <Link to={APP_ROUTES.FORGOT_PASSWORD}>Forgot Password</Link>
      </Box>
    </Flex>
  );
};

export default Login;
