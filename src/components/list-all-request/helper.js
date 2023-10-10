// import { Button } from "react-md"

import { GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import SecurityIcon from "@mui/icons-material/Security";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';

import "./header-list.scss";

export const columns = [
  {
    id: randomId(),
    field: "identification",
    headerName: "Identification",
    flex: 0.1,
    // minWidth:500,
    // headerClassName: "custom-header-class", // Apply a custom CSS class
  },

  {
    id: 2,
    field: "email",
    headerName: "Email",
    // headerClassName: "custom-header-class",  
    flex: 0.1,

  },
  {
    id: 3,
    field: "number_of_days",
    headerName: "Number of days",
    // headerClassName: "custom-header-class",
    flex: 0.1,

  },
  {
    id: 4,
    field: "manager",
    headerName: "Manager",
    // headerClassName: "custom-header-class",
    flex: 0.1,

  },
  {
    id: 5,
    field: "director",
    headerName: "Director",
    cellStyle: "custom-header-class",
    flex: 0.1,

  },
  {
    id: 6,
    headerAlign:'center',
    field: "justification",
    headerName: "Justification",
    flex: 0.1,

  },  
  {

    id: 7,
    field: "actions",
    type: "actions",
    getActions: (params) => [
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Delete"
        // onClick={deleteUser(params.id)}
        showInMenu
      />,
      <GridActionsCellItem
        icon={<SecurityIcon />}
        label="Toggle Admin"
        // onClick={toggleAdmin(params.id)}
        showInMenu
      />,
      <GridActionsCellItem
        icon={<FileCopyIcon />}
        label="Duplicate User"
        // onClick={duplicateUser(params.id)}
        showInMenu
      />,
    ],
  },
];

export const rows = [
  {
    id: 0,
    identification: "2263203",
    email: "testoftest@yopmail.com",
    number_of_days: "548",
    manager: "yes",
    director: "no",
    justification: "...........",
  },
  {
    id: 1,
    identification: "2284873",
    email: "testoftest2@yopmail.com",
    number_of_days: "348",
    manager: "no",
    director: "yes",
    justification: "...........",
  }, 
   {
    id: 2,
    identification: "2263203",
    email: "testoftest3@yopmail.com",
    number_of_days: "548",
    manager: "yes",
    director: "no",
    justification: "...........",
  },
];
