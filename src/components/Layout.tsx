import { Stack } from '@mui/material';
import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
    return <Stack width={"100%"} justifyContent={"center"} >
        {children}
    </Stack>
}