import { rows, columns } from "./helper";

import "./header-list.scss";
import { DataGrid } from "@mui/x-data-grid";

const ListAllRequest = ({ select = true, edit = true }) => {
  // const classes = useStyles();
  
  
  return (
    <div>
      {columns ? (
        <DataGrid
          rows={rows}
          columns={columns}
          // disableColumnFilter={true}
          disableColumnMenu={true}
          // headerStyle='custom-header-class'
          
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
            // pinnedColumns: { left: ['identification'], right: ['actions'] }
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          classes={{ header: 'datagrid-header', cell: 'datagrid-cell' }}
        />
      ) : (
        <div> we dont have Data</div>
      )}
    </div>
  );
};
export default ListAllRequest;
