// @ts-check
const { withBlitz } = require("@blitzjs/next")
const { withNextAuthAdapter } = require("@blitzjs/auth/next-auth")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {}

module.exports = withBlitz(withNextAuthAdapter(config))
