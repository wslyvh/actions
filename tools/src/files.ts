import { join } from 'path'
import fs from 'fs'

const main = async () => {
  const current = join(__dirname)
  console.log('Files in', current)
  fs.readdirSync(current, { withFileTypes: true }).forEach(i => {
    console.log('  -', i.name)
  })

  const data = join(__dirname, '../../data')
  console.log('Files in', data)
  fs.readdirSync(data, { withFileTypes: true }).forEach(i => {
    console.log('  -', i.name)
  })
}

main()
