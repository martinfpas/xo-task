import { Button, Stack } from '@mui/material';
import { Project as ProjectType } from '../types/types';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

export const ProjectList = (params: { list: ProjectType }) => {
    const { list } = params;

    const columns: GridColDef<(typeof list)[]>[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            flex: 1,
            editable: true,
        },
        {
            field: 'owner',
            headerName: 'Owner Id',
            type: 'number',
            flex: 1,
            editable: true,
        },
        {
            field: 'edit',
            headerName: 'Edit',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (_, row) => row.id,
            renderCell: (row) => {
                return <Button variant="contained" component={Link} to={`/project/${row.id}`} >Edit</Button>
            }
        }

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