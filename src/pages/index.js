import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageBody from "../components/pagebody"
import AppPreview from "../components/appPreview"
import DescriptionSection from '../components/descriptionSection';

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto auto auto;
  background-color: rgba(27, 27, 58, 0.8);
  height: 120%;
  width: 100%;
  /* margin-top: 80px; */
  padding-top: 80px;
`
const PageSpacer = styled.div`
  grid-column: 1;
  grid-row: 3 / 5;
  width: 100%;
  background-color: white;
`
const IndexPage = () => (
  <PageWrapper id="top">
    <Layout>
      <SEO title="MTGA Pathway" />
      <PageBody />
      <AppPreview />
      <PageSpacer id="trythis" />
      <DescriptionSection/>
    </Layout>
  </PageWrapper>
)

export default IndexPage
