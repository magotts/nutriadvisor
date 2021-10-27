import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const SidebarData = [ 
  { 
    title: "Home",
    icon: <HomeIcon />,
    link: "/home"
  },
  { 
    title: "User Profile",
    icon: <AccountCircleIcon />,
    link: "/home"
  },
  { 
    title: "Calorie Calculator",
    icon: <CalculateIcon />,
    link: "/biometrics"
  },
  { 
    title: "Food Search",
    icon: <FoodBankIcon />,
    link: "/food_search"
  },
  { 
    title: "Exercise",
    icon: <FitnessCenterIcon />,
    link: "/home"
  },
]