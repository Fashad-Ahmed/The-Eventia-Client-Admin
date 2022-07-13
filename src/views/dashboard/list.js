import React from 'react'

import ImageGallery from 'react-image-gallery'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CImage,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChart, CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cibUbuntu,
} from '@coreui/icons'

import { games } from './data'

const List = () => {
  return (
    <>
      <div className="clearfix">
        {games.map((game) => {
          return (
            <div className="card" key={game.id}>
              <div className="card-body">
                <h5 className="card-title">{game.name}</h5>
                <p className="card-text">{game.description}</p>
                <p className="card-text">
                  <strong>{game.purchasePrice}</strong> &nbsp; &nbsp; &nbsp; <i>{game.console}</i>
                </p>
                <img className="card-img-top" src={game.coverURL} alt="Card image cap" />
                <div className="card-body">
                  <CButton color="primary">Buy</CButton>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default List
