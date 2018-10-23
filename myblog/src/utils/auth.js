export const getToken = () => {
    return sessionStorage.getItem("admin-token")
}

export const setToken = (token) => {
    return sessionStorage.setItem("admin-token", token)
}

export const removeToken = () => {
    return  sessionStorage.removeItem("admin-token")
}


