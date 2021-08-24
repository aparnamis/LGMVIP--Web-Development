import React from 'react'

const Cards = ({loading,users}) => {
    const mainstyle={display:'grid',
    gridTemplateColumns: 'repeat('+3+','+ 1+'fr)',};
    return loading ? (   
          <div class="loader" align="center">
            <img src="https://i.imgur.com/llF5iyg.gif" alt="Loaading.." className="loader"/>
          </div>
        ) : 
        (
          <div id="main" style={mainstyle}>
    
          {users.map(user =>
                      <div className="profile" key={user.id}>
                        {
                          console.log(user)
                        }
                        
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          <p>User ID: {user.id}</p>
                      </div>
            )
          }
          </div>
        )
}

export default Cards;