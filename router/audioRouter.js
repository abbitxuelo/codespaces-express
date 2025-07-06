const router = require('express').Router()
const fs = require('fs')
const path = require('path')

router.post('/upload', (req, res) => {
  const audioPath = path.join(__dirname, 'audio_uploaded.mp3')
  const writeStream = fs.createWriteStream(audioPath)

  req.pipe(writeStream)

  writeStream.on('finish', () => {
    res.status(200).send('Audio subido correctamente')
  })

  writeStream.on('error', (err) => {
    console.error('Error al escribir el archivo:', err)
    res.status(500).send('Error al guardar el audio')
  })

  req.on('error', (err) => {
    console.error('Error en la petición:', err)
    res.status(500).send('Error en la subida del audio')
  })
})

router.get('/download', (req, res) => {
  const audioPath = path.join(__dirname, 'audio_uploaded.mp3')
  if (!fs.existsSync(audioPath)) {
    return res.status(404).send('No hay audio disponible')
  }
  res.setHeader('Content-Type', 'audio/mpeg')
  const readStream = fs.createReadStream(audioPath)
  readStream.pipe(res)
})

module.exports = router
