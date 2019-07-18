function submitData(name, email) {

    const formData = {
        name: name,
        email: email
    }
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)

    }
    return fetch("http://localhost:3000/users", configObject)
        .then(resp => resp.json())
        .then(json => json.id)
        .then(id => document.body.innerHTML = document.body.innerHTML + id.toString())
        .catch(message => document.body.innerHTML = document.body.innerHTML + message)
}