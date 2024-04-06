"use client";
import useAndromedaClient from "@/lib/andrjs/hooks/useAndromedaClient";
import { connectAndromedaClient, useAndromedaStore } from "@/zustand/andromeda";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import Connected from "./Connected";

const ConnectWallet = (props) => {
  const { isLoading } = useAndromedaStore();
  const client = useAndromedaClient();
  
  if (client) {
    return <Connected />;
  }
  
  return (
    <>
      <Button
        leftIcon={<PlusSquareIcon boxSize={5} />}
        colorScheme="purple"
        onClick={() => connectAndromedaClient()}
        isLoading={isLoading}
      >
        Connect Wallet
      </Button>
    </>
  );
};

export default ConnectWallet;
