import { api } from '.'

const ProductService = {
    list({
        offset = 0,
        limit = 20,
        special,
        is_new,
        softBy,
        oder,
        search,
        min_price,
        max_price = 50000000,
        ...restParam
    } = {}) {
        return api.call().get(`/mobile/products`, {
            params: {
                offset,
                limit,
                special,
                is_new,
                softBy,
                oder,
                search,
                min_price,
                max_price,
                ...restParam
            }
        })
    },
    getSingle({
        id,
        ...restParam
    } = {}) {
        return api.call().get(`/mobile/products/${id}`, {
            params: {
                id,
                ...restParam
            }
        })
    }
}

export default ProductService;