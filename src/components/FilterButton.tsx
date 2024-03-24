import style from './FilterButton.module.scss'
import { useAppDispatch } from '../store/store'
import { filterCourses } from '../store/courses/coursesSlice'
import {memo, useCallback} from 'react'

type Props = {
  text: string
  isActive: boolean
  setActive: (v: string) => void
}
export const FilterButton = memo(function FilterButton ({ text, isActive, setActive }: Props) {
  const dispatch = useAppDispatch()
  const handleClick = useCallback(() => {
    setActive(text)
    dispatch(filterCourses(text))
  }, [text])

  return (
    <button
      onClick={handleClick}
      className={`${style.customButton} ${isActive && style.activeButton}`}
    >
      {text}
    </button>
  )
})
