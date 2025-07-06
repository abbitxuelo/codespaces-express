const router = require('express').Router()
const fs = require('fs')
const path = require('path')

router.get('/', (req, res) => {
  res.send('Welcome to the audio management API')
})
router.post('/upload', (req, res) => {
  const audioPath = path.join(__dirname, 'audio_uploaded.mp3')
  const writeStream = fs.createWriteStream(audioPath)

  req.pipe(writeStream)

  writeStream.on('finish', () => {
    res.status(200).send('Audio uploaded successfully')
  })

  writeStream.on('error', (err) => {
    console.error('Error writing file:', err)
    res.status(500).send('Error saving audio')
  })

  req.on('error', (err) => {
    console.error('Request error:', err)
    res.status(500).send('Error uploading audio')
  })
})

router.get('/download', (req, res) => {
  const audioPath = path.join(__dirname, 'audio_uploaded.mp3')
  if (!fs.existsSync(audioPath)) {
    return res.status(404).send('No audio available')
  }
  res.setHeader('Content-Type', 'audio/mpeg')
  const readStream = fs.createReadStream(audioPath)
  readStream.pipe(res)
})

module.exports = router
