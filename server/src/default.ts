import {products} from "./constants/product";
import Product from './models/productSchema'

export const DefaultData = async () => {
    try {
        await Product.deleteMany({})
        await Product.insertMany(products);
        console.log('Data imported successfully')
    } catch (er) {
        console.log('Error ', er.message)
    }
}

export default DefaultData
