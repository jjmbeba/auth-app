import React from 'react'
import Image from 'next/image'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Image src={'/devchallenges.svg'} width={135} height={18} alt='logo'/>
  )
}

export default Logo