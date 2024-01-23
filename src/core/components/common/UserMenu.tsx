import React, { FC } from "react"
import { Avatar, Menu } from "@mantine/core"
import { Cog8ToothIcon } from "@heroicons/react/24/outline"
import { User } from "@prisma/client"

type UserMenuProps = {
  currentUser: Partial<User> | null
}

export const UserMenu: FC<UserMenuProps> = ({ currentUser }) => {
  console.log("The current user", currentUser)
  const getUserInitial = () => {
    if (currentUser) {
      return `${currentUser.givenName ? currentUser?.givenName[0] : ""} ${currentUser.familyName ? currentUser?.familyName[0] : ""}`
    }

    return null
  }
  return (
    <Menu shadow="md" width={200} trigger="click-hover" position="right-end" offset={25}>
      <Menu.Target>
        <Avatar
          variant="transparent"
          radius="xl"
          color="#fff"
          component="button"
          className="text-4xl font-thin uppercase"
          src={currentUser?.picture}
        >
          {getUserInitial()}
        </Avatar>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<Cog8ToothIcon />}>Settings</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
