const data = require('uikit/package.json')
const semver = require('semver')
const semverTruncate = require('semver-truncate')

const semverRange = '<=2'
const pr = process.env.TRAVIS_PULL_REQUEST_BRANCH
const branch = process.env.TRAVIS_BRANCH

console.log('TRAVIS_PULL_REQUEST_BRANCH', process.env.TRAVIS_PULL_REQUEST_BRANCH, 'TRAVIS_BRANCH', process.env.TRAVIS_BRANCH)

if (pr && branch === 'master' && !semver.satisfies(semverTruncate(data.version, 'patch'), semverRange)) {
  const err = new Error(`uikit ${data.version} doesn't satisfy the version requirement of ${semverRange}`)
  err.name = 'InvalidUikitVersion'
  throw err
}
