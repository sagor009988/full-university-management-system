import { Router } from "express";
import { studentRoute } from "../modules/Student/student.route";
import { userRoute } from "../modules/User/user.route";

const HandleRouter=Router();

const moduleRoute=[
    {
        path:'/users',
        route:userRoute
    },
    {
        path:'/students',
        route:studentRoute
    },
]

moduleRoute.forEach(route=>HandleRouter.use(route.path,route.route))

export default HandleRouter 