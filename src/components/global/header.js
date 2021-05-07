import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import styleVar from '../styles/variables'
import styleMixin from '../styles/mixins'
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'

const standInUrl = 'https://chrisstack.co'

const data_navMenu = [
  {
    'text': 'Blog',
    'url': standInUrl,
  },
  {
    'text': 'About',
    'url': standInUrl,
  },
  {
    'text': 'Contact',
    'url': standInUrl,
  },
]

const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  height: 100%;
  li {
    display: flex;
    align-items: center;
    font-family: ${styleVar.fontHeading};
    text-transform: uppercase;
    border-left: 1px solid ${styleVar.color_1};
    &:last-of-type {
      border-right: 1px solid ${styleVar.color_1};
      margin-right: 30px;
    }
  }
  a {
    display: flex;
    align-items: center;
    ${styleMixin.fz_sm}
    height: 100%;
    padding: 0 60px;
    &:hover {
      background-color: #eee;
    }
  }
`

const NavMenuSocial = styled.ul`
  display: flex;
  li {
    ${styleMixin.fz_sm}
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
  a {
    ${styleMixin.transition}
    &:hover {
      opacity: 0.6;
    }
  }
`

const BorderBottom = {
  borderBottom: `1px solid ${styleVar.color_1}`,
}

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulHeader {
        edges {
          node {
            heading1
            heading2
          }
        }
      }
    }
  `)
  return (
    <header className="">
      <div style={BorderBottom} className="fixed top-0 bg-white w-full h-20 z-10">
        <div className="mx-auto px-5 max-w-4xl h-full">
          <div className="flex justify-between items-center w-full h-full">
            <h1 className="heading fz-lg">{data.allContentfulHeader.edges[0].node.heading1}</h1>
            <nav className="flex items-center h-full">
              <NavMenu>
                {data_navMenu.map((item, i) => (
                  <li key={i}><a href={item.url} className="text-link"><span>{item.text}</span></a></li>
                ))}
              </NavMenu>
              <NavMenuSocial>
                <li><a href={standInUrl}><FaFacebookF /></a></li>
                <li><a href={standInUrl}><FaInstagram /></a></li>
              </NavMenuSocial>
            </nav>
          </div>
        </div>
      </div>
      <div style={BorderBottom} className="mt-20">
        <div className="contain mx-auto">
          <h2 className="heading text-center fz-2xl py-8">{data.allContentfulHeader.edges[0].node.heading2}</h2>
        </div>
      </div>
    </header>
  )
}

 export default Header
