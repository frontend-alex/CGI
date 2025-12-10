import z from "zod";

export const createEventSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(10),
    location: z.string().min(3),

    startDate: z.date(),
    endDate: z.date().optional(),
    isMultiDay: z.boolean(),

    startTime: z.string().min(1),
    endTime: z.string().min(1),

    category: z.array(z.string().min(1)).max(3),

    image: z
        .instanceof(File)
        .refine((f) => f.size > 0, "Upload an image")
        .refine(
            (f) => ["image/jpeg", "image/png", "image/webp"].includes(f.type),
            "Allowed: JPG, PNG, WEBP"
        ),
});

export type CreateEventSchemaType = z.infer<typeof createEventSchema>;
