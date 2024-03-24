import style from './Courses.module.scss'
import { Course } from '../../components/Course'
import { CourseType } from '../../types/CourseType'

type Props = {
  courses: CourseType[]
}
export const Courses = ({ courses }: Props) => {

  return (
    <div className={style.coursesBox}>
      {courses.map((el) => {
        return (
          <Course
            key={el.id}
            id={el.id}
            bgColor={el.bgColor}
            image={el.image}
            name={el.name}
            tags={el.tags}
          />
        )
      })}
    </div>
  )
}
