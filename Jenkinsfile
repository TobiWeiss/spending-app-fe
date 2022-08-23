pipeline {
  agent {
    docker {
      image 'node:16.17.0'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm build'

      }
    }
  }
}
