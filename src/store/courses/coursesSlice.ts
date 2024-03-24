import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { getCourses } from './coursesThunks'
import { CourseType } from '../../types/CourseType'

const allThemes = process.env.ALL_THEMES || 'Все темы'

type CoursesStateType = {
  tags: string[] | null
  allCourses: CourseType[] | null
  filteredCourses: CourseType[] | null
}

const initialState: CoursesStateType = {
  tags: null,
  allCourses: null,
  filteredCourses: null,
}

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    filterCourses(state, action) {
      state.filteredCourses = state.allCourses
        ? state.allCourses.filter((c) => {
            return action.payload === allThemes ? true : c.tags.includes(action.payload)
          })
        : []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCourses.fulfilled, (state, action) => {
      if (action.payload) {
        const courses = action.payload
        state.allCourses = courses
        state.filteredCourses = courses

        const tags = courses.reduce((acc, c) => {
          c.tags.forEach((t) => {
            !acc.includes(t) && acc.push(t)
          })
          return acc
        }, [] as string[])
        state.tags = [allThemes, ...tags]
      }
    })
    builder.addMatcher(isAnyOf(getCourses.rejected, getCourses.pending), (state, action) => {})
  },
})

export const { filterCourses } = coursesSlice.actions

export default coursesSlice.reducer
