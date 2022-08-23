pipeline {
  agent {
    docker {
      image 'node:16.17.0'
      args '-u root:root'
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
