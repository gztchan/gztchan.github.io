import React from "react"
import PropTypes from "prop-types"

import Header from '../../components/header'
import generalStyles from './general.module.css'

const GeneralLayout = ({ children }) => {
  return (
    <>
      <div className={generalStyles.general}>
        <main
          className={generalStyles.main}
        >
          <div className={generalStyles.header}>
            <Header />
          </div>
          {children}
        </main>
        {/* <div className={generalStyles.sidemenu}>
        </div> */}
      </div>
    </>
  )
}

GeneralLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GeneralLayout
