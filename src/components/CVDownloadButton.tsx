'use client'

import Icon from "./Icons"

type Props = {
  label: string
  printTitle: string
}

export default function CVDownloadButton({ label, printTitle }: Props) {
  const handlePrint = () => {
    const original = document.title
    document.title = printTitle
    window.print()
    setTimeout(() => {
      document.title = original
    }, 500)
  }

  return (
    <button
      type="button"
      className="button Primary cvDownloadButton"
      onClick={handlePrint}
    >
      <Icon name="doc" />
      {label}
    </button>
  )
}
