import  express  from "express"

const router = express.Router()
router.route("/api/v1/restaurents").get((req,res) =>res.send("hello world"))

export default router