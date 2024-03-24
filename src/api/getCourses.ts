import axios from 'axios'
import { CourseType } from '../types/CourseType'

export const getCoursesRequest = () => {
  return axios.get<Array<CourseType>>('https://logiclike.com/docs/courses.json')
}
