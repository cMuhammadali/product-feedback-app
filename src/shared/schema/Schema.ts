import { z } from "zod";

export const addProductSchema = z.object({
    title: z.string().min(4, "Title must be at least 4 characters!"),
    type: z.string().min(2, "Category must be at least 4 characters!"),
    description: z.string().min(4, "Detail must be at least 4 characters!"),
  });
  
export type addProdutForm = z.infer<typeof addProductSchema>