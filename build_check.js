import { build } from 'vite'

try {
  await build()
  console.log('Build successful')
} catch (error) {
  console.error('Build failed:')
  console.error(error)
  if (error.errors) {
    console.error('Errors:', JSON.stringify(error.errors, null, 2))
  }
  process.exit(1)
}
