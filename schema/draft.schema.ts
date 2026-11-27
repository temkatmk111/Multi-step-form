import {z} from "zod"

export const draft =z.object({
  step: z.literal([1, 2, 3]),
  values: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phoneNumber: z.string(),
    dateOfBirth: z.string(),
  }),
})
  
