import { defineEventHandler } from 'h3'
import type { User } from '@supabase/gotrue-js'
import { serverSupabaseUser } from '#supabase/server'
import { usePrisma } from '~/composables/usePrisma'
import { Provider } from '~/types/types'

const getIdentity = (user: User | null, provider: Provider) => {
  return user!.identities?.filter(identity => identity.provider === provider)[0]
}

export default defineEventHandler(async (event) => {
  const prisma = usePrisma()
  const user = await serverSupabaseUser(event)
  if (user) {
    const prismaUser = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    })
    const isUsernameTaken = async () => {
      const other = await prisma.user.findUnique({
        where: {
          username: String(user.user_metadata.full_name || user.user_metadata.nickname || user.user_metadata.slug).replaceAll(' ', ''),
        },
      })
      return !!other
    }
    if (prismaUser) {
      return await prisma.user.update({
        where: {
          email: user.email,
        },
        data: {
          lastSeen: new Date(user.last_sign_in_at || Date.now()),
          twitterId: getIdentity(user, Provider.TWITTER)?.identity_data.user_name || prismaUser.twitterId,
          discordId: getIdentity(user, Provider.DISCORD)?.identity_data.name || prismaUser.discordId,
          githubId: getIdentity(user, Provider.GITHUB)?.identity_data.user_name || prismaUser.githubId,
          googleId: getIdentity(user, Provider.GOOGLE)?.identity_data.full_name.trim() || prismaUser.googleId,
          twitchId: getIdentity(user, Provider.TWITCH)?.identity_data.nickname || prismaUser.twitchId,
        },
      })
    }
    else {
      return await prisma.user.create({
        data: {
          lastSeen: new Date(user.last_sign_in_at || Date.now()),
          email: user.email,
          avatar: user.user_metadata.picture,
          supabaseId: user.id,
          username: await isUsernameTaken()
            ? `${String(user.user_metadata.full_name || user.user_metadata.nickname || user.user_metadata.slug).replaceAll(' ', '')}-${Math.floor(Math.random() * 1000)}`
            : String(user.user_metadata.full_name || user.user_metadata.nickname || user.user_metadata.slug).replaceAll(' ', ''),
          twitterId: getIdentity(user, Provider.TWITTER)?.identity_data.user_name || undefined,
          discordId: getIdentity(user, Provider.DISCORD)?.identity_data.name || undefined,
          githubId: getIdentity(user, Provider.GITHUB)?.identity_data.user_name || undefined,
          googleId: getIdentity(user, Provider.GOOGLE)?.identity_data.full_name.trim() || undefined,
          twitchId: getIdentity(user, Provider.TWITCH)?.identity_data.nickname || undefined,
        },
      })
    }
  }
})
