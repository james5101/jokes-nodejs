pipeline{
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
