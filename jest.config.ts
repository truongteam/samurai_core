export default {
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "^~/(.*)$": "<rootDir>/app/frontend/$1",
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/app/frontend/test/__mocks__/fileMock.js',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};