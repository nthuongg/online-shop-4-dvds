import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export default function AlertDestructive({ title, description }: {title: string, description: string[]}) {
    return (
        <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{title}</AlertTitle>
            {description.map((d, i) => <AlertDescription key={i}>{d}</AlertDescription>)}
        </Alert>
    )
}