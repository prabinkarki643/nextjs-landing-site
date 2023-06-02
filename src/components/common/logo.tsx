import { useAppSelector } from '@/store'
import { getFilePath } from '@/utils'
import React from 'react'

interface AppLogoProps extends React.ComponentProps<'img'> {
  whiteColorLogo?: boolean
}

function AppLogo({ style, whiteColorLogo, ...props }: AppLogoProps) {
  const {siteSettings}=useAppSelector(state=>state.site)

  const appLogoRegular = siteSettings?.logo
  const appLogoWhite = siteSettings?.logoWhite
  return (
    <img
      {...props}
      src={
        whiteColorLogo ? appLogoWhite : appLogoRegular
      }
      style={{ width: 60, ...style }}
      alt='logo'
    />
  )
}

export default AppLogo
