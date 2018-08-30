(function () {
  const els = {
    $preview: $('#preview')
  }

  if (!els.$preview.length) return

  const config = window.dropst3r

  const initFilePreview = function () {
    try {
      eval(`${config.viewers[config.fileType]}Viewer()`)
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
    new Plyr($video[0], {
      iconUrl: '/assets/static/plyr.svg'
    })
  }

  const initGenericViewer = function () {
    alert('viewer for non-images is not setup yet')
  }

  els.$preview.on('config.ready', initFilePreview)
})()
