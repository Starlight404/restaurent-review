let restaurants
//for connection database this is one of the methods


export default class RestaurantsDAO {
    static async inject(conn) {
        if(restaurants) {
            return
        }
        try {
            restaurants = await conn.db(process.env.REST_REV_NS).collection("restaurants")
        } catch(e) {
            console.error(
                `unable to establish a collection handle in restaurantsDAO : ${e}`,
            )
        }
    }
}
