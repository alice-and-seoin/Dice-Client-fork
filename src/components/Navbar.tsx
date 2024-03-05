"use client";
import React from "react";
import { Heading, Button, IconButton } from "@radix-ui/themes";
import { RowsIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/user";

const Navbar = () => {
  const router = useRouter();

  const userInfo = useUserStore((state) => state.userInfo);
  const logoutUser = useUserStore((state) => state.removeUser);
  console.log(userInfo);

  if (
    userInfo.length === 0 &&
    typeof window !== "undefined" &&
    localStorage.getItem("accessToken")
  ) {
    localStorage.removeItem("accessToken");
  }

  function Logout() {
    logoutUser();
    localStorage.removeItem("accessToken");
    router.push("/");
  }
  return (
    <>
      <nav className="bg-gray-900 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 dark:border-gray-600 relative">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-8 sm:px-20 py-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Button
              className="flex self-center dark:text-white gap-2"
              variant="ghost"
            >
              <Heading color="gray"> 다있으 </Heading>
              <Heading> DICE</Heading>
            </Button>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {userInfo.length === 0 ? (
              <Button size="3" onClick={() => router.push("/signin")}>
                로그인
              </Button>
            ) : (
              <Button size="3" onClick={Logout}>
                로그아웃
              </Button>
            )}

            <IconButton variant="outline" size={"3"} className="xs:invisible">
              <RowsIcon />
            </IconButton>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
