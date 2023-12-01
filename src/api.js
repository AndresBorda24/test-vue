import { ax, axLocal } from "@/lib/axios"

async function request( req ) {
  let _data  = null
  let _error = null

  try {
    const { data } = await req()
    _data = data
  } catch(e) {
    _error = e
  } finally {
    return {
      data: _data,
      error: _error
    }
  }
}

export function getPlanes() {
  return request(() => ax.get("/get-planes"))
}

export function userExists( cc ) {
  return request(() => ax.get(`/user/${cc}/exists`))
}

export function validateUser( userInfo ) {
  return request(() => ax.post("/validate-user", userInfo))
}

export async function createUser( info ) {
  return request(() => ax.post("/create-user", info))
}

export async function fetchUser( doc ) {
  return request(() => ax.get(`/${doc}/fetch`))
}

export async function createPago(userId, info) {
  // Por si se envia un soporte
  if (! (info instanceof FormData)) {
    let form_data = new FormData();

    for (let key in info) {
      form_data.append(key, info[key]);
    }

    info = form_data;
  }

  return request(() => ax.post(`/${userId}/create-pago`, info))
}

export async function authPull() {
  return request(() => axLocal.get(`/check`))
}
