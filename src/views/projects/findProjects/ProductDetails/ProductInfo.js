import PropTypes from 'prop-types';

// material-ui
import { Button, Divider, Grid, Rating, Stack, TextField, Typography } from '@mui/material';

// project imports
import Avatar from 'ui-component/extended/Avatar';

// assets
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import StarBorderTwoToneIcon from '@mui/icons-material/StarBorderTwoTone';

// ==============================|| PRODUCT DETAILS - INFORMATION ||============================== //

const ProductInfo = ({ product }) => (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Typography variant="h3">Beispielprojekt</Typography>
                            <Typography variant="body2">Hagis Engineering GmbH</Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Avatar variant="rounded" sx={{ bgcolor: 'grey.200', color: 'grey.800' }}>
                    <FavoriteBorderIcon />
                </Avatar>
            </Stack>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="body2">{product.description}</Typography>
        </Grid>
        <Grid item xs={12}>
            <Stack direction="row" alignItems="center" spacing={1}>
                <Rating
                    name="simple-controlled"
                    value={product.rating}
                    icon={<StarTwoToneIcon fontSize="inherit" />}
                    emptyIcon={<StarBorderTwoToneIcon fontSize="inherit" />}
                    precision={0.1}
                    readOnly
                />
                <Typography variant="caption">({product.salePrice}+)</Typography>
            </Stack>
        </Grid>
        <Grid item xs={12}>
            <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="h2" color="primary">
                    ${product.offerPrice}
                </Typography>
                <Typography variant="caption">Bausumme</Typography>
            </Stack>
        </Grid>
        <Grid item xs={12}>
            <Divider />
        </Grid>
        <Grid item xs={12}>
            <TextField multiline rows={10} fullWidth label="Nachricht" />
        </Grid>
        <Grid item xs={12}>
            <Button type="submit" fullWidth color="secondary" variant="contained" size="large">
                Kontaktieren
            </Button>
        </Grid>
    </Grid>
);

ProductInfo.propTypes = {
    product: PropTypes.object
};

export default ProductInfo;
