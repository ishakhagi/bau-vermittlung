import React from 'react';
import ProductCard from 'ui-component/cards/ProductCard';
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { useNavigate } from 'react-router-dom';

import prod1 from 'assets/images/e-commerce/prod-1.jpg';

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
        image: prod1
    }
];

export default function ListProjects() {
    const navigate = useNavigate();

    return (
        <div>
            <Grid container spacing={gridSpacing} style={{ marginTop: '3%' }}>
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
        </div>
    );
}
