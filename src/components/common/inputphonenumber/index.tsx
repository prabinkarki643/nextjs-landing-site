import { InputNumber, Select } from 'antd'
import React, { ReactElement } from 'react'
import countryList from '../../../constants/countryList'

interface InputPhoneNumberProps
  extends React.ComponentProps<typeof InputNumber> {
  countryCodeSelectProps?: CountrySelectorProps
  noCountryCodeSelection?: boolean
}

export default function InputPhoneNumber({
  style,
  countryCodeSelectProps,
  noCountryCodeSelection,
  onChange,
  ...props
}: InputPhoneNumberProps): ReactElement {
  return (
    <InputNumber
      addonBefore={
        noCountryCodeSelection ? null : (
          <CountryCodeSelector
            style={{ width: 120 }}
            {...countryCodeSelectProps}
          />
        )
      }
      style={{ width: '100%', ...style }}
      minLength={10}
      maxLength={10}
      onChange={(value) => onChange?.(value)}
      {...props}
    />
  )
}

export interface CountrySelectorProps
  extends React.ComponentProps<typeof Select> {}
export function CountryCodeSelector({ ...props }: CountrySelectorProps) {
  return (
    <Select
      {...props}
      showSearch
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      options={countryList.map((f) => ({
        value: f.code,
        label: `${f.iso}(+${f.code})`
      }))}
    />
  )
}
