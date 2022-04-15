import PropTypes from 'prop-types';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project imports
import Avatar from 'ui-component/extended/Avatar';
// assets
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// ==============================|| PRODUCT DETAILS - INFORMATION ||============================== //

const ProductInfo = ({ product }) => (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Typography variant="h3">{product.project.name}</Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Avatar variant="rounded" sx={{ bgcolor: 'grey.200', color: 'grey.800' }}>
                    <FavoriteBorderIcon />
                </Avatar>
            </Stack>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="body2">{product.project.description}</Typography>
        </Grid>
    </Grid>
);

ProductInfo.propTypes = {
    product: PropTypes.object
};

export default ProductInfo;
