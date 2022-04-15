import { useEffect, useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, Drawer, Grid, InputAdornment, Stack, TextField, Typography, useMediaQuery } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import useConfig from 'hooks/useConfig';
import { appDrawerWidth, gridSpacing } from 'store/constant';
import ProductCard from 'ui-component/cards/ProductCard';

// assets
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import ProductFilter from './ProductFilter';
import { useNavigate } from 'react-router-dom';

import prod1 from 'assets/images/bau/bild1.jpeg';
import prod2 from 'assets/images/bau/bild2.jpeg';
import prod3 from 'assets/images/bau/bild3.jpeg';
import prod4 from 'assets/images/bau/bild4.jpeg';
import prod5 from 'assets/images/bau/bild5.jpeg';

const projects = [
    {
        id: '1',
        name: 'Beispielprojekt',
        zipCode: '80992',
        street: 'Allacherstraße 33',
        companyName: 'Hagis Engineering GmbH',
        description: 'Eine einfache Beschreibung',
        constructionSum: '200',
        city: 'München',
        image: prod1
    },
    {
        id: '2',
        name: 'Beispielprojekt',
        zipCode: '80992',
        street: 'Allacherstraße 33',
        companyName: 'Hagis Engineering GmbH',
        description: 'Eine einfache Beschreibung',
        constructionSum: '200',
        city: 'München',
        image: prod2
    },
    {
        id: '3',
        name: 'Beispielprojekt',
        zipCode: '80992',
        street: 'Allacherstraße 33',
        companyName: 'Hagis Engineering GmbH',
        description: 'Eine einfache Beschreibung',
        constructionSum: '200',
        city: 'München',
        image: prod3
    },
    {
        id: '4',
        name: 'Beispielprojekt',
        zipCode: '80992',
        street: 'Allacherstraße 33',
        companyName: 'Hagis Engineering GmbH',
        description: 'Eine einfache Beschreibung',
        constructionSum: '200',
        city: 'München',
        image: prod4
    },
    {
        id: '5',
        name: 'Beispielprojekt',
        zipCode: '80992',
        street: 'Allacherstraße 33',
        companyName: 'Hagis Engineering GmbH',
        description: 'Eine einfache Beschreibung',
        constructionSum: '200',
        city: 'München',
        image: prod5
    }
];

// product list container
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.shorter
    }),
    marginRight: -appDrawerWidth,
    [theme.breakpoints.down('xl')]: {
        paddingRight: 0,
        marginRight: 0
    },
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.shorter
        }),
        marginRight: 0
    })
}));

// ==============================|| E-COMMERCE - PRODUCT GRID ||============================== //

const ProductsList = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { borderRadius } = useConfig();

    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
    const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'));

    // drawer
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen((prevState) => !prevState);
    };

    useEffect(() => {
        setOpen(!matchDownLG);
    }, [matchDownLG]);

    const spacingMD = matchDownMD ? 1 : 1.5;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <MainCard>
                    <Grid container alignItems="center" justifyContent="space-between" spacing={matchDownMD ? 0.5 : 2}>
                        <Grid item xs={6}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <TextField
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon fontSize="small" />
                                            </InputAdornment>
                                        )
                                    }}
                                    fullWidth
                                    placeholder="Projekt Suchen"
                                />
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Stack direction="row" alignItems="center" justifyContent="center" spacing={matchDownSM ? 0.5 : spacingMD}>
                                <Typography sx={{ pl: 1.5, fontSize: '1rem', color: 'grey.500', fontWeight: 400 }}>|</Typography>

                                <Button
                                    disableRipple
                                    onClick={handleDrawerOpen}
                                    color="secondary"
                                    startIcon={<FilterAltIcon sx={{ fontWeight: 500, color: 'secondary.200' }} />}
                                >
                                    Filter
                                </Button>

                                <Typography
                                    sx={{ display: { xs: 'none', sm: 'flex' }, fontSize: '1rem', color: 'grey.500', fontWeight: 400 }}
                                >
                                    |
                                </Typography>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="center"
                                    sx={{ display: { xs: 'none', sm: 'flex' } }}
                                >
                                    <Typography variant="h5">Sortieren: </Typography>
                                    <Button>Sortieren</Button>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ display: 'flex' }}>
                    <Main open={open}>
                        <Grid container spacing={gridSpacing}>
                            {projects.map((project) => (
                                <Grid key={project.id} item xs={12} sm={6} md={4} lg={3}>
                                    <ProductCard
                                        id={project.id}
                                        city={project.city}
                                        name={project.name}
                                        description={project.description}
                                        constructionSum={project.constructionSum}
                                        zipCode={project.zipCode}
                                        image={project.image}
                                        companyName={project.companyName}
                                        street={project.street}
                                        onNavigate={() => {
                                            console.log('HELLO WORLD');
                                            navigate(`/projects/view/${project.id}`); // navigate(`/projects/view/${project.id}`);
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Main>
                    <Drawer
                        sx={{
                            ml: open ? 3 : 0,
                            height: matchDownLG ? '100vh' : 'auto',
                            flexShrink: 0,
                            zIndex: { xs: 1200, lg: open ? 0 : -1 },
                            overflowX: 'hidden',
                            width: appDrawerWidth,
                            '& .MuiDrawer-paper': {
                                height: 'auto',
                                width: appDrawerWidth,
                                position: matchDownLG ? 'fixed' : 'relative',
                                border: 'none',
                                borderRadius: matchDownLG ? 0 : `${borderRadius}px`
                            }
                        }}
                        variant={matchDownLG ? 'temporary' : 'persistent'}
                        anchor="right"
                        open={open}
                        ModalProps={{ keepMounted: true }}
                        onClose={handleDrawerOpen}
                    >
                        {open && (
                            <PerfectScrollbar component="div">
                                <ProductFilter />
                            </PerfectScrollbar>
                        )}
                    </Drawer>
                </Box>
            </Grid>
        </Grid>
    );
};

export default ProductsList;
