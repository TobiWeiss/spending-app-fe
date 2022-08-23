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
        sh 'export CYPRESS_CACHE_FOLDER=$PWD/cy-cache-here'
        sh 'npm install'
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
