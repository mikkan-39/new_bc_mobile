export function loginRequest(creds) {
    fetch('http://nightly.claris.su/restservice.svc/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: creds.username,
            password: creds.password
        })
    })
}

export function getConfig() {
    fetch('http://nightly.claris.su/androidservice.svc/appconf', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
}