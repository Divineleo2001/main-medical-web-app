import {z} from "zod"

// {
//     "id": 0,
//     "domainUrl": "string",
//     "hospitalName": "string",
//     "hospitalAddress": "string",
//     "contactNumber": "string",
//     "tenantId": "string",
//     "url": "string"
//   }
const HospitalFormSchema = z.object({
    domainUrl: z.string(),
    hospitalName: z.string(),
    hospitalAddress: z.string(),
    contactNumber: z.string(),
    tenantId: z.string(),
    url: z.string()
})

export { HospitalFormSchema }