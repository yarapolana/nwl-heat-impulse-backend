declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_CLIENT_SECRET: string
      GITHUB_CLIENT_ID: string
      NODE_ENV: 'development' | 'production'
      PORT: string | number
      DATABASE_URL: string
      JWT_SECRET: string
    }
  }
}

export {}
