export {}

/**
 * Adds type definition for environment variables,
 * every new variable must to be defiend in the
 * ProcessEnv interface
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // MY_ENV_VAR: type
      ENV: 'test' | 'dev' | 'prod'
    }
  }
}
