import React from "react"
import { navigate } from "gatsby"

import PrimaryLayout from "../layouts/PrimaryLayouts"

const Paginator = (items, page, per_page) => {
  page = page || 1
  per_page = per_page || 10
  const offset = (page - 1) * per_page
  const paginatedItems = items.slice(offset).slice(0, per_page)
  const total_pages = Math.ceil(items.length / per_page)
  return {
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems,
  }
}
const test = () => {
  const porfolios = require("../content/portfolio.js")
  console.log("length is ", porfolios.length)
  const postsPerPage = 12
  const numPages = Math.ceil(porfolios.length / postsPerPage)
  console.log("numPages is ", numPages)

  const data = Paginator(porfolios, 1, 5)
  console.log(data)
  return (
    <>
      <PrimaryLayout>
        {data.data.map(value => {
          return (
            <>
              <h1>{value.title}</h1>
            </>
          )
        })}
        <h1>this is atest page</h1>
        <button onClick={() => navigate("/")}>Home Page</button>
      </PrimaryLayout>
    </>
  )
}
export default test
