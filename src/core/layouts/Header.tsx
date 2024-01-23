import React from "react"
import { ActionIcon } from "@mantine/core"
import { HomeIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import { MenuIcon, ThemeIcon, UserMenu } from "@components/common"
import logout from "src/auth/mutations/logout"
import { useMutation } from "@blitzjs/rpc"

export const Header = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  let top: any | null = null
  let bottom: any | null = null

  if (!currentUser) {
    bottom = (
      <div className="flex flex-row items-center gap-6 mt-auto right md:flex-col">
        <ThemeIcon />
        <MenuIcon
          Icon={ArrowRightStartOnRectangleIcon}
          link="/api/auth/google/login"
          label="Login"
        />
      </div>
    )
  }

  if (currentUser) {
    top = (
      <div className="flex flex-row items-center gap-4 md:gap-8 md:flex-col">
        <MenuIcon Icon={HomeIcon} link="/" label="Home" />
      </div>
    )

    bottom = (
      <div className="flex flex-row items-center gap-y-6 md:flex-col">
        <div className="flex flex-col items-center justify-center gap-2 rounded-sm">
          <ThemeIcon />
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2 text">
          <ActionIcon
            onClick={() => logoutMutation()}
            variant="transparent"
            size="sm"
            aria-label="Toggle color scheme"
            className="w-5 h-5 text-white text-dark stroke-white fill-white"
          >
            <ArrowRightStartOnRectangleIcon className="w-5 h-5 text-dark dark:text-white" />
          </ActionIcon>
          <p className="text-xs text-white">Logout</p>
        </div>
        {/* User Action Menu Tray would be rendered from here */}
        <UserMenu currentUser={currentUser} />
      </div>
    )
  }

  return (
    <>
      {top}
      {bottom}
    </>
  )
}
