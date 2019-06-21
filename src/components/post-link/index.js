import React from "react"
import { Link }  from 'gatsby'

export default ({ data }) => (
  <p style={{ position: 'relative', margin: 10 }}>
    <span style={{ fontSize: '12px', marginRight: 10 }}>{data.date}</span>
    <Link style={{ position: 'absolute', left: 80 }}to={data.path}>{data.title}</Link>
  </p>
)
