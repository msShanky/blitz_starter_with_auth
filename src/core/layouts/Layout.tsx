import Head from "next/head"
import React, { Suspense } from "react"
import { BlitzLayout } from "@blitzjs/next"
import { AppShell } from "@mantine/core"
import { useHeadroom } from "@mantine/hooks"
import { Header } from "./Header"

type BlitzLayoutProps = {
  isLanding?: boolean
  title?: string
  children?: React.ReactNode
}

const Layout: BlitzLayout<BlitzLayoutProps> = (props) => {
  const { title, children, isLanding = false } = props
  const pinned = useHeadroom({ fixedAt: 120 })

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: false }}
      navbar={{ width: 75, breakpoint: "sm" }}
      padding="md"
      withBorder={false}
    >
      <Head>
        <title>{title || "Home"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell.Navbar className="justify-between px-2 py-20 bg-blue-400">
        <Suspense fallback="Loading...">
          <Header />
        </Suspense>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}

export default Layout
