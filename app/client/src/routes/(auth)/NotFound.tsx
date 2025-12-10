import { useNavigate } from "react-router-dom";
import { ChevronLeft, Search } from "lucide-react"

import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"
import { Button } from "@/components/ui/button";
const NotFound = () => {

    const navigate = useNavigate();

    return (
        <Empty className="h-screen">
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <Search />
                </EmptyMedia>
                <EmptyTitle className="text-2xl font-semibold">Page Not Found</EmptyTitle>
                <EmptyDescription className="text-muted-foreground">
                    The page you are looking for doesn&apos;t exist or has been moved.
                </EmptyDescription>
                <EmptyContent className="mt-5">
                    <Button
                        onClick={() => navigate(-1)}
                    >
                        Go Back
                        <ChevronLeft className="size-4" />
                    </Button>
                </EmptyContent>
            </EmptyHeader>
        </Empty>
    );
};


export default NotFound;