import type { LucideIcon } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "components/ui/card";

interface Props {
    title: string;
    subtitle?: string;
    icon?: LucideIcon;
}

export const BillBoard: React.FC<Props> = ({
    title,
    subtitle,
    icon: Icon,
}) => {
    return (
        <Card className=" dark:border-gray-800 border-2 dark:bg-background-secondary-dark">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-black">
                <CardTitle className="text-xl font-bold dark:text-white ">
                   {title}
                </CardTitle>
                <Icon className="h-8 w-8 text-muted-foreground text-[#1f77b4]" />
            </CardHeader>
            <CardContent>
                <div className="text-6xl font-bold text-[#1f77b4]">{subtitle}</div>  
            </CardContent>
        </Card>       
    ); 
};

export default BillBoard;
