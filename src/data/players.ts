export type Player = {
  name: string
  gender?: string
  km: number
  moroso: boolean
}

export const WALKERS: Player[] = [
  {
    name: 'Ángela González',
    km: 57.74,
    moroso: false,
  },
  {
    name: 'Oneida Aguirre',
    km: 50.04,
    moroso: false,
  },
  {
    name: 'Adrián González',
    km: 19.68,
    moroso: false,
  },
  {
    name: 'Doris González',
    km: 44.74,
    moroso: false,
  },
  {
    name: 'Gladys "Mary" González',
    km: 54.17,
    moroso: false,
  },
  {
    name: 'Juana Rivero',
    km: 84.93,
    moroso: false,
  },
  {
    name: 'Jose "Nacho" Pérez',
    km: 15.98,
    moroso: false,
  },
  {
    name: 'Carlos González',
    km: 25.3,
    moroso: true,
  },
  {
    name: 'Ricardo Pérez',
    km: 9.2,
    moroso: true,
  },
  {
    name: 'Bianca Pérez',
    km: 9.2,
    moroso: true,
  },
  {
    name: 'Brauly',
    km: 9.2,
    moroso: true,
  },
]

export const RUNNERS: Player[] = [
  {
    name: 'Génesis León',
    km: 73.74,
    gender: 'F',
    moroso: true,
  },
  {
    name: 'Gerardo Pérez',
    km: 44.7,
    gender: 'M',
    moroso: false,
  },
]
