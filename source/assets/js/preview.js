(function () {
  const els = {
    $preview: $('#preview')
  }

  if (!els.$preview.length) return

  const config = window.dropst3r

  const initFilePreview = function () {
    try {
      viewers[config.fileType]()
    } catch (e) {
      initGenericViewer()
    }
  }

  const initImageViewer = function () {
    els.$preview.append(`
      <div class="image-viewer">
        <a href="${config.directFileUrl}">
          <img src="${config.directFileUrl}" />
        </a>
      </div>
    `)
  }

  const initVideoViewer = function () {
    els.$preview.append(`
      <div class="video-viewer">
        <div class="responsive-video-wrapper">
          <video playsinline controls>
            <source src="${config.directFileUrl}" type="${config.fileType}">
          </video>
        </div>
      </div>
    `)
    const $video = els.$preview.find('video')
    new Plyr($video[0])
  }

  const initGenericViewer = function () {
    alert('viewer for non-images is not setup yet')
  }

  const viewers = {
    'image/jpeg': initImageViewer,
    'image/png': initImageViewer,
    'image/gif': initImageViewer,
    'image/svg+xml': initImageViewer,
    'image/tiff': initImageViewer,
    'image/webp': initImageViewer,
    'image/bmp': initImageViewer,
    'image/apng': initImageViewer,
    'video/mp4': initVideoViewer,
    'video/h264': initVideoViewer,
    'video/mpeg': initVideoViewer,
    'video/ogg': initVideoViewer,
    'video/quicktime': initVideoViewer,
    'video/webm': initVideoViewer
  }

  els.$preview.on('config.ready', initFilePreview)
})()
