pipeline{
  agent {
    label 'any'
  }
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
