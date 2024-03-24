import style from './Menu.module.scss'
import { Filters } from '../Filters/Filters'
import { Courses } from '../Courses/Courses'
import { useAppSelector } from '../../store/store'
import { Preloader } from '../../components/Preloader'

export const Menu = () => {
  const { tags, filteredCourses } = useAppSelector((state) => state.courses)

  return tags && filteredCourses ? (
    <div className={style.box}>
      <Filters tags={tags} />
      <Courses courses={filteredCourses} />
    </div>
  ) : (
    <Preloader />
  )
}
