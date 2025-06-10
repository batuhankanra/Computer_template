import productCreate from "@/app/(clinet)/admin/(page)/products/add/page"
import DeleteProduct from "@/app/(clinet)/admin/(page)/products/delete/page"
import ProductUpdate from "@/app/(clinet)/admin/(page)/products/update/page"



export const routeModal=[
    {
        path:'product-update',
        element:ProductUpdate,
        title:"Oluştur"
    },
    {
        path:'product-delete',
        element:DeleteProduct,
        title:"sil"
    },
    {
        path:"product-create",
        element:productCreate,
        title:"sil"
    }
    
]
