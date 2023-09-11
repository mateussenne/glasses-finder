import { api } from "~/utils/api";

export const UseRequestGetOneWithGlasses = (requestId: string) => {
  return api.request.getOneWithGlasses.useQuery(requestId);
};
