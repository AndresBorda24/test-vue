import { ax } from "@/lib/axios"

export async function getPlanes() {
  let _data  = null
  let _error = null

  try {
    const { data } = await ax.get("/get-planes")
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

export async function userExists( cc ) {
  let _data  = null
  let _error = null

  try {
    const { data } = await ax.get(`/user/${cc}/exists`)
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


export async function validateUser( userInfo ) {
  let _data  = null
  let _error = null

  try {
    const { data } = await ax.post("/validate-user", userInfo)
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

export async function createUser( info ) {
  let _data  = null
  let _error = null

  try {
    const { data } = await ax.post("/create-user", info)
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
