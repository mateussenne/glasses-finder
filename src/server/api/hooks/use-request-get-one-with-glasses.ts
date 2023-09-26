import { api } from "~/utils/api";
import { type ReactQueryOptions } from "../trpc";

export const UseRequestGetOneWithGlasses = (
  requestId: string,
  options?: ReactQueryOptions["request"]["getOneWithGlasses"]
) => {
  return api.request.getOneWithGlasses.useQuery(requestId, options);
};
