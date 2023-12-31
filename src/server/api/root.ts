import { createTRPCRouter } from "~/server/api/trpc";
import { faceShapeRouter } from "./routers/face-shape";
import { requestRouter } from "./routers/request";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  faceShape: faceShapeRouter,
  request: requestRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
