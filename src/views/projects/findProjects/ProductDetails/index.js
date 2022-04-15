import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// material-ui
import { Box, Grid } from '@mui/material';

// project imports
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import MainCard from 'ui-component/cards/MainCard';

import { gridSpacing } from 'store/constant';
import { useDispatch, useSelector } from 'store';
import { getProduct } from 'store/slices/product';

function TabPanel({ children, value, index, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`product-details-tabpanel-${index}`}
            aria-labelledby={`product-details-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

const ProductDetails = () => {
    const { id } = useParams();
    const history = useNavigate();

    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const productState = useSelector((state) => state.product);

    useEffect(() => {
        setProduct(productState.product);
        if (productState.product) {
            if (id === 'default') {
                history(`/e-commerce/product-details/${productState?.product?.id}`);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productState]);

    useEffect(() => {
        // getProduct();
        dispatch(getProduct(id));

        // clear cart if complete order

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Grid container alignItems="center" justifyContent="center" spacing={gridSpacing}>
            <Grid item xs={12} lg={10}>
                <MainCard>
                    {product && (
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={6}>
                                <ProductImages product={product} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ProductInfo product={product} />
                            </Grid>
                            <Grid item xs={12}>
                                <ProductDescription />
                            </Grid>
                        </Grid>
                    )}
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default ProductDetails;
