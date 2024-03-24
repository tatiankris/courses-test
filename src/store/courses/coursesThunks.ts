import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCoursesRequest } from '../../api/getCourses'

export const getCourses = createAsyncThunk('auth/fetchAuth', async function (_, thunkAPI) {
  try {
    const res = await getCoursesRequest()
    return res.data
  } catch (e: AxiosError | unknown) {
    console.log(e)
  }
})
