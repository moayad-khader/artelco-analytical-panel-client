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
        <Card className=" dark:border-gray-900 border-2 dark:bg-background-secondary-dark bg-white border-light opacity-90">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-black">
                <CardTitle className="text-xl font-bold dark:text-white ">
                   {title}
                </CardTitle>
                <Icon className="h-8 w-8 text-muted-foreground text-primary" />
            </CardHeader>
            <CardContent>
                <div className="text-6xl font-bold text-primary">{subtitle}</div>  
            </CardContent>
        </Card>       
    ); 
};

export default BillBoard;
