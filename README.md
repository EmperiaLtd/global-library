# global-library
This repository controls the functionality in Emperia's virtual experiences. 

# Setup
Download the repository:
```
git clone https://github.com/EmperiaLtd/global-library.git
```

Initialize NPM:
```
npm install
npm run build
```
# Releases

In order to release a new version, we must tag it.
After all changes have been committed and pushed we should run:
```
git tag v<version>
```
For example,
```
git tag v1.0.1
```
We then need to push it, like so:
```
git push origin v<version>
```
For example,
```
git push origin v1.0.1
```
