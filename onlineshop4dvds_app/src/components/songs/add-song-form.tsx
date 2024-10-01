import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Genre } from "@/models/genre";
import { Artist } from "@/models/artist";
import { Album } from "@/models/album";
import { API_URL } from "@/config";
import { GenreType } from "@/utils/genre-type";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "../ui/command";
import { Button } from "../ui/button";
import { CalendarIcon, Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";
import { SongCreate } from "@/models/song";

const formSchema = z.object({
    title: z.string().min(1).max(256),
    artistId: z.number({required_error: "Please select an artist"}),
    released: z.date({required_error: "A released date is required"}),
    minutes: z.coerce.number({required_error: "Please input minutes"}),
    seconds: z.coerce.number({required_error: "Please input seconds"}),
    genresIds: z.array(z.number()).refine(value => value.some(genre => genre), { message: "You have to select at least one genre", }),
    albumId: z.number().optional()
});

export default function AddSongForm({onAddSuccessfully}: {onAddSuccessfully: Function}) {
    const [genres, setGenres] = useState<Genre[] | null>(null);
    const [artists, setArtists] = useState<Artist[] | null>(null);
    const [albums, setAlbums] = useState<Album[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [artistId, setArtistId] = useState<number | null>(null);

    useEffect(() => {
        fetch(`${API_URL}/categories?type=${GenreType.Music}`)
            .then(res => res.json())
            .then((data: Genre[]) => setGenres(data))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        fetch(`${API_URL}/artists`)
            .then(res => res.json())
            .then((data: Artist[]) => setArtists(data))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if (!artistId)
            return;
        fetch(`${API_URL}/albums?artistId=${artistId}`)
            .then(res => res.json())
            .then((data: Album[]) => setAlbums(data))
            .catch(err => console.error(err));
    }, [artistId]);

    // 1. Define your form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {

        }
    });

    // 2. Define a submit handler
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        const songCreate = new SongCreate(values.title, values.artistId, values.released.toISOString(), values.minutes, values.seconds, values.genresIds, values.albumId || null);
        try {
            const res = await fetch(`${API_URL}/songs`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(songCreate)
            });
            if (res.ok) onAddSuccessfully();
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

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
                    name="artistId"
                    render={({ field }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                            <FormLabel className="text-right">Artist</FormLabel>
                            <div className="col-span-3 space-y-2">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                className={cn(
                                                    "w-full justify-between",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value
                                                    ? artists?.find(
                                                        (artist) => artist.id === field.value
                                                    )?.fullName
                                                    : "Select an artist"}
                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Command>
                                            <CommandInput placeholder="Search artist name..." />
                                            <CommandEmpty>No artist found.</CommandEmpty>
                                            <CommandGroup>
                                                {artists?.map((artist) => (
                                                <CommandItem
                                                    value={artist.fullName}
                                                    key={artist.id}
                                                    onSelect={() => {
                                                        form.setValue("artistId", artist.id);
                                                        setArtistId(artist.id);
                                                    }}
                                                >
                                                    <Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            artist.id === field.value
                                                                ? "opacity-100"
                                                                : "opacity-0"
                                                        )}
                                                    />
                                                    {artist.fullName}
                                                </CommandItem>
                                            ))}
                                            </CommandGroup>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    
                    name="albumId"
                    render={({ field }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                            <FormLabel className="text-right">Album</FormLabel>
                            <div className="col-span-3 space-y-2">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                className={cn(
                                                    "w-full justify-between",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {(field.value
                                                    ? albums?.find(
                                                        (album) => album.id === field.value
                                                    )?.title
                                                    : "Select an album") || "Select an album"}
                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Command>
                                            <CommandInput placeholder="Search album name..." />
                                            <CommandEmpty>No album found.</CommandEmpty>
                                            <CommandGroup>
                                                {albums?.map((album) => (
                                                <CommandItem
                                                    value={album.title || "Select an album"}
                                                    key={album.id}
                                                    onSelect={() => {
                                                        form.setValue("albumId", album.id)
                                                    }}
                                                >
                                                    <Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            album.id === field.value
                                                                ? "opacity-100"
                                                                : "opacity-0"
                                                        )}
                                                    />
                                                    {album.title}
                                                </CommandItem>
                                            ))}
                                            </CommandGroup>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="released"
                    render={({ field }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                            <FormLabel className="text-right">Released</FormLabel>
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
                <div className="grid grid-cols-4 items-center gap-4">
                    <FormLabel className="text-right">Length</FormLabel>
                    <div className="col-span-3 flex gap-x-3 items-center">
                        <FormField
                            control={form.control}
                            name="minutes"
                            render={({ field }) => (
                                <FormItem className="basis-1/3">
                                    <div>
                                        <FormControl>
                                            <Input {...field} type="number" min={0} />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )}
                        />
                        :
                        <FormField
                            control={form.control}
                            name="seconds"
                            render={({ field }) => (
                                <FormItem className="basis-1/3">
                                    <div>
                                        <FormControl>
                                            <Input {...field} type="number" min={0} />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>                 
                </div>
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