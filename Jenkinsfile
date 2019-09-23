pipeline{
  agent any
  stages {
    stage('jslint'){
      steps {
        JSLint{
          includePattern('**/*.js')
        }
      }
    }
  }
}
