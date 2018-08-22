if (process.env.NODE_ENV !== undefined) {
  require('dotenv').config({
    path: (process.env.NODE_ENV === 'development' ? '.env.dev' : '.env')
  })
}

const replaceWithEnvVar = function (replacementMatch) {
  const envVarMatch = /^<!--([A-Z\_]*)-->/.exec(replacementMatch)
  const envVarTag = envVarMatch[0]
  const envVarKey = envVarMatch[1]
  return `${envVarTag}${process.env[envVarKey]}${envVarTag}`
}

module.exports = {
  files: './build/*.html',
  from: /<!--[A-Z\_]*?-->.*?<!--[A-Z\_]*?-->/g,
  to: (match) => replaceWithEnvVar(match)
}
