export type Root = LocationDetails[]

export interface LocationDetails {
  id: number
  name: string
  region: string
  country: string
  lat: number
  lon: number
  url: string
}
