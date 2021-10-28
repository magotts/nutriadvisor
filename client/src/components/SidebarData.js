import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const SidebarData = [ 
  
  { 
    title: "User Profile",
    icon: <AccountCircleIcon />,
    link: "/userprofile"
  },
  { 
    title: "Food Diary",
    icon: <MenuBookIcon />,
    link: "/food_diary"
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
    link: "/exercise_search"
  },
  { 
    title: "Request a Coach",
    icon: <PersonAddIcon />,
    link: "/requestcoach"
  }
]