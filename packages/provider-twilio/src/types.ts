import type { Button, GlobalVendorArgs } from '@builderbot/bot/dist/types'

export type ITwilioProviderARgs = {
    accountSid: string
    authToken: string
    vendorNumber: string
    publicUrl?: string
} & GlobalVendorArgs

export interface IMessageOptions {
    buttons?: Button[]
    media?: string
}

export interface TwilioRequestBody {
    From: string
    To: string
    Body: string
    NumMedia: string
    MediaContentType0?: string
    MediaUrl0?: string
    Latitude?: string
    Longitude?: string
    ProfileName?: string
}

export interface TwilioPayload {
    from: string
    to: string
    body: string
    name: string
}
