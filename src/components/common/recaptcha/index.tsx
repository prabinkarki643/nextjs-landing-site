import React, { ReactElement } from "react";
import ReCAPTCHA from "react-google-recaptcha";
export type ReCaptchaStatus = "valid" | "error" | "expired";

export interface ReCaptchaProps
  extends Omit<React.ComponentProps<typeof ReCAPTCHA>, "sitekey"> {}

export function isCaptchaVisible(id: string) {
  return document.getElementById(id)?.hasChildNodes?.()
}

export default function ReCaptcha({
  ...props
}: Partial<ReCaptchaProps>): ReactElement {
  return (
    <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_SITE_KEY || ""} {...props} />
  );
}
