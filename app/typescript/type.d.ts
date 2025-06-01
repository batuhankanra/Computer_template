

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