import { Stack } from '@mui/material';
import { Project as ProjectType } from '../types/types';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export const ProjectList = (params: { list: ProjectType }) => {
    const { list } = params;

    const columns: GridColDef<(typeof list)[]>[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 150,
            editable: true,
        },
        {
            field: 'owner',
            headerName: 'Owner Id',
            type: 'number',
            width: 110,
            editable: true,
        },

    ];


    return <Stack>
        <DataGrid
            rows={list}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 10,
                    },
                },
            }}
            pageSizeOptions={[10]}
        />
    </Stack>
}