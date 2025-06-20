import AddCategories from "@/app/(clinet)/admin/(page)/categories/addCategoreis"
import DeleteCategories from "@/app/(clinet)/admin/(page)/categories/deleteCategories"
import Updatecategories from "@/app/(clinet)/admin/(page)/categories/updateCategories"
import productCreate from "@/app/(clinet)/admin/(page)/products/addProduct"
import DeleteProduct from "@/app/(clinet)/admin/(page)/products/deleteProduct"
import ProductUpdate from "@/app/(clinet)/admin/(page)/products/updateProduct"
import DeleteUser from "@/app/(clinet)/admin/(page)/user/deleteUser"
import UpdateUser from "@/app/(clinet)/admin/(page)/user/updateUser"



export const routeModal:RouteModalProps[]=[
    {
        path:'product-update',
        element:ProductUpdate
    },
    {
        path:'product-delete',
        element:DeleteProduct
    },
    {
        path:"product-create",
        element:productCreate
    },
    {
        path:"category-create",
        element:AddCategories,
    },
    {
        path:"category-update",
        element:Updatecategories
    },
    {
        path:"category-delete",
        element:DeleteCategories
    },
    {
        path:"user-update",
        element:UpdateUser
    },
     {
        path:"user-delete",
        element:DeleteUser
    }
    
]
