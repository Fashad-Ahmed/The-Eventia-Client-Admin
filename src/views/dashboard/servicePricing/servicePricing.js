import React from 'react'
import MUIDataTable from 'mui-datatables'
const ServicePricing = () => {
  const data = [
    ['Bartending', '$10'],
    ['Catering', '$10'],
    ['Chef', '$10'],
    ['DJ', '$10'],
    ['Event Setup & Cleaning', '$10'],
    ['Event Staff', '$10'],
    ['Hair & Makeup Artist', '$10'],
    ['Models', '$10'],
    ['Photo & Video Editing', '$10'],
    ['Photography & Video', '$10'],
    ['Promotional Staff', '$10'],
    ['Wedding Assistant', '$10'],
    ['Wedding Help', '$10'],
    ['Wedding photography', '$10'],
    ['Wedding Planning', '$10'],
    ['Product Photography', '$10'],
    ['Photography', '$10'],
    ['Photography Dublin', '$10'],
    ['Photography Cork', '$10'],
    ['Photography Limerick', '$10'],
    ['Xmas Help', '$10'],
    ['Other Tasks', '$10'],
  ]

  const columns = ['Skill', 'Price']

  const options = {
    filterType: 'checkbox',
  }
  return <MUIDataTable title={'Pricing List'} data={data} columns={columns} options={options} />
}

export default ServicePricing
