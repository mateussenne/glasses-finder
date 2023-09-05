import { type ReactQueryOptions } from "~/server/api/trpc";
import { api } from "~/utils/api";

export const UseCreateRequest = (
  options?: ReactQueryOptions["request"]["create"]
) => {
  return api.request.create.useMutation(options);
};
