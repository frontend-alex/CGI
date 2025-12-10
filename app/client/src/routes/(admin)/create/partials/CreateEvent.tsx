import { useState } from "react";
import CreateEventForm from "../forms/CreateEventForm";
import { EventCard } from "@/components/cards/events/event-card";
import type { CreateEventSchemaType } from "@shared/schemas/event/event.schema";

export default function CreateEventPage() {
    const [preview, setPreview] = useState<Partial<CreateEventSchemaType>>({});

    const start = preview?.startDate instanceof Date ? preview.startDate : undefined;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Form Section */}
            <div className="col-span-2">
                <CreateEventForm onPreviewChange={setPreview} />
            </div>

            {/* Sticky Preview */}
            <div className="col-span-1 relative">
                <div className="hidden lg:block fixed top-20 left-2/3 max-w-[400px] w-full">
                    <EventCard
                        hasBorder
                        image={
                            preview?.image instanceof File
                                ? URL.createObjectURL(preview.image)
                                : "https://placehold.co/600x400?text=Event+Preview"
                        }
                        category={preview?.category || ["Category"]}
                        title={preview?.title || "Event Title"}
                        location={preview?.location || "Event Location"}
                        description={preview?.description || "Event description will appear here…"}
                        date={start?.getDate() || 1}
                        month={(start?.getMonth() || 0) + 1}
                        year={start?.getFullYear() || 2025}
                        time={
                            preview?.startTime && preview.endTime
                                ? `${preview.startTime} - ${preview.endTime}`
                                : "00:00 - 00:00"
                        }
                    />
                </div>
            </div>
        </div>
    );
}
