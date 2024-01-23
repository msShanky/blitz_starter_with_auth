import React, { FC } from "react"
import Link from "next/link"
import { AcademicCapIcon as SampleIcon } from "@heroicons/react/24/solid"

type MenuIconProps = {
  Icon: typeof SampleIcon
  link: string
  label: string
}

export const MenuIcon: FC<MenuIconProps> = ({ Icon, link, label }) => {
  return (
    <Link href={link} legacyBehavior>
      <a className="flex flex-col items-center gap-2 rounded-sm">
        <Icon className="w-5 h-5 text-white" />
        <p className="md:text-xs text-[10px] text-white">{label}</p>
      </a>
    </Link>
  )
}
