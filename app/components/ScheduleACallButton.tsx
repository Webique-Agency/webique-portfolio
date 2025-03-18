import {Button} from '@/components/ui/button';
import React from 'react';
import {ArrowUpRight} from "lucide-react";

export default function ScheduleACallButton({variant, withIcon}: {
    variant: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "inverted",
    withIcon: boolean
}) {
    return (
        <Button variant={variant}>
            Schedule a Call
            {withIcon && (
                <ArrowUpRight/>
            )}
        </Button>
    );
}
