import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const loginRouter = createTRPCRouter({
  login: publicProcedure
    .input(z.object({ gReCaptchaToken: z.string() }))
    .mutation(async ({ input }) => {
      console.log(input);
      await new Promise((resolve) => setTimeout(resolve, 3 * 1000));

      return true;
    }),
});
