interface TabPanelProps {
  value: number | string
  currentValue: number | string
  children: JSX.Element
}

export default function TabPanel({
  value,
  currentValue,
  children
}: TabPanelProps) {
  return (
    <div style={{ display: value === currentValue ? 'block' : 'none' }}>
      {children}
    </div>
  )
}
