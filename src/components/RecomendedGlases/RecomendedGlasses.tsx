import { Title } from "@mantine/core";
import { UseRequestGetOneWithGlasses } from "~/server/api/hooks/use-request-get-one-with-glasses";

interface recomendedGlasesProps {
  requestId: string;
}

export const RecomendedGlasses = ({ requestId }: recomendedGlasesProps) => {
  const { data: request } = UseRequestGetOneWithGlasses(requestId);
  return (
    <>
      <Title className="text-white">Your face is {request?.shape}!</Title>
      <p className="text-white">
        Here goes a list of Glasses that might look good on you:
      </p>
      <p>{JSON.stringify(request?.Glasses)}</p>
    </>
  );
};
