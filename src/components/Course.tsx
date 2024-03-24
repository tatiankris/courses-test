import { CourseType } from '../types/CourseType'
import style from './Course.module.scss'
import { memo } from 'react'

type Props = CourseType
export const Course = memo(function Course({ name, image, bgColor }: Props) {
  return (
    <div className={style.courseBox}>
      <div style={{ backgroundColor: bgColor }} className={style.imageBox}>
        <img className={style.image} src={image} />
      </div>
      <div className={style.label}>{name}</div>
    </div>
  )
})
