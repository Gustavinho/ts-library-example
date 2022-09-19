export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SLACK_CHANNEL: string
      SLACK_TOKEN: string
      BALENA_TOKEN: string
      BALENA_API_URL: string
      ENV: 'test' | 'dev' | 'prod'
    }
  }
}
