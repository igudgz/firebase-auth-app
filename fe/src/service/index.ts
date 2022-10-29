import { User } from "firebase/auth";
import { useCallback } from "react";
import api from "../api";
import {
   API_URL
  } from '../utils/const'
  import auth from "../utils/firebase/firebase";

export const createUser = useCallback(
    async (params: { email: string | null; uuid: string }) => {
      return await api.post<User>(`${API_URL}/api/users`, params)
    },
    [],
  )

 export const setAPIToToken = useCallback(
    async () => {
      const idToken = await auth.currentUser?.getIdToken()
      if (!idToken) {
        console.warn('[Firebase error]: idToken is not provided')
        return
      }
      api.setToken(idToken)
    },
    [],
  )