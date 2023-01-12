export default {
  getMe(token) {
    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/user`, {
      method: "GET",
      headers: {
        "authorization":token
      }
    }).then(res => res.json())
  }
}