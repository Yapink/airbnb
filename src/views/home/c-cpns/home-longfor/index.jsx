import PropTypes from 'prop-types'
import { LongforWrapper } from './styled.js'
import React, { memo } from 'react'
import SectionHeader from '@/components/section-header/index.jsx'
import LongforItem from '@/components/longfor-item/index.jsx'

const HomeLongfor = memo((props) => {
  const { infoData } = props

  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        {
          infoData.list.map(item => {
            return <LongforItem itemData={item} key={item.city} />
          })
        }
      </div>
    </LongforWrapper>
  )
})

HomeLongfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongfor