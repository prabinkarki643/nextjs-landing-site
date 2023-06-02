import { Button, BackTop } from 'antd'
import { ReactElement } from 'react'

interface BackToTopProps {}

export default function BackToTop({}: BackToTopProps): ReactElement {
  return (
    <BackTop>
      <Button
        type='primary'
        shape='circle'
        icon={
          <span className='material-symbols-outlined' style={{ fontSize: 20 }}>
            pan_tool_alt
          </span>
        }
        size='middle'
      />
    </BackTop>
  )
}
