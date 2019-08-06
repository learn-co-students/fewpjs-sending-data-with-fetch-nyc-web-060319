

function submitData( name, email ) {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //specifies to destination server what kind of data is being sent over
        "Accept": "application/json" // specifies to server what format of data we are willing to accept
      },
      body: JSON.stringify( {
        //whatever data you are sending over
        name,
        email
      } )
    } )
    .then( function ( response ) {
      return response.json()
    } )
    .then( function ( object ) {
      document.body.innerHTML = object[ "id" ]
    } )
    .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
}
