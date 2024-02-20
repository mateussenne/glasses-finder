import { Center, Loader, Text } from "@mantine/core";
import { useState, useEffect } from "react";
import { customPhrases } from "~/constants/custom-phrases";

export const LoadingResults = () => {
  const [phrase, setPhrase] = useState(
    customPhrases[Math.floor(Math.random() * customPhrases.length)]
  );
  const changePhrase = () => {
    setPhrase(customPhrases[Math.floor(Math.random() * customPhrases.length)]);
  };

  useEffect(() => {
    const intervalFunction = setInterval(() => {
      changePhrase();
    }, 2000);

    return () => {
      clearTimeout(intervalFunction);
    };
  }, []);

  return (
    <Center>
      <Text className="text-5xl font-semibold text-[#E9207B]">{phrase}</Text>
      <Loader size={"xl"} color="#E9207B" variant="dots" ml={20} />
    </Center>
  );
};
