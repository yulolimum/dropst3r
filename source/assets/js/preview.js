(function () {
  const els = {
    $preview: $('#preview')
  }

  const config = window.dropst3r

  if (!els.$preview.length) return

  const initFilePreview = function () {
    try {
      renderViewer()[config.fileType]()
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

  const initGenericViewer = function () {
    alert('viewer for non-images is not setup yet')
  }

  const renderViewer = function () {
    return {
      'image/jpeg': initImageViewer,
      'image/png': initImageViewer,
      'image/gif': initImageViewer,
      'image/svg+xml': initImageViewer,
      'image/tiff': initImageViewer,
      'image/webp': initImageViewer,
      'image/bmp': initImageViewer,
      'image/apng': initImageViewer
    }
  }

  els.$preview.on('config.ready', initFilePreview)
})()