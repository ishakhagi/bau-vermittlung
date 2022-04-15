import { useDispatch } from 'store';
import { useState } from 'react';

// material-ui
import { Button, Grid, Stack, TextField, Autocomplete } from '@mui/material';
import FileUpload from 'react-material-file-upload';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import { openSnackbar } from 'store/slices/snackbar';
import { gridSpacing } from 'store/constant';

import types from 'utils/constants/types';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';

/**
 * 'Enter your email'
 * yup.string Expected 0 arguments, but got 1 */
const validationSchema = yup.object({
    name: yup.string().required('Bitte Projektnamen angeben'),
    country: yup.string().required('Bitte Land angeben'),
    state: yup.string().required('Bitte Bundesland angeben'),
    city: yup.string().required('Bitte Stadt angeben'),
    zipCode: yup.string().required('Bitte Postleitzahl angeben'),
    street: yup.string().required('Bitte Straße angeben'),
    constructionSum: yup.number().required('Bitte Bausumme angeben'),
    branche: yup.string().required('Bitte Branche angeben'),
    type: yup.string().required('Bitte Bauart angeben'),
    numFlats: yup.number()
});

// ==============================|| FORM VALIDATION - LOGIN FORMIK  ||============================== //

const FilterForm = () => {
    const dispatch = useDispatch();
    const [files, setFiles] = useState([]);

    console.log(files);

    const formik = useFormik({
        initialValues: {
            name: '',
            country: '',
            state: '',
            city: '',
            zipCode: '',
            street: '',
            constructionSum: '',
            branche: '',
            type: types[0],
            numFlats: ''
        },
        validationSchema,
        onSubmit: () => {
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Submit Success',
                    variant: 'alert',
                    alert: {
                        color: 'success'
                    },
                    close: false
                })
            );
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Projektname"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        fullWidth
                        id="country"
                        name="country"
                        label="Land"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        error={formik.touched.country && Boolean(formik.errors.country)}
                        helperText={formik.touched.country && formik.errors.country}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        fullWidth
                        id="state"
                        name="state"
                        label="Bundesland"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        error={formik.touched.state && Boolean(formik.errors.state)}
                        helperText={formik.touched.state && formik.errors.state}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        fullWidth
                        id="city"
                        name="city"
                        label="Stadt"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        error={formik.touched.city && Boolean(formik.errors.city)}
                        helperText={formik.touched.city && formik.errors.city}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        fullWidth
                        id="zipCode"
                        name="zipCode"
                        label="Postleitzahl"
                        value={formik.values.zipCode}
                        onChange={formik.handleChange}
                        error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
                        helperText={formik.touched.zipCode && formik.errors.zipCode}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        fullWidth
                        id="street"
                        name="street"
                        label="Straße und Hausnummer"
                        value={formik.values.street}
                        onChange={formik.handleChange}
                        error={formik.touched.street && Boolean(formik.errors.street)}
                        helperText={formik.touched.street && formik.errors.street}
                    />
                </Grid>
                <Grid item md={6} xs={12} />
                <Grid item md={6} xs={12}>
                    <TextField
                        fullWidth
                        id="constructionSum"
                        name="constructionSum"
                        label="Bausumme"
                        value={formik.values.constructionSum}
                        onChange={formik.handleChange}
                        error={formik.touched.constructionSum && Boolean(formik.errors.constructionSum)}
                        helperText={formik.touched.constructionSum && formik.errors.constructionSum}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        fullWidth
                        id="branche"
                        name="branche"
                        label="Branche"
                        value={formik.values.branche}
                        onChange={formik.handleChange}
                        error={formik.touched.branche && Boolean(formik.errors.branche)}
                        helperText={formik.touched.branche && formik.errors.branche}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Autocomplete
                        fullWidth
                        disableClearable
                        options={types}
                        defaultValue={types[0]}
                        renderInput={(params) => <TextField {...params} label="" />}
                        id="type"
                        name="type"
                        label="Art des Bauvorhaben"
                        value={formik.values.type}
                        error={formik.touched.type && Boolean(formik.errors.type)}
                        helperText={formik.touched.type && formik.errors.type}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        fullWidth
                        id="numFlats"
                        name="numFlats"
                        disabled
                        label="Anzahl Wohnungen"
                        value={formik.values.numFlats}
                        onChange={formik.handleChange}
                        error={formik.touched.numFlats && Boolean(formik.errors.numFlats)}
                        helperText={formik.touched.numFlats && formik.errors.numFlats}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FileUpload value={files} onChange={setFiles} />
                </Grid>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="flex-end">
                        <AnimateButton>
                            <Button variant="contained" type="submit">
                                Verify & Submit
                            </Button>
                        </AnimateButton>
                    </Stack>
                </Grid>
            </Grid>
        </form>
    );
};

export default FilterForm;
