import style from './Filters.module.scss'
import { FilterButton } from '../../components/FilterButton'
import { useState } from 'react'

type Props = {
  tags: string[]
}
export const Filters = ({ tags }: Props) => {
  const [active, setActive] = useState(tags[0])

  return (
    <div className={style.filtersBox}>
      {tags.map((el) => (
        <FilterButton setActive={setActive} text={el} isActive={el === active} key={el} />
      ))}
    </div>
  )
}
