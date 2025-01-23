
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AccountBox, Assessment, Book, CloudSync, Computer, ConfirmationNumber, LiveHelp } from '@mui/icons-material';

interface RouteListInterface{
    label:string,
    icon:any,
    href:string
}

const RouteList:Array<RouteListInterface> =  [
    {
        label: "Dashboard",
        icon: DashboardIcon,
        href:"/dashboard"
    },
    {
        label: "Result",
        icon: Book,
        href:"/result"
    },
    {
        label: "Students",
        icon: AccountBox,
        href:"/student"
    },
    {
        label: "Group",
        icon: CloudSync,
        href:"/exam"
    },
    {
        label: "Exams",
        icon: Computer,
        href:"/exam"
    },
    {
        label: "Performance",
        icon: Assessment,
        href:"/performance"
    },
    {
        label: "Configuration",
        icon: ConfirmationNumber,
        href:"/configuration"
    },
    {
        label: "Support",
        icon: LiveHelp,
        href:"/support"
    }

];

export default RouteList;