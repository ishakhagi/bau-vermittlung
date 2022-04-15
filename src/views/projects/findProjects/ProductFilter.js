// material-ui
import { Button, CardContent, Grid, Stack, useMediaQuery, TextField } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| PRODUCT GRID - FILTER ||============================== //

const ProductFilter = () => {
    const matchDownLG = useMediaQuery((theme) => theme.breakpoints.down('xl'));

    return (
        <MainCard border={!matchDownLG} content={false} sx={{ overflow: 'visible' }}>
            <CardContent sx={{ p: 1, height: matchDownLG ? '100vh' : 'auto' }}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Branche" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Land" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Stadt" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Postleitzahl" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Branche" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Bauart" />
                    </Grid>
                    <Grid item xs={12} sx={{ m: 1 }}>
                        <Stack direction="row" justifyContent="center" alignItems="center">
                            <Button variant="contained" fullWidth>
                                Filtern
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </MainCard>
    );
};

export default ProductFilter;
