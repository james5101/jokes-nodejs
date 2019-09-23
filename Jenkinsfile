pipeline{
  agent {}
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
