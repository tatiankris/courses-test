import React, { useEffect } from 'react'
import { Menu } from '../modules/Menu/Menu'
import { useAppDispatch } from '../store/store'
import { getCourses } from '../store/courses/coursesThunks'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCourses())
  }, [])

  return <Menu />
}

export default App
