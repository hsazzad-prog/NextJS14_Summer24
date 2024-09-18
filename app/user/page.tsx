import axios from "axios";

 export default async function ShowData(){

const response= await axios.get('http://localhost:3000/admin/getadminwithmanagers');
console.log(response);
const data =response.data;
return (<>

{data.map((user: any) => (
    <p>{user.id}
    {user.fullname}
    {user.username}
    {user.filename}
<img src={'http://localhost:3000/admin/getimage/'+user.filename}/>
    </p>
 
    
  ))}
</>);

}