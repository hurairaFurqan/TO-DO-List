export const API_BASEURL_AUTH = "/auth"
export const API_BASEURL_USER = "/users"
export const API_BASEURL_TODO = "/api"

export const setHeaders = () => {
    const headers = {
        headers: {
            "Bearer": localStorage.getItem("token"),
        },
    };

    return headers;
};
