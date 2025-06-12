import AddCategories from "@/app/(clinet)/admin/(page)/categories/addCategoreis"
import DeleteCategories from "@/app/(clinet)/admin/(page)/categories/deleteCategories"
import Updatecategories from "@/app/(clinet)/admin/(page)/categories/updateCategories"
import productCreate from "@/app/(clinet)/admin/(page)/products/add/page"
import DeleteProduct from "@/app/(clinet)/admin/(page)/products/delete/page"
import ProductUpdate from "@/app/(clinet)/admin/(page)/products/update/page"



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
    }
    
]
