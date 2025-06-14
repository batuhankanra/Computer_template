
interface User {
  name:string
  email:string
  id:string
}
interface UserProps{
  id:string
  name:string
  email:string
  emailVerified:boolean
  role:string
  createdAt:string
  updatedAt:string
}
interface UserGetRedux{
  data:UserProps[]
  update:{
    id:string
    name:string 
    email:string
    role:string
  }
}

interface menuProps{
    id:number
    name:string
    link:string
}

interface mobilHeaderProps{
    active:boolean
    setActive:React.Dispatch<React.SetStateAction<boolean>>
}

type responseProps={
  msg:string,
  type:string
}

type ProductProps = {
  id: number;
  name: string;
  image: string;
  price:number
  discount?:number
};

interface CompanyLogo{
  id:number,
  title:string
  link:string
  image:string
}
interface categoryReqProps{
  name:string,
  parentId:string
}
interface categoryUpdateReqProps{
  id:string,
  category:categoryReqProps
}

interface categoryRedux{
  status:string,
  data:categoryReqProps[]
}
interface UploadState{
  message:string
  success: boolean
  filePath:string
}
interface FileInputProps {
  label?: string;
  onChange: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
}



interface CommenInputProps{
  disabled?:boolean
  label:string
  placeholder?:string
}
interface TextProps extends CommenInputProps{
  type?: "text" | "email" | "password" | "search";
  value: string;
  onChange: (value: string) => void;
}
interface NumberProps extends CommenInputProps{
  type: "number";
  value: number;
  onChange: (value: number) => void;
}
type InputProps=TextProps | NumberProps



interface ProductFormData {
  title: string;
  price: number;
  description: string;
  img: File[];
}

interface ProductState{
  loading:boolean
  error:string | null
  success:boolean
}
interface ProductsProps {
  createdAt: string;
  description: string;
  id: string;
  img: string[];
  price: number;
  title: string;
  updatedAt: string;
  user: User;
  userId: string;
  category:{
    name:string,
    id:string
  }
}
interface ReduxProduct{
  data:ProductsProps[] 
  update:ProductsProps
}


interface CreateProductArgs {
  formData: FormData;
  id: string;
}


interface ReduxCategory{
  data:CategoryProps[]
  updates:{
    id:string
    name:string
    parentId:string
  }
}
interface CategoryProps{
  id:string 
  name:string
  parentId:string
  userId:string
  user:User
  createdAt:string
  updatedAt:string
}
interface CategoryFetchProps{
  name:string
  parentId:string
}
interface RouteModalProps{
  path:string,
  element:ReactElement
}

interface parentId{
  name:string
  id:string
}
enum Role {
  USER = "USER",
  ADMIN = "ADMIN"
}