import {Button} from '@/components/ui/button';
import React from 'react';
import {ArrowUpRight} from "lucide-react";

export default function ScheduleACallButton({variant, withIcon, className}: {
    variant: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "inverted",
    withIcon: boolean,
    className?: string
}) {
    return (
        <Button variant={variant} className={className}>
            Schedule a Call
            {withIcon && (
                <ArrowUpRight/>
            )}
        </Button>
    );
}
