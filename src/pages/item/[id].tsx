import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

type Props = {}

const ItemPage: NextPage = (props: Props) => {
    
  const {asPath, pathname} = useRouter()
  console.log(asPath, pathname);
  
    
  return (
    <div>ItemPage</div>
  )
}

export default ItemPage