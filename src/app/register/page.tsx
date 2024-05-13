// import Container from "@/components/Container";
// import FormWrap from "@/components/FormWrap";
// import RegisterForm from "./RegisterForm";

// const Register = () => {
//   return (
//     <div>
//       <Container>
//         <FormWrap>
//           <RegisterForm />
//         </FormWrap>
//       </Container>
//     </div>
//   );
// };

// export default Register;
"use client";

import { apiClient } from "@/lib";
import { useAppStore } from "@/store";
import { USER_API_ROUTES } from "@/utils/api-routes";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import { Mochiy_Pop_One } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const mochiy = Mochiy_Pop_One({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { setUserInfo } = useAppStore();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await apiClient.post(USER_API_ROUTES.LOGIN, {
        name,
        email,
        password,
      });
      if (response.data.userInfo) {
        setUserInfo(response.data.userInfo);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[100vh] w-full flex items-center justify-center bg-black/80 bg-cover bg-center bg-no-repeat ">
      <Card className="shadow-2xl bg-opacity-20 w-[480px]">
        <CardHeader className="flex flex-col gap-1 capitalize text-3xl items-center">
          <div className="flex flex-col gap-1 capitalize text-3xl items-center">
            <Image
              src="/image/icon.png"
              alt="logo"
              height={80}
              width={80}
              className="cursor-pointer"
            />
            <span className="text-xl uppercase font-medium text-white ">
              <span className={mochiy.className}>Sign Up</span>
            </span>
          </div>
        </CardHeader>
        <CardBody className="flex flex-col items-center w-full justify-center">
          <div className="flex flex-col gap-2 w-full">
            <Input
              placeholder="First Name"
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              color="default"
            />
            <Input
              placeholder="Last Name"
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              color="default"
            />
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              color="default"
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              color="default"
            />
          </div>
        </CardBody>
        <CardFooter className="flex flex-col gap-2 items-center justify-center">
          <Button
            color="warning"
            variant="shadow"
            className="w-full capitalize"
            size="lg"
            onClick={handleLogin}
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
