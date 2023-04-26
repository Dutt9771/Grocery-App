import { Outlet, useNavigate } from 'react-router-dom'
export default function PrivateRoutes(){
  let auth = sessionStorage.getItem('token');
  const navigate = useNavigate();

return (
    auth ? <Outlet/> : navigate("/")
  )
}