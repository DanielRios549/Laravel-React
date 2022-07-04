import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'resources/**/*.{ts,tsx}',
        '!resources/**/*.d.ts'
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleNameMapper: {
        '^.+\\.module\\.(scss)$': 'identity-obj-proxy'
    }
}

export default config
