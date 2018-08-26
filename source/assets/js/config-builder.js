(function(){
  const config = window.dropst3r

  let params = window.location.search.split('?')[1]
      params = $.deparam(params)

  const fileName = params.file
  const fileType = mimelite.getType(params.file)

  config.directFileUrl = `
    ${config.bucketHostname}
    ${config.bucketHostname.match(/\/$/) ? '' : '/'}
    ${config.filesDirectory.match(/^\//) ? config.filesDirectory.substring(1) : config.filesDirectory}
    ${config.filesDirectory.match(/\/$/) ? '' : '/'}
    ${fileName}
  `.replace(/\s/g,'')

  config.viewerFileUrl = `
    ${config.websiteHostname}
    ${config.websiteHostname.match(/\/$/) ? '' : '/'}
    ${config.filesDirectory.match(/^\//) ? config.filesDirectory.substring(1) : config.filesDirectory}
    ${config.filesDirectory.match(/\/$/) ? '' : '/'}
    ${fileName}
  `.replace(/\s/g,'')

  config.fileName = fileName
  config.fileType = fileType

  $('#preview').trigger('config.ready')
})()