import {products} from "./constants/product.js";
import Product from './models/productSchema.js'

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
