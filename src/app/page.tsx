'use client'

import { motion } from 'framer-motion'
import Countdown from 'react-countdown'
import { Sparkles, TrophyIcon, ClockIcon, User } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'

type Player = {
    name: string
    km: number
    position: number
}

const endDate = new Date('2024-11-30T23:59:59')

const getMedalEmoji = (index: number) => {
    switch (index) {
        case 0:
            return '🥇'
        case 1:
            return '🥈'
        case 2:
            return '🥉'
        default:
            return null
    }
}

const players: Player[] = [
    {
        name: 'Ángela González',
        km: 6.2,
        position: 1,
    },
    {
        name: 'Oneida Aguirre',
        km: 6.07,
        position: 2,
    },
    {
        name: 'Adrián González',
        km: 4.35,
        position: 3,
    },
    {
        name: 'Doris González',
        km: 0,
        position: 4,
    },
    {
        name: 'Gladys "Mary" González',
        km: 0,
        position: 5,
    },
    {
        name: 'Juana Rivero',
        km: 0,
        position: 6,
    },
    {
        name: 'Jose "Nacho" Pérez',
        km: 0,
        position: 7,
    },
    {
        name: 'Carlos González',
        km: 0,
        position: 8,
    },
    {
        name: 'Gerardo Pérez',
        km: 0,
        position: 9,
    },
    {
        name: 'Ricardo Pérez',
        km: 0,
        position: 10,
    },
]

export default function Component() {
    const topThree = players.slice(0, 3)
    const restOfPlayers = players.slice(3)

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-500 to-orange-700 p-6">
            <div className="max-w-md mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
                    Reto 30k Noviembre
                </h1>

                <div className="bg-white shadow overflow-hidden rounded mb-14 p-2 grid grid-cols-3 divide-x">
                    <div className="flex flex-col text-center p-2">
                        <p className="mb-2">
                            <TrophyIcon className="h-5 w-5 text-yellow-600 m-auto" />
                        </p>
                        <p className="text-xs sm:text-md font-medium text-gray-900">
                            Pote
                        </p>
                        <p className="text-lg sm:text-2xl font-semibold text-gray-900">
                            $10
                        </p>
                    </div>
                    <div className="flex flex-col text-center p-2">
                        <p className="mb-2">
                            <User className="h-5 w-5 text-yellow-600 m-auto" />
                        </p>
                        <p className="text-xs sm:text-md font-medium text-gray-900">
                            Atletas
                        </p>
                        <p className="text-lg sm:text-2xl font-semibold text-gray-900">
                            10
                        </p>
                    </div>
                    <div className="flex flex-col text-center p-2">
                        <p className="mb-2">
                            <ClockIcon className="h-5 w-5 text-gray-600 m-auto" />
                        </p>
                        <p className="text-xs sm:text-md font-medium text-gray-900">
                            Tiempo Restante
                        </p>
                        <p className="text-lg sm:text-2xl font-semibold text-gray-900">
                            <Countdown
                                date={endDate}
                                renderer={({
                                    days,
                                    hours,
                                    minutes,
                                    seconds,
                                }) => (
                                    <div>
                                        {String(days).padStart(2, '0')}:
                                        {String(hours).padStart(2, '0')}:
                                        {String(minutes).padStart(2, '0')}:
                                        {String(seconds).padStart(2, '0')}
                                    </div>
                                )}
                            />
                        </p>
                    </div>
                </div>

                <div className="relative h-64 mb-6">
                    {/* Podium */}
                    <div className="absolute bottom-0 w-full flex items-end justify-center gap-4">
                        {/* 2nd Place */}
                        <div className="flex flex-col items-center">
                            <motion.div
                                className="relative"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-200 mr-4 text-4xl border-4 border-yellow-500 font-bold">
                                    {getMedalEmoji(1)}
                                </span>
                                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-white" />
                            </motion.div>
                            <p className="text-white text-medium font-bold mt-2 text-center">
                                {topThree[1].name}
                            </p>
                            <div className="bg-gray-300 h-32 w-24 rounded-t-lg mt-2 flex items-center justify-center">
                                <span className="text-lg font-bold">
                                    {topThree[1].km} km
                                </span>
                            </div>
                        </div>

                        {/* 1st Place */}
                        <div className="flex flex-col items-center -mt-8">
                            <motion.div
                                className="relative"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0 }}
                            >
                                <span className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-200 mr-4 text-4xl border-4 border-yellow-500 font-bold">
                                    {getMedalEmoji(0)}
                                </span>
                                <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400" />
                            </motion.div>
                            <p className="text-white text-medium font-bold mt-2 text-center">
                                {topThree[0].name}
                            </p>
                            <div className="bg-yellow-400 h-40 w-24 rounded-t-lg mt-2 flex items-center justify-center">
                                <span className="text-lg font-bold">
                                    {topThree[0].km} km
                                </span>
                            </div>
                        </div>

                        {/* 3rd Place */}
                        <div className="flex flex-col items-center">
                            <motion.div
                                className="relative"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <span className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-200 mr-4 text-4xl border-4 border-yellow-500 font-bold">
                                    {getMedalEmoji(2)}
                                </span>
                                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-white" />
                            </motion.div>
                            <p className="text-white text-medium font-bold mt-2 text-center">
                                {topThree[2].name}
                            </p>
                            <div className="bg-orange-400 h-24 w-24 rounded-t-lg mt-2 flex items-center justify-center">
                                <span className="text-lg font-bold">
                                    {topThree[2].km} km
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rest of players list */}
                <div className="bg-white rounded-xl p-4">
                    <ScrollArea className="h-64 w-full pr-4">
                        {restOfPlayers.map((player, index) => (
                            <motion.div
                                key={player.name}
                                className="flex items-center justify-between py-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.5 }}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 mr-4 text-2xl font-bold shrink-0">
                                        {player.position}
                                    </span>
                                    <span className="font-medium">
                                        {player.name}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 pr-2 shrink-0">
                                    <span className="font-bold text-xl">
                                        {player.km} km
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}
