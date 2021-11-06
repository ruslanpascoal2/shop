import { Container, Box } from '@material-ui/core'
import React from 'react'
import Filter from './Filter'
import ProductGrid from '../../components/ProductGrid';


const Home = () => {
    return (
        <Box>
          <Filter/>
          <ProductGrid/>
        </Box>
    )
}

export default Home
