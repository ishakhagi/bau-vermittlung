import Specification from './Specification';

// material-ui
import { Grid } from '@mui/material';

// project imports
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import MainCard from 'ui-component/cards/MainCard';

import { gridSpacing } from 'store/constant';

const details = {
    project: {
        id: '1',
        name: 'Wohungsbau an der Schleißheimerstraße 18',
        description:
            'Si ni ci pov ikco hohez ivjojip ompunfer ovawutza puhanoh huhuna vonena feti semnehec akji ahezigup. Ete lat tumke gi pupneb cahuor hezcuubo suislu tozleoc os dekihuce li pi igkuben juaf.',
        constructionSum: '500.000',
        street: 'Schleißheimerstraße 45',
        zipCode: '80339',
        city: 'München',
        branche: 'Elektrotechnik',
        area: '400',
        numFlats: '120',
        published: '28-03-2021'
    },
    company: {
        name: 'Hagis Engineering GmbH',
        street: 'Allacherstraße 33',
        zipCode: '80992',
        city: 'München',
        branche: 'Elektriker',
        email: 'info@hagi-eng.de',
        mobile: '0176 1234734',
        phone: '089 1234555',
        person: 'Idris Hagi'
    }
};

const ProductDetails = () => (
    <Grid container alignItems="center" justifyContent="center" spacing={gridSpacing}>
        <Grid item xs={12} lg={10}>
            <MainCard>
                {details && (
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={4}>
                            <ProductImages product={details} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Grid item xs={12} md={12}>
                                <ProductInfo product={details} />
                            </Grid>
                            <Grid item xs={12} md={12} style={{ marginTop: '3%' }}>
                                <Specification details={details} />
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </MainCard>
        </Grid>
    </Grid>
);

export default ProductDetails;
