"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useEffect, useState } from "react";
import { Genre } from "@/models/genre";
import { API_URL } from "@/config";
import { GenreType } from "@/utils/genre-type";
import { Loader2 } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { MovieCreate } from "@/models/movie";
import { GameCreate } from "@/models/game";

const formSchema = z.object({
    title: z.string().min(1).max(256),
    releasedYear: z.coerce.number({required_error: "Please input released year"}),
    publisher: z.string().min(1).max(256),
    genresIds: z.array(z.number()).refine(value => value.some(genre => genre), { message: "You have to select at least one genre", }),
});



export default function AddGameForm({onAddSuccessfully}: {onAddSuccessfully: Function}) {
    const [genres, setGenres] = useState<Genre[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch(`${API_URL}/categories?type=${GenreType.Game}`)
            .then(res => res.json())
            .then((data: Genre[]) => setGenres(data))
            .catch(err => console.error(err));
    }, []);

    // 1. Define your form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        }
    });

    // 2. Define a submit handler
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        
        setIsLoading(true);
        const gameCreate = new GameCreate(values.title, values.releasedYear, values.publisher, values.genresIds);
        try {
            const res = await fetch(`${API_URL}/games`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(gameCreate),
            });
            if (res.ok) {
                onAddSuccessfully();
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    // 3. Build your form
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                            <FormLabel className="text-right">Title</FormLabel>
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
                    name="publisher"
                    render={({ field }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                            <FormLabel className="text-right">Publisher</FormLabel>
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
                    name="releasedYear"
                    render={({ field }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                            <FormLabel className="text-right">Released year</FormLabel>
                            <div className="col-span-3 space-y-2">
                                <FormControl>
                                    <Input {...field} type="number" />
                                </FormControl>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="genresIds"
                    render={() => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                            <FormLabel className="text-right">Genres</FormLabel>
                            <div className="col-span-3 flex flex-wrap gap-4">
                                {genres?.map((genre: Genre) => (
                                    <FormField
                                        key={genre.id}
                                        control={form.control}
                                        name="genresIds"
                                        render={({ field }) => {
                                            return (
                                                <FormItem
                                                    key={genre.id}
                                                    className="flex flex-row items-start space-x-2 space-y-0"
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