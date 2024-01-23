import React from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from "@mantine/core"

export const ThemeIcon = () => {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme("dark", { getInitialValueInEffect: true })

  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-sm">
      <ActionIcon
        onClick={() => setColorScheme(computedColorScheme === "light" ? "dark" : "light")}
        variant="transparent"
        size="sm"
        aria-label="Toggle color scheme"
      >
        <SunIcon
          className={
            "w-5 h-5 fill-black dark:fill-yellow-400 stroke-yellow-400  swap-off hover:cursor-pointer hidden dark:block"
          }
        />
        <MoonIcon
          className={
            "w-5 h-5 stroke-white dark:stroke-white swap-on hover:cursor-pointer dark:hidden block"
          }
        />
      </ActionIcon>
      <p className="md:text-xs text-[10px] text-white dark:hidden">Light</p>
      <p className="md:text-xs text-[10px] text-white dark:block hidden">Dark</p>
    </div>
  )
}
