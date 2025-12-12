import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDropzone } from "react-dropzone";
import { ChevronDown, Upload, X } from "lucide-react";

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from "@/components/ui/form";

import {
    Section,
    SectionLabel,
    SectionHeading,
    SectionDescription,
    SectionContent,
    PartialContainer,
    PartialHeader,
    PartialSeparator,
} from "@/components/ui/partials";

import {
    createEventSchema,
    type CreateEventSchemaType,
} from "@shared/schemas/event/event.schema";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";

const CreateEventForm = ({ onPreviewChange }: { onPreviewChange: (data: any) => void }) => {
    const form = useForm<CreateEventSchemaType>({
        resolver: zodResolver(createEventSchema),
        defaultValues: {
            title: "",
            description: "",
            location: "",
            startDate: undefined,
            endDate: undefined,
            isMultiDay: false,
            startTime: "",
            endTime: "",
            category: [],
            image: undefined,
        },
    });

    // Send preview updates upward
    useEffect(() => {
        const subscription = form.watch((value) => {
            onPreviewChange(value);
        });
        return () => subscription.unsubscribe();
    }, [form, onPreviewChange]);

    // Dropzone
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: { "image/*": [] },
        onDrop: (files) => {
            const file = files[0];
            if (file) form.setValue("image", file);
        },
    });

    const [tagInput, setTagInput] = useState("");

    const [calendarOpen, setCalendarOpen] = useState(false);
    const isMultiDay = form.watch("isMultiDay");

    const startDate = form.watch("startDate");
    const endDate = form.watch("endDate");

    const formatDate = (d?: Date) =>
        d
            ? d.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            })
            : "Select date";

    return (
        <PartialContainer className="max-w-3xl pb-10">
            <PartialHeader
                title="Create Event"
                description="Fill out all required fields to publish an event."
            />

            <PartialSeparator />

            <Form {...form}>
                <form className="space-y-8">
                    {/* Image Upload */}
                    <Section>
                        <SectionLabel>
                            <SectionHeading>Event Image</SectionHeading>
                            <SectionDescription>Upload promotional imagery.</SectionDescription>
                        </SectionLabel>

                        <SectionContent>
                            <FormField
                                control={form.control}
                                name="image"
                                render={() => (
                                    <FormItem>
                                        <FormControl>
                                            <div
                                                {...getRootProps()}
                                                className="border-2 border-dashed rounded-lg p-6 flex justify-center items-center cursor-pointer"
                                            >
                                                <input {...getInputProps()} />
                                                <div className="flex flex-col items-center gap-3 justify-center">


                                                </div>
                                                <Empty>
                                                    <EmptyHeader>
                                                        <EmptyMedia variant="icon">
                                                            <Upload />
                                                        </EmptyMedia>
                                                        <EmptyTitle>Upload Image</EmptyTitle>
                                                        <EmptyDescription>
                                                            {isDragActive ? "Drop the image..." : "Drag & drop or click to upload"}
                                                        </EmptyDescription>
                                                    </EmptyHeader>
                                                </Empty>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </SectionContent>
                    </Section>

                    {/* Title */}
                    <Section>
                        <SectionLabel>
                            <SectionHeading>Title</SectionHeading>
                            <SectionDescription>The official event name.</SectionDescription>
                        </SectionLabel>
                        <SectionContent>
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input className="input no-ring" placeholder="Tech Innovation Summit 2030" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </SectionContent>
                    </Section>

                    {/* Description */}
                    <Section>
                        <SectionLabel>
                            <SectionHeading>Description</SectionHeading>
                            <SectionDescription>Shown publicly on the event page.</SectionDescription>
                        </SectionLabel>
                        <SectionContent>
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea className="input no-ring h-[120px]" placeholder="Detailed event description…" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </SectionContent>
                    </Section>

                    {/* Location */}
                    <Section>
                        <SectionLabel>
                            <SectionHeading>Location</SectionHeading>
                            <SectionDescription>Event venue or address.</SectionDescription>
                        </SectionLabel>
                        <SectionContent>
                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input className="input no-ring" placeholder="Convention Center, San Francisco" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </SectionContent>
                    </Section>

                    {/* Date & Duration */}
                    <Section>
                        <SectionLabel>
                            <SectionHeading>Date & Duration</SectionHeading>
                            <SectionDescription>Select event duration.</SectionDescription>
                        </SectionLabel>

                        <SectionContent className="flex flex-col gap-4">

                            {/* Checkbox */}
                            <FormField
                                control={form.control}
                                name="isMultiDay"
                                render={({ field }) => (
                                    <FormItem className="flex items-center gap-2">
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        <label>Event spans multiple days</label>
                                    </FormItem>
                                )}
                            />

                            {/* Calendar */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium">
                                    {isMultiDay ? "Date Range" : "Date"}
                                </label>
                                <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className="flex justify-between w-full input">
                                            {isMultiDay
                                                ? startDate && endDate
                                                    ? `${formatDate(startDate)} → ${formatDate(endDate)}`
                                                    : "Select date range"
                                                : formatDate(startDate)}
                                            <ChevronDown className="size-4" />
                                        </Button>
                                    </PopoverTrigger>

                                    <PopoverContent
                                        align="start"
                                        side="bottom"
                                        sideOffset={8}
                                        className="p-0 w-full rounded-md bg-popover border shadow-md"
                                    >
                                        {!isMultiDay ? (
                                            <Calendar
                                                mode="single"
                                                selected={startDate}
                                                captionLayout="dropdown"
                                                onSelect={(d) => {
                                                    form.setValue("startDate", d as any);
                                                    setCalendarOpen(false);
                                                }}
                                            />
                                        ) : (
                                            <Calendar
                                                mode="range"
                                                selected={startDate && endDate ? { from: startDate, to: endDate } : undefined}
                                                numberOfMonths={2}
                                                onSelect={(range) => {
                                                    if (!range) return;
                                                    form.setValue("startDate", range.from!);
                                                    form.setValue("endDate", range.to!);
                                                }}
                                            />
                                        )}
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </SectionContent>
                    </Section>

                    {/* Time */}
                    <Section>
                        <SectionLabel>
                            <SectionHeading>Time</SectionHeading>
                            <SectionDescription>Specify event hours.</SectionDescription>
                        </SectionLabel>

                        <SectionContent className="flex gap-6">
                            {/* Start */}
                            <FormField
                                control={form.control}
                                name="startTime"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <label className="text-sm font-medium">From</label>
                                        <FormControl>
                                            <Input type="time" step={60} className="input no-ring w-40" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* End */}
                            <FormField
                                control={form.control}
                                name="endTime"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-1">
                                        <label className="text-sm font-medium">To</label>
                                        <FormControl>
                                            <Input type="time" step={60} className="input no-ring w-40" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </SectionContent>
                    </Section>

                    {/* Tags */}
                    <Section>
                        <SectionLabel>
                            <SectionHeading>Tags</SectionHeading>
                            <SectionDescription>Up to 3 categories.</SectionDescription>
                        </SectionLabel>

                        <SectionContent>
                            <div className="flex gap-2 mb-2">
                                <Input
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    className="input no-ring"
                                    placeholder="Add tag..."
                                />
                                <Button
                                    type="button"
                                    onClick={() => {
                                        const tags = form.getValues("category");
                                        if (tags.length < 3 && tagInput.trim()) {
                                            form.setValue("category", [...tags, tagInput.trim()]);
                                            setTagInput("");
                                        }
                                    }}
                                >
                                    Add
                                </Button>
                            </div>

                            <div className="flex gap-2 flex-wrap">
                                {form.watch("category")?.map((tag, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-primary text-white px-3 py-1 rounded-full flex items-center gap-2"
                                    >
                                        {tag}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                form.setValue(
                                                    "category",
                                                    form.getValues("category").filter((_, i) => i !== idx)
                                                )
                                            }
                                        >
                                            <X className="size-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </SectionContent>
                    </Section>

                    {/* Submit */}
                    <div className="flex justify-end">
                        <Button size="lg" type="submit">
                            Create Event
                        </Button>
                    </div>
                </form>
            </Form>
        </PartialContainer>
    );
}

export default CreateEventForm;
