"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { ArtistCreate } from "@/models/artist";
import { Checkbox } from "../ui/checkbox";
import { Genre } from "@/models/genre";
import { useEffect, useState } from "react";
import { API_URL } from "@/config";
import { GenreType } from "@/utils/genre-type";

const formSchema = z.object({
    fullName: z.string().min(1).max(64),
    nationality: z.string().min(1).max(64),
    dob: z.date({
        required_error: "A date of birth is required",
    }),
    genres: z.array(z.number()).refine(value => value.some(genre => genre), { message: "You have to select at least one genre", }),
});

export default function AddArtistForm({onAddSuccessfully}: {onAddSuccessfully: Function}) {
    const [genres, setGenres] = useState<Genre[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch(`${API_URL}/categories?type=${GenreType.Music}`)
            .then(res => res.json())
            .then((data: Genre[]) => setGenres(data))
            .catch(err => console.error(err));
    }, []);

    // 1. Define your form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            nationality: ""
        },
    });

    // 2. Define a submit handler
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        const artistCreate = new ArtistCreate(values.fullName, values.dob.toISOString(), values.nationality, values.genres);
        fetch(`${API_URL}/artists`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(artistCreate),
        })
        .then(res => {
            if (!res.ok) {

            } else {
                onAddSuccessfully();
            }
        })
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false));
    }

    // 3. Build your form
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                            <FormLabel className="text-right">Full name</FormLabel>
                            <div className="col-span-3 space-y-2">
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                            <FormLabel className="text-right">Date of birth</FormLabel>
                            <div className="col-span-3 space-y-2">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date > new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus

                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="nationality"
                    render={({ field }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                            <FormLabel className="text-right">Nationality</FormLabel>
                            <div className="col-span-3 space-y-2">
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="genres"
                    render={() => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                            <FormLabel className="text-right">Genres</FormLabel>
                            <div className="col-span-3 flex flex-wrap gap-4">
                                {genres?.map((genre: Genre) => (
                                    <FormField
                                        key={genre.id}
                                        control={form.control}
                                        name="genres"
                                        render={({ field }) => {
                                            return (
                                                <FormItem
                                                    key={genre.id}
                                                    className="flex flex-row items-start space-x-3 space-y-0"
                                                >
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value?.includes(genre.id)}
                                                            onCheckedChange={(checked) => {                                                           
                                                                return checked
                                                                    ? field.onChange([...field.value || [], genre.id])
                                                                    : field.onChange(
                                                                        field.value?.filter(
                                                                            (value) => value !== genre.id
                                                                        )
                                                                    )
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        {genre.name}
                                                    </FormLabel>
                                                </FormItem>
                                            )
                                        }}
                                    />
                                ))}
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />
                <div className="flex justify-end">
                    <Button disabled={isLoading} type="submit">
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Save changes
                    </Button>
                </div>
            </form>
        </Form>
    )
}