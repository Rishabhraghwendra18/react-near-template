import { defineConfig,loadEnv } from 'vite'
import path from 'node:path';
import dotenv from "dotenv";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({command,mode})=>{
  dotenv.config({path:path.resolve(__dirname,"../contract/neardev/dev-account.env")});
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define:{
      'process.env': env
    }
  }
})
