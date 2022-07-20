import user from './user'
function UserInfo () {
    return (

    <div>
        
    users.map(user =>(
       
      <h2 > {user.nom} </h2>
      <li> {user.commentaire}</li>
       { user.suivi && <a> suivi</a>}
       <Rating value ={user.note}/>
    
     </div>

    )
}

export default UserInfo
