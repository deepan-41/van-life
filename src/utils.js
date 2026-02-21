import { redirect } from "react-router-dom"

export async function requireAuth({ request }) {
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"))
    const pathname = new URL(request.url).pathname
    if (!isLoggedIn) {
        throw redirect(`/login?message=you must log in first&redirectTo=${pathname}`)
    }
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}