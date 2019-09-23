pipeline{
  agent any
  stages {
    stage('jslint'){
      steps {
        jsLint {
          includePattern('**/*.js')
          excludePattern('**/*.Tests.js')
        }
      }
    }
  }
}
