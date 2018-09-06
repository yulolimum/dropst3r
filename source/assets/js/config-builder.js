(function () {
  const config = window.dropst3r

  let params = window.location.search.split('?')[1]
  params = $.deparam(params)

  const fileName = params.file
  const fileType = mimelite.getType(params.file)
  const fileExtension = params.file.split('.').pop().toLowerCase()

  config.websiteHostname = config.websiteHostname.match(/\/$/) ? config.websiteHostname.slice(0, -1) : config.websiteHostname
  config.bucketHostname = config.bucketHostname.match(/\/$/) ? config.bucketHostname.slice(0, -1) : config.bucketHostname

  config.directFileUrl = `
    ${config.bucketHostname}
    /
    ${config.filesDirectory.match(/^\//) ? config.filesDirectory.substring(1) : config.filesDirectory}
    ${config.filesDirectory.match(/\/$/) ? '' : '/'}
    ${fileName}
  `.replace(/\s/g, '')

  config.viewerFileUrl = `
    ${config.websiteHostname}
    /
    ${config.filesDirectory.match(/^\//) ? config.filesDirectory.substring(1) : config.filesDirectory}
    ${config.filesDirectory.match(/\/$/) ? '' : '/'}
    ${fileName}
  `.replace(/\s/g, '')

  config.fileName = fileName
  config.fileType = fileType
  config.fileExtension = fileExtension

  config.viewers = {
    'image/jpeg': 'initImage',
    'image/png': 'initImage',
    'image/gif': 'initImage',
    'image/svg+xml': 'initImage',
    'image/tiff': 'initImage',
    'image/webp': 'initImage',
    'image/bmp': 'initImage',
    'image/apng': 'initImage',

    'video/mp4': 'initVideo',
    'video/h264': 'initVideo',
    'video/mpeg': 'initVideo',
    'video/ogg': 'initVideo',
    'video/quicktime': 'initVideo',
    'video/webm': 'initVideo',
    'video/3gpp': 'initVideo',
    'video/3gpp2': 'initVideo',
    'avi': 'initVideo',
    'wmv': 'initVideo',

    'application/msword': 'initGoogle',
    'docx': 'initGoogle',
    'application/pdf': 'initGoogle',
    'xls': 'initGoogle',
    'xlsx': 'initGoogle',
    'ppt': 'initGoogle',
    'pptx': 'initGoogle',

    'application/gzip': 'initArchive',
    'application/zip': 'initArchive',
    'rar': 'initArchive',
    'tar': 'initArchive',
    '7z': 'initArchive',

    'audio/mp3': 'initAudio',
    'audio/mp4': 'initAudio',
    'audio/mpeg': 'initAudio',
    'audio/ogg': 'initAudio',
    'audio/wav': 'initAudio',
    'audio/webm': 'initAudio',

    _: 'initGeneric'
  }

  $('#preview').trigger('config.ready')
})()
