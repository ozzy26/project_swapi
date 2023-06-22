module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ['**/__test__/*.+(spec|test).ts?(x)'],
    clearMocks: true,
    coverageThreshold: {
        global: {
            statements: 80,
        },
    },
};