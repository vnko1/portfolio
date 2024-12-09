import * as zod from "zod";

export const schema = zod.object({
  name: zod.string({ required_error: "Name is required" }),
  email: zod.string({ required_error: "Name is required" }).email(),
  message: zod.string().optional(),
});
