import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'
import useStyles from './styles';

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shows.",
    price: "$5",
    image:
      "https://www.rei.com/dam/content_team_010818_52427_htc_running_shoes_hero2_lg.jpg",
  },
  { id: 2, name: "Macbook", description: "Apple macbook.", price: "$10", image: 'https://s.yimg.com/uu/api/res/1.2/qi8vdW0iSLBJWZUC9fv5Uw--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-11/c8aea820-28a0-11eb-9f89-5ddd62987703.cf.jpg' }
];
const Products = () => {

  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products