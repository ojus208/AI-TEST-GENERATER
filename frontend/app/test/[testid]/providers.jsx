import { Quecontextprovider } from "@/app/context/context"

const Providers = ({children}) => {
  return (
    <Quecontextprovider>
{children}
    </Quecontextprovider>
  )
}

export default Providers