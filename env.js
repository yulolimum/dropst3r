if (process.env.NODE_ENV !== undefined) {
  require('dotenv').config({
    path: (process.env.NODE_ENV === 'development' ? '.env.dev' : '.env')
  })
}

const replaceWithEnvVar = function (replacementMatch) {
  const htmlVarMatch = /^<!--([A-Z\_]*)-->/.exec(replacementMatch)
  const cssVarMatch = /^\/\*\*([A-Z\_]*?)\*\*\//.exec(replacementMatch)
  const jsVarMatch = /^\/\*\*\*([A-Z\_]*?)\*\*\*\//.exec(replacementMatch)
  const envVarMatch = htmlVarMatch || cssVarMatch || jsVarMatch || ''
  const pre = jsVarMatch ? "'" : ''
  const post = jsVarMatch ? "'" : ''
  const envVarTag = envVarMatch[0]
  const envVarKey = envVarMatch[1]
  let replacement = process.env[envVarKey]
  replacement = jsVarMatch && !replacement ? null : replacement
  replacement = htmlVarMatch && !replacement ? '' : replacement
  replacement = cssVarMatch && !replacement ? '!' : replacement
  return `${envVarTag}${pre}${replacement}${post}${envVarTag}`
}

module.exports = {
  files: ['./build/*.html', './build/assets/static/placeholder.*.svg'],
  from: [/<!--[A-Z\_]*?-->.*?<!--[A-Z\_]*?-->/g, /\/\*\*[A-Z\_]*?\*\*\/.*?\/\*\*[A-Z\_]*?\*\*\//g, /\/\*\*\*[A-Z\_]*?\*\*\*\/.*?\/\*\*\*[A-Z\_]*?\*\*\*\//g],
  to: (match) => replaceWithEnvVar(match)
}
