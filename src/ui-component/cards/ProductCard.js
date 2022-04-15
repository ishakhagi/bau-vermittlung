import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// material-ui
import { Button, CardContent, CardMedia, Grid, Rating, Stack, Typography } from '@mui/material';

// project import
import MainCard from './MainCard';
import SkeletonProductPlaceholder from 'ui-component/cards/Skeleton/ProductPlaceholder';

// ==============================|| PRODUCT CARD ||============================== //

const ProductCard = ({ name, image, description, city, constructionSum, street, zipCode, companyName, onNavigate }) => {
    const prodProfile = image;

    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            {isLoading ? (
                <SkeletonProductPlaceholder />
            ) : (
                <MainCard
                    content={false}
                    boxShadow
                    sx={{
                        '&:hover': {
                            transform: 'scale3d(1.02, 1.02, 1)',
                            transition: 'all .4s ease-in-out'
                        }
                    }}
                >
                    <CardMedia sx={{ height: 220 }} image={prodProfile} title="Contemplative Reptile" />
                    <CardContent sx={{ p: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" sx={{ textDecoration: 'none' }}>
                                    {companyName}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ textDecoration: 'none' }}>
                                    {name}
                                </Typography>
                            </Grid>
                            {description && (
                                <Grid item xs={12}>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            overflow: 'hidden',
                                            height: 45
                                        }}
                                    >
                                        {description}
                                    </Typography>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <Typography variant="body2" sx={{ textDecoration: 'none' }}>
                                    {street}
                                </Typography>
                                <Typography variant="body2" sx={{ textDecoration: 'none' }}>
                                    {zipCode} {city}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ pt: '8px !important' }}>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Rating precision={0.5} name="size-small" value={5} size="small" readOnly />
                                    <Typography variant="caption">({constructionSum}+)</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Button variant="contained" sx={{ minWidth: 0 }} onClick={onNavigate}>
                                        Ansehen
                                    </Button>
                                    <Button variant="outlined" sx={{ minWidth: 0 }}>
                                        Speichern
                                    </Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </CardContent>
                </MainCard>
            )}
        </>
    );
};

ProductCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    constructionSum: PropTypes.number,
    street: PropTypes.string,
    zipCode: PropTypes.string,
    companyName: PropTypes.string,
    onNavigate: PropTypes.func,
    image: PropTypes.string,
    city: PropTypes.string
};

export default ProductCard;
