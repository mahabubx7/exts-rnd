import { z } from "zod";

export const helloQSchema = z.object({ q: z.string().min(1).nullable() });
export const helloPSchema = z.object({ id: z.string().nonempty().max(1) });
