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
        sh 'npm install -unsafe-perm=true --allow-root cypress'
        sh 'npm build'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test:ci'
      }
    }
  }
}
